import HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';
import webpack from 'webpack';
import WebpackNotifierPlugin from 'webpack-notifier';

// Config.
import { distPath, entry, extensions, loaders, plugins, srcPath, title } from './common.config';

const localhost = 'http://localhost';
const port = 1337;

export default {
    devServer: {
        contentBase: distPath,
        historyApiFallback: true,
        port
    },

    devtool: 'source-map',

    entry: [
        `webpack-dev-server/client?${localhost}:${port}`,
        'webpack/hot/only-dev-server'
    ].concat(entry),

    module: {
        rules: loaders
    },

    output: {
        filename: 'bundle.js',
        path: distPath,
        publicPath: '/'
    },

    plugins: plugins.concat([
        new HtmlWebpackPlugin({
            inject: 'body',
            minify: false,
            template: resolve(srcPath, 'index.hbs'),
            title,
        }),
        new webpack.HotModuleReplacementPlugin(),
        new WebpackNotifierPlugin({
            title: 'UNICORN POWER_UP!!!',
            contentImage: resolve(__dirname, 'unicorn.png'),
            alwaysNotify: true
        })
    ]),

    resolve: {
        extensions
    }
};
