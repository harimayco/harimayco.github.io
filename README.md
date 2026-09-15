# Rendy Harimayco — Personal Portfolio & CV Website

Modern personal portfolio & curriculum vitae website for **Rendy Harimayco** (Senior Fullstack Developer), built using **React 18**, **TypeScript**, and **Vite**, styled with a handcrafted **Claymorphism / 3D Soft UI** design system adhering strictly to `DESIGN.md`.

## 🎨 Design System: Claymorphism / 3D Soft UI

- **Tactile Material**: Molded elevated surfaces, colored bottom contact shadows (zero blur) paired with atmospheric depth.
- **Micro-interactions**: Snappy 100ms press animations simulating physical buttons and toys.
- **Top-lit Surfaces**: Radial gradient highlights and inner rim highlights.
- **Dynamic Theme Switcher**: 4 pastel background tones (Soft Lavender, Soft Blue, Soft Green, Soft Peach).
- **Subtle Sound Effects**: Optional realistic mechanical/tactile toy click synthesis via native Web Audio API (zero audio file overhead).
- **Typography**: Google Fonts [Nunito](https://fonts.google.com/specimen/Nunito) (rounded, friendly, high legibility).

---

## 🚀 Tech Stack

- **Framework**: React 18 + TypeScript
- **Bundler**: Vite 6
- **Styling**: Pure Modern CSS (Modular design tokens & Claymorphism rules)
- **Icons**: Lucide Icons & Custom Brand SVGs
- **Deployment**: GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)

---

## 🛠️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Dev Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## 🚢 GitHub Pages Deployment

This repository is configured with an automated GitHub Actions workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

When changes are pushed to the `master` branch:
1. GitHub Actions checks out the repository.
2. Dependencies are installed and the app is compiled with `npm run build`.
3. The production bundle (`dist/`) is automatically deployed to `https://harimayco.github.io/`.

*Ensure in repository settings under **Settings -> Pages** that **Source** is set to **GitHub Actions**.*

---

## 📬 Contact & Socials

- **Email**: [rendyharimayco@gmail.com](mailto:rendyharimayco@gmail.com)
- **GitHub**: [github.com/harimayco](https://github.com/harimayco)
- **Twitter/X**: [twitter.com/harimayco](https://twitter.com/harimayco)
- **Facebook**: [facebook.com/Harimayco](https://www.facebook.com/Harimayco)
