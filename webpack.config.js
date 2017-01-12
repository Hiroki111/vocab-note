var webpack = require('webpack');
var path = require('path');

var OUTPUT_DIR = path.resolve(__dirname, './public/js/build/');

var API_URL = {
    production: JSON.stringify('prod-url'),
    development: JSON.stringify('dev-url')
}

var environment = process.env.NODE_ENV === 'production' ? 'production' : 'development';


var config = {
    entry: './resources/assets/js',
    output: {
        path: OUTPUT_DIR,
        filename: 'reactapp.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'API_URL': API_URL[environment]
        })
    ],
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

