import { createElement } from 'react';
import { render } from 'react-dom';
import { default as Web3 } from 'web3';

// General styles.
import './styles/index.scss';

// Components.
import App from './components/App/App';

export function onWindowLoad() {
    const appElement = document.createElement('div');

    if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
    }
    else {
        window.web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));
    }

    appElement.className = 'app';

    document.body.append(appElement);

    return render(createElement(App, { isNetworkRunning: window.web3.isConnected() }), appElement);
}

window.addEventListener('load', onWindowLoad);
