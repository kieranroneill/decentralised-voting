<template>
    <h1 class="app-header">Hello World!</h1>
</template>

<script>
    //import MetaCoin from '../../contracts/MetaCoin/MetaCoin.sol';

    export default {
        name: 'App',
        props: {
            isNetworkRunning: { // TODO: handle no Ethereum network running.
                type: Boolean,
                default: false
            }
        },
        data: function () {
            return {
                metaCoinContract: null
            };
        },

        // Life cycle methods.
        mounted: function () {
            if (this.isNetworkRunning) {
                this.metaCoinContract = MetaCoin;

                this.metaCoinContract.setProvider(window.web3.currentProvider);
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
