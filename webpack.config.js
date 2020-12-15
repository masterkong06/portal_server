// 
const path = require('path');

module.export = {
    entry: 'server.js',
    output: {
        path: path.resolve('public'), // bundle all the files the app depends on into a bundle.js file in the public directory
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/, // for every file ending in .js use the babel loader on it to transform non-standard javascript.
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
};