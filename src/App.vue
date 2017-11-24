<template>
    <div id="app">
        <Loading v-show="$store.state.showLoading"></Loading>
        <router-view></router-view>
    </div>
</template>

<script>
    //  loading
    import Loading from './components/view/loading/loading.vue'

    export default {
        name: 'app',
        components: {
            Loading
        }
    }
</script>
