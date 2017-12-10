<template>
  <section class="category_wrap">
    <div class="category_list">
      <ul class="cate_ul">
        <li class="cate_list" v-for="( item,i) in cateArr" :key="i">
          <router-link :to="`category?id=`+item.id">{{item.title}}</router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default{
    data(){
      return {
        cateArr: [
          {
            title: '综艺娱乐',
            id: 1
          },
          {
            title: '情感生活',
            id: 39104
          },
          {
            title: '音乐电台',
            id: 39110
          },
          {
            title: '有声小说',
            id: 39092
          },
          {
            title: '相声曲艺',
            id: 4
          },
          {
            title: '妈咪宝贝',
            id: 39120
          },
          {
            title: '知识干货',
            id: 39126
          },
          {
            title: '历史人文',
            id: 18
          },
          {
            title: '新闻资讯',
            id: 5
          },
          {
            title: '搞笑段子',
            id: 39087
          },
          {
            title: '广播电台',
            id: 39137
          }
        ]
      }
    },
    mounted: function () {
//      this.getData();
    },
    methods: {
      getData(){
        this.$api.get('/api', {type: 'skip_show'}).then((res) => {
          console.log(res.data.data)
        }).catch(e => alert(e))
      }
    }
  }
</script>

<style lang="scss">
  .category_wrap {
    .cate_ul {
      .cate_list {
        display: inline-block;
        width: 25%;
        height: 1.1rem;
        line-height: 1.1rem;
        text-align: center;

      }
    }
  }
</style>
