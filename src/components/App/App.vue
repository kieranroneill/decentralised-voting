<template>
    <div>
        <h1 class="app-header">Hello World!</h1>
        <p v-if="isNetworkRunning">Network connected!</p>
        <p v-else>Network not connected!</p>
    </div>
</template>

<script>
    import Ballot from '../../contracts/Ballot.sol';

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
                // this.metaCoinContract = Voting;
                //
                // this.metaCoinContract.setProvider(window.web3.currentProvider);
                //
                // console.log(Voting);
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
