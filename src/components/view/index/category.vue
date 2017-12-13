<template>
    <section class="category_wrap">
        <div class="category_list">
            <div class="cate_ul">
                <router-link :to="`category?id=`+item.id" class="cate_list sprites s3" v-for="( item,i) in cateArr"
                             :key="i">{{item.title}}
                </router-link>
            </div>
        </div>
        <div class="recommend_list">
            <ul class="recommend_ul">
                <li class="recommend_li" v-for="(item,i) in recommends" :key="i">
                    <p class="re_img">
                        <img :src="item.album.cover.urls[0].url" alt="">
                    </p>
                    <p class="re_info">
                        <span>{{item.album.name}}</span>
                        <span>所属专辑：{{item.album.categoryName}}</span>
                        <span>详细：{{item.album.desc}}</span>
                    </p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
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
                ],
                recommends: []
            }
        },
        mounted: function () {
            this.getData();
            this.kl();
        },
        methods: {
            getData() {
                const self = this;
                let cateLen = self.cateArr.length,
                    random = parseInt(Math.random() * 10 + 0, cateLen),
                    albumId = self.cateArr[random].id;
                self.$api.get('/api', {type: 'album', id: albumId, page: 1, page_size: 3}).then((res) => {
                    let data = res.data.data;
                    self.recommends = data.albumInfoList;
//          console.log(self.recommends)
                }).catch(e => alert(e))
            }
        }
    }
</script>
