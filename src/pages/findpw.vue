<template>
  <div class="findpw">
    <div class="logincontent">
      <div class="title"><em></em>找回密码</div>
      <ul class="loginstep">
        <li :class="{on:listate==1}"><span>1</span><div>验证账号</div></li>
        <li><p><em></em><em></em><em></em></p></li>
        <li :class="{on:listate==2}"><span>2</span><div>重置密码</div></li>
        <li><p><em></em><em></em><em></em></p></li>
        <li :class="{on:listate==3}"><span>3</span><div>完成</div></li>
      </ul>
      <div class="bigbox">
        <div class="verify" v-show="listate==1">
          <dl>
            <dt><span>*</span>姓名:</dt>
            <dd><input class="inp" type="text" id="rephoneval" v-model="username" placeholder="请输入姓名"/></dd>
          </dl>
          <dl>
            <dt><span>*</span>身份证号:</dt>
            <dd><input class="inp" type="text" id="repverval" maxlength="18" v-model="idcard" placeholder="请输入身份证号"/></dd>
          </dl>
          <dl>
            <dd><span class="btn" @click="nextstep1">下一步</span></dd>
          </dl>
        </div>
        <div class="reset" v-show="listate==2">
          <dl>
            <dt><span>*</span>新密码:</dt>
            <dd>
              <input class="inp" id="ppwd" maxlength="30" type="password" v-model="oldpw" placeholder="请输入新密码，6-20个字符"/>
            </dd>
          </dl>
          <dl>
            <dt><span>*</span>确认密码:</dt>
            <dd><input class="inp" id="ppwds" type="password" maxlength="30" v-model="newpw" placeholder="重复密码"/></dd>
          </dl>
          <dl>
              <dd><span class="btn" @click="nextstep2">下一步</span></dd>
          </dl>
        </div>
        <div class="completebox" v-show="listate==3">
          <img src="/static/images/personal/rpw.png" />
          <router-link to="/login">立即登录</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
export default {
  name: "findpw",
  data() {
    return {
      listate: 1,
      username:'',
      idcard:'',
      oldpw:'',
      newpw:'',
      apiurl:'http://jixujiaoyu_api.songlongfei.club:1012',
    };
  },
  methods:{
      
      nextstep1:function(){
        let reg=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        let that=this;
        //验证姓名和身份证号 
        if(this.username==''){
            alert("姓名不能为空")
        }else if(this.idcard==''){
            alert("身份证号不能为空")
        }else if(!reg.test(this.idcard)){
             alert("身份证号不正确")
        }else{
            let userinfo={id_card:this.idcard, name:this.username}
            this.$axios({
            method: 'post',
            url: this.apiurl+'/user/check_id_card',
            data: qs.stringify(userinfo) 
            }).then(function (response) {
                if(response.data.data.check_res=="1"){
                    that.listate=2;
                    console.log("验证姓名和身份证号")
                    console.log(response.data)
                
                }else{
                
                }
            });
        }
      },
      nextstep2:function(){
        let that = this;
        if(this.oldpw==''){
            alert("请输入旧密码")
        }else if(this.newpw==''){
            alert("请输入新密码")
        }else if(this.oldpw!=this.newpw){
            alert("密码不一致")
        }else{
            let userinfo={id_card:this.idcard, name:this.username,password:this.newpw,}
            this.$axios({
            method: 'post',
            url: this.apiurl+'/user/reset_password',
            data: qs.stringify(userinfo) 
            }).then(function (response) {
                if(response.data.status=="ok"){
                    that.listate=3;
                    console.log("验证姓名和身份证号")
                    console.log(response.data)
                
                }else{
                
                }
            });
        }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.logincontent{overflow:hidden;padding:40px 0;width: 1200px;margin: 0 auto;}
.logincontent .title{padding-bottom:10px;border-bottom:solid 1px #eee;color:#333;font-size:24px;line-height:24px;}
.logincontent .title em{float:left;margin-right:15px;width:4px;height:24px;background-color:#E82F24;}
.bigbox{margin:100px auto 100px;width:460px;}
.bigbox dl{padding:0 0 20px 120px;}
.bigbox dt{position:absolute;margin-left:-115px;width:100px;color:#333;text-align:right;font-size:14px;line-height:40px;}
.bigbox dt span{margin-right:5px;color:#d63535;}
.bigbox dd{color:#333;font-size:14px;line-height:40px;}
.bigbox dd a{color:#fff}
.bigbox dd .inp{padding:9px;width:300px;height:20px;border:solid 1px #b6c7d6;border-radius:3px;}
.bigbox input.inp{padding:0 9px;width:280px;height:40px;}
.bigbox input.inp:focus{border-color:#E82F24;}
.bigbox p a{color:#E82F24;}
.bigbox p{padding:10px 0 0;font-size:12px;}
.bigbox dd .yzm ,.bigbox dd .width97{display:inline-block;width:128px;height:38px;background-color:#E82F24;color:#fff;vertical-align:middle;text-align:center;font-size:14px;line-height:38px;}
.bigbox .check{color:#333;line-height:30px;cursor:pointer;}
.bigbox .check input{margin:-3px 5px 0 0;}
.bigbox dd .btn{display:block;width:298px;height:38px;border:solid 1px #E82F24;border-radius:3px;background-color:#E82F24;color:#fff;text-align:center;font-size:14px;line-height:38px;cursor: pointer;}
.completebox{width: 100%;}
.completebox img{display: block;margin:0px auto 20px;}
.completebox a{display: block;color:#E82F24;text-align: center;font-size:16px;cursor: pointer;}
.loginstep{padding:50px 0 0;text-align:center;}
.loginstep li{display:inline-block;margin:0 20px;height:70px;vertical-align:middle;font-size:14px;}
.loginstep span{display:block;margin:0 auto 10px;width:40px;height:40px;border-radius:50%;background-color:#eee;color:#999;text-align:center;line-height:40px;}
.loginstep .on span{background-color:#E82F24;color:#fff;}
.loginstep div{color:#333;font-weight:700;}
.loginstep p{margin-top:15px;}
.loginstep p em{display:inline-block;margin:0 5px;width:12px;height:12px;border-radius:50%;background-color:#eee;}
</style>
