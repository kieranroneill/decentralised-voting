import { join } from 'path';

export default {
    contracts_build_directory: join(__dirname, 'dist'),

    migrations_directory: join(__dirname, 'src', 'migrations'),

    networks: {
        development: {
            host: 'localhost',
            port: 8545,
            network_id: '*' // Match any network id
        }
    }
};
