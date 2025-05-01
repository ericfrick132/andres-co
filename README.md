# E-Commerce Platform - Central America & Caribbean

E-commerce platform connecting suppliers, dropshippers, and end buyers with logistics integration for Central America and Caribbean markets.

## Project Overview

This platform facilitates commerce between suppliers, dropshippers, and end buyers with:
- Supplier management system
- Product inventory and catalog
- Dropshipping tools
- Integrated logistics
- Unified marketplace

## Tech Stack

- **Backend**: .NET Core 8 with SQL Server
- **Frontend**: React 19 with Vite
- **Infrastructure**: AWS (CloudFormation)
- **Authentication**: JWT with Google SSO

## Development Setup

### Prerequisites
- Docker and Docker Compose
- .NET SDK 8.0+
- Node.js 18+
- AWS CLI (for deployments)

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/ericfrick132/andres-co.git
   cd andres-co
   ```

2. Start with Docker Compose:
   ```bash
   docker-compose up -d
   ```

3. The application will be available at:
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

### Environment Configuration

For local development, the Google SSO credentials are configured in:
- Backend: `backend/appsettings.Development.json`
- Frontend: `frontend/.env.local`

## Deployment

### Using GitHub Actions

The project includes GitHub Actions workflows for CI/CD:

1. Go to GitHub repository settings and add the following secrets:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - `AWS_ACCOUNT_ID`
   - `DB_USERNAME`
   - `DB_PASSWORD`
   - `GOOGLE_CLIENT_ID`
   - `GOOGLE_CLIENT_SECRET`

2. Deploy by:
   - Pushing to main branch (automatic deployment)
   - Running the workflow manually with custom parameters

### Manual Deployment

To deploy manually using CloudFormation:

```bash
aws cloudformation deploy \
  --template-file infra/cloudformation/main.yaml \
  --stack-name dev-client-ecommerce-stack \
  --parameter-overrides \
    Environment=dev \
    DatabaseUsername=admin \
    DatabasePassword=YourSecurePassword \
    GoogleClientId=YourGoogleClientId \
    GoogleClientSecret=YourGoogleClientSecret \
  --capabilities CAPABILITY_IAM
```

## Client Management

Resources are tagged with `Client` and `Environment` tags for easy separation of different clients in a single AWS account.

## Project Structure

- `backend/`: .NET Core API
- `frontend/`: React application
- `infra/`: Infrastructure as Code
  - `cloudformation/`: AWS CloudFormation templates
  - `scripts/`: Deployment scripts
- `.github/workflows/`: CI/CD pipelines 