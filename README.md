# BrainTorch Bio — Client Demo Site

A five-page React single-page website updated with BrainTorch Bio branding, logo assets, clinical research training content, STEM workforce development services, mentorship/career development offers, BrainTorch Launch program pricing, contact details, and application form fields.

## Business information included

- Business name: BrainTorch Bio
- Tagline: Advancing Science. Empowering Minds.
- Email: braintorchbio@gmail.com
- Phone: 901-626-8178
- Core positioning: Clinical Research Training | STEM Workforce Development | Scientific Consulting
- Founder: Keisha Smith Wade — Neuroscientist | Clinical Researcher | Educator

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

The site content includes placeholders from the starter document. Replace these when the live forms and payment pages are ready:

- Application form: `https://YOUR-APPLICATION-FORM-LINK-HERE`
- Consultation booking: `https://YOUR-BOOKING-LINK-HERE`
- Starter Workshop payment: `https://YOUR-STARTER-WORKSHOP-PAYMENT-LINK-HERE`
- Core Training Program payment: `https://YOUR-CORE-PROGRAM-PAYMENT-LINK-HERE`
- Premium Mentorship payment: `https://YOUR-MENTORSHIP-PAYMENT-LINK-HERE`
- Institutional inquiry: `https://YOUR-INSTITUTIONAL-INQUIRY-FORM-HERE`

## Deploy to GitHub Pages

This repo is preconfigured for GitHub Pages.

### 1. Create a new GitHub repository
Create a repository in your GitHub account, for example:
- `braintorch-bio-demo`

### 2. Initialize git and push
From the project folder:

```bash
git init
git add .
git commit -m "Initial BrainTorch Bio site"
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
