<template>
  <div class="index">
    <div class="login-news-login">
      <swiper :options="swiperOption" ref="mySwiper" class="myswiper">
        <!-- slides -->
        <swiper-slide><img src="/static/images/index/index-banner1.jpg"></swiper-slide>
        <swiper-slide><img src="/static/images/index/index-banner2.jpg"></swiper-slide>
        <swiper-slide><img src="/static/images/index/index-banner3.jpg"></swiper-slide>
        <swiper-slide><img src="/static/images/index/index-banner4.jpg"></swiper-slide>
        <swiper-slide><img src="/static/images/index/index-banner5.jpg"></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
      </swiper>
    </div>
    <router-link to="" class="procedure-box"></router-link>
    <div class="index-news">
        <news :msg="lawsjson"></news>
        <news :msg="worksjson"></news>
        <news :msg="helpsjson"></news>
    </div>
    
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import news from "@/components/news.vue";
export default {
  name: 'index',
  components: {
    news,
    swiper,
    swiperSlide
  },
  data () {
    return {
      lawsjson:{
          title:'政策法规',
          englishTitle:'POLICIES REGULATIONS',
          path:'/laws',
          list:''
      },
      worksjson:{
          title:'工作动态',
          englishTitle:'WORK DYNAMICS',
          path:'/works',
          list:''
      },
      helpsjson:{
          title:'帮助中心',
          englishTitle:'HELP CENTER',
          path:'/helps',
          list:''
      },
      swiperOption: {
          loop:true,
          autoplay:true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
      },
    }
  },
  mounted() {
    
    this.$axios.post("https://www.easy-mock.com/mock/5d303349a6ecd97aa68d2ab7/example/test").then(response => {
        console.log(response.data.data);
        this.lawsjson.list=response.data.data;
        this.worksjson.list=response.data.data;
        this.helpsjson.list=response.data.data;
        
      })
      .catch(response => {
        console.log(response);
      });
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .index{width: 1200px;margin: 40px auto 0;font-size: 0;
        .login-news-login{margin-top: 0 auto;display: flex;justify-content: space-between;
            .myswiper{width: 515px;height: 334px; margin: 0;
              .swiper-slide{
                img{width: 515px;height: 334px;}
              }
              .swiper-pagination-bullets {bottom: 20px;
                .swiper-pagination-bullet{width: 15px;height: 15px;}
                .swiper-pagination-bullet-active{background-color: red;}
              }
            } 
        }
        .procedure-box{display: block; width: 1200px; height: 76px;background-image: url(/static/images/index/procedure.png);margin: 40px auto;}
        .index-news{width: 1200px;height: 100%;display: flex;justify-content: space-between;overflow: hidden;}
    }
    
</style>
