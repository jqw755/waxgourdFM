<template>
  <section class="banner_wrap">
    <swiper :options="banner.swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(item,i) in banner.images" :key="i">
        <img :src="item.img" :alt="item.info" class="banner_img">
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  export default{
    data(){
      return {
        banner: {
          swiperOption: {
            // 所有的参数同 swiper 官方 api 参数
            autoplay: true,
            direction: 'horizontal',
            effect: "effect",
            loop: true
          },
          images: [
            {
              img: '/src/components/image/index/banner/banner_01.jpg',
              info: '王珞丹'
            },
            {
              img: '/src/components/image/index/banner/banner_02.jpg',
              info: '王牌汇'
            },
            {
              img: '/src/components/image/index/banner/banner_03.jpg',
              info: '张震讲鬼故事'
            },
            {
              img: '/src/components/image/index/banner/banner_04.jpeg',
              info: '百态王者'
            }
          ]
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>
