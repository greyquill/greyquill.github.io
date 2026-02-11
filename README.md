# Greyquill Software Website

This repository contains the source code for the Greyquill Software website, deployed to GitHub Pages.

## Project Structure

- `websire_react/` - React application source code
- `websire_react/build/` - Build output (git-ignored)
- `.github/workflows/` - GitHub Actions CI/CD

## Development

### Local Development

```bash
cd websire_react
npm install
npm start
```

The app will run at http://localhost:3000

### Building Locally

```bash
cd websire_react
npm run build
```

Build output will be in `websire_react/build/`

## Deployment

**Automatic deployment is now handled by GitHub Actions!**

### How it works:
1. Make changes to source code in `websire_react/`
2. Commit and push to the `main` branch
3. GitHub Actions automatically:
   - Installs dependencies
   - Builds the React app
   - Deploys to GitHub Pages

### Manual Deployment (if needed)
You can also trigger deployment manually from the GitHub Actions tab.

## Custom Domain

The site is deployed to: **www.greyquill.io** (configured via CNAME)

## Technology Stack

- React 18
- React Router
- Tailwind CSS
- Framer Motion
- GitHub Pages
