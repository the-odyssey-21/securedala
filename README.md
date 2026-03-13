# SecureDala — Website Source Code

Kenya's cybersecurity community website built with **React + Vite**.

## Tech Stack

| Layer      | Tool                     |
|------------|--------------------------|
| Framework  | React 18                 |
| Build tool | Vite 5                   |
| Styling    | CSS Modules + CSS vars   |
| Fonts      | Google Fonts (Orbitron, Share Tech Mono, Rajdhani) |
| Deployment | Any static host (Vercel, Netlify, GitHub Pages) |

---

## Project Structure

```
securedala/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Cursor.jsx / .module.css
│   │   ├── Footer.jsx / .module.css
│   │   ├── LogoMark.jsx
│   │   ├── Navbar.jsx / .module.css
│   │   └── SectionLabel.jsx
│   ├── data/
│   │   └── content.js      # ← ALL site copy lives here
│   ├── hooks/
│   │   ├── useCursor.js
│   │   └── useScrollReveal.js
│   ├── sections/           # Page sections (one file per section)
│   │   ├── Hero.jsx / .module.css
│   │   ├── Pillars.jsx / .module.css
│   │   ├── Objectives.jsx / .module.css
│   │   ├── Goals.jsx / .module.css
│   │   ├── Membership.jsx / .module.css
│   │   ├── Impact.jsx / .module.css
│   │   └── CTA.jsx / .module.css
│   ├── styles/
│   │   └── globals.css     # Design tokens, resets, utilities
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Getting Started

### Prerequisites
- Node.js 18+ ([nodejs.org](https://nodejs.org))
- npm 9+

### Install & Run

```bash
# 1. Enter the project folder
cd securedala

# 2. Install dependencies
npm install

# 3. Start the dev server (opens at http://localhost:5173)
npm run dev
```

### Build for Production

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build locally
```

---

## Customising the Site

### Update copy / text
Edit **`src/data/content.js`** — all headings, descriptions, stats, tier perks, and link labels live there.

### Change colours
Edit the CSS variables in **`src/styles/globals.css`** under `:root`:

```css
--cyber-green: #00FF88;
--cyber-blue:  #00C8FF;
--deep-blue:   #0A1628;
--black:       #050A0E;
```

### Add a new section
1. Create `src/sections/NewSection.jsx` and `NewSection.module.css`
2. Import and render it in `src/App.jsx`

### Change fonts
Replace the Google Fonts `<link>` in `index.html` and update the font family variables in `globals.css`.

---

## Deployment

### Vercel (recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# drag /dist folder into Netlify dashboard
```

### GitHub Pages
```bash
# Add to vite.config.js: base: '/your-repo-name/'
npm run build
# push /dist to gh-pages branch
```

---

## Brand Colours Reference

| Name             | Hex       | Usage                        |
|------------------|-----------|------------------------------|
| Void Black       | `#050A0E` | Page background              |
| Deep Blue        | `#0A1628` | Section backgrounds, cards   |
| Cyber Tech Green | `#00FF88` | Primary accent, CTA, alerts  |
| Cyber Tech Blue  | `#00C8FF` | Secondary accent, links, UI  |
| Ice White        | `#E8F4FD` | Body text                    |
| Steel Gray       | `#4A6B7C` | Muted text, labels           |

---

© 2025 SecureDala — Cybersecurity Community Kenya
