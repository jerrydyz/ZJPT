<template>
  <div class="common-footer">
    <div class="copy-right">
      <div>版权所有：河南省继续教育学会</div>
      <div>地址：郑州市博学路277号正商学府广场A座四层 邮政编码：450000</div>
      <div>
        Copyright © 2017 jxjyedu.club All Rights Reserved丨
        <a
          href="http://www.beian.miit.gov.cn/"
        >豫ICP备0506172869号-2</a>
      </div>
    </div>
    <span class="btn-top" @click="toPersonal"></span>
  </div>
</template>

<script>
export default {
  name: "common-footer",
  data() {
    return {
      msg: "footer"
    };
  },
  methods:{
    toPersonal:function(){
      if(localStorage.getItem("login1")==1){
        this.$router.push({ path: '/my' })
      }else{
        this.$router.push({ path: '/login' })
      }
        
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.common-footer {
  width: 100%;
  height: 140px;
  background-color: #000;
  margin-top: 40px;
  text-align: center;
  .copy-right {
    width: 1200px;
    margin: 0 auto;
    color: #898989;
    font-size: 12px;
    line-height: 35px;
    padding-top: 20px;
    a{color: #898989;}
  }
  .btn-top {
    width: 56px;
    height: 56px;
    position: fixed;
    right: 0;
    top: 400px;
    background-image: url(/static/images/index/btn-top.png);
    cursor: pointer;
    z-index: 2;
}
}
</style>
