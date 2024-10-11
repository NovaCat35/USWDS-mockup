# USWDS Mockup 🇺🇸
 
This mockup site utilizes the U.S. Web Design System (USWDS) to incorporate its components. The purpose of this project is to explore design system concepts and practices.

## NOTE TO SELF (Project Plan)
- Dive into adding a few web components to this site and see how they fit.
- Explore some common design patterns to streamline things.
- Design tokens: Look at how USWDS make the site more adaptable by setting clear design tokens.
- Utilities: Think of these like Tailwind — use them directly in classes to tweak styling fast and easily.
 
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

5) Compile Gulp
`npx gulp compile`

6) Initialize Project
`npx gulp init`

### Phase 3: Customize
> To have uswds-compile automatically watch for any Sass changes and recompile the CSS on the fly, run:
`npx gulp watch`

> To customize paths and structure of my specific project I change the compile paths in gulpfile to better fit with my project structure. Mainly to have src folder be the parent folder for development and assets/uswds separated from the react components