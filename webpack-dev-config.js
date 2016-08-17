/**
 * Created by colin on 16/7/7.
 */

var path = require('path'),
    webpack = require('webpack'),
    COMMON = require('./webpack-common-config');

module.exports = Object.assign(COMMON, {

    entry: [
        'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true',
        COMMON.entry
    ],

    output: {
        filename: 'bundle.js',
        path: '/',
        publicPath: '/'
    },

    module: {
        loaders: COMMON.module.loaders.concat([
            {
                test: /\.s?css$/,
                loaders: ['style', 'css', 'postcss','sass'],
                exclude: /node_modules/
            }
        ])
    },

    plugins : COMMON.plugins.concat([
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
        ])

});