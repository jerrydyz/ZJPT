<template>
  <div class="jointest">
      <div class="peixun-title">
        <span class="on">参加考试</span>
      </div>
      <div class="test-content-box">
        <div class="test-title-box">
          <span>试卷名称</span>
          <span>考试时间</span>
          <span>分数</span>
          <span>操作</span>
        </div>
        <div class="test-list-box">
          <div class="test-item">
            <span class="span1">2019年Python试卷</span>
            <span class="span2">2019-07-17 - 2019-12-18</span>
            <span class="span3">100.0</span>
            <span class="span4"><a href="/index.php?c=exams&amp;m=Index&amp;a=examsroom&amp;paper_id=18&amp;joinType=2">去考试</a></span>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "jointest",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.jointest{width: 950px;display: flex;flex-direction: column;}
.peixun-title{width: 100%;height: 55px;background-color: #fafafa;margin-bottom: 20px;}
.peixun-title span{font-size: 18px;margin-left: 20px;line-height: 55px;color:#0c69f5; border-bottom: 2px solid #0c69f5;}
.test-content-box{width: 950px;background-color: #fafafa;}
.test-content-box .test-title-box{width: 910px;;height: 35px;background-color: #138bef;display: flex;justify-content: space-between;padding:0 20px 0 20px;}
.test-content-box .test-title-box span:nth-child(4){margin-left: 15px;}
.test-content-box .test-title-box span{display: block;color: #f3faff;line-height: 35px;font-size: 14px;}
.test-content-box .test-title-box span:nth-child(1){width:270px;}
.test-content-box .test-list-box{width: 950px;}
.test-content-box .test-list-box .test-item{width: 910px;padding:0 20px 0 20px;display: flex;justify-content: space-between;}
.test-content-box .test-list-box .test-item:nth-child(2n-1){background-color: #fff;}
.test-content-box .test-list-box .test-item span{display: block;color: #868686;line-height: 42px;font-size: 14px;}
.test-content-box .test-list-box .test-item .span1{width:350px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
.test-content-box .test-list-box .test-item .span2{width:280px;text-align: center;}
.test-content-box .test-list-box .test-item .span3{width:150px;text-align: center;margin-right: 10px;}
.test-content-box .test-list-box .test-item .span4{width:150px;text-align: right;}
.test-content-box .test-list-box .test-item .test-span1{width:330px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
.test-content-box .test-list-box .test-item .test-span2{width:175px;text-align: center;}
.test-content-box .test-list-box .test-item .test-span3{width:120px;text-align: center;}
.test-content-box .test-list-box .test-item .test-span4{width:200px;text-align: center;margin-right: 10px;}
.test-content-box .test-list-box .test-item .test-span5{text-align: right;}
.test-content-box .test-list-box .test-item .test-span5 a{color:#138bef;}
.test-content-box .test-list-box .test-item .test-span5:hover a{color:#FB0000;}

</style>
