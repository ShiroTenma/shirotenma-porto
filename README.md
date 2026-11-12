# ShiroTenma — Creative Portfolio & Commission Website

A personal website for showcasing creative work, exploring past projects, and sharing commission information. Built with **Vue 3** and **Vite**, the site brings together a visual portfolio, service details, and contact options in one responsive interface.

**Live site:** [shirotenma-porto.vercel.app](https://shirotenma-porto.vercel.app)

## Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Content and Customization](#content-and-customization)
- [Contributing](#contributing)
- [Contact](#contact)

## Overview

This repository contains the source code for ShiroTenma's personal portfolio and commission website. It is designed as a home for creative work and related information, with dedicated pages for browsing projects, learning about the creator, reviewing services, and getting in touch.

The portfolio is an evolving personal project; content, layout, and functionality may change over time.

## Features

- **Dedicated pages:** Home, About, Portfolio, Commission, and Contact views.
- **Categorized portfolio:** Browse selected works by category and open individual project galleries.
- **Image viewer:** Lightbox with zoom, pan, and image-fit controls for closer inspection.
- **Commission information:** Service packages, option-specific details, and terms presented in interactive dialogs.
- **Contact shortcuts:** Ways to reach out about commissions and other inquiries.
- **Responsive interface:** Layouts and interactions designed for desktop and smaller screens.
- **Client-side routing:** Vue Router with deployment rewrites to support direct page access.

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | Vue 3 |
| Build tool | Vite 7 |
| Routing | Vue Router 4 |
| Styling | Tailwind CSS 4 and custom CSS |
| Code quality | ESLint and Prettier |
| Testing tooling | Vitest and Vue Test Utils |
| Hosting | Vercel |

## Getting Started

### Prerequisites

- **Node.js** `^20.19.0` or `>=22.12.0`
- **npm**

### Local development

1. Clone the repository:

   ```bash
   git clone https://github.com/ShiroTenma/shirotenma-porto.git
   cd shirotenma-porto
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local address printed in your terminal (typically `http://localhost:5173`).

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint with automatic fixes |
| `npm run format` | Format the `src/` directory with Prettier |
| `npm run test:unit` | Run Vitest (watch mode) |

> **Note:** The lint and format commands can modify local files. Review the changes before committing them. Vitest is configured as a script, but passing tests are not guaranteed by this README.

## Project Structure

```text
shirotenma-porto/
├── public/                 # Static public assets
├── src/
│   ├── assets/             # Images and styles
│   ├── components/         # Reusable UI components
│   ├── data/
│   │   ├── profile.js      # Profile content
│   │   ├── projects.js     # Portfolio entries and galleries
│   │   └── services.js     # Commission packages and terms
│   ├── router/             # Vue Router configuration
│   └── views/
│       ├── HomeView.vue
│       ├── AboutView.vue
│       ├── PortfolioView.vue
│       ├── CommissionView.vue
│       └── ContactView.vue
├── package.json
└── vercel.json             # SPA routing rewrites
```

## Deployment

The site is hosted on **Vercel** and uses client-side routing.

To deploy your own instance:

1. Import the repository into Vercel.
2. Use the Vite build command, `npm run build`.
3. Set the output directory to `dist`.
4. Keep `vercel.json` in the project root so direct navigation and page refreshes are handled by the SPA rewrite.

The public deployment is available at [shirotenma-porto.vercel.app](https://shirotenma-porto.vercel.app).

## Content and Customization

Most site content is organized separately from its presentation:

- **Profile and personal information:** `src/data/profile.js`
- **Portfolio entries and galleries:** `src/data/projects.js`
- **Commission packages and terms:** `src/data/services.js`
- **Page layouts:** `src/views/`
- **Reusable UI:** `src/components/`
- **Styling:** `src/assets/styles/`

Update the appropriate data file when changing portfolio content or commission information. Keep image paths consistent with the asset references used by the site.

## Contributing

This is a personal project, primarily maintained for its own content and presentation. Issues and suggestions are welcome, but external pull requests may not be accepted or merged.

If you want to propose a change, please open an issue explaining the problem or improvement first. For local experimentation, you can fork the repository and work on your own branch.

## Contact

For portfolio, project, or commission inquiries, use the contact options provided on the [website](https://shirotenma-porto.vercel.app), or reach out through [ShiroTenma on GitHub](https://github.com/ShiroTenma).

---

**Note:** Portfolio images, artwork, and other creative assets remain the work of their respective owners. Public access to this repository does not automatically grant permission to reuse those materials.
