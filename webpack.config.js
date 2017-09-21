var path = require('path')

var buildPath = path.resolve(__dirname, 'dist');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');

module.exports = {
    entry: "./public/js/entry.js",
    output: {
        path: buildPath,
        filename: "bundle.js"
    },
    resolve: {
        extensions: ["", ".js"]
            //node_modules: ["web_modules", "node_modules"]  (Default Settings)
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ],
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader?optional=runtime&stage=0', //babel模块相关的功能请自查，这里不做介绍
            exclude: [nodeModulesPath]
        }]
    }
};