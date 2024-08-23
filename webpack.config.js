const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.ts', // Your entry point file
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.js'], // Resolve both .ts and .js files
    },
    module: {
        rules: [
            {
                test: /\.ts$/, // Apply ts-loader to .ts files
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    devServer: {
        compress: true,
        port: 9000,
        hot: true,
        liveReload: true,
        open: true,
    },
};
