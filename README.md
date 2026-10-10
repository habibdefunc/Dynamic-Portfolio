# HabibFnc Portfolio

A responsive personal portfolio built with React, Vite, and Tailwind CSS 4. It includes light and dark themes, section-aware navigation, project previews, and a contact form.

## Requirements

Install these before cloning and running the project:

- [Git](https://git-scm.com/downloads) to clone the repository.
- [Node.js](https://nodejs.org/) 20.19+ or 22.12+ (npm is included with Node.js).
- An internet connection to install npm packages and load the Google Fonts used by the site.

Check your installations:

```sh
git --version
node --version
npm --version
```

## Clone and run

Open a terminal and run:

```sh
git clone https://github.com/habibdefunc/Dynamic-Portfolio.git
cd Dynamic-Portfolio
npm install
npm run dev
```

Vite prints a local address in the terminal, usually `http://localhost:5173`. Open that address in your browser. Keep the terminal running while you work; press `Ctrl+C` to stop the development server.

## Production build

Create and locally preview an optimized production build:

```sh
npm run build
npm run preview
```

The build output is written to `dist/`. Vercel can deploy this project using `npm run build` as its build command and `dist` as its output directory.

## Project layout

```text
src/
  assets/              Portfolio and project images
  components/
    ui/                 Shared interface components
    About.jsx
    Contact.jsx
    Footer.jsx
    Header.jsx
    Hero.jsx
    Projects.jsx
    SectionHeading.jsx
    Skills.jsx
  App.jsx
  index.css
  main.jsx
components.json          shadcn/ui configuration
vite.config.js
```

Project descriptions, live links, and preview images are maintained in `src/components/Projects.jsx`. Contact submissions use the Getform endpoint configured in `src/components/Contact.jsx`.
