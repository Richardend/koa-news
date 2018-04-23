/**
 * Created by mrlee on 2018/4/16.
 */

let path = require('path');

//let BASE_PATH = path.resolve(__dirname, '../');
let DEST_PATH = path.resolve(__dirname, '../dest');
let entryConfig = require('./entry.config');
const CleanPlugin = require('clean-webpack-plugin');
const webpackConfig = {
    devtool: 'cheap-module-source-map',
    entry: entryConfig,
    output: {
        path: DEST_PATH,
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    externals: [
        {
            //'react': true,
            //'react-dom': true
        }
    ],
    module: {
        rules: [
            {
                test: /\.(jsx|js)?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'es2015', 'stage-3', 'react'
                        ]
                    }
                }
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                common: {
                    chunks: 'initial',
                    name: 'common',
                    minChunks: 2,
                    maxInitialRequests: 5,
                    minSize: 0
                },
                vendor: {
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'vendor',
                    priority: 10,
                    enforce: true
                }
            }
        }
    },
    plugins: [
        new CleanPlugin(['*.*'], {
            root: path.resolve(__dirname, '../dest'),
            verbose: true,
            dry: false
        })
    ],
    mode: 'development'
}

module.exports = webpackConfig;
