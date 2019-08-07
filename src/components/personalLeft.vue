<template>
  <div class="personalLeft">
      <div class="user-box">
        <div class="img-box">
          <img style="width: 80px;height: 80px;" src="http://ceshi2.jxjyedu.club/addons/theme/stv2/_static/2019/images/index/man.png" class="user-img" />
          <router-link to="basicinfo"></router-link>
        </div>
        <div class="uesr-name">杜彦召</div>
        <div>
          <b>2019年Python培训</b>
        </div>
        <div class="xueshi-box">
          <div class="xueshi-box-left">
            <div class="alltime">60</div>
            <div class>目标学时</div>
          </div>
          <div class="xueshi-box-right">
            <div class="gettime">60</div>
            <div class>已获学时</div>
          </div>
        </div>
      </div>
      <div class="list-box">
        <div class="list-item-box">
          <div class="one-title-box btn-plan">
            <i class="iconfont icon-remind"></i>
            <span>培训计划</span>
          </div>
          <div class="two-title-box btn-plan-switch">
            <router-link to="pxcourses" class="two-title-item" v-on:click.native="sendMsgToParents1">
              <i class="iconfont icon-text"></i>
              <span>培训课程</span>
            </router-link>
          </div>
        </div>
        <div class="list-item-box">
          <div class="one-title-box btn-course">
            <i class="iconfont icon-file"></i>
            <span>我的课程</span>
          </div>
          <div class="two-title-box btn-course-switch">
            <router-link to="courselist" class="two-title-item" v-on:click.native="sendMsgToParents2">
              <i class="iconfont icon-calendar"></i>
              <span>课程列表</span>
            </router-link>
          </div>
        </div>
        <div class="list-item-box">
          <div class="one-title-box btn-test">
            <i class="iconfont icon-edit_light"></i>
            <span>我的考试</span>
          </div>
          <div class="two-title-box btn-test-switch">
            <router-link to="jointest" class="two-title-item" v-on:click.native="sendMsgToParents3">
              <i class="iconfont icon-edit_light"></i>
              <span>参加考试</span>
            </router-link>
            <router-link to="testrecord" class="two-title-item" v-on:click.native="sendMsgToParents4">
              <i class="iconfont icon-form_light"></i>
              <span>考试记录</span>
            </router-link>
          </div>
        </div>
        <div class="list-item-box">
          <div class="one-title-box btn-order">
            <i class="iconfont icon-news_hot_light"></i>
            <span>我的档案</span>
          </div>
          <div class="two-title-box btn-order-switch" style="display: block;">
            <router-link to="filerecord" class="two-title-item" v-on:click.native="sendMsgToParents5">
              <i class="iconfont icon-text"></i>
              <span>档案记录</span>
            </router-link>
          </div>
        </div>
        <div class="list-item-box">
          <div class="one-title-box btn-order">
            <i class="iconfont icon-pay"></i>
            <span>我的订单</span>
          </div>
          <div class="two-title-box btn-order-switch" style="display: block;">
            <router-link to="allorders" class="two-title-item" v-on:click.native="sendMsgToParents6">
              <i class="iconfont icon-pay"></i>
              <span>全部订单</span>
            </router-link>
          </div>
        </div>
      </div>
    
  </div>
</template>

<script>
export default {
  name: "personalLeft",
  props:[
    "message",
    ],
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods:{
      sendMsgToParents1:function(){
          this.$emit("listenToChildEvent","培训课程");
      },
      sendMsgToParents2:function(){
          this.$emit("listenToChildEvent","课程列表");
      },
      sendMsgToParents3:function(){
          this.$emit("listenToChildEvent","参加考试");
      },
      sendMsgToParents4:function(){
          this.$emit("listenToChildEvent","考试记录");
      },
      sendMsgToParents5:function(){
          this.$emit("listenToChildEvent","档案记录");
      },
      sendMsgToParents6:function(){
          this.$emit("listenToChildEvent","全部订单");
      },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.personalLeft{width: 230px;display: flex;flex-direction: column;}
.personalLeft .user-box{width: calc(100%-40px);padding: 20px;background-color: #fafafa;color: #313131;}
.personalLeft .user-box .img-box{position: relative; margin: 0 auto;width: 76px;height: 76px;}
.personalLeft .user-box .img-box .user-img{display: block; border: 2px solid #808080;border-radius: 76px;}
.personalLeft .user-box .img-box a{display: block;width: 26px;height: 26px;background-image: url(/static/images/personal/xiugai.png);position: absolute;right: 0;bottom: -8px;}
.personalLeft .user-box .uesr-name{font-size: 14px;text-align: center;line-height: 40px;}
.personalLeft .user-box .progress-box{display: flex;justify-content: space-between;height: 16px;font-size: 12px;margin-top: 15px;}
.personalLeft .user-box .progress-box .jindutiao{width: 130px;height: 16px;border: 1px solid #e2e2e2;}
.personalLeft .user-box .progress-box .jindutiao .change{width: 10%;height: 100%;background-color: #138bef;}
.personalLeft .user-box .progress-box .jindutiao .text{position: absolute;right: 4px;top:50%;margin-top: -8px;}
.personalLeft .user-box .xueshi-box{display: flex;justify-content: space-between;margin-top: 25px;}
.personalLeft .user-box .xueshi-box>div{width: 55px;height: 40px;}
.personalLeft .user-box .xueshi-box-left div:nth-child(1){font-size: 18px;line-height: 24px;text-align: center;}
.personalLeft .user-box .xueshi-box-left div:nth-child(2){text-align: center;font-size: 12px;}
.personalLeft .user-box .xueshi-box-right div:nth-child(1){font-size: 18px;line-height: 24px;text-align: center;color:#ef0707;}
.personalLeft .user-box .xueshi-box-right div:nth-child(2){text-align: center;font-size: 12px;}
.personalLeft .list-box{width: calc(100%-40px);padding: 30px 20px;margin-top: 20px;background-color: #fafafa;}
.personalLeft .list-box .list-item-box{width: 190px;padding-bottom: 30px;} 
.personalLeft .list-box .list-item-box .one-title-box{width: 100%;display: flex;align-items: flex-end;}
.personalLeft .list-box .list-item-box .one-title-box i{font-size: 24px;} 
.personalLeft .list-box .list-item-box .one-title-box span{font-size: 18px;margin-left: 10px;}
.personalLeft .list-box .list-item-box .two-title-box{width: 100%;}
.personalLeft .list-box .list-item-box .two-title-box .two-title-item{width: calc(100%-30px);height: 43px; display: flex;align-items: center;margin-top: 25px;cursor: pointer;padding-left: 30px;}
.personalLeft .list-box .list-item-box .two-title-box .two-title-item:hover{background-color: #138bef;color: #fff;}
.personalLeft .list-box .list-item-box .two-title-box .router-link-active{background-color: #138bef;color: #fff;}
.personalLeft .list-box .list-item-box .two-title-box .two-title-item i{font-size: 18px;color:#868686;}
.personalLeft .list-box .list-item-box .two-title-box .two-title-item:hover i{color: #fff;}
.personalLeft .list-box .list-item-box .two-title-box .router-link-active i{color: #fff;}
.personalLeft .list-box .list-item-box .two-title-box .two-title-item span{font-size: 16px;color:#868686;margin-left: 7px;}
.personalLeft .list-box .list-item-box .two-title-box .router-link-active span{color: #fff;}
.personalLeft .list-box .list-item-box .two-title-box .two-title-item:hover span{color: #fff;}


</style>
