<template>
  <keep-alive>
    <div class="my">
    <div class="title">
      <div class="top w clearfix">
        <p class="fl">河南省继续教育学会在线学习平台</p>
        <p class="fr xiaoshou">
          <span class="spn1" @click="more('rate')" >首页</span>
          <span @click="goback">退出</span>
        </p>
      </div>
    </div>
    <div class="content w clearfix">
      <div class="leftcon fl">
        <div class="top">
          <div class="one">
            <img src="../assets/my01.png" alt />
          </div>
          <p class="p1">{{name}}</p>
          <p class="p2">{{id_card}}</p>
          <p class="p3" @click="more('changemsg')">个人设置</p>
        </div>
        <div class="leftbot">
          <ul>
            <li class="clearfix" :class="{active:bgcolor=='allCourses'}" @click="more('allCourses')">
              <i class="iconfont iconshijian fl"></i>
              <span class="fl">全部课程</span>
              <i class="iconfont iconyoujiantou fr"></i>
            </li>
           <li class="clearfix" :class="{active:bgcolor=='packages'}" @click="more('packages')">
               <i class="iconfont iconshijian fl"></i>
              <span  class="fl">课程包</span>
              <i class="iconfont iconyoujiantou fr"></i>
            </li>
           <li class="clearfix" :class="{active:bgcolor=='mykecheng'}" @click="more('mykecheng')">
              <i class="iconfont iconshijian fl"></i>
              <span class="fl">我的课程</span>
              <i class="iconfont iconyoujiantou fr"></i>
            </li>
            <li class="clearfix" :class="{active:bgcolor=='examination'}" @click="more('examination')">
               <i class="iconfont iconshijian fl"></i>
              <span class="fl">参加考试</span>
             <i class="iconfont iconyoujiantou fr"></i>
            </li>
          <li class="clearfix" :class="{active:bgcolor=='examrecord'}" @click="more('examrecord')" >
               <i class="iconfont iconshijian fl"></i>
              <span class="fl">考试记录</span>
              <i class="iconfont iconyoujiantou fr"></i>
            </li>
           <li class="clearfix" :class="{active:bgcolor=='archives'}" @click="more('archives')">
                <i class="iconfont iconshijian fl"></i>
              <span class="fl">档案记录</span>
              <i class="iconfont iconyoujiantou fr"></i>
            </li>
           <li class="clearfix" :class="{active:bgcolor=='allOrder'}" @click="more('allOrder')">
               <i class="iconfont iconshijian fl"></i>
              <span class="fl">我的订单</span>
              <i class="iconfont iconyoujiantou fr"></i>
            </li>
          </ul>
        </div>
      </div>
      <!-- 右侧内容 -->
     <component :is="con" @more="more"></component>
     
    </div>
    <foot></foot>
  </div>
  </keep-alive>
</template>
 
<script>
import rate from '../components/rate';
import changemsg from '../components/changemsg';
import examination from '../components/examination';
import examrecord from '../components/examrecord';
import archives from '../components/archives';
import allOrder from '../components/allOrder';
import mykecheng from '../components/mykecheng';
import foot from '../components/footer';
import packages from '../components/package';
import allCourses from '../components/allCourses';
import detail from '../components/detail';
import qs from 'qs'
export default {
    name:'my',
    data (){
      return{
         con:'rate',//组件名
         bgcolor:'',
         name:'',
         id_card:'',
         uid:'',
         token:''
      }
    },
    created(){
      if(localStorage.getItem('types')){
        this.more( localStorage.getItem('types'))
      }
        this.name= localStorage.getItem('name')
        this.uid= localStorage.getItem('uid')
        this.token=localStorage.getItem('token')
        this.id_card=localStorage.getItem('id_card')
        var leng=this.id_card.length;
        this.id_card = this.id_card.substr(0, 3) + '****' + this.id_card.substr(leng - 4);

    },
    methods:{
      more(val){
        this.con=val
        this.bgcolor=val
        localStorage.setItem('types',this.con)
      },
      //返回按钮
      goback (){
          var that =this
          this.$axios.post('http://jixujiaoyu_api.songlongfei.club/user/logout',
           qs.stringify({
             uid:this.uid,
             token:this.token
           })
          ).then(res =>{
            that.$message.success({message:"退出成功",duration:1600});
            that.clearlocalData();
            setTimeout(() => {
              that.$router.push({ path: 'index' });
            }, 1600);
          })
      },

      //状态为relogin时清除local数据
      clearlocalData:function(){
        localStorage.removeItem("login1");
        localStorage.removeItem("uid");
        localStorage.removeItem("token");
        localStorage.removeItem("sex");
        localStorage.removeItem("name");
        localStorage.removeItem("mobile");
        localStorage.removeItem("id_card");
      },
     

    },
    components:{
       rate,
       changemsg,
       examination,
       examrecord,
       archives,
       allOrder,
       mykecheng,
       foot,
       packages,
       allCourses,
       detail
    },
    // destroyed (){
    //    localStorage.removeItem('token')
    //    localStorage.removeItem('type')
    //    localStorage.removeItem('name')
    //    localStorage.removeItem('id_card')
    //    localStorage.removeItem('uid')
    // }
};
</script>

<style lang="less" scoped>
@family:AlibabaPuHuiTiR;
@family1:MicrosoftYaHei;
.my {
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
  .w {
    width: 1200px;
    margin: 0 auto;
  }
  
  .title {
    width: 100%;
    height: 72px;
    line-height: 72px;
    background-color: #0169cc;
    color: #fff;
    font-size: 28px;
    letter-spacing: 2px;
    .fr {
      font-size: 16px;
      .spn1 {
        margin-right: 45px;
      }
      span{cursor: pointer;}
    }
  }
  .content {
    font-size: 14px;
    margin-top:20px;
    min-height: 680px;
    .leftcon {
      width: 242px;
      margin-right:10px;
      .top{
          width: 100%;
          background-color: #e1f1ff;
          text-align: center;
           padding-top: 20px;
           padding-bottom: 25px;
           box-sizing: border-box;
          .one{
              width: 115px;
              height: 113px;
              margin: 0 auto;
              margin-bottom: 12px;
              box-sizing: border-box;
              img{
                  width: 100%;
                  background-color: transparent;
              }
          }
          .p1{
              font-family: @family;
              font-size:18px;
              color:#1a1a1a;
              font-weight: bold;
              margin-bottom: 15px;
          }
          .p2{
              font-family: @family;
              font-size:14px;
              color:#1a1a1a;
              margin-bottom: 35px;
          }
          .p3{
              width: 140px;
              height: 38px;
              line-height: 38px;
              text-align: center;
              border: 1px solid #51a3ef;
              border-radius:38px;
              background-color: #fff;
              margin: 0 auto;
              color:#51a3ef;
              cursor: pointer;
          }
      }
      .leftbot{
          width: 100%;
          background-color: #fff;
          ul{
              width: 100%;
              li{
              width: 100%;
              height: 45px;
              line-height: 45px;
               font-family: @family;
               font-size:16px;
               color:#1a1a1a;
               letter-spacing: 1px;
               padding: 0 20px;
              box-sizing: border-box;
              cursor: pointer;
                i.fl{
                    margin-right:20px;
                    font-size:20px;
                }
            &.active{
               background-color: #138bef;
               color:#fff;
            }
          }
          } 
         
      }

    }
    // 右侧内容
   

  }
  
}
</style>
