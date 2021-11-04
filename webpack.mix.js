const mix = require("laravel-mix");
const path = require('path');


var VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");
var webpackConfig = {
    resolve: {
        extensions: [".js", ".json", ".vue"],
        alias: {
            "@": path.join(__dirname, "./resources/js/components")
        },
    },
    plugins: [
        new VuetifyLoaderPlugin()
    ]
};
mix.webpackConfig(webpackConfig);

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css');
