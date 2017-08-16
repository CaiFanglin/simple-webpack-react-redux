var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, './src/js/index.jsx'), // 相对路径部分使用./的形式，若直接写的话，可能会从node_modules里面去找文件
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './build')
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css',
                include: path.resolve(__dirname, './src/css')
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, './src/js')
            }
        ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: "simple-react-redux"
        })
    ]
}