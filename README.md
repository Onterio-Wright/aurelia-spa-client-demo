# Aurelia Scientific Advisory Group — Client Demo Site

A 5-page React website for a premium scientific funding and compliance advisory firm.

## Run locally

```bash
npm install
npm start
```

## Deploy to GitHub Pages

This repo is preconfigured for GitHub Pages.

### 1. Create a new GitHub repository
Create a repository in your GitHub account, for example:
- `aurelia-scientific-demo`

### 2. Initialize git and push
From the project folder:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 3. Install dependencies
```bash
npm install
```

### 4. Deploy
```bash
npm run deploy
```

### 5. Turn on GitHub Pages
On GitHub:
- open **Settings**
- open **Pages**
- under **Build and deployment** choose **Deploy from a branch**
- select branch **gh-pages** and folder **/(root)**
- save

Your demo URL will be:

```text
https://YOUR_USERNAME.github.io/YOUR_REPO
```

## Why the routes work on GitHub Pages
GitHub Pages is a static host. This project uses `HashRouter` in production so the five-page navigation works reliably on GitHub Pages without 404 refresh issues.

## Pages included
- Home
- About
- Services
- Impact
- Contact
