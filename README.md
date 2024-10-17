# USWDS Mockup 🇺🇸
 
This mockup site utilizes the U.S. Web Design System (USWDS) to incorporate its components. The purpose of this project is to explore design system concepts and practices.

Live server: https://uswds-mockup.pages.dev/ 🦅

## Features
- Web Components Integration: Experiment by incorporating a few web components into the site and assess how well they integrate with existing functionality.
- Common Design Patterns: Discover and apply design patterns that can simplify and streamline development.
- Design Tokens: Examine how the U.S. Web Design System (USWDS) uses design tokens to make the site more adaptable, ensuring consistent visual styles across components.
- Utility Classes: Leverage utility classes, similar to those in Tailwind, to quickly adjust and fine-tune styling by applying classes directly in your components.
 
## Technologies Used 🚀
- React: Javascript Library
- Node.js: Javascript runtime that allows for server-side scripting
- TypeScript: main language choice
- Vite: a build tool that provides fast development environment
- USWDS: U.S. Web Design System for accessible and user-friendly design components
 
## Initial Setup Steps (Starting from scratch)🛠️
> Assuming Node.js is installed (see [Prerequisites](https://github.com/ITS-HCD/excelsior/wiki#prerequisites))
 
### Phase 1: Install
1) Create a React application with vite
```
npm create vite@latest projectName -- --template react-ts
cd projectName
npm install
npm run dev
```
2) Install USWDS
> see official [USWDS](https://designsystem.digital.gov/documentation/getting-started/developers/phase-one-install/) site for details
`npm install @uswds/uswds --save-exact`
3) Install uswds-compile (needed for Sass compilation)
`npm install @uswds/compile --save-dev`
 
### Phase 2: Compile
4) Create Gulp file
`touch gulpfile.js`
> Import the uswds-compile package by adding `const uswds = require("@uswds/compile");` to the top of the gulpfile. To set USWDS version, declare `uswds.settings.version = 3;` 

5) Initialize Project 
> ⚠️ Do npx gulp init FIRST to create the necessary directories and files for USWDS
`npx gulp init`

6) Compile Gulp
`npx gulp compile`

### Phase 3: Customize
> To have uswds-compile automatically watch for any Sass changes and recompile the CSS on the fly, run:
`npx gulp watch`

> Note: I modified the compile paths in the gulpfile.js to better align with the specific folder structure of my project. This was mainly to ensure the src directory acts as the main parent folder for development, while keeping the assets/uswds folder distinct and separate from the React components. By doing this, the organization of USWDS assets and React components remains clear and easier to manage. (See the structure below for details).

### PRODUCTION
> Note: public directory is for static assets that won't be processed by the build pipeline but will be copied to the dist folder as-is. Use this for the js/img files that isn't being compiled.

Please check the build on package.json and any vite configuration. Also redirect anything in the original src to the dist or public folder for production if the links won't automatically point to compiled files.

## Folder Structure
```bash
/
├── node_modules/                # Project-wide Node modules
├── public/                      # Public assets, including favicon, static files
│   ├── img/                     # Static images
│   └── js/                      # Static JavaScript files
├── src/                         # Main source folder
│   ├── assets/uswds/            # USWDS assets folder
│   │   ├── css/                 # USWDS stylesheets
│   │   ├── fonts/               # USWDS fonts
│   └── components/              # React components
│   ├── sass/                    # Sass files for custom styles
│   ├── main.tsx                 # Entry point for the React application
├── App.css                      # Main application styles
├── index.css                    # Global styles
├── index.html                   # HTML template used by Vite
├── .gitignore                   # Ignored files configuration for Git
├── eslint.config.js             # ESLint configuration file for linting
├── gulpfile.js                  # Gulp tasks configuration for automation
├── README.md                    # Project documentation (this file)
├── tsconfig.app.json            # TypeScript configuration for the app
├── tsconfig.json                # General TypeScript configuration
├── tsconfig.node.json           # TypeScript configuration for Node.js
├── vite.config.ts               # Vite configuration file
```

## Issue Warning ⚠️
> 10/16/24: In my attempt to push the code to production and using React with USWDS, uswds.js & uswds-init.js is not compiled into /dist. It's wonky for some component (**cough* navbar **cough*) to say, but for demo purpose on the local server, it does the job.

> 10/17/24: The JS wonky code has been fixed. JS/Img files has been moved
