# Woradech Ardvichai (Drop) — Portfolio Website

> Modern Single-Page Developer Portfolio built with **React**, **Tailwind CSS**, and **Lucide Icons**.  
> Features **Dark/Light Mode**, **Bilingual (TH/EN)** support, **Bento Grid** architecture, and instant zero-config deployment to **GitHub Pages**.

---

## 🌟 Key Features
- 🌓 **Theme Switcher**: Dark Mode (Default Developer Palette) / Light Mode with localStorage memory
- 🌐 **Bilingual (i18n)**: Real-time Thai (TH) and English (EN) switching
- 🍱 **Bento Grid Layout**: High-impact Hero, 4-Pillar Skills matrix, Problem-Solution Project cards, Philosophy & Education (GPA 3.88)
- 📋 **Interactive Utilities**: One-click Copy Email with feedback, Smooth scrolling, Mobile drawer menu
- 🚀 **GitHub Pages Ready**: Configured with relative paths (`base: './'`) and an automated GitHub Actions workflow

---

## 🛠️ Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build
```

---

## 🚀 How to Deploy to GitHub Pages

### Option 1: Automated Deployment via GitHub Actions (Recommended)
1. Push this entire project folder to your GitHub repository (e.g. `username/PortfolioWebsite`).
2. On GitHub, go to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build and deploy your site on every push!

### Option 2: Deploy `dist/` branch or folder
1. Run `npm run build` locally.
2. Push the generated `dist` folder or deploy using `gh-pages`.

---

© 2026 Woradech Ardvichai. Built with React & Tailwind CSS.
