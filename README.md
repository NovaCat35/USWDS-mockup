# USWDS Mockup
 
This mockup site utilizes the U.S. Web Design System (USWDS) to incorporate its components.
 
Technologies Used 🚀
- React: Javascript Library
- Node.js: Javascript runtime that allows for server-side scripting
- TypeScript: main language choice
- Vite: a build tool that provides fast development environment
- USWDS: U.S. Web Design System for accessible and user-friendly design components
 
## Initial Setup Steps
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
> You can use uswds-compile to watch for any changes to your project Sass and recompile the CSS `npx gulp watch`
