# photo.pichi.ra
### Premium Nature, Wildlife, Bird & Landscape Photography Portfolio

An earthy, editorial, high-performance static photography portfolio designed for the nature and wildlife photography journey behind **photo.pichi.ra**.

---

## 🌲 Design Philosophy: Earthy Natural

The website is crafted with an editorial, magazine-inspired aesthetic:
- **Warm Ivory Canvas:** `#F5F3EC`
- **Soft Natural Beige:** `#EAE6DA`
- **Deep Charcoal Typography:** `#292C25`
- **Olive & Forest Green Accents:** `#727B57` & `#354536`
- **Atmospheric Charcoal Surfaces:** `#252921`
- **Editorial Typography:** *DM Serif Display* + clean, legible *Inter*

Zero heavy runtime frameworks, zero bloated client scripts — built with **Astro 5.x Static Site Generation**, **Sharp** image optimization, and accessible pure-vanilla JavaScript interactions for the fullscreen lightbox and instant category filtering.

---

## 🚀 Quick Start

### 1. Prerequisites
- **Node.js**: v18.17.0 or higher (v20+ recommended)
- **npm** (comes with Node.js) or **pnpm**

### 2. Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/photo.pichi.ra.git
cd photo.pichi.ra
npm install
```

### 3. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser. The site updates instantly via Hot Module Reloading as you make changes.

### 4. Build for Production
```bash
npm run build
```
This runs the TypeScript check and builds the static website into the `dist/` directory, generating modern, optimized WebP images with responsive sizes.

To preview the production build locally:
```bash
npm run preview
```

---

## 📸 How to Add Your Photos (Step-by-Step)

The project is structured so you can easily manage photos without touching complex components.

### Folder Structure for Photos
All photos live in `src/assets/photographs/`:

```text
src/assets/photographs/
├── wildlife/      # Animals, mammals, field encounters
├── birds/         # Birds perched, in flight, in wetlands
├── nature/        # Micro textures, ferns, leaves, forest floor
└── landscapes/    # Ridges, mountains, skies, rivers, hero images
```

### Step 1: Copy your photos into the folder
When you transfer photos from your phone or camera to your laptop:
1. Export them as high-quality `.jpg` or `.png` (e.g. from Adobe Lightroom).
2. Drop them into the corresponding category folder inside `src/assets/photographs/<category>/`.
   *(Example: `src/assets/photographs/wildlife/my-fox.jpg`)*

### Step 2: Register the photo in `src/data/photographs.ts`
Open `src/data/photographs.ts` and add two things:

1. **Import the photo at the top:**
   ```typescript
   import myFox from '../assets/photographs/wildlife/my-fox.jpg';
   ```

2. **Add an entry to the `photographs` list:**
   ```typescript
   {
     id: 'wildlife-04',
     title: 'Golden Fox in Meadow',
     category: 'wildlife',
     src: myFox,
     alt: 'A wild fox standing in high meadow grass during sunset',
     description: 'A fleeting evening encounter along the forest edge.',
     location: 'Meadow Edge',
     date: '2026',
     order: 4,
     featured: true,              // Set true to show on homepage
     orientation: 'landscape'     // 'landscape' | 'portrait' | 'square'
   },
   ```

### How to change the Homepage Hero photo:
In `src/data/photographs.ts`, simply change the `src` property of `heroPhotograph`:
```typescript
export const heroPhotograph: Photograph = {
  id: 'hero-main',
  title: 'Your Photo Title',
  category: 'landscapes',
  src: myNewFavoriteLandscapeImage,
  ...
};
```

---

## ✏️ Editing Text & Bio Content

- **Brand & Social Links:** Open `src/data/site.ts` to adjust your Instagram handle, title, or navigation items.
- **About Page Story:** Open `src/pages/about.astro` to update your personal narrative, gear notes, or photography philosophy.
- **Home Intro:** Open `src/components/EditorialIntro.astro` to tweak the homepage opening paragraphs.

---

## 🌐 Deploying to Vercel

This repository is pre-configured for static deployment on **Vercel**.

### Option A: 1-Click via GitHub (Recommended)
1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "Initial launch of photo.pichi.ra"
   git branch -M main
   git remote add origin https://github.com/your-username/photo.pichi.ra.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com) and log in.
3. Click **"Add New Project"** and select your GitHub repository.
4. Vercel will automatically detect **Astro**.
5. Click **"Deploy"**.

Any future git push to the `main` branch will automatically build and deploy your site in seconds!

### Option B: Deploy via Vercel CLI
```bash
npm i -g vercel
vercel
```

### Mapping your Custom Domain:
1. In your Vercel project dashboard, go to **Settings &rarr; Domains**.
2. Enter your custom domain (e.g. `photopichi.com` or `photo-pichi.com`).
3. Follow the DNS instructions (add the CNAME / A records in your domain registrar).
4. Vercel automatically generates free SSL certificates.

---

## 🛠️ Project Structure

```text
photo.pichi.ra/
├── dist/                      # Production build output
├── public/                    # Static files (favicon, robots.txt, og-image)
├── scripts/
│   ├── build.mjs              # Typecheck + Astro build pipeline
│   └── generate-placeholders.mjs # Sample photography asset generator
├── src/
│   ├── assets/
│   │   └── photographs/       # High-resolution original photo assets
│   ├── components/
│   │   ├── BehindTheLens.astro # Authentic beginner journey section
│   │   ├── CategoryCards.astro # Thematic domain cards
│   │   ├── EditorialIntro.astro# Narrative philosophy statement
│   │   ├── FeaturedFrames.astro# Asymmetrical editorial grid
│   │   ├── Footer.astro        # Brand sign-off & links
│   │   ├── GalleryFilter.astro # Instant category filter buttons
│   │   ├── Header.astro        # Wordmark & mobile drawer
│   │   ├── Hero.astro          # Large hero with scrim protection
│   │   ├── InstagramInvite.astro# Connect to @photo.pichi.ra
│   │   ├── Lightbox.astro      # Fullscreen accessible modal
│   │   └── PhotographCard.astro# Responsive card with metadata
│   ├── data/
│   │   ├── photographs.ts      # Central photo catalogue
│   │   └── site.ts             # Site metadata & navigation
│   ├── layouts/
│   │   └── MainLayout.astro    # Base HTML, SEO & Schema markup
│   ├── pages/
│   │   ├── 404.astro           # "Lost in the wild" page
│   │   ├── about.astro         # Personal story & gear philosophy
│   │   ├── gallery/
│   │   │   ├── index.astro     # Full gallery page
│   │   │   └── [category].astro# Dedicated category collections
│   │   └── index.astro         # Editorial homepage
│   ├── styles/
│   │   ├── global.css          # Fluid typography, resets, utilities
│   │   └── variables.css       # Earthy Natural color tokens
│   └── types/
│       └── photograph.ts       # TypeScript photo interfaces
├── astro.config.mjs           # Astro SSG configuration
├── package.json
├── tsconfig.json
├── vercel.json                # Vercel deployment config
└── README.md
```

---

## 🌿 Technical Highlights

- **Static Generation (`output: 'static'`):** Ultra-fast CDN delivery with zero server latency.
- **Astro Image + Sharp:** Automatic generation of responsive WebP formats, reducing multi-megabyte RAW exports to 8–35 kB without perceptual quality loss.
- **Zero Hydration Bloat:** Native JavaScript for the accessible mobile menu, interactive category filter, and fullscreen lightbox (no React, Vue, or Angular runtimes).
- **Accessible Lightbox:** Fullscreen modal with left/right keyboard navigation, Escape-to-close, and mobile touch-swipe gesture detection.
- **SEO Ready:** Open Graph social share image, Twitter cards, semantic HTML5, XML sitemap readiness, and Schema.org structured data.

---

&copy; 2026 **photo.pichi.ra**. Exploring nature, one frame at a time.
