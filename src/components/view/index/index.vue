<template>
  <div class="index_container">
    <Logo></Logo>
    <Banner></Banner>
    <Category></Category>
  </div>
</template>

<script>
  import Logo from './logo.vue'
  import Banner from './banner.vue'
  import Category from './category.vue'
  export default {
    data() {
      return {}
    },
    mounted: function () {

    },
    methods: {},
    components: {
      Logo, Banner,Category
    }
  }
</script>

<style lang="scss">
  @import '../../style/index/index';
</style>
