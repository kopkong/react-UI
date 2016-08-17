/**
 * Created by colin on 16/7/7.
 */

var path = require('path'),
    webpack = require('webpack'),
    autoprefixer = require('autoprefixer'),
    HTMLPlugin = require('html-webpack-plugin'),
    // argv = JSON.parse(process.env.npm_config_argv).cooked[2].replace('--',''),
    outputFolder = path.resolve(__dirname, 'build'),
    NODE_MODULE_PATH = /node_modules/,
    sourceFolder = path.resolve(__dirname, 'src');

console.log(process.env.NODE_ENV);
console.log(sourceFolder);

module.exports = {
    
    appOutputFolder : outputFolder,

    appSourceFolder: sourceFolder,

    devtool: 'source-map',

    entry: path.resolve(__dirname, 'src', 'app.js'),
    
    plugins: [
        new HTMLPlugin({
            template: path.resolve(sourceFolder, 'index.tpl.html'),
            filename: 'index.html'
        }),
        
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ],
    
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: sourceFolder,
                query: {
                    plugins: ['transform-decorators-legacy'],
                    presets: ['es2015', 'react', 'stage-1']
                }
            },
            {
                test: /\.css$/,
                loaders: ['style','css','postcss'],
                include: sourceFolder
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?name=images/[name].[ext]'
                ]
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff&prefix=fonts',
                include: sourceFolder
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream&prefix=fonts',
                include: sourceFolder
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/vnd.ms-fontobject&prefix=fonts',
                include: sourceFolder
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml&prefix=fonts',
                include: sourceFolder
            }
        ]
    },

    postcss: function () {
        return [autoprefixer];
    }
};