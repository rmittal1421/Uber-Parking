const Dotenv = require('dotenv-webpack');

const main = {
    entry: './src/index.js',
    target: 'node',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
        ]
    },
    plugins: [
        new Dotenv()
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/build',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './build',
        historyApiFallback: true,
        port: 3002
    }
}


module.exports = main