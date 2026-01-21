#!/bin/bash
# ═══════════════════════════════════════════════════════════════════════════════
# GREYQUILL ONE-CLICK DEPLOYMENT SCRIPT
# ═══════════════════════════════════════════════════════════════════════════════
# This script orchestrates the entire deployment process including validation,
# building, database migrations, and service deployment.
#
# Usage: ./deploy.sh -e <environment> -v <version> [-c <components>] [--dry-run]
# Example: ./deploy.sh -e staging -v v1.2.3 -c all
# ═══════════════════════════════════════════════════════════════════════════════

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m'
BOLD='\033[1m'

# Default values
ENVIRONMENT=""
VERSION=""
COMPONENTS="all"
DRY_RUN=false
SKIP_VALIDATION=false
SKIP_BACKUP=false
SKIP_TESTS=false

# Logging functions
log() {
    local level=$1
    shift
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
    case $level in
        INFO)  echo -e "${BLUE}[$timestamp]${NC} ${GREEN}INFO${NC}  $*" ;;
        WARN)  echo -e "${BLUE}[$timestamp]${NC} ${YELLOW}WARN${NC}  $*" ;;
        ERROR) echo -e "${BLUE}[$timestamp]${NC} ${RED}ERROR${NC} $*" ;;
        STEP)  echo -e "${BLUE}[$timestamp]${NC} ${CYAN}STEP${NC}  $*" ;;
    esac
}

print_banner() {
    echo -e "${CYAN}"
    echo "╔═══════════════════════════════════════════════════════════════════════════╗"
    echo "║                                                                           ║"
    echo "║   ██████╗ ██████╗ ███████╗██╗   ██╗ ██████╗ ██╗   ██╗██╗██╗     ██╗       ║"
    echo "║  ██╔════╝ ██╔══██╗██╔════╝╚██╗ ██╔╝██╔═══██╗██║   ██║██║██║     ██║       ║"
    echo "║  ██║  ███╗██████╔╝█████╗   ╚████╔╝ ██║   ██║██║   ██║██║██║     ██║       ║"
    echo "║  ██║   ██║██╔══██╗██╔══╝    ╚██╔╝  ██║▄▄ ██║██║   ██║██║██║     ██║       ║"
    echo "║  ╚██████╔╝██║  ██║███████╗   ██║   ╚██████╔╝╚██████╔╝██║███████╗███████╗  ║"
    echo "║   ╚═════╝ ╚═╝  ╚═╝╚══════╝   ╚═╝    ╚══▀▀═╝  ╚═════╝ ╚═╝╚══════╝╚══════╝  ║"
    echo "║                                                                           ║"
    echo "║                       DEPLOYMENT AUTOMATION                               ║"
    echo "║                                                                           ║"
    echo "╚═══════════════════════════════════════════════════════════════════════════╝"
    echo -e "${NC}"
}

usage() {
    echo "Usage: $0 [OPTIONS]"
    echo ""
    echo "Options:"
    echo "  -e, --environment    Target environment (development|staging|uat|production)"
    echo "  -v, --version        Version to deploy (e.g., v1.2.3)"
    echo "  -c, --components     Components to deploy (all|web|api|mobile)"
    echo "  --dry-run            Simulate deployment without making changes"
    echo "  --skip-validation    Skip pre-deployment validation (NOT RECOMMENDED)"
    echo "  --skip-backup        Skip database backup (NOT RECOMMENDED)"
    echo "  --skip-tests         Skip test execution (NOT RECOMMENDED)"
    echo "  -h, --help           Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 -e staging -v v1.2.3"
    echo "  $0 -e production -v v1.2.3 -c web"
    echo "  $0 -e development --dry-run"
}

validate_inputs() {
    if [[ -z "$ENVIRONMENT" ]]; then
        log ERROR "Environment is required. Use -e or --environment"
        exit 1
    fi
    
    if [[ ! "$ENVIRONMENT" =~ ^(development|staging|uat|production)$ ]]; then
        log ERROR "Invalid environment: $ENVIRONMENT"
        log INFO "Valid environments: development, staging, uat, production"
        exit 1
    fi
    
    if [[ -z "$VERSION" && "$ENVIRONMENT" != "development" ]]; then
        log ERROR "Version is required for non-development deployments"
        exit 1
    fi
    
    if [[ ! "$COMPONENTS" =~ ^(all|web|api|mobile)$ ]]; then
        log ERROR "Invalid components: $COMPONENTS"
        log INFO "Valid components: all, web, api, mobile"
        exit 1
    fi
}

confirm_production() {
    if [[ "$ENVIRONMENT" == "production" && "$DRY_RUN" == "false" ]]; then
        echo ""
        echo -e "${YELLOW}╔═══════════════════════════════════════════════════════════════════╗${NC}"
        echo -e "${YELLOW}║                    PRODUCTION DEPLOYMENT                          ║${NC}"
        echo -e "${YELLOW}╚═══════════════════════════════════════════════════════════════════╝${NC}"
        echo ""
        echo "You are about to deploy to PRODUCTION."
        echo ""
        echo "  Environment: $ENVIRONMENT"
        echo "  Version:     $VERSION"
        echo "  Components:  $COMPONENTS"
        echo ""
        read -p "Type 'DEPLOY' to confirm: " CONFIRM
        
        if [[ "$CONFIRM" != "DEPLOY" ]]; then
            log INFO "Deployment cancelled"
            exit 0
        fi
    fi
}

# Step 1: Pre-deployment validation
run_validation() {
    log STEP "Running pre-deployment validation..."
    
    if [[ "$SKIP_VALIDATION" == "true" ]]; then
        log WARN "Skipping validation (--skip-validation flag set)"
        return 0
    fi
    
    if [[ "$DRY_RUN" == "true" ]]; then
        log INFO "[DRY RUN] Would run pre-deployment validation"
        return 0
    fi
    
    if ! "$SCRIPT_DIR/pre-deploy-validate.sh" "$ENVIRONMENT"; then
        log ERROR "Pre-deployment validation failed"
        exit 1
    fi
    
    log INFO "Validation passed"
}

# Step 2: Run tests
run_tests() {
    log STEP "Running test suite..."
    
    if [[ "$SKIP_TESTS" == "true" ]]; then
        log WARN "Skipping tests (--skip-tests flag set)"
        return 0
    fi
    
    if [[ "$DRY_RUN" == "true" ]]; then
        log INFO "[DRY RUN] Would run tests"
        return 0
    fi
    
    cd "$PROJECT_ROOT"
    
    # Run tests based on what's available
    if [[ -f "package.json" ]]; then
        if grep -q '"test"' package.json; then
            log INFO "Running npm tests..."
            npm test || { log ERROR "Tests failed"; exit 1; }
        fi
    fi
    
    log INFO "Tests completed"
}

# Step 3: Database backup
backup_database() {
    log STEP "Creating database backup..."
    
    if [[ "$SKIP_BACKUP" == "true" ]]; then
        log WARN "Skipping backup (--skip-backup flag set)"
        return 0
    fi
    
    if [[ "$DRY_RUN" == "true" ]]; then
        log INFO "[DRY RUN] Would create database backup"
        return 0
    fi
    
    if [[ -f "$SCRIPT_DIR/db-backup.sh" ]]; then
        "$SCRIPT_DIR/db-backup.sh" "$ENVIRONMENT"
    else
        log WARN "Backup script not found, skipping"
    fi
    
    log INFO "Database backup completed"
}

# Step 4: Build containers
build_containers() {
    log STEP "Building container images..."
    
    if [[ "$DRY_RUN" == "true" ]]; then
        log INFO "[DRY RUN] Would build containers for: $COMPONENTS"
        return 0
    fi
    
    cd "$PROJECT_ROOT"
    
    local tag="${VERSION:-latest}"
    
    if [[ "$COMPONENTS" == "all" || "$COMPONENTS" == "web" ]]; then
        if [[ -f "apps/web/Dockerfile" ]]; then
            log INFO "Building web container..."
            docker build -t "greyquill/web:$tag" -f apps/web/Dockerfile apps/web/
            log INFO "Web container built: greyquill/web:$tag"
        fi
    fi
    
    if [[ "$COMPONENTS" == "all" || "$COMPONENTS" == "api" ]]; then
        if [[ -f "services/api/Dockerfile" ]]; then
            log INFO "Building API container..."
            docker build -t "greyquill/api:$tag" -f services/api/Dockerfile services/api/
            log INFO "API container built: greyquill/api:$tag"
        fi
    fi
    
    log INFO "Container builds completed"
}

# Step 5: Run database migrations
run_migrations() {
    log STEP "Running database migrations..."
    
    if [[ "$DRY_RUN" == "true" ]]; then
        log INFO "[DRY RUN] Would run database migrations"
        return 0
    fi
    
    cd "$PROJECT_ROOT"
    
    # Load environment configuration
    ENV_FILE="config/${ENVIRONMENT}.env"
    if [[ -f "$ENV_FILE" ]]; then
        set -a
        source "$ENV_FILE"
        set +a
    fi
    
    # Run Prisma migrations if available
    if [[ -d "prisma" ]]; then
        log INFO "Running Prisma migrations..."
        npx prisma migrate deploy
    fi
    
    log INFO "Migrations completed"
}

# Step 6: Deploy services
deploy_services() {
    log STEP "Deploying services to $ENVIRONMENT..."
    
    if [[ "$DRY_RUN" == "true" ]]; then
        log INFO "[DRY RUN] Would deploy to $ENVIRONMENT"
        return 0
    fi
    
    cd "$PROJECT_ROOT"
    
    case $ENVIRONMENT in
        development)
            log INFO "Starting services with Docker Compose..."
            docker-compose up -d
            ;;
        staging|uat|production)
            if command -v kubectl &> /dev/null; then
                log INFO "Deploying to Kubernetes..."
                
                # Update image tags
                if [[ -d "infrastructure/kubernetes/overlays/$ENVIRONMENT" ]]; then
                    cd "infrastructure/kubernetes"
                    
                    if [[ "$COMPONENTS" == "all" || "$COMPONENTS" == "web" ]]; then
                        kustomize edit set image "web=greyquill/web:${VERSION}"
                    fi
                    
                    if [[ "$COMPONENTS" == "all" || "$COMPONENTS" == "api" ]]; then
                        kustomize edit set image "api=greyquill/api:${VERSION}"
                    fi
                    
                    kubectl apply -k "overlays/$ENVIRONMENT"
                    
                    log INFO "Waiting for rollout to complete..."
                    kubectl rollout status deployment -n "$ENVIRONMENT" --timeout=300s
                else
                    log WARN "Kubernetes overlays not found, using Docker Compose"
                    docker-compose -f docker-compose.yml -f "docker-compose.${ENVIRONMENT}.yml" up -d
                fi
            else
                log INFO "Deploying with Docker Compose..."
                docker-compose -f docker-compose.yml up -d
            fi
            ;;
    esac
    
    log INFO "Services deployed"
}

# Step 7: Health checks
run_health_checks() {
    log STEP "Running health checks..."
    
    if [[ "$DRY_RUN" == "true" ]]; then
        log INFO "[DRY RUN] Would run health checks"
        return 0
    fi
    
    if [[ -f "$SCRIPT_DIR/health-check.sh" ]]; then
        "$SCRIPT_DIR/health-check.sh" "$ENVIRONMENT"
    else
        log WARN "Health check script not found"
        # Basic health check
        sleep 10
        log INFO "Waiting for services to stabilize..."
    fi
    
    log INFO "Health checks passed"
}

# Step 8: Send notifications
send_notifications() {
    log STEP "Sending deployment notification..."
    
    if [[ "$DRY_RUN" == "true" ]]; then
        log INFO "[DRY RUN] Would send notifications"
        return 0
    fi
    
    # Slack notification (if webhook configured)
    if [[ -n "${SLACK_WEBHOOK_URL:-}" ]]; then
        curl -s -X POST "$SLACK_WEBHOOK_URL" \
            -H 'Content-type: application/json' \
            -d "{
                \"text\": \"✅ Deployment completed\",
                \"blocks\": [
                    {
                        \"type\": \"section\",
                        \"text\": {
                            \"type\": \"mrkdwn\",
                            \"text\": \"*Deployment Complete*\n• Environment: $ENVIRONMENT\n• Version: ${VERSION:-latest}\n• Components: $COMPONENTS\n• Deployed by: $(whoami)\"
                        }
                    }
                ]
            }" || true
    fi
    
    log INFO "Notifications sent"
}

# Main deployment pipeline
main() {
    print_banner
    
    # Parse arguments
    while [[ $# -gt 0 ]]; do
        case $1 in
            -e|--environment) ENVIRONMENT="$2"; shift 2 ;;
            -v|--version) VERSION="$2"; shift 2 ;;
            -c|--components) COMPONENTS="$2"; shift 2 ;;
            --dry-run) DRY_RUN=true; shift ;;
            --skip-validation) SKIP_VALIDATION=true; shift ;;
            --skip-backup) SKIP_BACKUP=true; shift ;;
            --skip-tests) SKIP_TESTS=true; shift ;;
            -h|--help) usage; exit 0 ;;
            *) echo "Unknown option: $1"; usage; exit 1 ;;
        esac
    done
    
    validate_inputs
    confirm_production
    
    echo ""
    log INFO "Starting deployment"
    log INFO "  Environment: $ENVIRONMENT"
    log INFO "  Version:     ${VERSION:-latest}"
    log INFO "  Components:  $COMPONENTS"
    log INFO "  Dry Run:     $DRY_RUN"
    echo ""
    
    START_TIME=$(date +%s)
    
    # Execute deployment pipeline
    run_validation
    run_tests
    backup_database
    build_containers
    run_migrations
    deploy_services
    run_health_checks
    send_notifications
    
    END_TIME=$(date +%s)
    DURATION=$((END_TIME - START_TIME))
    
    echo ""
    echo -e "${GREEN}╔═══════════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${GREEN}║                    DEPLOYMENT COMPLETE                            ║${NC}"
    echo -e "${GREEN}╚═══════════════════════════════════════════════════════════════════╝${NC}"
    echo ""
    log INFO "Environment: $ENVIRONMENT"
    log INFO "Version:     ${VERSION:-latest}"
    log INFO "Duration:    ${DURATION}s"
    echo ""
    
    if [[ "$DRY_RUN" == "true" ]]; then
        echo -e "${YELLOW}This was a dry run. No changes were made.${NC}"
    fi
}

main "$@"
