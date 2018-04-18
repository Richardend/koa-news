/**
 * Created by mrlee on 2018/4/17.
 */
let path = require('path');

const DIST_PATH = path.join(__dirname, './dist');
const SRC_PATH = path.join(__dirname, '_src/jade/');
module.exports = {
    mode: 'production',
    entry: [SRC_PATH + 'pages/home.pug'],
    output: {
        path: DIST_PATH,
        filename: '[name]'
    },
    module: {
        rules: [
            {
                test: /\.(jade|pug)?$/,
                exclude: /(node_modules)/,
                loaders: ['html-loader', 'pug-html-loader']
            }
        ]
    }
}
