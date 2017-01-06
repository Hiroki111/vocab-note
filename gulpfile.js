// const elixir = require('laravel-elixir');

// require('laravel-elixir-vue-2');


//  |--------------------------------------------------------------------------
//  | Elixir Asset Management
//  |--------------------------------------------------------------------------
//  |
//  | Elixir provides a clean, fluent API for defining some basic Gulp tasks
//  | for your Laravel application. By default, we are compiling the Sass
//  | file for our application, as well as publishing vendor resources.
//  |
 

// elixir(mix => {
//     mix.sass('app.scss')
//        .webpack('app.js');
// });


var webpack = require('webpack');
var path = require('path');

var OUTPUT_DIR = path.resolve(__dirname, 'resources/assets/js/app.js');
var ENTRY_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: ENTRY_DIR + '/index.jsx',
  output: {
    path: OUTPUT_DIR,
    filename: 'reactapp.js'
  }
};

module.exports = config;