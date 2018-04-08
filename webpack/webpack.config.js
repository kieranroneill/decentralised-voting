import CleanPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { join, resolve } from 'path';
import webpack from 'webpack';

// Common config.
import { buildPath, entry, extensions, loaders, plugins, srcPath, title } from './common.config';

export default {
    devtool: false,

    entry,

    module: {
        rules: loaders
    },

    output: {
        path: buildPath,
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    },

    plugins: plugins.concat([
        new CleanPlugin([buildPath], {
            root: join(__dirname, '..')
        }),
        new HtmlWebpackPlugin({
            inject: 'body',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                minifyJS: true,
                minifyCSS: true
            },
            template: resolve(srcPath, 'index.hbs'),
            title
        }),
        new webpack.optimize.MinChunkSizePlugin({
            minChunkSize: 50000, // 50kb
        }),
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            compress: {
                warnings: false
            },
            sourceMap: false,
            mangle: true
        })
    ]),

    resolve: {
        extensions
    }
};
