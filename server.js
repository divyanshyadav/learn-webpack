const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config')

const compiler = webpack(config)
const app = express()

app.use(webpackDevMiddleware(compiler))
app.use(webpackHotMiddleware(compiler));

const port = process.env.PORT
app.listen(port, () => {
    console.log(`listening on port ${port}!\n`);
})