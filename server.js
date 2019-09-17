const express = require('express')
const webpack = require('webpack')
const open = require('open');

const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./webpack.config')

const app = express()
const compiler = webpack(webpackConfig)

app.use(webpackDevMiddleware(compiler))
app.use(webpackHotMiddleware(compiler));

const port = process.env.PORT

app.listen(port,  () => {
    open(`http://localhost:${port}`)
})