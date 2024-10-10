/* gulpfile.js */

/**
* Import uswds-compile
*/
import uswds from "@uswds/compile";

/**
* USWDS version
* Set the major version of USWDS you're using
* (Current options are the numbers 2 or 3)
*/
uswds.settings.version = 3;

/**
* Path settings
* Set as many as you need
*/
uswds.paths.dist.css = './src/assets/uswds/css'; // Compiled CSS output
uswds.paths.dist.theme = './src/sass/uswds'; // Custom Sass theme location
uswds.paths.src.img = './src/assets/uswds/img'; // Source images (where your images are located)
uswds.paths.dist.img = './src/assets/uswds/img'; // Where the compiled images/icons should go
uswds.paths.dist.fonts = './src/assets/uswds/fonts'; // Fonts directory
uswds.paths.dist.uswds = './src/assets/uswds/uswds'; // Where USWDS assets should be distributed

/**
* Exports
* Add as many as you need
*/
export const init = uswds.init;
export const compile = uswds.compile;
export const watch = uswds.watch;