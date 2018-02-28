require('babel-register');
require('babel-polyfill');

const path = require('path');

module.exports = {
    contracts_directory: path.join(__dirname, 'src', 'contracts'),

    contracts_build_directory: path.join(__dirname, 'dist', 'contracts'),

    migrations_directory: path.join(__dirname, 'migrations'),

    networks: {
        development: {
            host: '127.0.0.1',
            port: 8545,
            network_id: '*' // Match any network id
        }
    }
};
