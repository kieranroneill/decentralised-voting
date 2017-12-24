<template>
    <h1 class="app-header">{{ message }}</h1>
</template>

<script>
    export default {
        name: 'app',
        data: () => {
            return {
                message: 'Hello World!'
            };
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
