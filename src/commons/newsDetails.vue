<template>
  <div class="news-details">
    
  </div>
</template>

<script>
export default {
  name: 'newsDetails',
  data () {
    return {
      msg: '',
      id:''
    }
  },
  mounted() {
    //url里传递过来的新闻唯一id this.$route.params
    console.log(this.$route.params);
    this.$axios.post("https://www.easy-mock.com/mock/5d303349a6ecd97aa68d2ab7/example/test").then(response => {
        console.log(response.data.data);
        
      })
      .catch(response => {
        console.log(response);
      });
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
