# BrainTorch Bio — Client Demo Site

A five-page React single-page website updated with BrainTorch Bio branding, the trademark logo asset, workforce training content, STEM education and workforce development services, scientific and research consulting services, BrainTorch Launch program details, partnership messaging, contact details, and contact form fields.

## Business information included

- Business name: BrainTorch Bio
- Tagline: Advancing Science. Empowering Minds.
- Email: braintorchbio@gmail.com
- Phone: (972) 914-8009
- Location: Dallas/Ft Worth -based workforce training and consulting company
- Core positioning: Workforce Training | STEM Education | Clinical Research Consulting
- Homepage headline: Building the Clinical Research Workforce Pipeline

## Run locally

```bash
npm install
npm start
```

## Pages included

- Home
- About
- Services
- BrainTorch Launch
- Contact

## Placeholder links to replace

The site still keeps placeholder links where the final live form URLs are not provided. Replace these when the live forms are ready:

- Application form: `https://YOUR-APPLICATION-FORM-LINK-HERE`
- Partnership inquiry: `https://YOUR-PARTNERSHIP-INQUIRY-LINK-HERE`
- Consultation booking: `https://YOUR-BOOKING-LINK-HERE`

## Deploy to GitHub Pages

This repo is preconfigured for GitHub Pages.

### 1. Install dependencies

```bash
npm install
```

### 2. Build locally

```bash
npm run build
```

### 3. Commit source changes

```bash
git add .
git commit -m "Update BrainTorch Bio site content"
git push origin main
```

### 4. Deploy to the gh-pages branch

```bash
npm run deploy
```

### 5. Confirm GitHub Pages settings

On GitHub:

- open the repository
- open **Settings**
- open **Pages**
- under **Build and deployment**, choose **Deploy from a branch**
- select branch **gh-pages** and folder **/(root)**
- save

Your demo URL will be:

```text
https://YOUR_USERNAME.github.io/YOUR_REPO
```

## Why the routes work on GitHub Pages

GitHub Pages is a static host. This project uses `HashRouter` in production so the five-page navigation works reliably on GitHub Pages without 404 refresh issues.
