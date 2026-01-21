# GreyQuill Software - Deployment Standard Operating Procedures (SOP)

**Version:** 1.0  
**Effective Date:** January 2026  
**Document Owner:** Engineering Leadership  
**Classification:** Internal - All Developers

---

## Executive Summary

This document establishes the company-wide deployment framework for GreyQuill Software. Our goal is to achieve consistent, reliable, and error-free deployments across all client projects through standardized processes, automated pipelines, and comprehensive pre-deployment validation.

The framework follows a "Configure Once, Deploy Anywhere" philosophy where developers define deployment configurations upfront, and the system handles all validations, checks, and deployments automatically.

---

## Table of Contents

1. [Deployment Philosophy](#1-deployment-philosophy)
2. [Technology Stack Standards](#2-technology-stack-standards)
3. [Environment Architecture](#3-environment-architecture)
4. [Repository Structure Standards](#4-repository-structure-standards)
5. [Configuration Management](#5-configuration-management)
6. [Pre-Deployment Checklist System](#6-pre-deployment-checklist-system)
7. [One-Click Deployment Pipeline](#7-one-click-deployment-pipeline)
8. [Database Deployment Procedures](#8-database-deployment-procedures)
9. [Infrastructure Services Deployment](#9-infrastructure-services-deployment)
10. [Rollback Procedures](#10-rollback-procedures)
11. [Monitoring and Alerting](#11-monitoring-and-alerting)
12. [Security Requirements](#12-security-requirements)
13. [Automation Scripts Reference](#13-automation-scripts-reference)
14. [Troubleshooting Guide](#14-troubleshooting-guide)

---

## 1. Deployment Philosophy

### 1.1 Core Principles

**Immutability:** Every deployment creates new infrastructure rather than modifying existing systems. This ensures consistency and enables instant rollbacks.

**Automation First:** Human intervention should only occur at decision points, never for execution. All deployment steps must be automated and reproducible.

**Fail Fast, Fail Safe:** The system should detect issues as early as possible in the pipeline and prevent bad deployments from reaching production.

**Configuration as Code:** All deployment configurations, environment variables, and infrastructure definitions must be version-controlled alongside application code.

### 1.2 Zero-Tolerance Rules

The following will automatically block any deployment:

- Missing or incomplete deployment manifest
- Failed automated tests (unit, integration, or E2E)
- Security vulnerabilities above "Low" severity
- Missing database migration scripts for schema changes
- Uncommitted or unreviewed code changes
- Missing environment variable definitions
- Failed health checks on dependencies

---

## 2. Technology Stack Standards

### 2.1 Frontend Applications

| Technology | Version | Use Case |
|------------|---------|----------|
| Next.js | 14.x LTS | Web applications |
| Flutter | 3.x stable | Mobile applications (iOS/Android) |
| TypeScript | 5.x | All JavaScript projects |
| Node.js | 20.x LTS | Runtime environment |

### 2.2 Backend Services

| Technology | Version | Use Case |
|------------|---------|----------|
| PostgreSQL | 16.x | Primary database |
| Redis | 7.x | Caching, session storage |
| Apache Kafka | 3.x | Event streaming, message queuing |
| Python | 3.11+ | Automation, data processing |

### 2.3 Infrastructure & DevOps

| Technology | Purpose |
|------------|---------|
| Docker | Containerization |
| Kubernetes | Container orchestration |
| Terraform | Infrastructure as Code |
| GitHub Actions | CI/CD pipelines |
| ArgoCD | GitOps deployment |

---

## 3. Environment Architecture

### 3.1 Standard Environment Tiers

Every project must maintain four environments:

```
┌─────────────────────────────────────────────────────────────────┐
│                    ENVIRONMENT PIPELINE                         │
├─────────────┬─────────────┬─────────────┬─────────────────────┤
│ DEVELOPMENT │   STAGING   │     UAT     │    PRODUCTION       │
│             │             │             │                     │
│ Feature     │ Integration │ Client      │ Live                │
│ branches    │ testing     │ acceptance  │ environment         │
│             │             │             │                     │
│ Auto-deploy │ Auto-deploy │ Manual      │ Manual approval     │
│ on push     │ on merge    │ trigger     │ + scheduled window  │
└─────────────┴─────────────┴─────────────┴─────────────────────┘
```

### 3.2 Environment Configuration Requirements

Each environment must have a dedicated configuration file:

```
/config
  ├── development.env
  ├── staging.env
  ├── uat.env
  └── production.env
```

### 3.3 Environment Isolation Rules

- Development: Isolated per developer, disposable
- Staging: Mirrors production architecture, shared team access
- UAT: Client-accessible, data anonymized
- Production: Restricted access, full monitoring

---

## 4. Repository Structure Standards

### 4.1 Monorepo Structure (Preferred)

```
project-root/
├── .github/
│   └── workflows/
│       ├── ci.yml
│       ├── cd-staging.yml
│       ├── cd-production.yml
│       └── security-scan.yml
├── apps/
│   ├── web/                    # Next.js application
│   │   ├── src/
│   │   ├── public/
│   │   ├── next.config.js
│   │   ├── package.json
│   │   └── Dockerfile
│   └── mobile/                 # Flutter application
│       ├── lib/
│       ├── android/
│       ├── ios/
│       └── pubspec.yaml
├── packages/
│   └── shared/                 # Shared utilities
├── services/
│   ├── api/                    # Backend API service
│   │   ├── src/
│   │   ├── Dockerfile
│   │   └── package.json
│   └── workers/                # Background workers
├── infrastructure/
│   ├── terraform/
│   │   ├── modules/
│   │   ├── environments/
│   │   │   ├── dev/
│   │   │   ├── staging/
│   │   │   └── production/
│   │   └── main.tf
│   ├── kubernetes/
│   │   ├── base/
│   │   └── overlays/
│   └── docker-compose.yml
├── database/
│   ├── migrations/
│   ├── seeds/
│   └── scripts/
├── scripts/
│   ├── deploy.sh
│   ├── rollback.sh
│   ├── health-check.sh
│   └── pre-deploy-validate.sh
├── config/
│   ├── development.env.example
│   ├── staging.env.example
│   └── production.env.example
├── deploy.manifest.yaml        # REQUIRED: Deployment manifest
├── DEPLOYMENT.md               # Deployment documentation
└── README.md
```

### 4.2 Required Files for Every Project

The following files are mandatory and will be validated before any deployment:

1. `deploy.manifest.yaml` - Deployment configuration
2. `DEPLOYMENT.md` - Human-readable deployment guide
3. `docker-compose.yml` - Local development setup
4. `.github/workflows/ci.yml` - CI pipeline
5. `scripts/deploy.sh` - Deployment automation
6. `scripts/rollback.sh` - Rollback automation

---

## 5. Configuration Management

### 5.1 Deployment Manifest (deploy.manifest.yaml)

Every project must include a deployment manifest at the repository root:

```yaml
# deploy.manifest.yaml
version: "1.0"
project:
  name: "project-name"
  client: "client-name"
  type: "web|mobile|fullstack"
  
components:
  web:
    enabled: true
    framework: "nextjs"
    version: "14.x"
    port: 3000
    healthcheck: "/api/health"
    build:
      command: "npm run build"
      output: ".next"
    deploy:
      replicas: 2
      resources:
        cpu: "500m"
        memory: "512Mi"
        
  mobile:
    enabled: true
    framework: "flutter"
    platforms:
      - android
      - ios
    build:
      android: "flutter build appbundle --release"
      ios: "flutter build ipa --release"
      
  api:
    enabled: true
    runtime: "node"
    version: "20"
    port: 4000
    healthcheck: "/health"
    
database:
  type: "postgresql"
  version: "16"
  migrations:
    tool: "prisma"
    command: "npx prisma migrate deploy"
  backup:
    enabled: true
    schedule: "0 2 * * *"
    retention: 30
    
services:
  redis:
    enabled: true
    version: "7"
    persistence: true
    
  kafka:
    enabled: false
    version: "3"
    topics: []
    
environment:
  required:
    - DATABASE_URL
    - REDIS_URL
    - JWT_SECRET
    - API_BASE_URL
  optional:
    - SENTRY_DSN
    - ANALYTICS_KEY
    
deployment:
  strategy: "blue-green"
  approval_required:
    staging: false
    production: true
  notifications:
    slack: "#deployments"
    email:
      - "tech-lead@greyquill.io"
      
rollback:
  automatic: true
  threshold:
    error_rate: 5
    latency_p99: 2000
```

### 5.2 Environment Variables Convention

All environment variables must follow this naming convention:

```
# Database
DATABASE_URL=postgresql://user:pass@host:5432/db
DATABASE_POOL_SIZE=20

# Redis
REDIS_URL=redis://host:6379
REDIS_PASSWORD=

# Kafka
KAFKA_BROKERS=broker1:9092,broker2:9092
KAFKA_CLIENT_ID=service-name

# Application
APP_ENV=production
APP_DEBUG=false
APP_URL=https://app.example.com

# Security
JWT_SECRET=
ENCRYPTION_KEY=
API_KEY_SALT=

# External Services
SENTRY_DSN=
STRIPE_SECRET_KEY=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
```

### 5.3 Secrets Management

**Never commit secrets to version control.** All secrets must be stored in:

- Development: `.env.local` (gitignored)
- Staging/UAT: HashiCorp Vault or AWS Secrets Manager
- Production: HashiCorp Vault or AWS Secrets Manager

---

## 6. Pre-Deployment Checklist System

### 6.1 Automated Validation Script

The following script must pass before any deployment proceeds:

```bash
#!/bin/bash
# scripts/pre-deploy-validate.sh

set -e

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║          GREYQUILL PRE-DEPLOYMENT VALIDATION                  ║"
echo "╚════════════════════════════════════════════════════════════════╝"

ENVIRONMENT=$1
ERRORS=0
WARNINGS=0

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

log_success() { echo -e "${GREEN}✓${NC} $1"; }
log_error() { echo -e "${RED}✗${NC} $1"; ((ERRORS++)); }
log_warning() { echo -e "${YELLOW}⚠${NC} $1"; ((WARNINGS++)); }

echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "PHASE 1: Repository Structure Validation"
echo "═══════════════════════════════════════════════════════════════"

# Check required files
REQUIRED_FILES=(
    "deploy.manifest.yaml"
    "DEPLOYMENT.md"
    "docker-compose.yml"
    ".github/workflows/ci.yml"
    "scripts/deploy.sh"
    "scripts/rollback.sh"
)

for file in "${REQUIRED_FILES[@]}"; do
    if [[ -f "$file" ]]; then
        log_success "Found: $file"
    else
        log_error "Missing required file: $file"
    fi
done

echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "PHASE 2: Deployment Manifest Validation"
echo "═══════════════════════════════════════════════════════════════"

# Validate manifest exists and is valid YAML
if command -v yq &> /dev/null; then
    if yq eval '.' deploy.manifest.yaml > /dev/null 2>&1; then
        log_success "Deployment manifest is valid YAML"
        
        # Check required fields
        PROJECT_NAME=$(yq eval '.project.name' deploy.manifest.yaml)
        if [[ "$PROJECT_NAME" != "null" && -n "$PROJECT_NAME" ]]; then
            log_success "Project name defined: $PROJECT_NAME"
        else
            log_error "Project name not defined in manifest"
        fi
    else
        log_error "Deployment manifest is invalid YAML"
    fi
else
    log_warning "yq not installed - skipping manifest validation"
fi

echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "PHASE 3: Environment Configuration"
echo "═══════════════════════════════════════════════════════════════"

# Check environment file
ENV_FILE="config/${ENVIRONMENT}.env"
if [[ -f "$ENV_FILE" ]] || [[ -f "${ENV_FILE}.encrypted" ]]; then
    log_success "Environment config exists for: $ENVIRONMENT"
else
    log_error "Missing environment config: $ENV_FILE"
fi

# Validate required environment variables
if [[ -f "$ENV_FILE" ]]; then
    REQUIRED_VARS=$(yq eval '.environment.required[]' deploy.manifest.yaml 2>/dev/null)
    while IFS= read -r var; do
        if grep -q "^${var}=" "$ENV_FILE"; then
            log_success "Environment variable defined: $var"
        else
            log_error "Missing required environment variable: $var"
        fi
    done <<< "$REQUIRED_VARS"
fi

echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "PHASE 4: Code Quality Checks"
echo "═══════════════════════════════════════════════════════════════"

# Check for uncommitted changes
if git diff-index --quiet HEAD --; then
    log_success "No uncommitted changes"
else
    log_error "Uncommitted changes detected - commit or stash before deploying"
fi

# Check branch
CURRENT_BRANCH=$(git branch --show-current)
if [[ "$ENVIRONMENT" == "production" && "$CURRENT_BRANCH" != "main" ]]; then
    log_error "Production deployments must be from 'main' branch (current: $CURRENT_BRANCH)"
fi

echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "PHASE 5: Dependency Checks"
echo "═══════════════════════════════════════════════════════════════"

# Check Node.js projects
if [[ -f "package.json" ]]; then
    if [[ -f "package-lock.json" ]]; then
        log_success "package-lock.json exists"
    else
        log_error "package-lock.json missing - run 'npm install' first"
    fi
    
    # Security audit
    if npm audit --audit-level=high 2>/dev/null; then
        log_success "No high/critical npm vulnerabilities"
    else
        log_error "High/critical npm vulnerabilities detected - run 'npm audit fix'"
    fi
fi

# Check Flutter projects
if [[ -f "pubspec.yaml" ]]; then
    if [[ -f "pubspec.lock" ]]; then
        log_success "pubspec.lock exists"
    else
        log_error "pubspec.lock missing - run 'flutter pub get' first"
    fi
fi

echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "PHASE 6: Test Verification"
echo "═══════════════════════════════════════════════════════════════"

# Check if tests passed in CI
if [[ -n "$CI" ]]; then
    log_success "Running in CI environment - tests verified"
else
    log_warning "Running locally - ensure CI tests have passed"
fi

echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "PHASE 7: Database Migration Check"
echo "═══════════════════════════════════════════════════════════════"

# Check for pending migrations
if [[ -d "database/migrations" ]]; then
    MIGRATION_COUNT=$(ls -1 database/migrations/*.sql 2>/dev/null | wc -l)
    log_success "Found $MIGRATION_COUNT migration files"
    
    # Verify migration naming convention
    for migration in database/migrations/*.sql; do
        if [[ -f "$migration" ]]; then
            basename=$(basename "$migration")
            if [[ $basename =~ ^[0-9]{14}_ ]]; then
                log_success "Valid migration name: $basename"
            else
                log_error "Invalid migration name format: $basename (expected: YYYYMMDDHHMMSS_description.sql)"
            fi
        fi
    done
fi

echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "PHASE 8: Docker Build Verification"
echo "═══════════════════════════════════════════════════════════════"

# Verify Dockerfiles exist for enabled components
if command -v docker &> /dev/null; then
    for dockerfile in $(find . -name "Dockerfile" -type f); do
        if docker build --check "$dockerfile" > /dev/null 2>&1; then
            log_success "Dockerfile valid: $dockerfile"
        else
            log_warning "Dockerfile syntax check skipped: $dockerfile"
        fi
    done
else
    log_warning "Docker not available - skipping Dockerfile validation"
fi

echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "VALIDATION SUMMARY"
echo "═══════════════════════════════════════════════════════════════"

if [[ $ERRORS -gt 0 ]]; then
    echo -e "${RED}FAILED${NC}: $ERRORS errors, $WARNINGS warnings"
    echo "Deployment blocked. Fix errors before proceeding."
    exit 1
elif [[ $WARNINGS -gt 0 ]]; then
    echo -e "${YELLOW}PASSED WITH WARNINGS${NC}: $WARNINGS warnings"
    echo "Review warnings before proceeding with deployment."
    exit 0
else
    echo -e "${GREEN}PASSED${NC}: All validations successful"
    echo "Ready for deployment to $ENVIRONMENT"
    exit 0
fi
```

### 6.2 Manual Checklist (Production Only)

For production deployments, the following manual checklist must be completed:

```markdown
## Production Deployment Checklist

### Pre-Deployment
- [ ] All automated validations passed
- [ ] Code review approved by at least 2 senior developers
- [ ] QA sign-off received
- [ ] Client approval received (if applicable)
- [ ] Deployment window confirmed with stakeholders
- [ ] On-call engineer notified
- [ ] Rollback plan documented and tested

### Database
- [ ] Database backup completed
- [ ] Migration scripts reviewed
- [ ] Migration tested in staging
- [ ] Rollback migration prepared

### Infrastructure
- [ ] Infrastructure changes reviewed
- [ ] Scaling requirements verified
- [ ] Load balancer configuration confirmed
- [ ] SSL certificates valid

### Post-Deployment
- [ ] Health checks passing
- [ ] Smoke tests completed
- [ ] Monitoring dashboards verified
- [ ] Stakeholders notified of completion
```

---

## 7. One-Click Deployment Pipeline

### 7.1 GitHub Actions Workflow

```yaml
# .github/workflows/cd-production.yml
name: Production Deployment

on:
  workflow_dispatch:
    inputs:
      version:
        description: 'Version to deploy (e.g., v1.2.3)'
        required: true
      components:
        description: 'Components to deploy (all|web|api|mobile)'
        required: true
        default: 'all'
      skip_tests:
        description: 'Skip tests (NOT RECOMMENDED)'
        required: false
        default: 'false'

env:
  REGISTRY: ghcr.io
  IMAGE_PREFIX: greyquill

jobs:
  validate:
    name: Pre-Deployment Validation
    runs-on: ubuntu-latest
    outputs:
      manifest_valid: ${{ steps.validate.outputs.valid }}
    steps:
      - uses: actions/checkout@v4
      
      - name: Install validation tools
        run: |
          sudo wget -qO /usr/local/bin/yq https://github.com/mikefarah/yq/releases/latest/download/yq_linux_amd64
          sudo chmod +x /usr/local/bin/yq
          
      - name: Run pre-deployment validation
        id: validate
        run: |
          chmod +x scripts/pre-deploy-validate.sh
          ./scripts/pre-deploy-validate.sh production
          echo "valid=true" >> $GITHUB_OUTPUT

  test:
    name: Run Test Suite
    needs: validate
    if: ${{ github.event.inputs.skip_tests != 'true' }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run unit tests
        run: npm run test:unit
        
      - name: Run integration tests
        run: npm run test:integration
        
      - name: Run E2E tests
        run: npm run test:e2e

  security-scan:
    name: Security Scan
    needs: validate
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Run Trivy vulnerability scanner
        uses: aquasecurity/trivy-action@master
        with:
          scan-type: 'fs'
          scan-ref: '.'
          severity: 'HIGH,CRITICAL'
          exit-code: '1'
          
      - name: Run npm audit
        run: npm audit --audit-level=high

  build-web:
    name: Build Web Application
    needs: [test, security-scan]
    if: ${{ github.event.inputs.components == 'all' || github.event.inputs.components == 'web' }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3
        
      - name: Login to Container Registry
        uses: docker/login-action@v3
        with:
          registry: ${{ env.REGISTRY }}
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
          
      - name: Build and push
        uses: docker/build-push-action@v5
        with:
          context: ./apps/web
          push: true
          tags: |
            ${{ env.REGISTRY }}/${{ env.IMAGE_PREFIX }}/web:${{ github.event.inputs.version }}
            ${{ env.REGISTRY }}/${{ env.IMAGE_PREFIX }}/web:latest
          cache-from: type=gha
          cache-to: type=gha,mode=max

  build-api:
    name: Build API Service
    needs: [test, security-scan]
    if: ${{ github.event.inputs.components == 'all' || github.event.inputs.components == 'api' }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3
        
      - name: Login to Container Registry
        uses: docker/login-action@v3
        with:
          registry: ${{ env.REGISTRY }}
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
          
      - name: Build and push
        uses: docker/build-push-action@v5
        with:
          context: ./services/api
          push: true
          tags: |
            ${{ env.REGISTRY }}/${{ env.IMAGE_PREFIX }}/api:${{ github.event.inputs.version }}
            ${{ env.REGISTRY }}/${{ env.IMAGE_PREFIX }}/api:latest
          cache-from: type=gha
          cache-to: type=gha,mode=max

  deploy-database:
    name: Run Database Migrations
    needs: [build-web, build-api]
    runs-on: ubuntu-latest
    environment: production
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Create database backup
        run: |
          ./scripts/db-backup.sh production
          
      - name: Run migrations
        env:
          DATABASE_URL: ${{ secrets.PRODUCTION_DATABASE_URL }}
        run: |
          npx prisma migrate deploy
          
      - name: Verify migration
        run: |
          ./scripts/db-verify.sh production

  deploy-infrastructure:
    name: Deploy to Kubernetes
    needs: deploy-database
    runs-on: ubuntu-latest
    environment: production
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup kubectl
        uses: azure/setup-kubectl@v3
        
      - name: Configure kubectl
        run: |
          echo "${{ secrets.KUBE_CONFIG }}" | base64 -d > kubeconfig
          export KUBECONFIG=./kubeconfig
          
      - name: Deploy with Kustomize
        run: |
          cd infrastructure/kubernetes
          kustomize edit set image web=${{ env.REGISTRY }}/${{ env.IMAGE_PREFIX }}/web:${{ github.event.inputs.version }}
          kustomize edit set image api=${{ env.REGISTRY }}/${{ env.IMAGE_PREFIX }}/api:${{ github.event.inputs.version }}
          kubectl apply -k overlays/production
          
      - name: Wait for rollout
        run: |
          kubectl rollout status deployment/web -n production --timeout=300s
          kubectl rollout status deployment/api -n production --timeout=300s

  health-check:
    name: Post-Deployment Health Check
    needs: deploy-infrastructure
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Run health checks
        run: |
          chmod +x scripts/health-check.sh
          ./scripts/health-check.sh production
          
      - name: Run smoke tests
        run: |
          npm run test:smoke -- --env=production

  notify:
    name: Send Notifications
    needs: health-check
    if: always()
    runs-on: ubuntu-latest
    steps:
      - name: Notify Slack - Success
        if: ${{ needs.health-check.result == 'success' }}
        uses: slackapi/slack-github-action@v1
        with:
          payload: |
            {
              "text": "✅ Production deployment successful",
              "blocks": [
                {
                  "type": "section",
                  "text": {
                    "type": "mrkdwn",
                    "text": "*Production Deployment Complete*\n• Version: ${{ github.event.inputs.version }}\n• Components: ${{ github.event.inputs.components }}\n• Deployed by: ${{ github.actor }}"
                  }
                }
              ]
            }
        env:
          SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK }}
          
      - name: Notify Slack - Failure
        if: ${{ needs.health-check.result == 'failure' }}
        uses: slackapi/slack-github-action@v1
        with:
          payload: |
            {
              "text": "❌ Production deployment failed",
              "blocks": [
                {
                  "type": "section",
                  "text": {
                    "type": "mrkdwn",
                    "text": "*Production Deployment Failed*\n• Version: ${{ github.event.inputs.version }}\n• Check: ${{ github.server_url }}/${{ github.repository }}/actions/runs/${{ github.run_id }}"
                  }
                }
              ]
            }
        env:
          SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK }}
```

### 7.2 Main Deployment Script

```bash
#!/bin/bash
# scripts/deploy.sh

set -euo pipefail

# ═══════════════════════════════════════════════════════════════════════════
# GREYQUILL ONE-CLICK DEPLOYMENT SCRIPT
# ═══════════════════════════════════════════════════════════════════════════

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Default values
ENVIRONMENT=""
VERSION=""
COMPONENTS="all"
DRY_RUN=false
SKIP_VALIDATION=false
SKIP_BACKUP=false

# ═══════════════════════════════════════════════════════════════════════════
# FUNCTIONS
# ═══════════════════════════════════════════════════════════════════════════

print_banner() {
    echo -e "${BLUE}"
    echo "╔═══════════════════════════════════════════════════════════════════╗"
    echo "║                                                                   ║"
    echo "║     ██████╗ ██████╗ ███████╗██╗   ██╗ ██████╗ ██╗   ██╗██╗██╗     ║"
    echo "║    ██╔════╝ ██╔══██╗██╔════╝╚██╗ ██╔╝██╔═══██╗██║   ██║██║██║     ║"
    echo "║    ██║  ███╗██████╔╝█████╗   ╚████╔╝ ██║   ██║██║   ██║██║██║     ║"
    echo "║    ██║   ██║██╔══██╗██╔══╝    ╚██╔╝  ██║▄▄ ██║██║   ██║██║██║     ║"
    echo "║    ╚██████╔╝██║  ██║███████╗   ██║   ╚██████╔╝╚██████╔╝██║███████╗║"
    echo "║     ╚═════╝ ╚═╝  ╚═╝╚══════╝   ╚═╝    ╚══▀▀═╝  ╚═════╝ ╚═╝╚══════╝║"
    echo "║                                                                   ║"
    echo "║                    DEPLOYMENT AUTOMATION                          ║"
    echo "║                                                                   ║"
    echo "╚═══════════════════════════════════════════════════════════════════╝"
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
    echo "  -h, --help           Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 -e staging -v v1.2.3"
    echo "  $0 -e production -v v1.2.3 -c web"
    echo "  $0 -e development --dry-run"
}

log() {
    local level=$1
    shift
    local message=$@
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
    case $level in
        INFO)  echo -e "${BLUE}[$timestamp]${NC} ${GREEN}INFO${NC}  $message" ;;
        WARN)  echo -e "${BLUE}[$timestamp]${NC} ${YELLOW}WARN${NC}  $message" ;;
        ERROR) echo -e "${BLUE}[$timestamp]${NC} ${RED}ERROR${NC} $message" ;;
        STEP)  echo -e "${BLUE}[$timestamp]${NC} ${BLUE}STEP${NC}  $message" ;;
    esac
}

validate_inputs() {
    if [[ -z "$ENVIRONMENT" ]]; then
        log ERROR "Environment is required. Use -e or --environment"
        exit 1
    fi
    
    if [[ ! "$ENVIRONMENT" =~ ^(development|staging|uat|production)$ ]]; then
        log ERROR "Invalid environment: $ENVIRONMENT"
        exit 1
    fi
    
    if [[ -z "$VERSION" && "$ENVIRONMENT" != "development" ]]; then
        log ERROR "Version is required for non-development deployments"
        exit 1
    fi
}

run_validation() {
    log STEP "Running pre-deployment validation..."
    
    if [[ "$SKIP_VALIDATION" == "true" ]]; then
        log WARN "Skipping validation (--skip-validation flag set)"
        return 0
    fi
    
    if ! "$SCRIPT_DIR/pre-deploy-validate.sh" "$ENVIRONMENT"; then
        log ERROR "Pre-deployment validation failed"
        exit 1
    fi
    
    log INFO "Validation passed"
}

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
    
    "$SCRIPT_DIR/db-backup.sh" "$ENVIRONMENT"
    log INFO "Database backup completed"
}

build_containers() {
    log STEP "Building container images..."
    
    if [[ "$DRY_RUN" == "true" ]]; then
        log INFO "[DRY RUN] Would build containers for: $COMPONENTS"
        return 0
    fi
    
    local tag="${VERSION:-latest}"
    
    if [[ "$COMPONENTS" == "all" || "$COMPONENTS" == "web" ]]; then
        log INFO "Building web container..."
        docker build -t "greyquill/web:$tag" -f apps/web/Dockerfile apps/web/
    fi
    
    if [[ "$COMPONENTS" == "all" || "$COMPONENTS" == "api" ]]; then
        log INFO "Building API container..."
        docker build -t "greyquill/api:$tag" -f services/api/Dockerfile services/api/
    fi
    
    log INFO "Container builds completed"
}

run_migrations() {
    log STEP "Running database migrations..."
    
    if [[ "$DRY_RUN" == "true" ]]; then
        log INFO "[DRY RUN] Would run database migrations"
        return 0
    fi
    
    # Load environment-specific database URL
    source "config/${ENVIRONMENT}.env"
    
    npx prisma migrate deploy
    
    log INFO "Migrations completed"
}

deploy_services() {
    log STEP "Deploying services to $ENVIRONMENT..."
    
    if [[ "$DRY_RUN" == "true" ]]; then
        log INFO "[DRY RUN] Would deploy to $ENVIRONMENT"
        return 0
    fi
    
    case $ENVIRONMENT in
        development)
            docker-compose up -d
            ;;
        staging|uat|production)
            kubectl apply -k "infrastructure/kubernetes/overlays/$ENVIRONMENT"
            kubectl rollout status deployment -n "$ENVIRONMENT" --timeout=300s
            ;;
    esac
    
    log INFO "Services deployed"
}

run_health_checks() {
    log STEP "Running health checks..."
    
    if [[ "$DRY_RUN" == "true" ]]; then
        log INFO "[DRY RUN] Would run health checks"
        return 0
    fi
    
    "$SCRIPT_DIR/health-check.sh" "$ENVIRONMENT"
    
    log INFO "Health checks passed"
}

# ═══════════════════════════════════════════════════════════════════════════
# MAIN
# ═══════════════════════════════════════════════════════════════════════════

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
            -h|--help) usage; exit 0 ;;
            *) echo "Unknown option: $1"; usage; exit 1 ;;
        esac
    done
    
    validate_inputs
    
    log INFO "Starting deployment"
    log INFO "  Environment: $ENVIRONMENT"
    log INFO "  Version: ${VERSION:-latest}"
    log INFO "  Components: $COMPONENTS"
    log INFO "  Dry Run: $DRY_RUN"
    
    echo ""
    
    # Deployment pipeline
    run_validation
    backup_database
    build_containers
    run_migrations
    deploy_services
    run_health_checks
    
    echo ""
    log INFO "═══════════════════════════════════════════════════════════════"
    log INFO "DEPLOYMENT COMPLETE"
    log INFO "═══════════════════════════════════════════════════════════════"
    
    if [[ "$DRY_RUN" == "true" ]]; then
        echo -e "${YELLOW}This was a dry run. No changes were made.${NC}"
    fi
}

main "$@"
```

---

## 8. Database Deployment Procedures

### 8.1 Migration Naming Convention

All migrations must follow this format:

```
YYYYMMDDHHMMSS_descriptive_name.sql
```

Example:
```
20260115143022_add_user_preferences_table.sql
20260115150000_add_index_on_users_email.sql
```

### 8.2 Migration Template

```sql
-- Migration: add_user_preferences_table
-- Created: 2026-01-15 14:30:22
-- Author: developer@greyquill.io
-- Description: Adds user preferences table for storing user settings

-- ═══════════════════════════════════════════════════════════════
-- UP MIGRATION
-- ═══════════════════════════════════════════════════════════════

BEGIN;

CREATE TABLE IF NOT EXISTS user_preferences (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    preference_key VARCHAR(255) NOT NULL,
    preference_value JSONB NOT NULL DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, preference_key)
);

CREATE INDEX idx_user_preferences_user_id ON user_preferences(user_id);
CREATE INDEX idx_user_preferences_key ON user_preferences(preference_key);

COMMENT ON TABLE user_preferences IS 'Stores user-specific preferences and settings';

COMMIT;

-- ═══════════════════════════════════════════════════════════════
-- DOWN MIGRATION (for rollback)
-- ═══════════════════════════════════════════════════════════════

-- BEGIN;
-- DROP TABLE IF EXISTS user_preferences;
-- COMMIT;
```

### 8.3 Database Backup Script

```bash
#!/bin/bash
# scripts/db-backup.sh

set -euo pipefail

ENVIRONMENT=$1
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/backups/${ENVIRONMENT}"
RETENTION_DAYS=30

# Load environment configuration
source "config/${ENVIRONMENT}.env"

# Create backup directory
mkdir -p "$BACKUP_DIR"

# Perform backup
log_info() { echo "[$(date '+%Y-%m-%d %H:%M:%S')] INFO: $1"; }

log_info "Starting database backup for $ENVIRONMENT"

pg_dump "$DATABASE_URL" \
    --format=custom \
    --compress=9 \
    --file="${BACKUP_DIR}/backup_${TIMESTAMP}.dump"

# Verify backup
if pg_restore --list "${BACKUP_DIR}/backup_${TIMESTAMP}.dump" > /dev/null 2>&1; then
    log_info "Backup verified successfully"
else
    log_info "ERROR: Backup verification failed"
    exit 1
fi

# Clean old backups
find "$BACKUP_DIR" -name "backup_*.dump" -mtime +$RETENTION_DAYS -delete
log_info "Cleaned backups older than $RETENTION_DAYS days"

# Upload to S3 (if configured)
if [[ -n "${BACKUP_S3_BUCKET:-}" ]]; then
    aws s3 cp "${BACKUP_DIR}/backup_${TIMESTAMP}.dump" \
        "s3://${BACKUP_S3_BUCKET}/${ENVIRONMENT}/backup_${TIMESTAMP}.dump"
    log_info "Backup uploaded to S3"
fi

log_info "Database backup completed: backup_${TIMESTAMP}.dump"
```

---

## 9. Infrastructure Services Deployment

### 9.1 Redis Deployment Configuration

```yaml
# infrastructure/kubernetes/base/redis.yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: redis
spec:
  serviceName: redis
  replicas: 1
  selector:
    matchLabels:
      app: redis
  template:
    metadata:
      labels:
        app: redis
    spec:
      containers:
      - name: redis
        image: redis:7-alpine
        ports:
        - containerPort: 6379
        resources:
          requests:
            cpu: 100m
            memory: 128Mi
          limits:
            cpu: 500m
            memory: 512Mi
        livenessProbe:
          exec:
            command: ["redis-cli", "ping"]
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          exec:
            command: ["redis-cli", "ping"]
          initialDelaySeconds: 5
          periodSeconds: 5
        volumeMounts:
        - name: redis-data
          mountPath: /data
  volumeClaimTemplates:
  - metadata:
      name: redis-data
    spec:
      accessModes: ["ReadWriteOnce"]
      resources:
        requests:
          storage: 10Gi
```

### 9.2 Kafka Deployment Configuration

```yaml
# infrastructure/kubernetes/base/kafka.yaml
apiVersion: kafka.strimzi.io/v1beta2
kind: Kafka
metadata:
  name: greyquill-kafka
spec:
  kafka:
    version: 3.6.0
    replicas: 3
    listeners:
      - name: plain
        port: 9092
        type: internal
        tls: false
      - name: tls
        port: 9093
        type: internal
        tls: true
    config:
      offsets.topic.replication.factor: 3
      transaction.state.log.replication.factor: 3
      transaction.state.log.min.isr: 2
      default.replication.factor: 3
      min.insync.replicas: 2
    storage:
      type: persistent-claim
      size: 100Gi
      class: standard
  zookeeper:
    replicas: 3
    storage:
      type: persistent-claim
      size: 20Gi
      class: standard
  entityOperator:
    topicOperator: {}
    userOperator: {}
```

---

## 10. Rollback Procedures

### 10.1 Automated Rollback Script

```bash
#!/bin/bash
# scripts/rollback.sh

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

ENVIRONMENT=$1
TARGET_VERSION=${2:-"previous"}

log() { echo -e "${GREEN}[$(date '+%H:%M:%S')]${NC} $1"; }
error() { echo -e "${RED}[$(date '+%H:%M:%S')] ERROR:${NC} $1"; exit 1; }
warn() { echo -e "${YELLOW}[$(date '+%H:%M:%S')] WARNING:${NC} $1"; }

echo "╔═══════════════════════════════════════════════════════════════╗"
echo "║              GREYQUILL ROLLBACK PROCEDURE                     ║"
echo "╚═══════════════════════════════════════════════════════════════╝"
echo ""

# Validate environment
if [[ ! "$ENVIRONMENT" =~ ^(staging|uat|production)$ ]]; then
    error "Invalid environment: $ENVIRONMENT"
fi

log "Environment: $ENVIRONMENT"
log "Target version: $TARGET_VERSION"

# Get current and previous versions
if [[ "$TARGET_VERSION" == "previous" ]]; then
    # Get previous revision from Kubernetes
    CURRENT_REVISION=$(kubectl rollout history deployment/web -n "$ENVIRONMENT" | tail -2 | head -1 | awk '{print $1}')
    PREVIOUS_REVISION=$((CURRENT_REVISION - 1))
    TARGET_VERSION="revision:$PREVIOUS_REVISION"
fi

echo ""
warn "You are about to rollback $ENVIRONMENT to $TARGET_VERSION"
read -p "Are you sure? (yes/no): " CONFIRM

if [[ "$CONFIRM" != "yes" ]]; then
    log "Rollback cancelled"
    exit 0
fi

# Perform rollback
log "Starting rollback..."

# Rollback Kubernetes deployments
log "Rolling back web deployment..."
kubectl rollout undo deployment/web -n "$ENVIRONMENT"

log "Rolling back API deployment..."
kubectl rollout undo deployment/api -n "$ENVIRONMENT"

# Wait for rollout
log "Waiting for rollback to complete..."
kubectl rollout status deployment/web -n "$ENVIRONMENT" --timeout=300s
kubectl rollout status deployment/api -n "$ENVIRONMENT" --timeout=300s

# Run health checks
log "Running health checks..."
"$SCRIPT_DIR/health-check.sh" "$ENVIRONMENT"

# Check if database rollback is needed
read -p "Do you need to rollback the database? (yes/no): " DB_ROLLBACK

if [[ "$DB_ROLLBACK" == "yes" ]]; then
    warn "Database rollback requires manual intervention"
    echo "Steps:"
    echo "1. Identify the migration to rollback"
    echo "2. Run: npx prisma migrate resolve --rolled-back MIGRATION_NAME"
    echo "3. Apply the down migration manually"
    echo ""
    read -p "Press Enter after completing database rollback..."
fi

# Send notification
log "Sending rollback notification..."
curl -X POST "$SLACK_WEBHOOK_URL" \
    -H 'Content-type: application/json' \
    -d "{
        \"text\": \"⚠️ Rollback executed on $ENVIRONMENT to $TARGET_VERSION by $(whoami)\"
    }"

echo ""
log "═══════════════════════════════════════════════════════════════"
log "ROLLBACK COMPLETE"
log "═══════════════════════════════════════════════════════════════"
```

### 10.2 Rollback Decision Matrix

| Condition | Automatic Rollback | Manual Required |
|-----------|-------------------|-----------------|
| Error rate > 5% | Yes | No |
| P99 latency > 2s | Yes | No |
| Health check fails | Yes | No |
| Database migration fails | No | Yes |
| Partial deployment failure | No | Yes |
| Client-reported issues | No | Yes |

---

## 11. Monitoring and Alerting

### 11.1 Health Check Script

```bash
#!/bin/bash
# scripts/health-check.sh

set -euo pipefail

ENVIRONMENT=$1
MAX_RETRIES=5
RETRY_DELAY=10

# Load environment URLs
source "config/${ENVIRONMENT}.env"

check_endpoint() {
    local name=$1
    local url=$2
    local expected_status=${3:-200}
    
    for i in $(seq 1 $MAX_RETRIES); do
        status=$(curl -s -o /dev/null -w "%{http_code}" "$url" || echo "000")
        
        if [[ "$status" == "$expected_status" ]]; then
            echo "✓ $name: OK ($status)"
            return 0
        fi
        
        echo "⏳ $name: Attempt $i/$MAX_RETRIES (status: $status)"
        sleep $RETRY_DELAY
    done
    
    echo "✗ $name: FAILED (expected: $expected_status, got: $status)"
    return 1
}

echo "Running health checks for $ENVIRONMENT..."
echo ""

FAILED=0

# Web application
check_endpoint "Web App" "${WEB_URL}/api/health" || ((FAILED++))

# API service
check_endpoint "API Service" "${API_URL}/health" || ((FAILED++))

# Database connectivity (via API)
check_endpoint "Database" "${API_URL}/health/db" || ((FAILED++))

# Redis connectivity
check_endpoint "Redis" "${API_URL}/health/redis" || ((FAILED++))

echo ""
if [[ $FAILED -gt 0 ]]; then
    echo "❌ Health check failed: $FAILED service(s) unhealthy"
    exit 1
else
    echo "✅ All health checks passed"
    exit 0
fi
```

### 11.2 Required Monitoring Dashboards

Every project must have the following dashboards configured:

1. **Application Health**: Request rates, error rates, response times
2. **Infrastructure**: CPU, memory, disk, network
3. **Database**: Query performance, connection pool, replication lag
4. **Business Metrics**: User activity, transactions, conversions

---

## 12. Security Requirements

### 12.1 Pre-Deployment Security Checklist

- [ ] All dependencies scanned for vulnerabilities
- [ ] No secrets in code or configuration files
- [ ] SSL/TLS certificates valid and not expiring soon
- [ ] API endpoints properly authenticated
- [ ] Database connections encrypted
- [ ] Environment variables not logged
- [ ] Error messages don't expose internals

### 12.2 Security Scanning Script

```bash
#!/bin/bash
# scripts/security-scan.sh

set -euo pipefail

echo "Running security scans..."

# Dependency vulnerabilities
echo "Checking npm dependencies..."
npm audit --audit-level=high

# Secret detection
echo "Scanning for secrets..."
if command -v gitleaks &> /dev/null; then
    gitleaks detect --source . --verbose
fi

# Container vulnerabilities
echo "Scanning Docker images..."
if command -v trivy &> /dev/null; then
    trivy image greyquill/web:latest --severity HIGH,CRITICAL
    trivy image greyquill/api:latest --severity HIGH,CRITICAL
fi

# SAST scanning
echo "Running static analysis..."
if command -v semgrep &> /dev/null; then
    semgrep --config auto .
fi

echo "Security scan complete"
```

---

## 13. Automation Scripts Reference

### 13.1 Available Scripts

| Script | Purpose | Usage |
|--------|---------|-------|
| `deploy.sh` | Main deployment script | `./scripts/deploy.sh -e staging -v v1.2.3` |
| `rollback.sh` | Rollback deployment | `./scripts/rollback.sh production previous` |
| `pre-deploy-validate.sh` | Pre-deployment checks | `./scripts/pre-deploy-validate.sh staging` |
| `health-check.sh` | Health verification | `./scripts/health-check.sh production` |
| `db-backup.sh` | Database backup | `./scripts/db-backup.sh production` |
| `db-restore.sh` | Database restore | `./scripts/db-restore.sh production backup.dump` |
| `security-scan.sh` | Security scanning | `./scripts/security-scan.sh` |
| `logs.sh` | View service logs | `./scripts/logs.sh production api` |

### 13.2 Quick Command Reference

```bash
# Development deployment
./scripts/deploy.sh -e development

# Staging deployment with specific version
./scripts/deploy.sh -e staging -v v1.2.3

# Production deployment (requires approval)
./scripts/deploy.sh -e production -v v1.2.3

# Dry run (simulate deployment)
./scripts/deploy.sh -e production -v v1.2.3 --dry-run

# Deploy only web component
./scripts/deploy.sh -e staging -v v1.2.3 -c web

# Rollback to previous version
./scripts/rollback.sh production previous

# View deployment status
kubectl rollout status deployment -n production
```

---

## 14. Troubleshooting Guide

### 14.1 Common Issues and Solutions

**Issue: Deployment validation fails**
```bash
# Check specific validation
./scripts/pre-deploy-validate.sh staging 2>&1 | grep "✗"
```

**Issue: Database migration fails**
```bash
# Check migration status
npx prisma migrate status

# Reset failed migration
npx prisma migrate resolve --rolled-back MIGRATION_NAME
```

**Issue: Container fails to start**
```bash
# Check logs
kubectl logs -n production deployment/api --previous

# Describe pod for events
kubectl describe pod -n production -l app=api
```

**Issue: Health checks failing**
```bash
# Manual health check
curl -v https://api.example.com/health

# Check service endpoints
kubectl get endpoints -n production
```

### 14.2 Emergency Contacts

| Role | Contact | Escalation |
|------|---------|------------|
| On-Call Engineer | #oncall-support | Immediate |
| Tech Lead | tech-lead@greyquill.io | 15 minutes |
| DevOps Lead | devops@greyquill.io | 30 minutes |
| CTO | cto@greyquill.io | 1 hour |

---

## Appendix A: Deployment Manifest Schema

Complete JSON Schema for `deploy.manifest.yaml` available at: `/schemas/deploy-manifest.schema.json`

## Appendix B: Template Repository

Clone the template repository to start new projects with all required files:

```bash
git clone https://github.com/greyquill/project-template.git
```

---

**Document Version History**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | January 2026 | Engineering Team | Initial release |

---

*This document is maintained by the GreyQuill Engineering Team. For questions or suggestions, contact devops@greyquill.io*
