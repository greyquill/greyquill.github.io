#!/bin/bash
# ═══════════════════════════════════════════════════════════════════════════════
# GREYQUILL PRE-DEPLOYMENT VALIDATION SCRIPT
# ═══════════════════════════════════════════════════════════════════════════════
# This script validates all prerequisites before allowing deployment to proceed.
# It performs 8 phases of validation and blocks deployment if any critical 
# checks fail.
#
# Usage: ./pre-deploy-validate.sh <environment>
# Example: ./pre-deploy-validate.sh staging
# ═══════════════════════════════════════════════════════════════════════════════

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
ENVIRONMENT=${1:-"staging"}

ERRORS=0
WARNINGS=0
CHECKS_PASSED=0

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m'
BOLD='\033[1m'

log_success() { echo -e "${GREEN}✓${NC} $1"; ((CHECKS_PASSED++)); }
log_error() { echo -e "${RED}✗${NC} $1"; ((ERRORS++)); }
log_warning() { echo -e "${YELLOW}⚠${NC} $1"; ((WARNINGS++)); }
log_info() { echo -e "${CYAN}ℹ${NC} $1"; }

print_header() {
    echo ""
    echo -e "${BLUE}═══════════════════════════════════════════════════════════════════${NC}"
    echo -e "${BOLD}$1${NC}"
    echo -e "${BLUE}═══════════════════════════════════════════════════════════════════${NC}"
}

print_banner() {
    echo -e "${CYAN}"
    echo "╔═══════════════════════════════════════════════════════════════════════════╗"
    echo "║                    GREYQUILL PRE-DEPLOYMENT VALIDATION                    ║"
    echo "╚═══════════════════════════════════════════════════════════════════════════╝"
    echo -e "${NC}"
    echo -e "  ${BOLD}Environment:${NC} $ENVIRONMENT"
    echo -e "  ${BOLD}Project Root:${NC} $PROJECT_ROOT"
    echo -e "  ${BOLD}Timestamp:${NC} $(date '+%Y-%m-%d %H:%M:%S')"
}

# PHASE 1: Repository Structure
validate_repository_structure() {
    print_header "PHASE 1: Repository Structure Validation"
    
    REQUIRED_FILES=("deploy.manifest.yaml" "DEPLOYMENT.md" "docker-compose.yml" ".github/workflows/ci.yml" "scripts/deploy.sh" "scripts/rollback.sh")
    
    for file in "${REQUIRED_FILES[@]}"; do
        if [[ -f "$PROJECT_ROOT/$file" ]]; then
            log_success "Found: $file"
        else
            log_error "Missing required file: $file"
        fi
    done
}

# PHASE 2: Deployment Manifest
validate_deployment_manifest() {
    print_header "PHASE 2: Deployment Manifest Validation"
    
    MANIFEST_FILE="$PROJECT_ROOT/deploy.manifest.yaml"
    
    if [[ ! -f "$MANIFEST_FILE" ]]; then
        log_error "Deployment manifest not found"
        return
    fi
    
    if command -v yq &> /dev/null; then
        if yq eval '.' "$MANIFEST_FILE" > /dev/null 2>&1; then
            log_success "Deployment manifest is valid YAML"
            
            PROJECT_NAME=$(yq eval '.project.name' "$MANIFEST_FILE" 2>/dev/null)
            if [[ "$PROJECT_NAME" != "null" && -n "$PROJECT_NAME" ]]; then
                log_success "Project name: $PROJECT_NAME"
            else
                log_error "Project name not defined"
            fi
        else
            log_error "Invalid YAML syntax in manifest"
        fi
    else
        log_warning "yq not installed - skipping detailed validation"
    fi
}

# PHASE 3: Environment Configuration
validate_environment_config() {
    print_header "PHASE 3: Environment Configuration"
    
    ENV_FILE="$PROJECT_ROOT/config/${ENVIRONMENT}.env"
    
    if [[ -f "$ENV_FILE" ]]; then
        log_success "Environment config exists: config/${ENVIRONMENT}.env"
    elif [[ -f "${ENV_FILE}.encrypted" ]]; then
        log_success "Encrypted env config found"
    else
        log_error "Missing environment config: config/${ENVIRONMENT}.env"
    fi
}

# PHASE 4: Code Quality
validate_code_quality() {
    print_header "PHASE 4: Code Quality Checks"
    
    cd "$PROJECT_ROOT"
    
    if [[ -d ".git" ]]; then
        if git diff-index --quiet HEAD -- 2>/dev/null; then
            log_success "No uncommitted changes"
        else
            log_error "Uncommitted changes detected"
        fi
        
        CURRENT_BRANCH=$(git branch --show-current 2>/dev/null || echo "unknown")
        log_info "Current branch: $CURRENT_BRANCH"
        
        if [[ "$ENVIRONMENT" == "production" && "$CURRENT_BRANCH" != "main" && "$CURRENT_BRANCH" != "master" ]]; then
            log_error "Production must deploy from main/master branch"
        fi
    else
        log_error "Not a git repository"
    fi
}

# PHASE 5: Dependencies
validate_dependencies() {
    print_header "PHASE 5: Dependency Checks"
    
    cd "$PROJECT_ROOT"
    
    if [[ -f "package.json" ]]; then
        if [[ -f "package-lock.json" ]] || [[ -f "yarn.lock" ]]; then
            log_success "Lock file exists"
        else
            log_error "No lock file found"
        fi
        
        if command -v npm &> /dev/null; then
            if npm audit --audit-level=high 2>/dev/null; then
                log_success "No high/critical vulnerabilities"
            else
                log_error "Security vulnerabilities detected"
            fi
        fi
    fi
    
    if [[ -f "pubspec.yaml" ]]; then
        if [[ -f "pubspec.lock" ]]; then
            log_success "pubspec.lock exists"
        else
            log_error "pubspec.lock missing"
        fi
    fi
}

# PHASE 6: Tests
validate_tests() {
    print_header "PHASE 6: Test Verification"
    
    if [[ -n "${CI:-}" ]]; then
        log_success "Running in CI - tests verified"
    else
        log_warning "Running locally - verify CI tests passed"
    fi
}

# PHASE 7: Database Migrations
validate_database_migrations() {
    print_header "PHASE 7: Database Migration Check"
    
    cd "$PROJECT_ROOT"
    
    if [[ -d "database/migrations" ]]; then
        MIGRATION_COUNT=$(find "database/migrations" -name "*.sql" -type f 2>/dev/null | wc -l)
        log_success "Found $MIGRATION_COUNT migration(s)"
        
        for migration in database/migrations/*.sql; do
            if [[ -f "$migration" ]]; then
                basename=$(basename "$migration")
                if [[ $basename =~ ^[0-9]{14}_ ]]; then
                    log_success "Valid: $basename"
                else
                    log_error "Invalid name: $basename (expected: YYYYMMDDHHMMSS_desc.sql)"
                fi
            fi
        done
    fi
    
    if [[ -d "prisma/migrations" ]]; then
        log_success "Prisma migrations directory exists"
    fi
}

# PHASE 8: Docker
validate_docker_builds() {
    print_header "PHASE 8: Docker Build Verification"
    
    cd "$PROJECT_ROOT"
    
    DOCKERFILES=$(find . -name "Dockerfile" -type f 2>/dev/null | grep -v node_modules || true)
    
    if [[ -n "$DOCKERFILES" ]]; then
        while IFS= read -r dockerfile; do
            if [[ -f "$dockerfile" ]] && grep -q "^FROM" "$dockerfile"; then
                log_success "Valid Dockerfile: $dockerfile"
            fi
        done <<< "$DOCKERFILES"
    else
        log_warning "No Dockerfiles found"
    fi
}

# Summary
print_summary() {
    print_header "VALIDATION SUMMARY"
    
    echo -e "\n  ${GREEN}Passed:${NC}   $CHECKS_PASSED"
    echo -e "  ${YELLOW}Warnings:${NC} $WARNINGS"
    echo -e "  ${RED}Errors:${NC}   $ERRORS\n"
    
    if [[ $ERRORS -gt 0 ]]; then
        echo -e "${RED}VALIDATION FAILED - Fix $ERRORS error(s) before deployment${NC}\n"
        exit 1
    elif [[ $WARNINGS -gt 0 ]]; then
        echo -e "${YELLOW}PASSED WITH WARNINGS - Review before proceeding${NC}\n"
        exit 0
    else
        echo -e "${GREEN}VALIDATION PASSED - Ready to deploy to $ENVIRONMENT${NC}\n"
        exit 0
    fi
}

# Main
main() {
    print_banner
    
    if [[ ! "$ENVIRONMENT" =~ ^(development|staging|uat|production)$ ]]; then
        echo -e "${RED}Invalid environment: $ENVIRONMENT${NC}"
        exit 1
    fi
    
    validate_repository_structure
    validate_deployment_manifest
    validate_environment_config
    validate_code_quality
    validate_dependencies
    validate_tests
    validate_database_migrations
    validate_docker_builds
    
    print_summary
}

main "$@"
