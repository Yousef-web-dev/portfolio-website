# 🚀 Youssef Mohamed — Modern Portfolio

A slick, highly responsive, and interactive developer portfolio built with **React** and styled entirely using **Tailwind CSS**. 

Features custom glow animations, interactive canvas particles with mouse tracking, dynamic typing effects, animated skill bars, and a fully working contact form.

---

## 🛠️ Tech Stack & Design Tokens

* **Core Framework:** React (Vite)
* **Styling:** Tailwind CSS (Utility-first styling, zero legacy CSS maintenance)
* **Design Tokens (`tailwind.config.js`):**
  * **Colors:** Dark theme background (`bg`), custom card surfaces, cyan neon accents, & smooth gradient overlays.
  * **Typography:** `Inter` (Body text) & `Space Mono` (Code & highlights).
  * **Keyframes:** Custom particle glows, floating hero shapes, avatar ring spin, typing blink, & scroll-reveals.

---

## ⚡ Quick Start

### 1. Install Dependencies
```bash
npm install
<<<<<<< HEAD
=======
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Images you need to add (not included in the upload)

Your original project referenced these image files, but they weren't
part of the 3 files you uploaded (only `index.html`, `main.css`,
`script.js`). Add them so everything looks exactly like before:

1. `public/y.webp` — the favicon
2. `src/img.webp` — the About section avatar photo (referenced by
   `background-image: url(img.webp)` inside `main.css`, which now lives
   at `src/index.css` — CSS `url()` paths are resolved relative to the
   CSS file, so it must sit next to it in `src/`)
3. In `public/`, add the 5 project thumbnail photos, exactly as named:
   - `jason-leung-poI7DelFiVA-unsplash.webp`
   - `kelly-sikkema-3-Tc_5LROrM-unsplash.webp`
   - `anis-sabbagh-o_RkF2ePdSQ-unsplash.webp`
   - `michaela-st-lIdLyU_J6u4-unsplash.webp`
   - `path-digital-tR0jvlsmCuQ-unsplash.webp`

Everything else (copy, the WhatsApp contact form, the interactive
particle background with mouse interaction, the typing effect,
counters, skill bars, and scroll reveals) still works the same way —
the same JS logic runs inside a React `useEffect` now
(`src/hooks/usePortfolioScripts.js`), and the particle canvas is its
own component (`src/components/ParticlesBg.jsx`).

## Styling

- `tailwind.config.js` — brand colors (`bg`, `surface`, `card`,
  `border`, `accent`, `neon`, `text`, `muted`), the `grad` gradient
  background, fonts (`Inter` / `Space Mono`), and all custom keyframe
  animations.
- `src/index.css` — just the three `@tailwind` directives, plus a
  small `@layer components` block for the handful of things that need
  a stateful class toggled by JS rather than a hover/focus pseudo-class
  (scroll-reveal `.reveal`/`.visible`, the mobile `.nav-links.open`
  menu, the skill bar fill, and the `#toast` show/success/error
  states).
- Every component (`Navbar`, `Hero`, `About`, `Skills`, `Projects`,
  `Certificates`, `Contact`, `Footer`, `Toast`) is styled with Tailwind
  utility classes directly in the JSX — no more `main.css` classes to
  maintain.

## Project structure

```
src/
  components/   → Navbar, Hero, About, Skills, Projects, Certificates,
                   Contact, Footer, Toast, ParticlesBg
  hooks/
    usePortfolioScripts.js → typing/counters/skill-bars/reveal/nav/contact-form logic
  index.css     → Tailwind directives + a few stateful component classes
  App.jsx       → assembles all sections
  main.jsx      → React entry point
tailwind.config.js → design tokens + custom animations
postcss.config.js  → required by Tailwind
```
>>>>>>> 8af18c3 (update project files)
