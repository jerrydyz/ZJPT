<template>
  <div class="news-details" v-html="msg">
    {{msg}}
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
    this.$axios.post("http://jixujiaoyu_api.songlongfei.club/newspc/get_contents",qs.stringify(datanewsid)).then(response => {
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
  .news-details{width: 1200px;margin: 0 auto;}
</style>
