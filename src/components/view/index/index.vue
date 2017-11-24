<template>
    <div class="index_container">
        <Guide></Guide>
    </div>
</template>

<script>
    import Guide from './guide.vue'
    export default {
        data() {
            return {}
        },
        mounted: function () {
//            this.$api.get('/api', {type: 'album', id: 1}).then((res) => {
//                console.log(res.data.data)
//            }).catch(e => alert(e))
        },
        methods: {},
        components:{
            Guide
        }
    }
</script>

<style lang="scss">
    @import '../../style/index/index';
</style>
