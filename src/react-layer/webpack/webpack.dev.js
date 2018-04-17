/**
 * Created by mrlee on 2018/4/16.
 */

let path = require("path");

let BASE_PATH = path.resolve(__dirname, "../");
let DEST_PATH = path.resolve(__dirname, "../dest");
console.log(path.resolve(__dirname, "../node_modules"))
const webpackConfig = {
    devtool: 'cheap-module-source-map',
    /**
     * 不管用何种结构定义entry, 都要指向确定的文件.
     * */
    entry: "./src/index.jsx",
    output: {
        path: DEST_PATH,
        filename: "app.bundle.js"
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    /*
    externals: [
        {
            'react': true,
            'react-dom': true
        }
    ],*/
    module: {
        rules: [
            {
                test: /\.(jsx|js)?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            'es2015', 'stage-3', 'react'
                        ]
                    }
                }
            }
        ]
    },
    mode: "development"
}

module.exports = webpackConfig;
