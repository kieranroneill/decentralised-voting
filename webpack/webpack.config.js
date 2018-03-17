import CleanPlugin from 'clean-webpack-plugin';
import ExtractTextPlugin, { extract } from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { join, resolve } from 'path';
import webpack from 'webpack';

// Common config.
import { distPath, entry, extensions, loaders, plugins, srcPath, title } from './common.config';

export default {
    devtool: false,

    entry,

    module: {
        rules: loaders.concat([
            // Style loaders.
            {
                test: /\.scss$/,
                use: extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'sass-loader']
                })
            }
        ])
    },

    output: {
        path: distPath,
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    },

    plugins: plugins.concat([
        new CleanPlugin(['dist'], {
            root: join(__dirname, '..')
        }),
        new ExtractTextPlugin({
            filename: 'styles.[hash].css',
            allChunks: true
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
