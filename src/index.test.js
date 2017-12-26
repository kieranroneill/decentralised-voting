import { default as Web3 } from 'web3';

// Component.
import { onWindowLoad } from './index';

describe('index', () => {
    const web3Host = 'http://localhost:8545';

    beforeEach(() => {
        window.web3 = new Web3(new Web3.providers.HttpProvider(web3Host)); // Using Ganache client.
    });

    afterEach(() => {
        window.web3 = null;
    });

    context('onWindowLoad()', () => {
        it('should not wrap the current web3 instance if it is not defined', () => {
            window.web3 = null;

            onWindowLoad();

            expect(window.web3).to.equal(null);
        });

        it('should wrap the current web3 instance if it is defined', () => {
            onWindowLoad();

            expect(window.web3.currentProvider.host).to.equal(web3Host);
        });

        it('should return a Vue instance', () => {
            const vm = onWindowLoad();

            expect(vm._isVue).to.equal(true);
        });
    });
});
