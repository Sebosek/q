const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: ['@babel/polyfill', './src/main.js']
    },
    output: {
        path: path.resolve(__dirname, "dist", "prod"),
        filename: 'main.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist', "prod"),
        compress: true,
        port: 9000,
        historyApiFallback: true
    },
    devtool: 'source-map',
    plugins: [
        new CopyWebpackPlugin([
            { from: './src/index.html' }
        ])
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};
