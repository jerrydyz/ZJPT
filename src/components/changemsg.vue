<template>
  <div class="changemsg fl">
    <div class="topnav">
      <span class="spn1" :class="{active:line=='a'}" @click='tab("a")'>基本资料</span>
      <span class="spn2" :class="{active:line=='b' }" @click='tab("b")'>修改密码</span>
    </div>
    <div class="content" v-show="basedata">
      <ul>
        <li>
          <span>姓名 :</span>
          <span>杜崇</span>
        </li>
        <li>
          <span>身份证号 :</span>
          <span>411123199011113034</span>
        </li>
        <li>
          <span>手机号 :</span>
          <span>13673379816</span>
        </li>
        <li>
          <span>常用邮箱 :</span>
          <span>
            <input type="email" placeholder="请填写邮箱" />
          </span>
        </li>
        <li>
          <span>请选择性别 :</span>
          <span>
            <select name id>
              <option value>请选择性别</option>
              <option value>男</option>
              <option value>女</option>
            </select>
          </span>
        </li>
        <li>
          <span>技术职称 :</span>
          <span>
            <input type="text" placeholder="请输入技术职称" />
          </span>
        </li>
        <li>
          <span>工作单位 :</span>
          <span>
            <input type="text" placeholder="请输入工作单位" />
          </span>
        </li>
        <li>
          <span>行政职务 :</span>
          <span>
            <input type="text" placeholder="请输入行政职务" />
          </span>
        </li>
        <li>
          <span>民族 :</span>
          <span>
            <select name id>
              <option value="1">大专</option>
              <option value="2">本科</option>
              <option value="3">硕士研究生</option>
              <option value="4">博士研究生</option>
            </select>
          </span>
        </li>
        <li>
          <span>政治面貌 :</span>
          <span>
            <select name id>
              <option value="1">大专</option>
              <option value="2">本科</option>
              <option value="3">硕士研究生</option>
              <option value="4">博士研究生</option>
            </select>
          </span>
        </li>
        <li>
          <span>学历 :</span>
          <span>
            <select name id>
              <option value="1">大专</option>
              <option value="2">本科</option>
              <option value="3">硕士研究生</option>
              <option value="4">博士研究生</option>
            </select>
          </span>
        </li>
        <li>
          <span>参加工作时间 :</span>
          <span>
            <input type="text" placeholder="请输入参加工作时间" />
          </span>
        </li>
        <li>
          <span>从事专业 :</span>
          <span>
            <input type="text" placeholder="请输入从事专业" />
          </span>
        </li>
        <li>
          <span>通讯地址 :</span>
          <span>
            <input type="text" placeholder="请输入通信地址" />
          </span>
        </li>
        <!-- <li>
          <span>邮政编码 :</span>
          <span>
            <input type="text" placeholder="请输入邮政编码" />
          </span>
        </li> -->
        <li>
          <span>联系电话 :</span>
          <span>
            <input type="number" placeholder="请输入联系电话" maxlength="11" />
          </span>
        </li>
        <li>
          <span>证书管理 :</span>
          <span>
            <input type="text" placeholder="请输入证书管理号" />
          </span>
        </li>
      </ul>
      <div class="btn">保存</div>
    </div>
    <!-- 修改密码 -->
    <div class="changepwd" v-show="changepwd">
      <ul>
        <li>
          <span class="redstar">*</span>
          <span>旧密码 :</span>
          <input type="password" placeholder="请输入旧密码"  v-model="oldpwd"/>
        </li>
        <li>
        <span class="redstar">*</span>
          <span>新密码 :</span>
          <input type="password"  placeholder="请输入新密码" v-model="newpwd"/>
        </li>
        <li>
        <span class="redstars">*</span>
          <span>确认密码 :</span>
          <input type="password"  placeholder="请输入确认新密码" v-model="surpwd"/>
        </li>
         
      </ul>
      <div class="btns" @click="savepw">
        保存
      </div>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
import { Message } from 'element-ui';
export default {
  name: "changemsg",
  data() {
    return {
      line: "a",
      basedata:true,
      changepwd:false,
      oldpwd:'',
      newpwd:'',
      surpwd:'',
      uid:'',
      name:'',
      idcode:'',
      phone:'',

    };
  },
  created (){
      this.tab(sessionStorage.getItem('lin'))

  },
  methods: {
    tab(val) {
      this.line = val;
      sessionStorage.setItem('lin',this.line)
      if(val=='a'){
          this.basedata=true
          this.changepwd=false
      }else{
          this.changepwd=true
           this.basedata=false
      }
    },
    savepw () {
      let that = this;
      if(this.oldpwd==''){
          this.$message.error({message: '请输入旧密码',duration:1600});
      }
      else if(this.newpwd==''){
           this.$message.error({message: '请输入新密码',duration:1600});
      } else if(this.surpwd==''){
           this.$message.error({message: '请输入确认密码',duration:1600});
      }
      else if(this.surpwd!=this.newpwd){
          this.$message.error({message: '两次输入的密码不一致',duration:1600});
      }else{
          let userinfo={uid:sessionStorage.getItem("uid"),token:sessionStorage.getItem("token"), old_password:this.oldpwd,new_password:this.newpwd,}
          this.$axios({
          method: 'post',
          url: 'http://jixujiaoyu_api.songlongfei.club/user/update_password',
          data: qs.stringify(userinfo) 
          }).then(function (response) {
            console.log(response)
              if(response.data.status=="ok"){
                  that.$message.success({message: '密码修改成功',duration:1600});
                  that.$router.push('/login')
              }else{
                 that.$message.error({message: response.data.errormsg,duration:1600});
              }
          });
      }
    },
    baseData (){
       var that=this

    }
  }
};
</script>

<style lang='less' scoped>
.changemsg {
  width: 948px;
  box-sizing: border-box;
  background-color: #fff;
  background-color: #fafafa;
    
  .topnav {
    width: 100%;
    height: 55px;
    // line-height: 55px;
    background-color: #fafafa;
    margin-top: 20px;
    padding-left: 20px;
    box-sizing: border-box;
    color: #000;
    font-weight: normal;
    cursor: pointer;
    font-size: 14px;
    // border: 1px solid red;
    .spn1 {
      display: inline-block;
      margin-right: 55px;
    }
    .active {
      border-bottom: 1px solid #3375fa;
    }
  }
  .content {
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    ul {
      li {
        width: 100%;
        height: 42px;
        border-bottom: 1px solid #ebeff6;
        display: flex;
        align-items: center;
        span:nth-child(1) {
          display: inline-block;
          width: 108px;
          height: 100%;
          line-height: 42px;
          font-size: 14px;
          color: #313131;
        }
        span:nth-child(2) {
          display: inline-block;
          //  width: 108px;
          height: 100%;
          line-height: 42px;
          font-size: 14px;
          color: #313131;
          // border: 1px solid red;
        }
        input {
          width: 240px;
          height: 34px;
          border: 1px solid #cfcfcf;
          background-color: transparent;
          margin-top: -1px;
          padding-left: 10px;
          border-radius: 5px;
        }
        select {
          width: 240px;
          height: 34px;
          border: 1px solid #cfcfcf;
          background-color: transparent;
          margin-top: 3px;
          padding-left: 10px;
          border-radius: 5px;
        }
      }
    }
    .btn {
      width: 240px;
      height: 40px;
      line-height: 40px;
      background-color: #138bef;
      color: #fff;
      font-size: 14px;
      border-radius: 10px;
      margin-top: 23px;
      margin-left: 110px;
      text-align: center;
      margin-bottom:20px;
    }
  }
  .changepwd{
      width: 100%;
      padding: 0 20px 332px;
      box-sizing: border-box;
      ul{
          li{
             height: 44px;
             line-height: 44px;
            //  border: 1px solid red;
            margin-top: 20px; 
            span{
                &.redstar{
                    color:red;
                    margin-left: 14px;
                }
                 &.redstars{
                    color:red;
                }
            }
            input{
                width: 382px;
                height: 40px;
                border: 1px solid #b7c7d7;
                padding-left: 10px;
                background-color: transparent;
            }
          }
      }
      .btns{
            width: 382px;
            height: 40px;
            color: #fff;
            background-color: #369ff5;
            margin-top: 20px;
            margin-left: 77px;
            line-height: 40px;
            text-align: center;
      }
  }
}
</style>
