import { createElement } from 'react';
import { render } from 'react-dom';
import { default as Web3 } from 'web3';

// General styles.
import './styles/index.scss';

// Components.
import App from './App';

export function onWindowLoad() {
    const rootElement = document.createElement('main');

    if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
    }
    else {
        window.web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));
    }

    document.body.append(rootElement);

    return render(createElement(App, { isNetworkRunning: window.web3.isConnected() }), rootElement);
}

window.addEventListener('load', onWindowLoad);
