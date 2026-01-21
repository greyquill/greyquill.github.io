#!/bin/bash
# ═══════════════════════════════════════════════════════════════════════════════
# GREYQUILL HEALTH CHECK SCRIPT
# ═══════════════════════════════════════════════════════════════════════════════
# This script verifies the health of deployed services after deployment.
#
# Usage: ./health-check.sh <environment>
# Example: ./health-check.sh production
# ═══════════════════════════════════════════════════════════════════════════════

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

ENVIRONMENT=${1:-"staging"}
MAX_RETRIES=5
RETRY_DELAY=10
TIMEOUT=10

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

FAILED=0
PASSED=0

log_success() { echo -e "${GREEN}✓${NC} $1"; ((PASSED++)); }
log_error() { echo -e "${RED}✗${NC} $1"; ((FAILED++)); }
log_warning() { echo -e "${YELLOW}⚠${NC} $1"; }
log_info() { echo -e "${BLUE}ℹ${NC} $1"; }

print_banner() {
    echo -e "${BLUE}"
    echo "╔═══════════════════════════════════════════════════════════════════════════╗"
    echo "║                        GREYQUILL HEALTH CHECK                             ║"
    echo "╚═══════════════════════════════════════════════════════════════════════════╝"
    echo -e "${NC}"
    echo ""
    echo "  Environment: $ENVIRONMENT"
    echo "  Max Retries: $MAX_RETRIES"
    echo "  Retry Delay: ${RETRY_DELAY}s"
    echo ""
}

# Load environment-specific URLs
load_config() {
    ENV_FILE="$PROJECT_ROOT/config/${ENVIRONMENT}.env"
    
    if [[ -f "$ENV_FILE" ]]; then
        set -a
        source "$ENV_FILE"
        set +a
        log_info "Loaded configuration from $ENV_FILE"
    else
        # Default URLs based on environment
        case $ENVIRONMENT in
            development)
                WEB_URL="${WEB_URL:-http://localhost:3000}"
                API_URL="${API_URL:-http://localhost:4000}"
                ;;
            staging)
                WEB_URL="${WEB_URL:-https://staging.greyquill.io}"
                API_URL="${API_URL:-https://api-staging.greyquill.io}"
                ;;
            uat)
                WEB_URL="${WEB_URL:-https://uat.greyquill.io}"
                API_URL="${API_URL:-https://api-uat.greyquill.io}"
                ;;
            production)
                WEB_URL="${WEB_URL:-https://greyquill.io}"
                API_URL="${API_URL:-https://api.greyquill.io}"
                ;;
        esac
        log_warning "Using default URLs for $ENVIRONMENT"
    fi
    
    log_info "Web URL: $WEB_URL"
    log_info "API URL: $API_URL"
}

# Check a single endpoint with retries
check_endpoint() {
    local name=$1
    local url=$2
    local expected_status=${3:-200}
    local check_response=${4:-false}
    
    echo ""
    log_info "Checking $name: $url"
    
    for i in $(seq 1 $MAX_RETRIES); do
        # Make request and capture both status code and body
        RESPONSE=$(curl -s -w "\n%{http_code}" --connect-timeout $TIMEOUT "$url" 2>/dev/null || echo -e "\n000")
        
        # Split response body and status code
        STATUS_CODE=$(echo "$RESPONSE" | tail -n1)
        BODY=$(echo "$RESPONSE" | sed '$d')
        
        if [[ "$STATUS_CODE" == "$expected_status" ]]; then
            # Check response content if required
            if [[ "$check_response" == "true" ]]; then
                if echo "$BODY" | grep -q '"status".*"ok"\|"healthy"\|true' 2>/dev/null; then
                    log_success "$name: OK (HTTP $STATUS_CODE, healthy)"
                    return 0
                else
                    log_warning "$name: HTTP $STATUS_CODE but response may indicate issues"
                fi
            else
                log_success "$name: OK (HTTP $STATUS_CODE)"
                return 0
            fi
        fi
        
        if [[ $i -lt $MAX_RETRIES ]]; then
            echo "    ⏳ Attempt $i/$MAX_RETRIES failed (status: $STATUS_CODE), retrying in ${RETRY_DELAY}s..."
            sleep $RETRY_DELAY
        fi
    done
    
    log_error "$name: FAILED (expected: $expected_status, got: $STATUS_CODE)"
    return 1
}

# Check Kubernetes pods if available
check_kubernetes_pods() {
    if ! command -v kubectl &> /dev/null; then
        return 0
    fi
    
    echo ""
    log_info "Checking Kubernetes pods..."
    
    # Check if we can connect
    if ! kubectl cluster-info &> /dev/null 2>&1; then
        log_warning "Cannot connect to Kubernetes cluster"
        return 0
    fi
    
    # Get pod status
    PODS=$(kubectl get pods -n "$ENVIRONMENT" --no-headers 2>/dev/null || echo "")
    
    if [[ -z "$PODS" ]]; then
        log_warning "No pods found in $ENVIRONMENT namespace"
        return 0
    fi
    
    # Check each pod
    while IFS= read -r pod; do
        POD_NAME=$(echo "$pod" | awk '{print $1}')
        POD_STATUS=$(echo "$pod" | awk '{print $3}')
        POD_READY=$(echo "$pod" | awk '{print $2}')
        
        if [[ "$POD_STATUS" == "Running" ]]; then
            READY_COUNT=$(echo "$POD_READY" | cut -d'/' -f1)
            TOTAL_COUNT=$(echo "$POD_READY" | cut -d'/' -f2)
            
            if [[ "$READY_COUNT" == "$TOTAL_COUNT" ]]; then
                log_success "Pod $POD_NAME: $POD_STATUS ($POD_READY ready)"
            else
                log_warning "Pod $POD_NAME: $POD_STATUS ($POD_READY ready)"
            fi
        else
            log_error "Pod $POD_NAME: $POD_STATUS"
        fi
    done <<< "$PODS"
}

# Check Docker containers if using docker-compose
check_docker_containers() {
    if [[ "$ENVIRONMENT" != "development" ]]; then
        return 0
    fi
    
    if ! command -v docker &> /dev/null; then
        return 0
    fi
    
    echo ""
    log_info "Checking Docker containers..."
    
    cd "$PROJECT_ROOT"
    
    if [[ ! -f "docker-compose.yml" ]]; then
        return 0
    fi
    
    CONTAINERS=$(docker-compose ps --format json 2>/dev/null || docker-compose ps 2>/dev/null || echo "")
    
    if [[ -z "$CONTAINERS" ]]; then
        log_warning "No containers found"
        return 0
    fi
    
    # Check if any containers are not running
    RUNNING=$(docker-compose ps --filter "status=running" -q 2>/dev/null | wc -l || echo "0")
    TOTAL=$(docker-compose ps -q 2>/dev/null | wc -l || echo "0")
    
    if [[ "$RUNNING" == "$TOTAL" && "$TOTAL" -gt 0 ]]; then
        log_success "All containers running ($RUNNING/$TOTAL)"
    else
        log_error "Some containers not running ($RUNNING/$TOTAL)"
    fi
}

# Main health check execution
main() {
    print_banner
    load_config
    
    echo ""
    echo "═══════════════════════════════════════════════════════════════════"
    echo "ENDPOINT HEALTH CHECKS"
    echo "═══════════════════════════════════════════════════════════════════"
    
    # Web application
    check_endpoint "Web Application" "${WEB_URL}" 200
    
    # Web health endpoint
    check_endpoint "Web Health" "${WEB_URL}/api/health" 200 true
    
    # API service
    check_endpoint "API Service" "${API_URL}/health" 200 true
    
    # Database connectivity (via API)
    check_endpoint "Database Health" "${API_URL}/health/db" 200 true
    
    # Redis connectivity (via API)
    check_endpoint "Redis Health" "${API_URL}/health/redis" 200 true
    
    echo ""
    echo "═══════════════════════════════════════════════════════════════════"
    echo "INFRASTRUCTURE CHECKS"
    echo "═══════════════════════════════════════════════════════════════════"
    
    check_kubernetes_pods
    check_docker_containers
    
    # Summary
    echo ""
    echo "═══════════════════════════════════════════════════════════════════"
    echo "HEALTH CHECK SUMMARY"
    echo "═══════════════════════════════════════════════════════════════════"
    echo ""
    echo -e "  ${GREEN}Passed:${NC} $PASSED"
    echo -e "  ${RED}Failed:${NC} $FAILED"
    echo ""
    
    if [[ $FAILED -gt 0 ]]; then
        echo -e "${RED}╔═══════════════════════════════════════════════════════════════════╗${NC}"
        echo -e "${RED}║               HEALTH CHECK FAILED                                 ║${NC}"
        echo -e "${RED}╚═══════════════════════════════════════════════════════════════════╝${NC}"
        echo ""
        echo "  $FAILED service(s) are unhealthy. Check logs for details:"
        echo ""
        echo "  • kubectl logs -n $ENVIRONMENT deployment/web"
        echo "  • kubectl logs -n $ENVIRONMENT deployment/api"
        echo ""
        exit 1
    else
        echo -e "${GREEN}╔═══════════════════════════════════════════════════════════════════╗${NC}"
        echo -e "${GREEN}║               ALL HEALTH CHECKS PASSED                            ║${NC}"
        echo -e "${GREEN}╚═══════════════════════════════════════════════════════════════════╝${NC}"
        echo ""
        exit 0
    fi
}

main "$@"
