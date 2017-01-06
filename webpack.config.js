var webpack = require('webpack');
var path = require('path');

var OUTPUT_DIR = path.resolve(__dirname, './public/js/build/');

var config = {
  entry: './resources/assets/js',
  output: {
    path: OUTPUT_DIR,
    filename: 'reactapp.js'
  },
  module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            }
        ]
    }
};

module.exports = config;


/*
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");
var glob = require("glob");
var path = require("path");
var resolve = require("resolve");

var dest = path.resolve(__dirname, "./public/js");
var cssDest = path.resolve(__dirname, "./public/css");
var entry = path.resolve(__dirname, getPackageJson().main);
var debug = process.env.NODE_ENV !== "production";

var config = {
  entry: {
    mobile: entry,
    vendor: getDependencies().concat(getGlobalDependencies()),
  },
  output: {
    path: dest,
    filename: "[name].js",
    publicPath: "http://localhost:38801/js/"
  },
  module: {
    loaders: [{
      test: /\.jsx?/,
      exclude: /node_modules/,
      loader: "babel-loader",
      query: {
        presets: debug ? ["es2015", "react", "stage-0", "react-hmre"] : ["es2015", "react", "stage-0"],
        plugins: ["react-html-attrs", "transform-class-properties", "transform-decorators-legacy", "transform-runtime"]
      }
    }, {
      test: /\.inc$/,
      loader: "script-loader",
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        VERSION: JSON.stringify(getPackageJson().version)
      }
    }),
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js"),
    new webpack.NoErrorsPlugin(),
  ]
};

function getPackageJson() {
  try {
    return require("./package.json");
  } catch (e) {}
  return {};
}

function getDependencies() {
  try {
    return Object.keys(getPackageJson().dependencies).map(function(item) {
      return resovePackage(item);
    });
  } catch (e) {}
  return {};
}

function getGlobalDependencies() {
  try {
    return getPackageJson().globalDependencies.map(function(item) {
      return resovePackage(item);
    });
  } catch (e) {}
  return {};
}

function resovePackage(name) {
  try {
    return resolve.sync(name);
  } catch (e) {}
  return resolve.sync(name, {
    basedir: process.env.NODE_PATH
  });
}

module.exports = config;

*/