<template>
  <div class="courseDetails">
    <div class="classtopbox">
      <div class="left">
        <a>
          <img :src="courseData.img_url"/>
        </a>
      </div>
      <div class="right">
        <div class="head_box">
          <h3>{{courseData.title}}</h3>
        </div>
        <div class="classtopitem clearfix inils" style="font-size: 16px;padding-bottom: 14px;border-bottom: 1px solid #eee;" >
          <div class="l1" style="display: none;">
            <i class="icon-inils01"></i>已报名
          </div>
          <div class="l2" style="display: none;">
            <span>0</span>
          </div>
          <div class="l1">
            <i class="icon-inils02"></i>学时
          </div>
          <div class="l2">
            <span>{{parseInt(courseData.xueshi_num)}}学时</span>
          </div>
          <div class="l1">
            <i class="icon-inils03"></i>浏览量
          </div>
          <div class="l2">
            <span>{{courseData.open_times}}</span>
          </div>
        </div>
        <div class="classtopitem clearfix">
          <div class="l1" style="width: 58px">主讲人：</div>
          <div class="fl">{{teacherInfo.name}}</div>
        </div>
        <div class="classtopitem clearfix">
          <div class="l1" style="width: 58px">有效期：</div>
          <div class="fl">
            自购买之日起
            <span>永久有效</span>
          </div>
        </div>
        <div class="price classtopitem clearfix">
          <div class="new_price">
            <em>价格：</em>¥
            <span>{{courseData.price}}</span>
          </div>
        </div>
        <div class="classtopitem btn clearfix">
          <span class="buy" @click="nowbuy" v-show="btnbuycourse==0">立即购买</span>
          <span class="buy" @click="nowstudy" v-show="btnbuycourse==1">开始学习</span>
        </div>
      </div>
    </div>
    <div class="mainwrap">
      <div class="classmain">
        <div class="classmain-hd" id="view_main_nav">
          <ul>
            <li :class="{on:tabstate==index}" v-for="(item,index) in tabs" :key="index" @click="tab(index)">{{item}}</li>
          </ul>
        </div>
        <div class="classmain-bd" style="overflow: hidden">
          <!-- 课程目录 -->
          <div id="video_meun1" v-show="tabstate==0">
            <div class="classmain_con">
              <dl class="class_directory" id="video_meun">
                <div v-for="(item,index) in courseInfo" :key="index">
                  <dt>{{item.title}}</dt>
                  <dd v-for="smalljie in item.jie" :key="smalljie.id" >
                      <span>{{smalljie.title}}</span>
                      <div class="startstudy" @click="watchVideo(smalljie.id)">开始学习</div>
                      <i class="icon-01 free"></i>
                      <span class="free" style="float: right;width: 65px;color:#888">{{smalljie.video_shichang}}</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <!-- 课程简介 -->
          <div class="classmain_con" v-show="tabstate==1" v-html="courseData.jianjie"></div>
        </div>
      </div>
      <div class="classside">
        <div class="classsideitem">
          <h3 class="classsidetit">讲师信息</h3>
          <div class="classsidecon">
            <dl class="class_js_dl">
              <dt>
                <img :src="teacherInfo.head_url"/>
              </dt>
              <dd><h3>{{teacherInfo.name}}</h3></dd>
            </dl>
            <div class="class_js_txt">
              <span v-html="teacherInfo.contents"></span>
              <span @click="teacherDetails" class="teacherDetails">【展开/折叠详情】</span>
            </div>
            <div class="class_js_txt" id="info" v-show="zhankai==1" v-html="teacherInfo.jianjie"></div>
          </div>
        </div>
      </div>
    
    </div>
    <!-- 未购买显示登陆框 -->
    <div class="login-mask" v-show="loginstate==1">
      <div class="login-box" >
          <div class="login-title-box">
              <div class="login-title"></div>
              <div class="close-login" @click="closeLogin">X</div>
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
    </div>
  </div>
</template>

<script>
import qs from 'qs'
export default {
  name: "courseDetails",
  data() {
    return {
      //教师详情展开
      zhankai: 0,
      tabs:["课程目录","课程简介"],
      tabstate:0,
      courseData:'',
      teacherInfo:'',
      courseInfo:'',
      idcard:'',
      UserPsd:'',
      picLyanzhengma:'',
      checkCode:'',
      //点击购买未登录显示登陆弹窗
      loginstate:0,
      buyCourseId:'',
      btnbuycourse:0,
    };
  },
  created(){
    this.createCode();
    if(localStorage.getItem("login1")=="1"){
      let that =this;
      let courseId={kecheng_id:this.$route.params.courseId,uid:localStorage.getItem("uid"),token:localStorage.getItem("token")}
      this.$axios.post("http://jixujiaoyu_api.songlongfei.club/kecheng/check_kecheng_is_buy",qs.stringify(courseId))
      .then(response => {
        if(response.data.status=="ok"){
          if(response.data.data.check_res=="0"){
            that.btnbuycourse=0;
          }else if(response.data.data.check_res=="1"){
            that.btnbuycourse=1;
          } 
        }else if((response.data.status=="error")){
          console.log(response);
          this.$message.error({message:response.data.errormsg,duration:1600});
        }else if((response.data.status=="relogin")){
          console.log(response);
          this.$message.error({message:"重新登录",duration:1600});
          that.removeInfo();
          setTimeout(() => {
            that.$router.push({ path: '/login' });
          }, 1600);
        }
        
      })
    }else{
      this.loginstate=1;
    }
    
  },
  mounted() {
    let that =this;
    //url里传递过来的课程唯一id this.$route.params  
    console.log(this.$route.params.courseId);
    that.buyCourseId=this.$route.params.courseId;
    let courseId={kecheng_id:this.$route.params.courseId}
    this.$axios.post("http://jixujiaoyu_api.songlongfei.club/kecheng/get_kecheng_info",qs.stringify(courseId))
      .then(response => {
        if(response.data.status=="ok"){
          console.log(response.data.data);
          that.courseData=response.data.data;
          that.teacherInfo=response.data.data.jiangshi;
          that.courseInfo=response.data.data.zhang;
          console.log(response.data.data.zhang);
          
        }
        
      })
      .catch(response => {
        console.log(response);
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
            alert("请输入验证码")
          }else if(this.picLyanzhengma.toUpperCase() != this.checkCode ) { //若输入的验证码与产生的验证码不一致时  
            alert("验证码不正确")  
            this.createCode();//刷新验证码   
            this.picLyanzhengma = '';
          }else { //输入正确时  
              return true;
          } 
      },
      //立即购买
      nowbuy(){
        if(localStorage.getItem("login1")=="1"){
          let that =this;
          let courseId={kecheng_id:this.$route.params.courseId,uid:localStorage.getItem("uid"),token:localStorage.getItem("token")}
          this.$axios.post("http://jixujiaoyu_api.songlongfei.club/kecheng/check_kecheng_is_buy",qs.stringify(courseId))
          .then(response => {
            if(response.data.status=="ok"){
              if(response.data.data.check_res=="0"){
                that.$router.push({ name:'courseBuyDetails',query:{id:this.buyCourseId} });
              }else if(response.data.data.check_res=="1"){
                this.$message.success({message:"您已购买过该课程",duration:1600});
              } 
            }else if((response.data.status=="error")){
              console.log(response);
              this.$message.error({message:response.data.errormsg,duration:1600});
            }else if((response.data.status=="relogin")){
              console.log(response);
              this.$message.error({message:"重新登录",duration:1600});
              that.removeInfo();
              setTimeout(() => {
                that.$router.push({ path: '/my' });
              }, 1600);
            }
            
          })
        }else{
          this.loginstate=1;
        }
      },
      //立即学习
      nowstudy(){
        let Vid='';
        for(var i=0; i<this.courseInfo.length;i++){
          for(let j=0; j<this.courseInfo[i].jie.length; j++){
            Vid=this.courseInfo[0].jie[0].id
          }
        }
        this.$router.push({ path:'/video',query:{courseId:this.buyCourseId,vid:Vid} });
      },
      removeInfo(){
        localStorage.removeItem("uid");
        localStorage.removeItem("token");
        localStorage.removeItem("sex");
        localStorage.removeItem("name");
        localStorage.removeItem("mobile");
        localStorage.removeItem("id_card");
      },
      closeLogin(){
        this.loginstate=0;
      },
      //用户登录 
      Login(){
        let that=this;
        if(this.idcard==''){
          alert("身份证号不能为空")
        }else if(!this.idcard.match(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/)){
          alert("请输入正确的身份证号")
        }else if(this.UserPsd==''){
            alert("密码不能为空") 
        }else if(this.checkLpicma() == true){
          let userinfo={id_card:this.idcard, password:this.UserPsd}
          this.$axios.post("http://jixujiaoyu_api.songlongfei.club/user/login",qs.stringify(userinfo)).then(response => {
            console.log(response.data);
            if(response.data.status=='ok'){
              localStorage.setItem("uid", response.data.data.uid);
              localStorage.setItem("token", response.data.data.token);
              localStorage.setItem("login1", "1");
              this.login1=1;
              localStorage.setItem("sex", response.data.data.sex);
              this.sex=response.data.data.sex;
              localStorage.setItem("name", response.data.data.name);
              this.name=response.data.data.name;
              that.loginstate=0;
              localStorage.setItem("mobile", response.data.data.mobile);
              ocalStorage.setItem("id_card", response.data.data.id_card);
              
            }else if(response.data.status=='error'){
              this.$message.error({message:response.data.errormsg,duration:1600});
            }else if(response.data.status=='relogin'){
              that.$message.error({message:"请重新登录",duration:1600});
              localStorage.removeItem("login1");
              that.removeInfo();
              setTimeout(() => {
                that.$router.push({ path: '/my' });
              }, 1600);
            }
            
          });
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
    teacherDetails:function(){
      if(this.zhankai==0){
        this.zhankai=1;
      }else{
        this.zhankai=0;
      }
    },
    tab:function(index){
      this.tabstate=index;
    },
    watchVideo:function(Vid){

      let that =this;
      if(localStorage.getItem("uid") && localStorage.getItem("token")){
        let courseId={kecheng_id:this.$route.params.courseId,uid:localStorage.getItem("uid"),token:localStorage.getItem("token")}
        this.$axios.post("http://jixujiaoyu_api.songlongfei.club/kecheng/check_kecheng_is_buy",qs.stringify(courseId))
        .then(response => {
          if(response.data.status=="ok"){
            if(response.data.data.check_res=="0"){
              this.$message.success({message:"您还未购买该课程",duration:1600});
            }else if(response.data.data.check_res=="1"){
              that.$router.push({ path:'/video',query:{courseId:that.buyCourseId,vid:Vid} });
            } 
          }else if((response.data.status=="error")){
            console.log(response);
            this.$message.error({message:response.data.errormsg,duration:1600});
          }else if((response.data.status=="relogin")){
            console.log(response);
            this.$message.error({message:"重新登录",duration:1600});
          }
          
        })
        .catch(response => {
          console.log(response);
        });

      }else {
        this.$message.error({message:"请您先登录",duration:1600});
        
      }
      
    },

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.classtopbox {
  width: 1200px;
  margin: 15px auto;
  padding: 30px 0;
  background-color: #fff;
}
.classtopbox .left {
  position: relative;
  width: 580px;
  height: 320px;
  overflow: hidden;
  display: inline-block;
  vertical-align: top;
  margin-left: 15px;
}
.classtopbox .left .cover-btn:hover {
  background-color: rgba(0, 0, 0, 0.5);
}
.classtopbox .left img {
  width: 100%;
  min-height: 320px;
}
.classtopbox .left a {
  transition: background-color 0.3s;
  position: absolute;
  top: 0;
  left: 0;
  width: 580px;
  height: 320px;
  background: url(/static/images/coursedetails/icon.png) center center no-repeat;
}
.classtopbox .right {
  position: relative;
  margin-left: 30px;
  height: 320px;
  width: 560px;
  display: inline-block;
  vertical-align: top;
}
.classtopbox .right .inils i {
  display: inline-block;
  width: 16px;
  margin-right: 8px;
}
.classtopbox .right .inils .icon-inils01 {
  background-position: -365px -516px;
  height: 14px;
}
.classtopbox .right .inils .icon-inils02 {
  background-position: -415px -516px;
  height: 14px;
}
.classtopbox .right .inils .icon-inils03 {
  background-position: -465px -516px;
  height: 14px;
}
.classtopbox .sc .icon-shoucang1 {
  background-position: -538px -516px;
  height: 14px;
}
.classtopbox .sc .on:hover {
  color: #fb8484;
}
.classtopbox .sc .on:hover .icon-shoucang1 {
  background-position: -509px -516px;
}
.classtopbox h3 {
  margin-bottom: 10px;
  color: #333;
  font-size: 24px;
  line-height: 30px;
}
.classtopbox .classtopitem {
  margin-top: 15px;
  color: #888;
  font-size: 14px;
  overflow: hidden;
}
.classtopbox .classtopitem .fl {
  line-height: 14px;
}
.classtopbox .price {
  height: 50px;
  line-height: 50px;
}
.classtopbox .l1 {
  float: left;
  width: 84px;
  line-height: 17px;
}
.classtopbox .new_price {
  float: left;
  margin-right: 30px;
  height: 50px;
  color: #ee5347;
  font-weight: 500;
  font-size: 24px;
  margin-left: 10px;
}
.classtopbox .new_price em {
  font-size: 16px;
  font-style: normal;
}
.classtopbox .new_price span {
  font-size: 24px;
}
.classtopbox .old_price {
  float: left;
  color: #888;
  font-size: 14px;
  line-height: 55px;
}
.classtopbox .old_price span {
  text-decoration: line-through;
}
.classtopbox .l2 {
  float: left;
  width: 60px;
  color: #999;
  line-height: 20px;
}
.classtopbox .l2 span {
  margin-right: 5px;
  color: #656565;
}
.classtopbox .l2 em {
  display: inline-block;
  margin-right: 5px;
  padding: 0 3px;
  height: 18px;
  background-color: #fea12e;
  color: #fff;
  vertical-align: middle;
  line-height: 18px;
}
.classtopbox .score {
  float: left;
  margin-right: 10px;
}
.classtopbox .score i {
  margin-top: -3px;
  width: 14px;
  height: 14px;
}
.classtopbox .score .icon-star {
  background-position: -108px -220px;
}
.classtopbox .score .icon-star_no {
  background-position: -127px -220px;
}
.classtopbox .buytype {
  float: left;
  height: 30px;
}
.classtopbox .buytype a {
  float: left;
  display: block;
  margin-right: 12px;
  width: 76px;
  height: 28px;
  border: solid 1px #e6e6e6;
  color: #333;
  text-align: center;
  line-height: 28px;
}
.classtopbox .buytype a.on,
.classtopbox .buytype a:hover {
  width: 74px;
  height: 26px;
  border: solid 2px #e82f24;
  color: #e82f24;
  line-height: 26px;
}
.classtopbox .btn {
  padding: 0;
  height: 42px;
  margin-top: 15px;
}
.classtopbox .btn span {
  float: left;
  width: 145px;
  height: 40px;
  border-radius: 3px;
  text-align: center;
  font-size: 16px;
  line-height: 40px;
}
.classtopbox .btn span.buy {
  margin-right: 25px;
  border: solid 1px #e82f24;
  background-color: #e82f24;
  color: #fff;
}
.classtopbox .btn span.learn {
  border: solid 1px #e82f24;
  color: #e82f24;
  margin-right: 25px;
}
.classtopbox .info div {
  float: left;
  color: #666;
  font-size: 14px;
  line-height: 14px;
}
.classtopbox .icon-tips {
  margin: -3px 0 0 4px;
  width: 17px;
  height: 17px;
  background-position: -167px -367px;
}
.classtopbox .info i {
  margin: -3px 6px 0 0;
  width: 16px;
  height: 16px;
}
.classtopbox .info .icon-01 {
  background-position: -538px -514px;
}
.classtopbox .info .icon-04 {
  background-position: -509px -514px;
}
.classtopbox .info .icon-02 {
  background-position: -576px -516px;
}
.classtopbox .info .icon-03 {
  background-position: -117px -367px;
}
.classtopbox .buy {
  cursor: pointer;
}
.classtopbox .fx {
  margin-right: 60px;
}
.classtopbox .mb {
  position: relative;
}
.classtopbox .mb .fxp {
  display: none;
  width: 110px;
  height: 110px;
}
.classtopbox .mb:hover .fxp {
  display: block;
}
[class^="icon-"],
[class*="icon-"] {
  background-image: url(/static/images/coursedetails/icon.png);
  background-size: 650px 1000px;
  display: inline-block;
  vertical-align: middle;
}






.mainwrap{width: 1200px;margin: 0 auto;font-size: 0;display: flex;}
.classmain{width:880px;}
.classside{width:302px;margin-left: 14px;}
.classmain-hd{height:58px;background-color:#fff;border-bottom: 0;}
.classmain-hd ul{height: 56px;border-bottom: 1px solid #edf2f2;margin: 0 15px;}
.classmain-hd li{float:left;margin-right:40px;width:120px;text-align:center;list-style-type: none;font-size: 16px;}
.classmain-hd li {display:block;color:#333;font-size:16px;line-height:54px;}
.classmain-hd li.on {border-bottom:solid 2px #E82F24;background-color:#fff;color:#E82F24;}
.classmain-hd li:hover{background-color:#fff;color:#E82F24;cursor: pointer;}
.classmain-bd{padding:20px 30px;background-color:#fff;min-height: 50px;}
.classmain-bd .classmain_con{margin-top: 20px;font-size: 14px;}
.class_directory{margin-bottom:15px;margin-top: 20px;}
.class_directory dd,.class_directory dt{height:50px;font-size:14px;line-height:50px;margin-bottom: 15px;}
.class_directory dt{margin-bottom:15px;background-color:#fafafa;color:#656565;padding: 0 10px;}
.class_directory dt span{float:left;width:84px;text-align:center;}
.class_directory dd {display:block;padding:0 40px 0 27px;color:#666;position: relative;height: 100%;}
.class_directory dd .startstudy{border: 0;background: #E82F24;width: 66px;position: absolute;right: 20px;line-height: 30px;border-radius: 5px;color: #fff;top:10px;cursor: pointer;display: none;text-align: center;}
.class_directory dd:hover .startstudy{display: block;}
.class_directory dd:hover .free{display: none;}
.class_directory dd:hover {background-color: #f6fafd;color:#E82F24;}
.class_directory dd span{margin-right:10px;line-height: 50px;}
.class_directory dd i{float:right;margin-top:16px;width:30px;height:22px;}
.class_directory dd .icon-01{background-position: -161px -513px;}
.class_directory dd .icon-02{background-position: -211px -513px;}
.class_directory dd .icon-03{background-position: -260px -513px;}
.class_directory dd .icon-04{background-position: -310px -513px;}
.pt20 .classmain-bd #video_meun1 #video_meun .free{padding:5px;width:40px;border-radius:4px;color:#fff;text-align:right;font-weight:400;line-height:44px;}


.classsidetit{border-bottom:solid 1px #edf2f2;color:#333;font-size:16px;line-height:58px;height: 58px;text-indent: 20px;}
.classsidecon{padding:20px 16px;}
.class_js_dl dt{width:120px;height:120px;border-radius: 50%;margin: 0 auto;}
.class_js_dl dt img{width:120px;height:120px;border-radius: 50%;}
.class_js_dl dd h3{margin: 10px 0;font-size:16px;line-height:20px;color: #333;display: block;text-align: center;}
.class_js_dl dd .tag{margin:10px 0;color:#666;font-size:14px;}
.class_js_dl dd .info{color:#666;font-size:14px;}
.class_js_dl dd .info span{color:#E82F24;}
.class_js_dl dd .info i{margin:-2px 3px 0 0;width:16px;height:16px;background-position:-417px -367px;}
.class_js_txt{margin:10px 20px;color:#888;font-size: 14px;}
.class_js_txt .teacherDetails{cursor: pointer;color:#000;}
.class_jg_dl{overflow: hidden;}
.class_jg_dl dt{width: 120px;height: 120px;margin: 0 auto;}
.class_jg_dl dt img{width:120px;height:120px;border-radius: 50%;}
.class_jg_dl dd h3{margin:10px 0;}
.class_jg_dl dd h3 a{color:#333;font-size:16px;line-height:20px;display: block;text-align: center;}
.class_jg_dl dd p span{width:70px;height:26px;}
.class_jg_dl dd p span.icon-star{margin-right:15px;background-position:-200px -363px;}
.class_jg_dl dd p span.icon-cert{background-position:-300px -362px;}
.class_jg_ul{overflow:hidden;height: 60px;border-top: 1px solid #eeeeee;border-bottom: 1px solid #eee;background: #fafeff;margin: 0 20px;}
.class_jg_ul li{float:left;width:33.333%;color:#666;text-align:center;font-size:14px;margin-top: 10px;}
.class_jg_ul li:nth-child(2){margin:0 -1px;border:solid 1px #eee;border-width:0 1px;margin-top: 10px;}
.class_jg_ul li p{color:#666;}
.class_jg_txt{margin: 0 20px 10px;color:#888;font-size:14px;}
.class_jg_btn{text-align:center;font-size:14px;}
.class_jg_btn a{display:inline-block;margin:0 5px;width:98px;height:36px;border:solid 1px #c6c6c6;border-radius:3px;background-color:#f7f7f7;color:#333;font-size:14px;line-height:36px;}

.login-mask{position: absolute;width: 100%;height: 100%;background-color: rgba(0,0,0,.6);left: 0;top:0;}
.login-box{ width: 292px;border: 1px solid #d7d7d7; position: absolute;left: 50%;margin-left: -146px;top:250px;background-color: #fff;
  .login-title-box{width: 100%;height: 55px;
    .login-title{width: 126px;height: 34px;background-image: url(/static/images/index/login-title.png);margin-top: 25px;margin-left: 18px;}
    .close-login{width: 20px;height: 20px;text-align: center;line-height: 20px;font-size: 20px;position: absolute;right: 10px;top:10px;
      &:hover{color: #c60404;cursor: pointer;}
    }
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
.register_content_input{width:252px; height: 48px;box-sizing: border-box;padding-left: 15px;border: 1px solid #c1c1c1;border-radius: 5px;margin: 0 auto;font-size: 14px;}
.input-pw{margin-top: 12px;}
.yanzhengma_input{width: 130px;height: 40px;font-size: 14px;box-sizing: border-box;padding-left: 15px;border-radius: 5px;border: 1px solid #c1c1c1;display: inline-block;vertical-align: middle;margin-top: 12px;}
.verification1{width: 100px;height: 40px;font-size: 18px;letter-spacing:3px;color: #c60404;background: #f2f2f5;border-radius: 5px;border: 1px solid #c1c1c1;margin-left: 17px;display: inline-block;vertical-align: middle;margin-top: 12px;cursor: pointer;}
.user_login{display: block;width: 252px;height: 48px;font-size: 18px;text-align: center;line-height: 50px;color: #fff;background-color: #c60404;border-radius: 5px;margin-top: 12px;cursor:pointer;}

</style>
