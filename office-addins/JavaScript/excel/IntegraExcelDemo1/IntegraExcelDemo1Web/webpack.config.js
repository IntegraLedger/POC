var path = require('path');
var webpack = require('webpack');

var config = {
    context: __dirname,
    entry: {
        app: '.\\Home.jsx'
    },
    output: {
        path: __dirname + '\\dist',
        filename: 'bundle.js'
    },
    module: {
        /*
        rules: [
            {
                test: /\.js$/,
                exclude: ['node_modules'],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ["transform-react-jsx"]
                    }
                }
            }
        ]
        */

        rules: [
            {
                // JavaScript
                test: /\.jsx?$/,
                enforce: "pre",
                loader: 'eslint-loader',
                exclude: /node_modules/,
                options: {
                    failOnWarning: false,
                    failOnError: true
                }
            },
        
            {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            /*
            include: [
                path.resolve(__dirname, '../src')
            ]
            */
            query:
            {
                presets:
                    ["react", "es2015"]
            }

            /*,
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: [
                    path.resolve(__dirname, '../src')
                ]
            }*/
        }]
    }
}

module.exports = config;
