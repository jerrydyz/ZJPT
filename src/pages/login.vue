<template>
  <div class="login">
    <img class="login-title" src="/static/images/personal/login-logo.png"/>
    <div class="login-bg1">
      <img src="/static/images/personal/runperson.png" class="run-person"/>
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
    <div class="white-line"></div>
    <div class="copy-right">
      <div>版权所有：河南省继续教育学会</div>
      <div>地址：郑州市博学路277号正商学府广场A座四层 邮政编码：450000</div>
      <div>Copyright © 2017 jxjyedu.club All Rights Reserved丨<a href="http://www.beian.miit.gov.cn/">豫ICP备0506172869号-2</a></div>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
export default {
  name: "login",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      idcard:'',
      UserPsd:'',
      picLyanzhengma:'',
      checkCode:'',
    };
  },
  created(){
    this.createCode();
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
      removeInfo(){
        localStorage.removeItem("uid");
        localStorage.removeItem("token");
        localStorage.removeItem("sex");
        localStorage.removeItem("name");
        localStorage.removeItem("mobile");
        localStorage.removeItem("id_card");
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
            console.log("哈哈哈哈哈哈哈哈哈哈")
            console.log(response.data);
            if(response.data.status=='ok'){
              localStorage.setItem("uid", response.data.data.uid);
              localStorage.setItem("token", response.data.data.token);
              localStorage.setItem("sex", response.data.data.sex);
              localStorage.setItem("name", response.data.data.name);
              localStorage.setItem("mobile", response.data.data.mobile);
              localStorage.setItem("id_card", response.data.data.id_card);
              localStorage.setItem("login1", "1");
              that.sex=response.data.data.sex;
              this.name=response.data.data.name;
              that.$message.success({message:"登陆成功，即将前往个人中心页",duration:1600});
              setTimeout(() => {
                that.$router.push({ path: '/my' });
              }, 1600);
            }else if(response.data.status=='error'){
              this.$message.error({message:response.data.errormsg,duration:1600});
            }else if(response.data.status=='relogin'){
              that.$message.error({message:"请重新登录",duration:1600});
              localStorage.removeItem("login1");
              that.removeInfo();
              setTimeout(() => {
                that.$router.push({ path: '/my' });
              }, 1600);
              that.login1=0;
            }
            
          })
          .catch(response => {
            console.log(response);
          });
        }
      },
      closePop(){
        this.popShow=false;
      },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.login{width: 100%;height: 965px;background-image: url(/static/images/personal/login-bg.png);overflow:hidden; }
.login .login-title{width: 903px;height: 77px;margin: 116px auto 30px;display: block;}
.login .login-bg1{width: 1154px;height: 467px;margin: 0 auto;box-shadow: 0 0 10px #aaa;position: relative;}
.login .login-bg1 .info-box{width: 252px;position: absolute;right: 55px;top:75px;}
.login .login-bg1 .run-person{position: absolute;left: 0;top:0;}
.login .login-bg1 .info-box .title-txt{font-size: 22px;color:#ea5e00;margin-left: 3px;margin-bottom: 10px;}
.login .login-bg1 .info-box .btns-box{width: 100%;height: 20px;display: flex;justify-content:space-between;align-items: center;margin-top: 5px;}
.login .login-bg1 .info-box .btns-box a:hover{color:#ea5e00;}
.login .login-bg1 .info-box .btns-box .find-pw{font-size: 12px;color: #878787;}
.login .login-bg1 .info-box .btns-box .btn-regin{color: #c60404;font-size: 12px;}
.login .login-bg1 .info-box button{width: 100%;height: 48px;background-color: #c60404;border-radius: 5px;text-align: center;line-height: 48px;color: #fff;font-size: 16px;letter-spacing: 1px;margin-top: 23px;}
.login .white-line{width: 1363px;height: 1px;background-color: #fff;margin: 20px auto 0;}
.login .copy-right{text-align: center;font-size: 14px;color:#575656;margin-top: 155px;}
.register_content_input{width:252px; height: 48px;box-sizing: border-box;padding-left: 15px;border: 1px solid #c1c1c1;border-radius: 5px;margin: 0 auto;font-size: 14px;}
.input-pw{margin-top: 12px;}
.yanzhengma_input{width: 127px;height: 40px;font-size: 14px;box-sizing: border-box;padding-left: 15px;border-radius: 5px;border: 1px solid #c1c1c1;display: inline-block;vertical-align: middle;margin-top: 12px;}
.verification1{width: 100px;height: 40px;font-size: 18px;letter-spacing:3px;color: #c60404;background: #f2f2f5;border-radius: 5px;border: 1px solid #c1c1c1;margin-left: 20px;display: inline-block;vertical-align: middle;margin-top: 12px;cursor: pointer;}
.user_login{display: block;width: 252px;height: 48px;font-size: 18px;text-align: center;line-height: 50px;color: #fff;background-color: #c60404;border-radius: 5px;margin-top: 12px;cursor:pointer;}

</style>
