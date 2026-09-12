# Toque — Professional Home Chef Booking Platform

> **Apple Fluid Interfaces Edition**
> This project has been engineered with a focus on "Fluid Interfaces", adopting Apple's iOS-level design philosophy. It features spring-physics animations, interruptible transitions, squircle corner radii, and a glassmorphic tactile UI to create an organic, premium feel.

## 🌐 Live Demo
*Target Deployment: Vercel*

---

## 📋 Table of Contents
- [Toque — Professional Home Chef Booking Platform](#toque--professional-home-chef-booking-platform)
  - [🌐 Live Demo](#-live-demo)
  - [📋 Table of Contents](#-table-of-contents)
  - [🛠️ Tech Stack \& Architecture](#️-tech-stack--architecture)
  - [🎨 Design System (Fluid Interfaces)](#-design-system-fluid-interfaces)
    - [Color Palette](#color-palette)
  - [📁 Project Structure](#-project-structure)
  - [📄 Pages \& Routing Architecture](#-pages--routing-architecture)
    - [1. Home (`/`)](#1-home-)
    - [2. About Us (`/about`)](#2-about-us-about)
    - [3. Contact (`/contact`)](#3-contact-contact)
    - [4. Cook for a Month (`/cook-for-month`)](#4-cook-for-a-month-cook-for-month)
    - [5. One Time Cook (`/one-time-cook`)](#5-one-time-cook-one-time-cook)
    - [6. Chef for Party (`/chef-for-party`)](#6-chef-for-party-chef-for-party)
    - [7. Join as a Cook (`/join-chefkart`)](#7-join-as-a-cook-join-chefkart)
  - [⚡ Performance Optimizations](#-performance-optimizations)
  - [🔌 Backend Integration Points](#-backend-integration-points)
  - [🖼️ AI Image Generation Guide (Checklist)](#️-ai-image-generation-guide-checklist)
    - [Core Hero Images (1920x1080)](#core-hero-images-1920x1080)
    - [Secondary UI Images (1200x900)](#secondary-ui-images-1200x900)
    - [Horizontal Gallery (1200x800 each)](#horizontal-gallery-1200x800-each)
  - [🚀 Getting Started](#-getting-started)
  - [☁️ Deployment](#️-deployment)

---

## 🛠️ Tech Stack & Architecture

| Technology | Role | Details |
|---|---|---|
| **React 19** | UI Framework | Utilizes modern React features for concurrent rendering. |
| **React Router v8** | Routing / SSR | Configured in Framework mode for optimal data loading and seamless page transitions. |
| **Vite 8** | Build Tooling | Lightning-fast HMR and optimized production builds. |
| **Tailwind CSS v4** | Styling Engine | CSS-first approach using `@theme` definitions in `app.css`. |
| **Framer Motion** | Physics Engine | Handles interruptible spring animations, route transitions, and scroll reveals. |
| **TypeScript 5** | Type Safety | Strict mode enabled for all components and configurations. |

---

## 🎨 Design System (Fluid Interfaces)

The UI/UX is built strictly around Apple's Fluid Interface guidelines:

1. **Spring Physics**: We use `{ type: "spring", mass: 1, stiffness: 300, damping: 30 }` for snappy, non-linear, interruptible animations. Linear/Ease CSS transitions are disabled for major UI states.
2. **Tactile Feedback**: All interactive elements (buttons, cards) use `whileTap={{ scale: 0.96 }}` to mimic physical depression.
3. **Squircle Radii**: Tailored border-radii (`--r-md`, `--r-pill`) guarantee smooth, iOS-like corners, dropping standard CSS boxy edges.
4. **Glassmorphism**: `.glass-light` and `.glass-dark` utility classes provide backdrop blurs layered over UI components, ensuring depth and hierarchy.

### Color Palette
- **Charcoal**: `#1C1C1C` (Primary Dark)
- **Antique Gold**: `#C9A227` (Primary Accent)
- **Warm White**: `#fff8ef` (Background)

---

## 📁 Project Structure

```text
ChefKart/
├── app/
│   ├── components/            # View components and Shared UI modules
│   │   ├── shared/            # Reusable UI (HowItWorks, ServiceFAQ, AppDownloadCTA)
│   │   ├── Home.tsx           # Homepage View
│   │   ├── About.tsx          # About View
│   │   ├── Contact.tsx        # Contact View
│   │   └── ...                # Other views
│   ├── routes/                # Route modules containing `meta` and default exports
│   │   ├── _index/route.tsx
│   │   ├── about/route.tsx
│   │   └── ...
│   ├── root.tsx               # Root layout, contains <AnimatePresence> for route transitions
│   ├── routes.ts              # Route registry (maps URLs to route modules)
│   └── app.css                # Global styles, Tailwind v4 @theme, Squircle utilities
├── public/
│   ├── images/                # Static assets (See Image Guide below)
│   └── logo.svg               # Site logo
├── package.json               # NPM Scripts and dependencies
├── vite.config.ts             # Vite/React Router configuration
└── vercel.json                # Vercel deployment overrides
```

---

## 📄 Pages & Routing Architecture

This platform utilizes **React Router v8**. The routing registry is in `app/routes.ts`, mapping clean URLs to route modules in `app/routes/`. The actual UI components reside in `app/components/`.

### 1. Home (`/`)
- **File**: `Home.tsx`
- **Purpose**: The main landing page. Highlights key metrics, core services (Cook for Month, One Time, Party Chef), customer testimonials, and an app download CTA.
- **Animations**: Uses Framer Motion's `whileInView` for scroll reveals, and a horizontally scrolling gallery with snap physics.

### 2. About Us (`/about`)
- **File**: `About.tsx`
- **Purpose**: Company story, mission statement, and geographical presence.
- **Animations**: Staggered fade-ins for timeline milestones and value propositions.

### 3. Contact (`/contact`)
- **File**: `Contact.tsx`
- **Purpose**: Main conversion hub. Includes an embedded interactive map, contact details, and a functional inquiry form.
- **Integration**: Target endpoint for all "Book Now" CTAs across the site.

### 4. Cook for a Month (`/cook-for-month`)
- **File**: `CookForMonth.tsx`
- **Purpose**: Details the monthly subscription service. Features a dynamic pricing toggle and shared FAQ/How-it-works sections.

### 5. One Time Cook (`/one-time-cook`)
- **File**: `OneTimeCook.tsx`
- **Purpose**: On-demand chef booking service page.

### 6. Chef for Party (`/chef-for-party`)
- **File**: `ChefForParty.tsx`
- **Purpose**: High-end event catering service details with premium imagery placeholders.

### 7. Join as a Cook (`/join-chefkart`)
- **File**: `ChefConnection.tsx`
- **Purpose**: B2B / Partner portal. A dedicated application form for chefs looking to join the Toque network.

---

## ⚡ Performance Optimizations

- **Route Transitions**: `<AnimatePresence mode="wait">` ensures smooth DOM mounting/unmounting without layout thrashing.
- **Lazy Loading**: All below-the-fold `<img>` tags have been updated with `loading="lazy"` and `decoding="async"`.
- **Image Fallbacks**: Inline `onError` handlers prevent broken image icons by replacing them with smooth CSS gradients while assets are missing.
- **Type Safety**: Zero `any` types; all props are strictly typed to prevent runtime errors.

---

## 🔌 Backend Integration Points

The frontend is currently a static SPA. When you begin backend work, wire up these specific files:

1. **Customer Inquiries**
   - **File**: `app/components/Contact.tsx`
   - **Action**: Locate the `handleSubmit` function.
   - **Endpoint**: Implement a `POST /api/contact` fetch call here.

2. **Chef Applications**
   - **File**: `app/components/ChefConnection.tsx`
   - **Action**: Locate the `handleSubmit` function.
   - **Endpoint**: Implement a `POST /api/cook-application` fetch call here.

3. **Booking Flow**
   - **Files**: `CookForMonth.tsx`, `OneTimeCook.tsx`, `ChefForParty.tsx`
   - **Action**: Currently, all "Book Now" buttons link to `/contact`. You will need to replace these with stateful modals or redirects to a dedicated booking flow (e.g., `POST /api/booking`).

---

## 🖼️ AI Image Generation Guide (Checklist)

Since there are no current images, generate them using an AI tool (like Midjourney or Gemini) and save them to the exact paths listed below. The UI is built to automatically display them once they exist in the folder.

### Core Hero Images (1920x1080)
- [ ] `public/images/hero-home.jpg`
  > **Prompt**: Cinematic wide shot of an Indian professional chef in a modern white kitchen, wearing crisp white chef uniform and toque hat, plating an elegant dish. Warm ambient lighting, shallow depth of field. Premium food photography.
- [ ] `public/images/hero-about.jpg`
  > **Prompt**: Aerial view of a vibrant Indian city skyline at golden hour, warm sunset tones. Premium lifestyle feel, tilt-shift effect.
- [ ] `public/images/hero-month.jpg`
  > **Prompt**: An Indian home cook in neat uniform preparing wholesome dal-roti in a clean modern kitchen. Warm morning light, domestic and trustworthy vibe.
- [ ] `public/images/hero-onetime.jpg`
  > **Prompt**: Top-down flat lay of a fresh cook kit arriving at an apartment door with ingredients neatly arranged. Urban, minimal, gold and white palette.
- [ ] `public/images/hero-party.jpg`
  > **Prompt**: Elegant Indian house party scene. A professional chef in white uniform cooking at a live counter surrounded by happy guests. String lights, warm bokeh, festive atmosphere.
- [ ] `public/images/hero-join.jpg`
  > **Prompt**: Young Indian man and woman in chef uniforms smiling confidently in a bright commercial kitchen. Empowered, professional, aspirational.

### Secondary UI Images (1200x900)
- [ ] `public/images/cook-preparing.jpg`
  > **Prompt**: Close-up of Indian chef hands expertly chopping vegetables on a wooden board. Shallow depth of field, warm cinematic lighting.
- [ ] `public/images/food-spread.jpg`
  > **Prompt**: Overhead flat-lay of beautiful Indian thali with dal, sabzi, roti, rice, raita. Premium styling on dark slate with gold cutlery.
- [ ] `public/images/party-spread.jpg`
  > **Prompt**: Long dining table set for elegant house party with multiple Indian dishes, candles, flowers. Warm evening light.
- [ ] `public/images/app-mockup.png` *(Use a transparent background if possible)*
  > **Prompt**: Sleek smartphone mockup showing a fictional cook-booking app UI with gold and charcoal color scheme. Minimal, clean, iOS-style.

### Horizontal Gallery (1200x800 each)
Used on the Home page scrolling section. Ensure they look appetizing!
- [ ] `public/images/food-1.jpg` -> **Prompt**: Beautiful overhead shot of Butter Chicken in a copper bowl, warm lighting, wooden table.
- [ ] `public/images/food-2.jpg` -> **Prompt**: Beautiful overhead shot of Hyderabadi Biryani in a handi, warm lighting, wooden table.
- [ ] `public/images/food-3.jpg` -> **Prompt**: Beautiful overhead shot of crisp Masala Dosa with chutneys, warm lighting, wooden table.
- [ ] `public/images/food-4.jpg` -> **Prompt**: Beautiful overhead shot of Paneer Tikka sizzling on a platter, warm lighting, wooden table.
- [ ] `public/images/food-5.jpg` -> **Prompt**: Beautiful overhead shot of Gulab Jamun dessert in a small bowl, warm lighting, wooden table.
- [ ] `public/images/food-6.jpg` -> **Prompt**: Beautiful overhead shot of Rajma Chawal, warm lighting, domestic feel, wooden table.

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server (port 5173 by default)
npm run dev

# Type check
npm run typecheck

# Production build
npm run build
```

## ☁️ Deployment

This project is configured for seamless deployment to **Vercel**.
1. Push your repository to GitHub.
2. Import the project in your Vercel Dashboard.
3. The `vercel.json` and Vite config will automatically handle the build and routing.
4. Deploy!

### 8. Additional Routes (Reference Completeness)
To match the original reference structure, the following routes have been registered and have placeholder pages:
- `/about-us` (Alias for `/about`)
- `/contact-us` (Alias for `/contact`)
- `/join-as-chef` (Alias for `/join-chefkart`)
- `/cooks` & `/cooks-near-me`
- `/privacy-policy`
- `/terms-of-service`
- `/blogs`
