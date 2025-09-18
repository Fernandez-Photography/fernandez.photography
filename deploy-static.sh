#!/bin/bash

# Static Website Deployment Script
# This script helps deploy to various static hosting platforms

echo "🚀 Static Website Deployment Helper"
echo "=================================="

# Build the project
echo "📦 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🌐 Static hosting options:"
    echo ""
    echo "1. GitHub Pages (Already configured):"
    echo "   - Push to main branch"
    echo "   - Auto-deploys via GitHub Actions"
    echo "   - URL: https://fernandez-photography.github.io/fernandez.photography/"
    echo ""
    echo "2. Netlify (Drag & Drop):"
    echo "   - Go to https://netlify.com"
    echo "   - Drag the 'dist' folder to deploy"
    echo "   - Or connect your GitHub repo for auto-deploy"
    echo ""
    echo "3. Vercel:"
    echo "   - Install Vercel CLI: npm i -g vercel"
    echo "   - Run: vercel --prod"
    echo ""
    echo "4. Surge.sh:"
    echo "   - Install: npm i -g surge"
    echo "   - Run: surge dist/ your-domain.surge.sh"
    echo ""
    echo "5. AWS S3:"
    echo "   - Upload dist/ contents to S3 bucket"
    echo "   - Enable static website hosting"
    echo ""
    echo "📁 Built files are in the 'dist' folder"
    echo "🔧 Configuration files created:"
    echo "   - netlify.toml (for Netlify)"
    echo "   - public/_headers (for caching)"
    echo "   - public/_redirects (for SPA routing)"
else
    echo "❌ Build failed!"
    exit 1
fi
