import { expect } from 'chai';
import { default as Web3 } from 'web3';

// Component.
import { onWindowLoad } from './index';

describe('index', () => {
    const web3Host = 'http://127.0.1:8545';

    beforeEach(() => {
        window.web3 = new Web3(new Web3.providers.HttpProvider(web3Host)); // Using Ganache client.
    });

    afterEach(() => {
        window.web3 = null;
    });

    context('onWindowLoad()', () => {
        it('should wrap the current web3 instance if it is defined', () => {
            onWindowLoad();

            expect(window.web3.currentProvider.host).to.equal(web3Host);
        });
    });
});
