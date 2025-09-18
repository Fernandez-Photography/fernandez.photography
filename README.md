# Fernandez Photography Website

A modern, responsive photography portfolio website built with React, TypeScript, and Vite.

## Features

- Responsive design with Tailwind CSS
- Modern React components with TypeScript
- Optimized build process with Vite
- Automated deployment with GitHub Actions
- Custom color scheme and typography

## Development

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Local Development

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd fernandez-photography
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (if needed):
   Create a `.env.local` file and add:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

### Building for Production

1. Build the project:
   ```bash
   npm run build
   ```

2. Preview the production build:
   ```bash
   npm run preview
   ```

## Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment

The website will automatically deploy when you push to the `main` branch:

1. Push your changes to the `main` branch
2. GitHub Actions will automatically:
   - Set up the Node.js environment
   - Install dependencies
   - Build the project
   - Deploy to GitHub Pages

### Manual Deployment

If you need to deploy manually:

1. Build the project: `npm run build`
2. The built files will be in the `dist/` directory
3. Upload the contents of `dist/` to your web server

## GitHub Actions Workflows

- **CI Workflow** (`.github/workflows/ci.yml`): Runs on pull requests and pushes to build and test the project
- **Deploy Workflow** (`.github/workflows/deploy.yml`): Deploys to GitHub Pages when pushing to main branch

## Project Structure

```
fernandez-photography/
├── components/          # React components
├── dist/               # Built files (generated)
├── .github/workflows/  # GitHub Actions workflows
├── App.tsx            # Main app component
├── index.html         # HTML template
├── index.tsx          # React entry point
├── vite.config.ts     # Vite configuration
└── package.json       # Dependencies and scripts
```

## Technologies Used

- React 19
- TypeScript
- Vite
- Tailwind CSS
- GitHub Actions
- GitHub Pages
