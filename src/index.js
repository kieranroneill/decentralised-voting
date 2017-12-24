import Vue from 'vue';

// General styles.
import './styles/index.scss';

// Components.
import App from './components/App/App';

new Vue({
    el: '#app',
    template: '<App />',
    components: { App }
});
