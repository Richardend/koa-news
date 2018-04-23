/**
 * Created by mrlee on 2018/4/16.
 */
let path = require('path');

let DEST_PATH = path.resolve(__dirname, '../dist');
let entryConfig = require('./entry.config');
const CleanPlugin = require('clean-webpack-plugin');

const webpackConfig = {
    /**
     * 不管用何种结构定义entry, 都要指向确定的文件.
     * */
    entry: entryConfig,
    output: {
        path: DEST_PATH,
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
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
            root: path.resolve(__dirname, '../dist'),
            verbose: true,
            dry: false
        })
    ],
    mode: 'production'
}

module.exports = webpackConfig;
