<template>

  <div class="news-details">
    <div class="nav-tips">
        <span>您所在的当前位置：</span>
        <span>首页</span>
        <span> &gt; 新闻资讯</span>
        <span> &gt; 新闻详情</span>
    </div>
    <div v-html="msg"></div>
  </div>
</template>

<script>
import qs from 'qs'
export default {
  name: 'newsDetails',
  data () {
    return {
      msg: ''
    }
  },
  mounted() {
    let that=this;
    //url里传递过来的新闻唯一id this.$route.params 
    let datanewsid={id:this.$route.params.newsId};
    this.$axios.post("http://jixujiaoyu_api.songlongfei.club/news/get_contents",qs.stringify(datanewsid)).then(response => {
        console.log(response.data);
        console.log(response.data.data.contents);
        if(response.data.status=="ok"){
          that.msg=response.data.data.contents;
        }
      })
      .catch(response => {
        console.log(response);
      });
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .news-details{width: 1200px;margin: 0 auto;min-height: 520px;}
  .news-details .nav-tips{margin-top: 15px;}
  .news-details .nav-tips span{font-size: 16px}
</style>
