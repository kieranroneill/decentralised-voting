import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import { join, resolve } from 'path';
import webpack from 'webpack';

// Configuration.
import packageJson from '../package.json';

const uriLimit = 50000; // 50kb

export const distPath = join(__dirname, '..', 'dist');
export const srcPath = join(__dirname, '..', 'src');
export const title = 'Decentralised Voting System';

export const alias = {
    vue: 'vue/dist/vue.common.js',
};
export const entry = [
    resolve(srcPath, 'index.js')
];
export const extensions = ['.js', '.vue'];
export const loaders = [
    // HTML loaders.
    {
        test: /\.hbs$/,
        use: 'handlebars-loader'
    },

    // Script loaders.
    {
        test: /.js$/,
        use: 'babel-loader'
    },
    {
        test: /\.vue$/,
        use: 'vue-loader'
    },

    // Style loaders.
    {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
    },

    // Image loaders.
    {
        test: /\.jpg$/,
        loader: 'url-loader',
        options: {
            limit: uriLimit,
            mimeType: 'image/png'
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
            mimeType: 'image/svg'
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
    })
];
