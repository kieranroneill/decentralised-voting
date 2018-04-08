import React from 'react';
import ReactDom from 'react-dom';
import { default as Web3 } from 'web3';

// Module.
import { onWindowLoad } from './index';

// Components.
import App from './App';

describe('index', () => {
    const scope = {
        createElementStub: null,
        renderStub: null
    };
    const web3Host = 'http://127.0.1:8545';

    beforeEach(() => {
        window.web3 = new Web3(new Web3.providers.HttpProvider(web3Host)); // Using Ganache client.

        scope.createElementStub = stub(React, 'createElement');
        scope.renderStub = stub(ReactDom, 'render');
    });

    afterEach(() => {
        window.web3 = null;

        scope.createElementStub.restore();
        scope.renderStub.restore();
    });

    describe('onWindowLoad()', () => {
        test('should wrap the current web3 instance if it is defined', () => {
            onWindowLoad();

            expect(window.web3.currentProvider.host).to.equal(web3Host);
        });

        test('should create an element with to render the React app', () => {
            onWindowLoad();

            expect(document.body.firstChild.className).to.include('app');

            assert.calledWith(scope.createElementStub, App, match.object);
            assert.calledOnce(scope.renderStub);
        });
    });
});
