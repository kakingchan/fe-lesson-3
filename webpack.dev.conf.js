var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var buildPath = path.resolve(__dirname, 'dist');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');

module.exports = {
    entry: ['webpack/hot/dev-server', "./public/js/entry.js"],
    output: {
        path: buildPath,
        filename: '[name].[hash:8].js'
    },
    devServer: {
        inline: true,
        port: 8099
    },
    resolve: {
        extensions: ["", ".js"]
            //node_modules: ["web_modules", "node_modules"]  (Default Settings)
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.js$/, exclude: nodeModulesPath, loader: "babel-loader" }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './views/index.html', //html模板路径
            inject: true, //允许插件修改哪些内容，true/'head'/'body'/false,
            hash: false, //为静态资源生成hash值
            minify: { //压缩HTML文件
                removeComments: false, //移除HTML中的注释
                collapseWhitespace: false //删除空白符与换行符
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
};