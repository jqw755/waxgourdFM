<template>
  <div id="app">
    <Loading v-show="$store.state.showLoading"></Loading>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
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
