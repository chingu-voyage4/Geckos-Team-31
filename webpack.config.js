const path = require('path');

module.exports = {
    entry: './src/entry.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public/js'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    watch: true
}