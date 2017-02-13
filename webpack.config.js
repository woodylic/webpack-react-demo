const path = require('path');
const webpack = require('webpack');

module.exports = {

    context: path.resolve(__dirname, './src'),
    entry: { app: './index.js' },
    output: {
        path: path.resolve(__dirname, './public/dist'),
        filename: '[name].bundle.js'
    },    

    module: {
        loaders: [{
            //使用babel-loader处理*.jsx文件，翻译ES2015和react语法。
            test: /\.js?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader'
        }]
    },

    devServer: {
        contentBase: path.resolve(__dirname, './public'),    //本地服务器加载页面所在目录        
        hot: true
    }
};
