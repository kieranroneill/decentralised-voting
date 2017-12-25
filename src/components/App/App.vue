<template>
    <h1 class="app-header">
        {{ message }}
    </h1>
</template>

<script>
    import { default as Web3 } from 'web3';

    export default {
        name: 'App',
        data: function () {
            return {
                message: null
            };
        },

        // Life cycle methods.
        mounted: function () {
            window.addEventListener('load', this.onLoadListener);

            this.message = 'Hello World!';
        },
        destroyed: function () {
            window.removeEventListener('load', this.onLoadListener);
        },

        // Methods.
        methods: {
            onLoadListener: function () {
                if (!window.web3) {
                    return; // TODO: handle no Ethereum network running.
                }

                window.web3 = new Web3(window.web3.currentProvider);
            }
        }
    };
</script>

<style lang="scss" scoped>
    .app {
        &-header {
             color: red;
         }
    }
</style>
