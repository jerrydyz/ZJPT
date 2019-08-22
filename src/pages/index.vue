<template>
  <div class="index">
    <div class="swiper-news-login">
      <swiper :options="swiperOption" ref="mySwiper" class="myswiper" v-if="swiperdata.length>0">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in swiperdata" :key="index" class="slider"><img :src="item.img_url"></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
      </swiper>
      <div class="news-box">
        <div class="news-title-box">
          <div class="news-title-top">
              <div class="news-title">{{newsjson.title}}</div>
              <router-link to="/news" class="more-news">更多>></router-link>
          </div>
          <div class="news-title-bottom">
              <div class="redsqure"></div>
              <div class="english-title">{{newsjson.englishTitle}}</div>
              <div class="ellipsis"></div>
          </div>
        </div>
        <loading v-show="newsjson.state==0"></loading>
        <div class="news-content-box" v-for="item in newsjson.list" :key="item.id" v-show="newsjson.state==1">
          <div class="item">
            <router-link :to="'/newsDetails/' + item.id" >
              <div class="item-title">{{item.title}}</div>
            </router-link>
            <div class="item-time">{{item.time.split(" ")[0]}}</div>
          </div>
        </div>
      </div>
      <div class="login-box" v-show="type">
          <div class="login-title-box">
              <div class="login-title"></div>
          </div>
            <div class="info-box">
                <input type="text" placeholder="请输入身份证号" maxlength="18" class="register_content_input" v-model= "idcard"><br>
                <input type="password" placeholder="请输入密码" class="register_content_input input-pw" v-model="UserPsd"><br>
                <input type="text" placeholder="请输入验证码" maxlength="4" class="yanzhengma_input" @blur="checkLpicma" v-model="picLyanzhengma">
                <input type="button" id="code" @click="createCode"  class="verification1" v-model="checkCode"/> <br>
                <a class="user_login" @click="Login">登录</a>
                <div class="btns-box">
                    <router-link to="/findpw" class="find-pw">找回密码</router-link>
                    <router-link to="/register" class="btn-regin">注册账号</router-link>
                </div>
            </div>
      </div>
      <div class="login-index-success" v-show="!type">
          <img class="user-image" src="/static/images/personal/man.png" v-show="sex==1" />
          <img class="user-image" src="/static/images/personal/women.png" v-show="sex==0"/>
          <div class="user-name">{{name}}</div>
          <div class="title"> </div>
          <div class="btn-personal"><router-link to="/my">个人中心</router-link></div>
          <div class="btn-login"><span @click="logout">退出登陆</span></div>
      </div>
    </div>
    <router-link to="" class="procedure-box"></router-link>
    <div class="index-news">
        <indexnews :msg="lawsjson"></indexnews>
        <indexnews :msg="worksjson"></indexnews>
        <indexnews :msg="helpsjson"></indexnews>
    </div>
    <div class="continue-education">
        <div class="continue-edu-title"></div>
          <div class="year-choose">
              <div class="year-title">培训年度:</div>
              <ul class="year">
                  <li :class="{on:yeartabState==''}" @click="courseYear()">全部</li>
                  <li :class="{on:yeartabState==item}" v-for="(item,index) in kecheng_year" :key="index" @click="courseYear(item)">{{item}}</li>
              </ul>
          </div>
          <div class="course-choose">
              <div class="course-title">课程类型:</div>
              <ul class="course">
                  <li :class="{on:typetabState==''}" @click="courseType()">全部</li>
                  <li :class="{on:typetabState==item.id}" v-for="(item,index) in kecheng_type" :key="index" @click="courseType(item.id)">{{item.name}}</li>
              </ul>
          </div>
          <div class="kinds-choose">
              <div class="kinds-title">课程分类:</div>
              <ul class="kinds">
                  <li :class="{on:categorytabState==''}" @click="courseCategory()">全部</li>
                  <li :class="{on:categorytabState==item.id}" v-for="(item,index) in kecheng_category" :key="index" @click="courseCategory(item.id)">{{item.name}}</li>
              </ul>
          </div>
    </div>
    <div class="course-box">
        <router-link :to="'/courseDetails/' + item.id" v-for="item in courseslist" :key="item.id" class="course-item" >
            <div class="item-img"><img :src="item.img_url"></div>
            <p class="item-name">{{item.title}}</p>
            <div class="item-other">
                <div class="item-time">{{item.kecheng_jie_num}}学时</div>
                <div class="item-teacher">主讲：<span class="teacher-name">{{item.jiangshi.name}}</span></div>
            </div>  
        </router-link>   
    </div>
    <div class="friend-link-box wrap">
        <div class="friend-link-title"></div>
        <div class="links-box">
            <a v-for="(item,index) in linkdata" :key="index" class="item-link" :href="item.href" target="_blank"><img :src="item.img_url"></a>
        </div>
    </div>
    <div class="pop" v-show="popShow">
      <img src="/static/images/index/floatbox.png">
      <span class="btn-close" @click="closePop">X</span>
  </div>
  </div>
</template>

<script>
import $jquery from 'jquery'
import qs from 'qs'
import { Message } from 'element-ui';
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import indexnews from "@/components/indexnews.vue";
export default {
  name: 'index',
  components: {
    indexnews,
    swiper,
    swiperSlide
  },
  data () {
    return {
      newsjson:{
          title:'新闻咨询',
          englishTitle:'NEWS INFORMATION',
          path:'/news',
          state:0,
          list:'',
          
      },
      lawsjson:{
          title:'政策法规',
          englishTitle:'POLICIES REGULATIONS',
          path:'/laws',
          state:0,
          list:''
      },
      worksjson:{
          title:'工作动态',
          englishTitle:'WORK DYNAMICS',
          path:'/works',
          state:0,
          list:''
      },
      helpsjson:{
          title:'帮助中心',
          englishTitle:'HELP CENTER',
          path:'/helps',
          state:0,
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
      idcard:'',
      UserPsd:'',
      picLyanzhengma:'',
      checkCode:'',
      //首页弹窗状态值  true 开启  false 关闭
      popShow:'true',
      //课程列表
      courseslist:'',
      //轮播图
      swiperdata:'',
      //友情链接
      linkdata:'',
      //课程年份
      kecheng_year:'',
      //课程类型
      kecheng_type:'',
      //课程分类
      kecheng_category:'',
      //课程年份参数
      yearid:'',
      //课程类型参数
      typeid:'',
      //课程分类参数
      categoryid:'',
      //yeartabState
      yeartabState:'',
      //yeartabState
      typetabState:'',
      //yeartabState
      categorytabState:'',
      //登陆状态
       type:true,
      //根据性别显示图片
      sex:localStorage.getItem("sex"),
      //name
      name:localStorage.getItem("name"),
      
    }
  },
  
  created(){
    this.createCode();
    if(localStorage.getItem("login1")){
      this.type=false
    }
  },

  mounted() {
    let that = this
    //轮播图
    this.$axios({
      method: 'get',
      url: 'http://jixujiaoyu_api.songlongfei.club/lunbotu/get_lunbotu_list'
    }).then(function (response) {
      if(response.data.status=="ok"){
        console.log("轮播图")
        console.log(response.data)
        that.swiperdata=response.data.data;
      }else{
        
      }
    });
    //友情链接
    this.$axios({
      method: 'get',
      url: 'http://jixujiaoyu_api.songlongfei.club/link/get_list'
    }).then(function (response) {
      if(response.data.status=="ok"){
        console.log("友情链接")
        console.log(response.data)
        that.linkdata=response.data.data;
      }else{
        
      }
    });
    //请求新闻news
    let datanews={type_id:'1',page:'1',num:'7'}
    this.$axios({
      method: 'post',
      url: 'http://jixujiaoyu_api.songlongfei.club/news/get_news_list',
      data: qs.stringify(datanews) 
      }).then(function (response) {
        if(response.data.status=="ok"){
          that.newsjson.state=1;
          console.log("news")
          that.newsjson.list=response.data.data.data
          console.log(response.data.data.data)
        }else{
          
        }
      });
      //请求政策法规laws
    let datalaws={type_id:'2',page:'1',num:'7'}
    this.$axios({
      method: 'post',
      url: 'http://jixujiaoyu_api.songlongfei.club/news/get_news_list',
      data: qs.stringify(datalaws) 
      }).then(function (response) {
        if(response.data.status=="ok"){
          that.lawsjson.state=1;
          console.log("laws")
          that.lawsjson.list=response.data.data.data
          console.log(response.data.data.data)
        }else{
          
        }
      });
      //请求工作动态works
    let dataworks={type_id:'3',page:'1',num:'7'}
    this.$axios({
      method: 'post',
      url: 'http://jixujiaoyu_api.songlongfei.club/news/get_news_list',
      data: qs.stringify(dataworks) 
      }).then(function (response) {
        if(response.data.status=="ok"){
          that.worksjson.state=1;
          console.log("works")
          that.worksjson.list=response.data.data.data
          console.log(response.data.data.data)
        }else{
          
        }
      });
      //请求帮助中心helps
    let datahelps={type_id:'4',page:'1',num:'7'}
    this.$axios({
      method: 'post',
      url: 'http://jixujiaoyu_api.songlongfei.club/news/get_news_list',
      data: qs.stringify(datahelps) 
      }).then(function (response) {
        if(response.data.status=="ok"){
          that.helpsjson.state=1;
          console.log("helps")
          that.helpsjson.list=response.data.data.data
          console.log(response.data.data.data)
        }else{
          
        }
      });
    //获取课程年份 
    this.$axios({
      method: 'get',
      url: 'http://jixujiaoyu_api.songlongfei.club/kecheng/get_kecheng_year',
      }).then(function (response) {
        if(response.data.status=="ok"){
          console.log("课程年份")
          console.log(response.data.data)
          that.kecheng_year=response.data.data;
        }else{
          
        }
      });
     //获取课程类型 
    this.$axios({
      method: 'get',
      url: 'http://jixujiaoyu_api.songlongfei.club/kecheng/get_kecheng_type',
      }).then(function (response) {
        if(response.data.status=="ok"){
          console.log("课程类型")
          console.log(response.data.data)
          that.kecheng_type=response.data.data;
        }else{
          
        }
      });
      //获取课程分类 
    this.$axios({
      method: 'get',
      url: 'http://jixujiaoyu_api.songlongfei.club/kecheng/get_kecheng_category',
      }).then(function (response) {
        if(response.data.status=="ok"){
          console.log("课程分类")
          console.log(response.data.data)
          that.kecheng_category=response.data.data;
        }else{
          
        }
      });
     //获取课程列表 
    let datacourse={year:'2019', type_id:'',category_id:''}
    this.$axios({
      method: 'post',
      url: 'http://jixujiaoyu_api.songlongfei.club/kecheng/get_kecheng_list',
      data: qs.stringify(datacourse) 
      }).then(function (response) {
        if(response.data.status=="ok"){
          console.log("课程列表")
          console.log(response.data.data.data)
          that.courseslist=response.data.data.data;
        }else{
          
        }
      });
      
  },
  methods:{
      // 图片验证码
      createCode(){
          let code = "";    
          var codeLength = 4;//验证码的长度   
          var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',   
           'S','T','U','V','W','X','Y','Z');//随机数   
          for(var i = 0; i < codeLength; i++) {//循环操作   
              var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）   
              code += random[index];//根据索引取得随机数加到code上   
          }   
              this.checkCode = code;//把code值赋给验证码   
      },
      // 失焦验证图和密码
      checkLpicma(){
          this.picLyanzhengma.toUpperCase();//取得输入的验证码并转化为大写         
          if(this.picLyanzhengma == '') {
            this.$message.error({message:"请输入验证码",duration:1600});
          }else if(this.picLyanzhengma.toUpperCase() != this.checkCode ) { //若输入的验证码与产生的验证码不一致时  
            this.$message.error({message:"验证码不正确",duration:1600});
            this.createCode();//刷新验证码   
            this.picLyanzhengma = '';
          }else { //输入正确时  
              return true;
          } 
      },
      
      //用户登录 
      Login(){
        let that=this;
        if(this.idcard==''){
          this.$message.error({message:"身份证号不能为空",duration:1600});
        }else if(!this.idcard.match(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/)){
          this.$message.error({message:"请输入正确的身份证号",duration:1600});
        }else if(this.UserPsd==''){
          this.$message.error({message:"密码不能为空",duration:1600});
        }else if(this.checkLpicma() == true){
          let userinfo={id_card:this.idcard, password:this.UserPsd}
          this.$axios.post("http://jixujiaoyu_api.songlongfei.club/user/login",qs.stringify(userinfo)).then(response => {
            console.log("登陆成功返回信息");
            console.log(response.data);
            if(response.data.status=='ok'){
              console.log("111111")
              localStorage.setItem("uid", response.data.data.uid);
              localStorage.setItem("token", response.data.data.token);
              localStorage.setItem("sex", response.data.data.sex);
              localStorage.setItem("name", response.data.data.name);
              localStorage.setItem("mobile", response.data.data.mobile);
              localStorage.setItem("id_card", response.data.data.id_card);
              localStorage.setItem("login1", "1");
              that.login1=1;
              that.sex=response.data.data.sex;
              that.name=response.data.data.name;
              localStorage.setItem("types", "rate");
              that.$router.push({ path: 'my' });
              
            }else if(response.data.status=='error'){
              this.createCode();//刷新验证码 
              that.$message.error({message:response.data.errormsg,duration:1600});

            }else if(response.data.status=='relogin'){

            }
            
          })
        }
      },
      
      removeInfo(){
        localStorage.removeItem("uid");
        localStorage.removeItem("token");
        localStorage.removeItem("sex");
        localStorage.removeItem("name");
        localStorage.removeItem("mobile");
        localStorage.removeItem("id_card");
      },
      //用户退出 
      logout(){
        let that =this;
        let userinfo={uid:localStorage.getItem("uid"), token:localStorage.getItem("token")}
        this.$axios({
          method: 'post',
          url: 'http://jixujiaoyu_api.songlongfei.club/user/logout',
          data: qs.stringify(userinfo) 
          }).then(function (response) {
            
            if(response.data.status=="ok"){
              that.$message.success({message:"退出成功",duration:1600});
              localStorage.removeItem("login1");
              that.removeInfo();
              that.type=true;
            }else if(response.data.status=="error"){
              that.login1=0;
               that.clearlocalData();
              that.$message.error({message:response.data.errormsg,duration:1600});
            }else if(response.data.status=="relogin"){
              that.login1=0;
              that.$message.error({message:"请重新登录",duration:1600});
              localStorage.removeItem("login1");
              that.removeInfo();
            }
          });
        localStorage.setItem("login1", "0");
        this.login1=0;
      },
      closePop(){
        this.popShow=false;
      },
      courseYear(id) {
        if(id){
          this.yeartabState=id;
          this.yearid=id;
          this.getCourseList(this.yearid,this.typeid,this.categoryid);
        }else{
          this.yeartabState='';
        }
        
      }, 
      courseType(id){
        if(id){
          this.typetabState=id;
          this.typeid=id;
          this.getCourseList(this.yearid,this.typeid,this.categoryid);
        }else{
          this.typetabState='';
        }
        
      },  
      courseCategory(id){
        if(id){
          this.categorytabState=id;
          this.categoryid=id;
          this.getCourseList(this.yearid,this.typeid,this.categoryid);
        }else{
          this.categorytabState='';
        }
        
      },

      //点击标签选项后获取课程列表 
      getCourseList(yearid,typeid,categoryid){
        let that = this;
        let datacourse={year:yearid, type_id:typeid,category_id:categoryid,page:'1',num:'10'}
        this.$axios({
          method: 'post',
          url: 'http://jixujiaoyu_api.songlongfei.club/kecheng/get_kecheng_list',
          data: qs.stringify(datacourse) 
          }).then(function (response) {
            if(response.data.status=="ok"){
              console.log("课程列表")
              console.log(response.data.data.data)
              that.courseslist=response.data.data.data;
            }else{
              
            }
          });
      },
  


  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .index{width: 1200px;margin: 40px auto 0;font-size: 0;
        .swiper-news-login{display: flex;justify-content: space-between;width: 100%;
            .myswiper{width: 515px;height: 334px; margin: 0;
              .slider{width: 100%;height: 100%;
                img{width: 100%;height: 100%;}
              }
              .swiper-pagination-bullets {bottom: 20px;
                .swiper-pagination-bullet{width: 15px;height: 15px;}
                .swiper-pagination-bullet-active{background-color: red;}
              }
            }
            .news-box{width: 317px;height: 336px;margin-right: 36px;overflow: hidden;
              .news-title-box{width: 100%;height: 34px;margin-bottom: 30px;position: relative;
                  .news-title-top{width: 100%;display: flex;justify-content:space-between;
                      .news-title{width: 80px;height: 100%;margin-left: 25px;font-size: 20px;font-weight: bold;}
                      .more-news{font-size: 14px;color: #878787;
                          &:hover{color:#fb0808;}
                      }
                  } 
                  .news-title-bottom{width: 100%;height: 12px; display: flex;margin-top: 5px;align-items: center;
                      .redsqure{width: 14px;height: 4px;background-color: #c70304;align-self:flex-end;}
                      .english-title{font-size: 12px;margin-left: 12px;}
                      .ellipsis{width: 140px;height: 1px;border-top: 1px dashed #858585;margin-right: 0;position: absolute;right: 0;}
                  }  
              }
              .news-content-box{width: 100%;margin-top: 20px;margin-bottom: 20px;
                &:hover{cursor: pointer;}
                .item{position: relative; width: 100%;display: flex;justify-content:space-between;margin-bottom: 15px;box-sizing: border-box;padding:0 5px 0 12px;align-items: center;
                    .item-title{width: 210px;font-size: 16px;color: #3d3d3d;font-weight: 500;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
                    .item-time{font-size: 12px;color: #3d3d3d;}
                    
                }
                .item:before{content: "";width: 6px;height: 6px;border-radius: 6px;background-color: #000;position: absolute;left: 0px;top:50%;display: block;margin-top: -3px;}
                .item:hover{
                    div{color:#fb0808;}
                    &:before{background-color:#fb0808;}
                } 
            }         
          } 
          .login-box{ width: 292px;border: 1px solid #d7d7d7; 
              .login-title-box{width: 100%;height: 55px;
                .login-title{width: 126px;height: 34px;background-image: url(/static/images/index/login-title.png);margin-top: 25px;margin-left: 18px;}
              }
              .info-box{width: 252px;margin: 0 auto;
                .btns-box{width: 100%;height: 20px;display: flex;justify-content:space-between;align-items: center;margin-top: 5px;}
                  .find-pw{font-size: 12px;color: #878787;
                    &:hover{color: #c60404;}
                  }
                  .btn-regin{font-size: 12px;color: #878787;
                    &:hover{color: #c60404;}
                  }
              }
            }  
        }
        .procedure-box{display: block; width: 1200px; height: 76px;background-image: url(/static/images/index/procedure.png);margin: 40px auto;}
        .index-news{width: 1200px;height: 100%;display: flex;justify-content: space-between;overflow: hidden;}
        .continue-education{width: 1200px;
          .continue-education{width: 100%;overflow: hidden;}
             .continue-edu-title{width: 394px;height: 42px;background-image: url(/static/images/index/continue-edu.png);margin: 40px auto;}
             .year-choose{display: flex;align-items: flex-start;height: 36px;
                .year-title{font-size: 16px;color:#3d3d3d;padding-bottom: 5px;}
                .year{display: flex;list-style: none;
                  li{font-size: 16px;color:#3d3d3d;margin: 0 10px;padding-bottom: 5px;cursor: pointer;
                      &:hover{border-bottom: 2px solid #eb2d2d;}
                   }
                   .on{border-bottom: 2px solid #eb2d2d;}
                }
             }
             .course-choose{display: flex;align-items: flex-start;height: 36px;
                .course-title{font-size: 16px;color:#3d3d3d;padding-bottom: 5px;}
                .course{display: flex;list-style: none;
                  li{font-size: 16px;color:#3d3d3d;margin: 0 10px;padding-bottom: 5px;cursor: pointer;
                    &:hover{border-bottom: 2px solid #eb2d2d;}
                  }
                  .on{border-bottom: 2px solid #eb2d2d;}
                }
             }
             .kinds-choose{display: flex;align-items: flex-start;height: 36px;
                .kinds-title{font-size: 16px;color:#3d3d3d;padding-bottom: 5px;}
                .kinds{display: flex;list-style: none;
                  li{font-size: 16px;color:#3d3d3d;margin: 0 10px;padding-bottom: 5px;cursor: pointer;
                     &:hover{border-bottom: 2px solid #eb2d2d;}
                  }
                  .on{border-bottom: 2px solid #eb2d2d;}
                }
             }
        }
        .course-box{display: flex;flex-wrap:wrap;justify-content: flex-start;
          .course-item{width: 225px;height: 225px;margin-top: 20px;margin-left: 15px;display:block;
            &:hover{box-shadow: 0 0 10px #c1c1c1;cursor: pointer;}
            &:nth-child(5n+1){margin-left: 0;}
            .item-img{width: 225px;height: 126px;
              img{width: 100%;height: 100%;}
            }
            .item-name{font-size: 14px; color:#313131;letter-spacing: 2px;padding:0 8px;line-height: 20px;margin-top: 8px;}
            .item-other{display: flex;justify-content:space-between;margin-top: 15px;padding:0 8px;
              .item-time{color:#fb0808;font-size: 14px;}
              .item-teacher{color:#313131;font-size: 14px;}
            }
          }
        }
        .friend-link-box{width: 1200px; margin: 0 auto;
          .friend-link-title{width: 100%;height: 34px;background-image: url(/static/images/index/friend-link.png);margin: 40px auto }
          .links-box{width: 100%;display: flex;flex-wrap:wrap;justify-content: space-between;
            .item-link{transform: scale(1);transition: all 1s;
              &:hover{transform: scale(1.1);transition: all 1s;}
            }
          }
        }
    }
.register_content_input{width:252px; height: 48px;box-sizing: border-box;padding-left: 15px;border: 1px solid #c1c1c1;border-radius: 5px;margin: 0 auto;font-size: 14px;}
.input-pw{margin-top: 12px;}
.yanzhengma_input{width: 130px;height: 40px;font-size: 14px;box-sizing: border-box;padding-left: 15px;border-radius: 5px;border: 1px solid #c1c1c1;display: inline-block;vertical-align: middle;margin-top: 12px;}
.verification1{width: 100px;height: 40px;font-size: 18px;letter-spacing:3px;color: #c60404;background: #f2f2f5;border-radius: 5px;border: 1px solid #c1c1c1;margin-left: 20px;display: inline-block;vertical-align: middle;margin-top: 12px;cursor: pointer;}
.user_login{display: block;width: 252px;height: 48px;font-size: 18px;text-align: center;line-height: 50px;color: #fff;background-color: #c60404;border-radius: 5px;margin-top: 12px;cursor:pointer;}
.pop{width: 172px;position: fixed;right: 0;top: 275px;z-index: 100;}
.pop .btn-close{ width: 22px; height: 22px;line-height: 22px; font-size: 14px; margin: 0 auto; cursor: pointer;text-align: center; color: #c1c1c1; border-radius: 22px;border: 1px solid #c1c1c1;display: block;}

.login-index-success{ width: 292px;height: 336px;position: relative;float: left;background-color: #fff;padding-top: 30px;border: 1px solid #c6c6c6;box-sizing: border-box;}
.login-index-success .user-image{width: 90px;height: 90px;border-radius: 90px;border:1px solid #1379c4;margin: 0 auto;background-size: 100% 100%;display: block;}
.login-index-success .user-name{width: 240px;height: 20px;font-size: 16px;margin: 10px auto;text-align: center;}
.login-index-success .title{width: 240px;height: 30px;font-size: 14px;margin: 10px auto;text-align: center;}
.login-index-success .btn-personal{width: 240px;height: 45px;background-color: #c60406;margin: 15px auto 0;cursor: pointer;}
.login-index-success .btn-login{width: 240px;height: 45px;background-color: #c60406;margin: 15px auto 0;cursor: pointer;}
.login-index-success .btn-personal a {width: 100%;height: 100%; color:#fff;text-align: center;line-height: 45px;display: block;font-size: 12px;}
.login-index-success .btn-login span{width: 100%;height: 100%; color:#fff;text-align: center;line-height: 45px;display: block;font-size: 12px;}
</style>
