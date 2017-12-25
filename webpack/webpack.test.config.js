import nodeExternals from 'webpack-node-externals';

// Common config.
import { alias, extensions } from './common.config';

export default {
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

    resolve: {
        alias,
        extensions
    }
};
