<template>
    <h1 class="app-header">
        {{ message }}
    </h1>
</template>

<script>
    export default {
        name: 'App',
        data: () => {
            return {
                message: null
            };
        },
        mounted: function () {
            this.message = 'Hello World!';
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
