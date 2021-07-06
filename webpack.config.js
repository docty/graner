var path = require('path');
//var nodeExternals = require('webpack-node-externals');
module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './middleware/app.js') 
    },
    // target: "node",
    // externals: [nodeExternals()],
    output: {
        filename: 'graner.js',
        path: path.resolve(__dirname, 'build')
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules',
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}