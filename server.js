/**
 * Created by colin on 16/7/7.
 */


var path = require('path'),
    express = require('express'),
    webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    config = require('./webpack-dev-config'),
    compiler = webpack(config),
    app = express(),
    PORT = 3001;


app.use(express.static(__dirname));

app.use(webpackDevMiddleware(compiler, {
    noInfo: false,
    stats: {
        colors: true,
        cached: false
    },
    publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.listen(PORT, function () {
    console.log('listening ' + PORT);
});