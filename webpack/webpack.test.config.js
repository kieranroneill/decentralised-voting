import nodeExternals from 'webpack-node-externals';

// Common config.
import { alias, extensions } from './common.config';

export default {
    devtool: 'inline-cheap-module-source-map',

    externals: [
        nodeExternals()
    ],

    module: {
        rules: [
            // Script loaders.
            {
                test: /.js$/,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader: 'istanbul-instrumenter-loader',
                        query: {
                            esModules: true
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },

            // Asset loader.
            {
                test: /\.json$/i,
                use: 'json-loader'
            },

            // Contract loaders.
            {
                test: /\.sol/,
                use: 'truffle-solidity-loader'
            },

            // Style loaders.
            {
                test: /\.scss$/,
                use: 'null-loader'
            },
            {
                test: /\.css$/,
                use: 'null-loader'
            }
        ]
    },

    output: {
        devtoolModuleFilenameTemplate: '[absolute-resource-path]',
        devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
    },

    resolve: {
        alias,
        extensions
    }
};
