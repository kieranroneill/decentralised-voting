import autoprefixer from 'autoprefixer';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import { join, resolve } from 'path';
import webpack from 'webpack';

// Configuration.
import packageJson from '../package.json';

const uriLimit = 50000; // 50kb

export const buildPath = join(__dirname, '..', 'build', 'renderer');
export const srcPath = join(__dirname, '..', 'src', 'renderer');
export const title = 'Decentralised Voting System';

export const entry = [
    resolve(srcPath, 'index.js')
];
export const extensions = ['.js', '.jsx'];
export const loaders = [
    // HTML loaders.
    {
        test: /\.hbs$/,
        use: 'handlebars-loader'
    },

    // Script loaders.
    {
        test: /.jsx?$/,
        use: 'babel-loader'
    },

    // Style loaders.
    {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
    },

    // Assets loaders.
    {
        test: /\.json$/i,
        use: 'json-loader'
    },
    {
        test: /\.gif/,
        loader: 'url-loader',
        options: {
            limit: uriLimit,
            mimeType: 'image/gif'
        }
    },
    {
        test: /\.jpg/,
        loader: 'url-loader',
        options: {
            limit: uriLimit,
            mimeType: 'image/jpeg'
        }
    },
    {
        test: /\.png$/,
        loader: 'url-loader',
        options: {
            limit: uriLimit,
            mimeType: 'image/png'
        }
    },
    {
        test: /\.svg$/,
        loader: 'url-loader',
        options: {
            limit: uriLimit,
            mimeType: 'image/svg+xml'
        }
    }
];
export const plugins = [
    new FaviconsWebpackPlugin({
        logo: resolve(srcPath, 'favicon.png'),
        title
    }),
    new webpack.DefinePlugin({
        'process.env': {
            APP_VERSION: JSON.stringify(packageJson.version),
            NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'), // Default to development.
        }
    }),
    new webpack.LoaderOptionsPlugin({
        options: {
            postcss: () => [
                autoprefixer({ browsers: ['last 3 versions'] })
            ]
        }
    })
];
