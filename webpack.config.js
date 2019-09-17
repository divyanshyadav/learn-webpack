const path = require('path');

/*
############################## 
########## Variables #########
############################## 
*/

const env = process.env.ENV || 'development'
const buildsFolderName = 'builds'
const distName = env === 'production' ? 'dist' : 'dev'

/*
############################## 
########## Loaders ###########
############################## 
*/

const babelLoader = {
    test: /\.m?js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env']
        }
    }
}

const cssLoader = {
    test: /\.css$/i,
    use: [
        'style-loader', // Take the output string generated by the below css-loader and put it inside the style tag
        'css-loader'    // Helps webpack to collect CSS from all the css files referenced in your application
    ]
}

/*
############################## 
########## Plugins ###########
############################## 
*/

const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

class LogBuildStartPlugin {
    apply(compiler) {
        compiler.hooks.run.tap('LogBuildStartPlugin', compilation => {
            console.log('Building...')
        })
    }
}

/*
############################## 
####### Configuration ########
############################## 
*/

module.exports = {
    mode: env,
    entry: [
        './src/index.js',
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'
    ],
    module: {
        rules: [
            babelLoader,
            cssLoader,
        ]
    },
    plugins: [
        new LogBuildStartPlugin(),
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            title: 'Learn Webpack',
            template: './src/index.ejs'
        }),

        // for hot reloading
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, buildsFolderName, distName)
    }
}