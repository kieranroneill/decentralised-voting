import Vue from 'vue';
import { default as Web3 } from 'web3';

// General styles.
import './styles/index.scss';

// Components.
import App from './components/App/App';

export function onWindowLoad() {
    if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
    }
    else {
        window.web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));
    }

    return new Vue({
        el: '#app',
        components: { App },
        template: `<App v-bind:is-network-running="${window.web3.isConnected()}" />`
    });
}

window.addEventListener('load', onWindowLoad);
