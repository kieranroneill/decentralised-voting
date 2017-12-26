import Vue from 'vue';
import { default as Web3 } from 'web3';

// General styles.
import './styles/index.scss';

// Components.
import App from './components/App/App';

export function onWindowLoad() {
    let isNetworkRunning = false;

    if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);

        isNetworkRunning = true;
    }

    return new Vue({
        el: '#app',
        components: { App },
        template: `<App v-bind:is-network-running="${isNetworkRunning}" />`
    });
}

window.addEventListener('load', onWindowLoad);
