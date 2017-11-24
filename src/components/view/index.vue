<template>
    <div class="index_container">
        index
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        mounted: function () {
            this.$api.post('/api', {type: 'album', id: 1}).then((res) => {
                console.log(res)
            }).catch(e => alert(e))
        },
        methods: {}
    }
</script>

<style lang="scss">
    @import '../style/index';
</style>
