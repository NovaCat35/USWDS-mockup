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
     uswds: './public/assets/uswds',
     sass: './public/assets/uswds/sass',
     theme: './public/assets/uswds/sass/theme',
     fonts: './public/assets/uswds/fonts',
     img: './public/assets/uswds/img',
     js: './public/assets/uswds/js',
   },
   dist: {
     theme: './public/assets/uswds/sass',
     img: './public/assets/uswds/images',
     fonts: './public/assets/uswds/fonts',
     js: './public/assets/uswds/js',
     css: './public/assets/uswds/css',
   },
 };

/**
* Exports
* Add as many as you need
*/
export const init = uswds.init;
export const compile = uswds.compile;
export const watch = uswds.watch;