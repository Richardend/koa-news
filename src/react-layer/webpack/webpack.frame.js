/**
 * Created by mrlee on 2018/4/16.
 */

let path = require('path');

let DEST_PATH = path.resolve(__dirname, '../frame');
console.log(path)
const webpackConfig = {
    entry: {
        'yoyo': ['react', 'react-dom'],
        'index': './src/index.jsx'
    },
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
    mode: 'production'
}

module.exports = webpackConfig;
