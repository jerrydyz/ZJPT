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
          <span>{{name}}</span>
        </li>
        <li>
          <span>身份证号 :</span>
          <span>{{idcode}}</span>
        </li>
        <li>
          <span>手机号 :</span>
          <span>{{phone}}</span>
        </li>
        <li>
          <span>常用邮箱 :</span>
          <span>
            <input type="email" :placeholder="baseExt.email == '' ? '请填写邮箱': baseExt.email" v-model="email"/>
          </span>
        </li>
        <li>
          <span>请选择性别 :</span>
          <span>
            <select name id @click="sect" v-model="sexSelected">
              <option v-for="item in selt" :key="item.id">{{item.name}}</option>
            </select>
          </span>
        </li>
        <li>
          <span>技术职称 :</span>
          <span>  
            <input type="text" :placeholder="baseExt.jishuzhicheng == '' ? '请输入技术职称': baseExt.jishuzhicheng" v-model="zhicheng"/>
          </span>
        </li>
        <li>
          <span>工作单位 :</span>
          <span>
            <input type="text" :placeholder="baseInfo.gongzuodanwei == '' ? '请输入工作单位': baseInfo.gongzuodanwei" v-model="job"/>
          </span>
        </li>
        <li>
          <span>行政职务 :</span>
          <span>
            <input type="text" :placeholder="baseExt.xingzhengzhiwu == '' ? '请输入行政职务': baseExt.xingzhengzhiwu"  v-model="xingzheng" />
          </span>
        </li>
        <li>
          <span>民族 :</span>
          <span>
            <select name id @change="getminzu" v-model="minzuSelected">
              
              <option v-for="item in minzu" :key="item.id" >{{item.name}}</option>
            </select>
          </span>
        </li>
        <li>
          <span>政治面貌 :</span>
          <span>
            <select name id @change="getmianmao" v-model="maoSelected">
              <option v-for="item in mao" :key="item.id" >{{item.name}}</option>
            </select>
          </span>
        </li>
        <li>
          <span>学历 :</span>
          <span>
            <select name id @change="getxueli" v-model="xueliSelected">
             
              <option v-for="(item,index) in opt" :key="index">{{item.name}}</option>
              
            </select>
          </span>
        </li>
        <li>
          <span>参加工作时间 :</span>
          <span> 
            <input type="text" :placeholder="baseExt.gongzuo_year == '' ? '请输入参加工作时间': baseExt.gongzuo_year" v-model="worktime" />
          </span>
        </li>
        <!-- <li>
          <span>从事专业 :</span>
          <span>
            <input type="text" placeholder="请输入从事专业" v-model="zhuanye" />
          </span>
        </li> -->
        <li>  
          <span>通讯地址 :</span>
          <span>
            <input type="text" :placeholder="baseExt.tongxundizhi == '' ? '请输入通信地址': baseExt.tongxundizhi" v-model="address" />
          </span>
        </li>
        <li>
          <span>联系电话 :</span>
          <span>  
            <input type="number" :placeholder="baseExt.lianxidianhua == '' ? '请输入联系电话': baseExt.lianxidianhua" maxlength="11" v-model="mobil" />
          </span>
        </li>
        <li>
          <span>证书管理 :</span>
          <span> 
            <input type="text" :placeholder="baseExt.zhengshubianhao == '' ? '请输入证书管理号': baseExt.zhengshubianhao" v-model="zhengshuhao" />
          </span>
        </li>
      </ul>
      <div class="btn" @click="xiugaibaseData">保存</div>
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
      baseInfo:'',
      baseExt:'',
      basedata:true,
      changepwd:false,
      oldpwd:'',
      newpwd:'',
      surpwd:'',
      uid:'',
      name:'',
      idcode:'',
      phone:'',
      token:'',
      zhengshuhao:'',
      mobil:'',
      address:'',
      worktime:"",
      xingzheng:'',
      job:'',
      zhicheng:'',
      email:'',
      sex:'',
      minzulist:'',
      zhengzhilist:'',
      xuelilist:'',
      opt:[],
      mao:[],
      minzu:[],
      selt:[{id:0,name:"女",},{id:1,name:"男",}],
      sexSelected:'',
      minzuSelected:'',
      maoSelected:'',
      xueliSelected:'',
    };
  },
  created (){
    if(localStorage.getItem('lin')){
        this.tab(localStorage.getItem('lin'))
     }
        this.uid=localStorage.getItem('uid')
        this.token=localStorage.getItem('token')
        this.name= localStorage.getItem('name')
        this.idcode=localStorage.getItem('id_card')
        this.phone=localStorage.getItem('mobile')
        
  },
  mounted () {
      
      let that = this;
      //获取学历
       this.$axios.get('http://jixujiaoyu_api.songlongfei.club/user/get_xueli').then(res=>{
          that.opt=res.data.data;
          console.log(that.opt);
       })
    
     //获取政治面貌
       this.$axios.get('http://jixujiaoyu_api.songlongfei.club/user/get_zhengzhimianmao').then(res=>{
          that.mao=res.data.data;
          console.log(that.mao);
       })
  
     //获取民族
       this.$axios.get('http://jixujiaoyu_api.songlongfei.club/user/get_minzu').then(res=>{
          that.minzu=res.data.data;
          console.log(that.minzu);
       })
    //获取用户基本资料信息
    this.getUserInfo();

  },
  methods: {
    //获取用户基本资料信息
    getUserInfo:function(){
      var that=this
        let usreinfo={uid:localStorage.getItem("uid"),token:localStorage.getItem("token")}
        this.$axios({
          method: 'post',
          url: 'http://jixujiaoyu_api.songlongfei.club/user/get_user_info',
          data: qs.stringify(usreinfo) 
          }).then(function (response) {
          if(response.data.status=="ok"){
            that.baseInfo = response.data.data;
            that.baseExt = response.data.data.ext;
            that.sexSelected = that.baseInfo.sex == "0"? '女' : that.baseInfo.sex == '1'? '男' :'请选择性别';

            if(that.baseExt.minzu_id=="0"){
              that.minzuSelected ='请选择民族';
            }else{
              for(let i=0;i<that.minzu.length;i++){
                if(that.minzu[i].id==that.baseExt.minzu_id){
                  that.minzuSelected = that.minzu[i].name;
                  console.log("bangding民族");
                  console.log(that.minzuSelected)
                }
              }
            }

            if(that.baseExt.zhengzhimianmao_id=="0"){
                that.maoSelected  = '请选择政治面貌';
            }else{
              for(let i=0;i<that.mao.length;i++){
                if(that.mao[i].id==that.baseExt.zhengzhimianmao_id){
                  that.maoSelected = that.mao[i].name;
                  console.log("bangding政治面貌");
                  console.log(that.maoSelected);
                }
              }
            }

            if(that.baseExt.xueli_id=="0"){
              that.xueliSelected = '请选择学历';
            }else{
              for(let i=0;i<that.opt.length;i++){
                if(that.opt[i].id==that.baseExt.xueli_id){
                  that.xueliSelected = that.opt[i].name;
                  console.log("bangding学历");
                  console.log(that.xueliSelected)
                }
              }
            }

            console.log("该用户信息");
            console.log(that.baseInfo);
          }else if(response.data.status=="error"){
            that.$message.error({message:response.data.errormsg,duration:1600});
          }else if(response.data.status=="relogin"){
            that.clearlocalData();
          }
        });

    },
        

    //状态为relogin时清除local数据
    clearlocalData:function(){
      let that = this;
      that.$message.error({message:"请重新登录",duration:1600});
      localStorage.removeItem("login1");
      localStorage.removeItem("uid");
      localStorage.removeItem("token");
      localStorage.removeItem("sex");
      localStorage.removeItem("name");
      localStorage.removeItem("mobile");
      localStorage.removeItem("id_card");
      setTimeout(() => {
        that.$router.push({ path: '/login' });
      }, 1600);
    },
    sect (e){
      for(let i=0;i<this.selt.length;i++){
        if(this.selt[i].name==e.target.value){
          this.sex=this.selt[i].id;
        } 
      }
      console.log(this.sex);
    },
    tab(val) {
      this.line = val;
      localStorage.setItem('lin',this.line)
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
          let userinfo={uid:localStorage.getItem("uid"),token:localStorage.getItem("token"), old_password:this.oldpwd,new_password:this.newpwd,}
          this.$axios({
          method: 'post',
          url: 'http://jixujiaoyu_api.songlongfei.club/user/update_password',
          data: qs.stringify(userinfo) 
          }).then(function (response) {
            console.log(response)
              if(response.data.status=="ok"){
                  that.$message.success({message: '密码修改成功',duration:1600});
                  // that.clearlocalData();
                  // that.$router.push('/login')
                  localStorage.removeItem('lin')
              }else{
                 that.$message.error({message: response.data.errormsg,duration:1600});
              }
          });
      }
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
    // 修改资料
    xiugaibaseData (){
       var that=this
       var datamsg ={
          uid:this.uid,
          token:this.token,
          sex:this.sex,
          gongzuodanwei:this.job,
          email:this.email,
          jishuzhicheng:this.zhicheng,
          xingzhengzhiwu:this.xingzheng,
          minzu_id:this.minzulist,
          zhengzhimianmao_id:this.zhengzhilist,
          xueli_id:this.xuelilist,
          gongzuo_year:this.worktime,
          tongxundizhi:this.address,
          lianxidianhua:this.mobil,
          zhengshubianhao:this.zhengshuhao
       }
       var myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
       var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
        if(this.email==''){
              //this.$message.error({message: '请输入您的邮箱',duration:1600});
              datamsg.email=that.baseExt.email;
              console.log(datamsg.email)
        }else if(!reg.test(this.email)){
              this.$message.error({message: '您输入的邮箱格式不正确',duration:1600});
        }
        if(this.zhicheng==''){
               //this.$message.error({message: '请输入您的技术职称',duration:1600});
               datamsg.jishuzhicheng=that.baseExt.jishuzhicheng;
               console.log(datamsg.jishuzhicheng)
        }
        if(this.job==''){
               //this.$message.error({message: '请输入您的工作单位',duration:1600});
               datamsg.gongzuodanwei=that.baseInfo.gongzuodanwei;
               console.log(datamsg.gongzuodanwei)
        }
        if(this.xingzheng==''){
                //this.$message.error({message: '请输入您的行政职务',duration:1600});
                datamsg.xingzhengzhiwu=that.baseExt.xingzhengzhiwu;
                console.log(datamsg.xingzhengzhiwu)
        }
        if(this.minzulist==''){
                //this.$message.error({message: '请输入您的民族',duration:1600});
                datamsg.minzu_id=that.baseExt.minzu_id;
                console.log(datamsg.minzu_id)
        }
        if(this.zhengzhilist==''){
                //this.$message.error({message: '请输入您的政治面貌',duration:1600});
                datamsg.zhengzhimianmao_id=that.baseExt.zhengzhimianmao_id;
                console.log(datamsg.zhengzhimianmao_id)
        }else if(this.xuelilist==''){
                //this.$message.error({message: '请输入您的学历',duration:1600});
                datamsg.xueli_id=that.baseExt.xueli_id;
                console.log(datamsg.xueli_id)
        }
        if(this.worktime==''){
               //this.$message.error({message: '请输入您的工作时间',duration:1600});
                datamsg.gongzuo_year=that.baseExt.gongzuo_year;
                console.log(datamsg.gongzuo_year)
        }
        if(this.address==''){
               //this.$message.error({message: '请输入您的通讯地址',duration:1600});
               datamsg.tongxundizhi=that.baseExt.tongxundizhi;
               console.log(datamsg.tongxundizhi)
        }
        if(this.mobil==''){
               //this.$message.error({message: '请输入您的联系电话',duration:1600});
               datamsg.lianxidianhua=that.baseExt.lianxidianhua;
               console.log(datamsg.lianxidianhua)
        }
        if(this.zhengshuhao==''){
               //this.$message.error({message: '请输入您的证书号',duration:1600});
               datamsg.zhengshubianhao=that.baseExt.zhengshubianhao;
               console.log(datamsg.zhengshubianhao)
        }
        that.$axios.post('http://jixujiaoyu_api.songlongfei.club/user/edit',
        qs.stringify(datamsg)).then(res =>{
            if(res.data.status=='ok'){
              this.$message.success({message: '修改成功',duration:1600});
            }
        });
        
             

    },
    //获取学历
    getxueli (e){
      for(let i=0;i<this.opt.length;i++){
        if(this.opt[i].name==e.target.value){
          this.xuelilist=this.opt[i].id;
        } 
      }
      console.log(this.xuelilist);
    },
     //获取政治面貌
    getmianmao (e){
      for(let i=0;i<this.mao.length;i++){
        if(this.mao[i].name==e.target.value){
          this.zhengzhilist=this.mao[i].id;
        } 
      }
      console.log(this.zhengzhilist);
    },
     //获取民族
    getminzu (e){
      for(let i=0;i<this.minzu.length;i++){
        if(this.minzu[i].name==e.target.value){
          this.minzulist=this.minzu[i].id;
        } 
      }
      console.log(this.minzulist);
    },
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
          width: 250px;
          height: 34px;
          border: 1px solid #cfcfcf;
          background-color: transparent;
          margin-top: 3px;
          padding-left: 10px;
          border-radius: 5px;
          color:#313131;
         
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
      cursor: pointer;
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
            cursor: pointer;
      }
  }
}
</style>
