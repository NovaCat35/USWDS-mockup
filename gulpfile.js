/*
* Import uswds-compile
*/
import uswds from '@uswds/compile';

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
uswds.paths = {
   src: {
     uswds: './src/assets/uswds',
     sass: './src/assets/uswds/sass',
     theme: './src/assets/uswds/sass/theme',
     fonts: './src/assets/uswds/fonts',
     img: './src/assets/uswds/img',
     js: './src/assets/uswds/js',
   },
   dist: {
     theme: './src/assets/uswds/sass',
     img: './src/assets/uswds/images',
     fonts: './src/assets/uswds/fonts',
     js: './src/assets/uswds/js',
     css: './src/assets/uswds/css',
   },
 };

/**
* Exports
* Add as many as you need
*/
export const init = uswds.init;
export const compile = uswds.compile;
export const watch = uswds.watch;