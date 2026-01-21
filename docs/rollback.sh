#!/bin/bash
# ═══════════════════════════════════════════════════════════════════════════════
# GREYQUILL ROLLBACK SCRIPT
# ═══════════════════════════════════════════════════════════════════════════════
# This script handles rolling back deployments to a previous version.
#
# Usage: ./rollback.sh <environment> [version|previous]
# Example: ./rollback.sh production previous
#          ./rollback.sh staging v1.2.2
# ═══════════════════════════════════════════════════════════════════════════════

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'
BOLD='\033[1m'

ENVIRONMENT=${1:-""}
TARGET_VERSION=${2:-"previous"}

log() {
    local level=$1
    shift
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
    case $level in
        INFO)  echo -e "${BLUE}[$timestamp]${NC} ${GREEN}INFO${NC}  $*" ;;
        WARN)  echo -e "${BLUE}[$timestamp]${NC} ${YELLOW}WARN${NC}  $*" ;;
        ERROR) echo -e "${BLUE}[$timestamp]${NC} ${RED}ERROR${NC} $*" ;;
        STEP)  echo -e "${BLUE}[$timestamp]${NC} ${BLUE}STEP${NC}  $*" ;;
    esac
}

print_banner() {
    echo -e "${YELLOW}"
    echo "╔═══════════════════════════════════════════════════════════════════════════╗"
    echo "║                                                                           ║"
    echo "║                        GREYQUILL ROLLBACK                                 ║"
    echo "║                                                                           ║"
    echo "╚═══════════════════════════════════════════════════════════════════════════╝"
    echo -e "${NC}"
}

usage() {
    echo "Usage: $0 <environment> [version]"
    echo ""
    echo "Arguments:"
    echo "  environment    Target environment (staging|uat|production)"
    echo "  version        Version to rollback to (default: previous)"
    echo ""
    echo "Examples:"
    echo "  $0 production previous    # Rollback to previous version"
    echo "  $0 staging v1.2.2         # Rollback to specific version"
}

validate_inputs() {
    if [[ -z "$ENVIRONMENT" ]]; then
        log ERROR "Environment is required"
        usage
        exit 1
    fi
    
    if [[ ! "$ENVIRONMENT" =~ ^(staging|uat|production)$ ]]; then
        log ERROR "Invalid environment: $ENVIRONMENT"
        log INFO "Valid environments: staging, uat, production"
        exit 1
    fi
}

confirm_rollback() {
    echo ""
    echo -e "${RED}╔═══════════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${RED}║                      ROLLBACK WARNING                             ║${NC}"
    echo -e "${RED}╚═══════════════════════════════════════════════════════════════════╝${NC}"
    echo ""
    echo "You are about to rollback $ENVIRONMENT to: $TARGET_VERSION"
    echo ""
    echo "This will:"
    echo "  • Revert all deployed services to the previous version"
    echo "  • May require manual database rollback if migrations were applied"
    echo ""
    
    read -p "Type 'ROLLBACK' to confirm: " CONFIRM
    
    if [[ "$CONFIRM" != "ROLLBACK" ]]; then
        log INFO "Rollback cancelled"
        exit 0
    fi
}

get_current_version() {
    log STEP "Getting current deployment info..."
    
    if command -v kubectl &> /dev/null; then
        # Try to get current image tag
        CURRENT_WEB=$(kubectl get deployment web -n "$ENVIRONMENT" -o jsonpath='{.spec.template.spec.containers[0].image}' 2>/dev/null || echo "unknown")
        CURRENT_API=$(kubectl get deployment api -n "$ENVIRONMENT" -o jsonpath='{.spec.template.spec.containers[0].image}' 2>/dev/null || echo "unknown")
        
        log INFO "Current web version: $CURRENT_WEB"
        log INFO "Current api version: $CURRENT_API"
    fi
}

rollback_kubernetes() {
    log STEP "Rolling back Kubernetes deployments..."
    
    if [[ "$TARGET_VERSION" == "previous" ]]; then
        # Use Kubernetes rollout undo
        log INFO "Rolling back web deployment..."
        kubectl rollout undo deployment/web -n "$ENVIRONMENT" 2>/dev/null || log WARN "Web deployment not found"
        
        log INFO "Rolling back API deployment..."
        kubectl rollout undo deployment/api -n "$ENVIRONMENT" 2>/dev/null || log WARN "API deployment not found"
    else
        # Deploy specific version
        log INFO "Deploying version $TARGET_VERSION..."
        
        cd "$PROJECT_ROOT/infrastructure/kubernetes"
        
        kustomize edit set image "web=greyquill/web:${TARGET_VERSION}"
        kustomize edit set image "api=greyquill/api:${TARGET_VERSION}"
        
        kubectl apply -k "overlays/$ENVIRONMENT"
    fi
    
    log INFO "Waiting for rollout to complete..."
    kubectl rollout status deployment/web -n "$ENVIRONMENT" --timeout=300s 2>/dev/null || true
    kubectl rollout status deployment/api -n "$ENVIRONMENT" --timeout=300s 2>/dev/null || true
}

rollback_docker_compose() {
    log STEP "Rolling back Docker Compose deployment..."
    
    cd "$PROJECT_ROOT"
    
    if [[ "$TARGET_VERSION" == "previous" ]]; then
        log WARN "Previous version not tracked in Docker Compose"
        log INFO "Please specify a version: ./rollback.sh $ENVIRONMENT v1.x.x"
        exit 1
    fi
    
    # Update docker-compose with specific version
    log INFO "Deploying version $TARGET_VERSION..."
    
    export VERSION="$TARGET_VERSION"
    docker-compose pull
    docker-compose up -d
}

rollback_services() {
    log STEP "Initiating service rollback..."
    
    if command -v kubectl &> /dev/null; then
        # Check if we can connect to the cluster
        if kubectl cluster-info &> /dev/null; then
            rollback_kubernetes
        else
            log WARN "Cannot connect to Kubernetes cluster"
            rollback_docker_compose
        fi
    else
        rollback_docker_compose
    fi
}

check_database_rollback() {
    echo ""
    log STEP "Database rollback check..."
    
    echo ""
    echo -e "${YELLOW}Important: Database migrations may need to be rolled back manually.${NC}"
    echo ""
    
    read -p "Were database migrations applied in the deployment being rolled back? (yes/no): " DB_MIGRATIONS
    
    if [[ "$DB_MIGRATIONS" == "yes" ]]; then
        echo ""
        echo -e "${RED}Manual database rollback required.${NC}"
        echo ""
        echo "Steps to rollback database:"
        echo "  1. Identify the migration(s) to rollback"
        echo "  2. Review the DOWN migration in the migration file"
        echo "  3. Test rollback in a non-production environment first"
        echo "  4. Execute: npx prisma migrate resolve --rolled-back <migration_name>"
        echo "  5. Run the DOWN migration SQL manually"
        echo ""
        
        read -p "Press Enter after completing database rollback (or 'skip' to continue)..." DB_CONFIRM
        
        if [[ "$DB_CONFIRM" != "skip" ]]; then
            log INFO "Database rollback acknowledged"
        fi
    fi
}

run_health_checks() {
    log STEP "Running health checks..."
    
    if [[ -f "$SCRIPT_DIR/health-check.sh" ]]; then
        "$SCRIPT_DIR/health-check.sh" "$ENVIRONMENT"
    else
        # Basic health check
        sleep 10
        
        if command -v kubectl &> /dev/null; then
            # Check pod status
            READY_PODS=$(kubectl get pods -n "$ENVIRONMENT" --field-selector=status.phase=Running --no-headers 2>/dev/null | wc -l)
            log INFO "Ready pods: $READY_PODS"
        fi
    fi
    
    log INFO "Health checks completed"
}

send_notification() {
    log STEP "Sending rollback notification..."
    
    if [[ -n "${SLACK_WEBHOOK_URL:-}" ]]; then
        curl -s -X POST "$SLACK_WEBHOOK_URL" \
            -H 'Content-type: application/json' \
            -d "{
                \"text\": \"⚠️ Rollback executed on $ENVIRONMENT\",
                \"blocks\": [
                    {
                        \"type\": \"section\",
                        \"text\": {
                            \"type\": \"mrkdwn\",
                            \"text\": \"*Rollback Completed*\n• Environment: $ENVIRONMENT\n• Target: $TARGET_VERSION\n• Executed by: $(whoami)\n• Time: $(date '+%Y-%m-%d %H:%M:%S')\"
                        }
                    }
                ]
            }" || true
        
        log INFO "Slack notification sent"
    fi
}

# Main execution
main() {
    print_banner
    
    validate_inputs
    
    echo ""
    log INFO "Rollback Configuration"
    log INFO "  Environment:     $ENVIRONMENT"
    log INFO "  Target Version:  $TARGET_VERSION"
    echo ""
    
    confirm_rollback
    
    START_TIME=$(date +%s)
    
    get_current_version
    rollback_services
    check_database_rollback
    run_health_checks
    send_notification
    
    END_TIME=$(date +%s)
    DURATION=$((END_TIME - START_TIME))
    
    echo ""
    echo -e "${GREEN}╔═══════════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${GREEN}║                    ROLLBACK COMPLETE                              ║${NC}"
    echo -e "${GREEN}╚═══════════════════════════════════════════════════════════════════╝${NC}"
    echo ""
    log INFO "Environment: $ENVIRONMENT"
    log INFO "Version:     $TARGET_VERSION"
    log INFO "Duration:    ${DURATION}s"
    echo ""
}

main "$@"
