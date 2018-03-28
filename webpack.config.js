const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

let DIST_DIR = path.resolve(__dirname, "dist");
let SRC_DIR = path.resolve(__dirname, "src");

let config = {
    entry: SRC_DIR + "/app/index.js",
    plugins: [
        new HTMLWebpackPlugin({
            title: 'ReactJS Basics',
            template: SRC_DIR + '/index.html',
            filename: '../index.html',
            inject: 'body'
        })
    ],
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "app/"
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }
        ]
    },
    devServer: {
        contentBase: DIST_DIR,
        port: 4000,
        open: true
    }

};

module.exports = config;
