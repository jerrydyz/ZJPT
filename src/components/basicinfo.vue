<template>
  <div class="basicinfo">
    <div class="tab-box">
      <span v-for="(item,index) in basicInfoTabs" :key="index" @click="tab(index)" :class="{onactive:tabState==index}">{{item.tabname}}</span>
    </div>
    <div class="content-box">
      <div class="user-info-box personalBox">
        <form class="infobox" v-show="tabState==0">
          <div class="item-row1 item">
            <div class="item-title">姓名：</div>
            <div class="item-right">
              <div class="account">杜彦召</div>
            </div>
          </div>
          <div class="item-row1 item">
            <div class="item-title">身份证号：</div>
            <div class="item-right">
              <div class="account">412723199410103478</div>
            </div>
          </div>
          <div class="item-row1 item">
            <div class="item-title">手机号：</div>
            <div class="item-right">
              <div class="account">15514551797</div>
            </div>
          </div>
          <div class="item-row4 item">
            <div class="item-title">常用邮箱:</div>
            <div class="item-right">
              <input name="email" type="text" class="niki" placeholder="请填写邮箱" value />
            </div>
          </div>
          <div class="item-row5 item">
            <div class="item-title">请选择性别:</div>
            <div class="item-right">
              <select name="sex" class="inputbox">
                <option value="0">请选择性别</option>
                <option value="1" selected>男</option>
                <option value="2">女</option>
              </select>
            </div>
          </div>
          <div class="item-row8 item">
            <div class="item-title">人员类别:</div>

            <div class="item-right">
              <select name="urenyuanleibie">
                <option value="0" selected>请选择人员类别</option>
                <option value="78">专业技术人员</option>
              </select>
            </div>
          </div>
          <div class="item-row23 item">
            <div class="item-title">专业分类:</div>
            <div class="item-right">
              <select name="uzhuanye">
                <option value="0" selected>请选择专业分类</option>
                <option value="1">教育</option>
                <option value="2">卫生</option>
                <option value="3">工程</option>
                <option value="4">其他</option>
              </select>
            </div>
          </div>
          <div class="item-row11 item">
            <div class="item-title">技术职称：</div>
            <div class="item-right">
              <input name="uzhicheng" type="text" class="niki" value placeholder="请输入技术职称" />
            </div>
          </div>
          <div class="item-row12 item">
            <div class="item-title">工作单位:</div>
            <div class="item-right">
              <input name="udanwei" type="text" class="niki" value="大师傅" placeholder="请输入工作单位" />
            </div>
          </div>
          <div class="item-row13 item">
            <div class="item-title">行政职务:</div>
            <div class="item-right">
              <input name="uzhiwu" type="text" class="niki" value placeholder="请输入行政职务" />
            </div>
          </div>
          <div class="item-row14 item">
            <div class="item-title">民族:</div>
            <div class="item-right">
              <select name="uminzu">
                <option value="0" selected>请选择民族</option>
                <option value="2">汉族</option>
                <option value="15">侗族</option>
                <option value="5">阿昌族</option>
                <option value="6">白族</option>
                <option value="7">保安族</option>
                <option value="8">布朗族</option>
                <option value="9">布依族</option>
                <option value="10">朝鲜族</option>
                <option value="11">达斡尔族</option>
                <option value="12">傣族</option>
                <option value="13">德昂族</option>
                <option value="14">东乡族</option>
                <option value="16">独龙族</option>
                <option value="17">俄罗斯族</option>
                <option value="18">鄂伦春族</option>
                <option value="19">鄂温克族</option>
                <option value="20">高山族</option>
                <option value="21">哈尼族</option>
                <option value="22">哈萨克族</option>
                <option value="23">赫哲族</option>
                <option value="24">回族</option>
                <option value="25">基诺族</option>
                <option value="26">京族</option>
                <option value="27">景颇族</option>
                <option value="28">柯尔克孜族</option>
                <option value="29">拉祜族</option>
                <option value="30">黎族</option>
                <option value="31">傈僳族</option>
                <option value="32">珞巴族</option>
                <option value="33">满族</option>
                <option value="34">毛南族</option>
                <option value="35">门巴族</option>
                <option value="36">蒙古族</option>
                <option value="37">苗族</option>
                <option value="38">仫佬族</option>
                <option value="39">纳西族</option>
                <option value="40">怒族</option>
                <option value="41">普米族</option>
                <option value="42">羌族</option>
                <option value="43">撒拉族</option>
                <option value="44">畲族</option>
                <option value="45">水族</option>
                <option value="46">塔吉克族</option>
                <option value="47">塔塔尔族</option>
                <option value="48">土家族</option>
                <option value="49">土族</option>
                <option value="50">佤族</option>
                <option value="51">维吾尔族</option>
                <option value="52">乌孜别克族</option>
                <option value="53">锡伯族</option>
                <option value="54">瑶族</option>
                <option value="55">彝族</option>
                <option value="56">仡佬族</option>
                <option value="57">裕固族</option>
                <option value="58">藏族</option>
                <option value="59">壮族</option>
              </select>
            </div>
          </div>
          <div class="item-row15 item">
            <div class="item-title">政治面貌:</div>
            <div class="item-right">
              <select name="uzhengzhi">
                <option value="0" selected>请选择政治面貌</option>
                <option value="60">中共党员</option>
                <option value="61">中共预备党员</option>
                <option value="62">共青团员</option>
                <option value="63">民革委员</option>
                <option value="64">民盟盟员</option>
                <option value="65">民建会员</option>
                <option value="66">民进会员</option>
                <option value="67">农工党党员</option>
                <option value="68">致公党党员</option>
                <option value="69">台盟盟员</option>
                <option value="70">无党派民主人士</option>
                <option value="71">九三学社社员</option>
                <option value="72">群众</option>
              </select>
            </div>
          </div>
          <div class="item-row16 item">
            <div class="item-title">学历:</div>
            <div class="item-right">
              <select name="uxueli">
                <option value="0" selected>请选择学历</option>
                <option value="73">大专</option>
                <option value="74">本科</option>
                <option value="75">硕士研究生</option>
                <option value="76">博士研究生</option>
              </select>
            </div>
          </div>
          <div class="item-row17 item">
            <div class="item-title">参加工作时间:</div>
            <div class="item-right">
              <input name="uworktime" type="text" class="niki" placeholder="请输入参加工作时间" value />
            </div>
          </div>
          <div class="item-row18 item">
            <div class="item-title">从事专业:</div>
            <div class="item-right">
              <input name="ucongshizhuanye" type="text" class="niki" placeholder="请输入从事专业" value />
            </div>
          </div>
          <div class="item-row19 item">
            <div class="item-title">通讯地址:</div>

            <div class="item-right">
              <input name="uaddress" class="niki" placeholder="请输入通讯地址" value />
            </div>
          </div>
          <div class="item-row20 item">
            <div class="item-title">邮政编码:</div>
            <div class="item-right">
              <input name="uzipcode" class="niki" placeholder="请输入邮政编码" maxlength="6" value />
            </div>
          </div>

          <div class="item-row21 item">
            <div class="item-title">联系电话:</div>
            <div class="item-right">
              <input name="ulianxitel" class="niki" placeholder="请输入联系电话" maxlength="11" value />
            </div>
          </div>
          <div class="item-row22 item">
            <div class="item-title">证书管理号:</div>
            <div class="item-right">
              <input name="uzhengshu" class="niki" placeholder="请输入证书管理号" value />
            </div>
          </div>
          <button class="btn-save" type="button" onclick="setUserInfo(this)">保存</button>
        </form>
        <form action="" v-show="tabState==1">
            <div class="user-pw-box personalBox">
                <div class="oldPw">
                    <span class="redstar">*</span> <span>旧密码：</span><input name="oldpassword" type="password" v-model="oldpw" placeholder="请输入旧密码">
                </div>
                <div class="newPw">
                    <span class="redstar">*</span> <span>新密码：</span><input name="password" type="password" v-model="newpw" placeholder="请输入新密码">
                </div>
                <div class="confirmPw">
                    <span class="redstar">*</span> <span>确认密码：</span><input name="repassword" type="password" v-model="confirmnewpw" placeholder="请输确认新密码">
                </div>
                <span class="savepw" @click="savepw">保存</span>
            </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
export default {
  name: "basicinfo",
  data() {
    return {
      tabState: 0,
      basicInfoTabs:[{id: "1",tabname:"基本资料"},{id: "2",tabname:"修改密码"}],
      oldpw:'',
      newpw:'',
      confirmnewpw:'',
    };
  },
  mounted(){

  },
  methods:{
    tab(index){
      this.tabState=index;
    },
    savepw:function(){
      let that = this;
      if(this.oldpw==''){
          alert("请输入旧密码")
      }else if(this.newpw==''){
          alert("请输入新密码")
      }else if(this.oldpw!=this.newpw){
          alert("密码不一致")
      }else{
          let userinfo={uid:localStorage.getItem("uid"),token:localStorage.getItem("token"), old_password:this.oldpw,new_password:this.newpw,}
          this.$axios({
          method: 'post',
          url: 'http://jixujiaoyu_api.songlongfei.club/user/update_password',
          data: qs.stringify(userinfo) 
          }).then(function (response) {
              if(response.data.status=="ok"){
                  alert("密码修改成功")
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
.basicinfo{width: 950px;display: flex;flex-direction: column;}
.basicinfo .tab-box{width: 100%;height: 55px;background-color: #fafafa;margin-bottom: 20px;}
.basicinfo .tab-box span{font-size: 14px;margin-left: 55px;line-height: 55px;cursor: pointer;}
.basicinfo .tab-box span:hover{color:#0c69f5; border-bottom: 1px solid #0c69f5;}
.basicinfo .tab-box a:nth-child(1){margin-left: 20px;}
.basicinfo .tab-box .onactive{color:#0c69f5; border-bottom: 1px solid #0c69f5;}
.basicinfo .content-box{width: 100%;}
.basicinfo .content-box>div{width: 910px;position: relative;left: 0;top:0;background-color: #fafafa;padding:0 20px 20px 20px;font-size: 12px;}
.basicinfo .content-box .user-info-box .item{width: 100%;height: 42px;border-bottom: 1px solid #ebeff6;display: flex;align-items: center;}
.basicinfo .content-box .user-info-box .item-row24{height: 100px;border-bottom:none;}
.basicinfo .content-box .user-info-box .btn-save{width: 250px;height: 40px;background-color: #138bef;color: #fff;font-size: 14px;border-radius: 10px;margin-top: 23px;margin-left: 110px;}
.basicinfo .content-box .user-info-box .item-row24 textarea{width: 380px;height: 100px;border: 1px solid #ebeff6;background-color: #fafafa;}
.basicinfo .content-box .user-info-box .item .item-title{width: 108px;height: 100%;line-height: 42px;font-size: 14px;color:#313131;}
.basicinfo .content-box .user-info-box .item .item-right{height: 100%;}
.basicinfo .content-box .user-info-box .item .item-right .account{height: 100%;line-height: 42px;font-size: 14px;color:#313131;border-radius: 5px;}
.basicinfo .content-box .user-info-box .item .item-right input{width: 240px;height: 34px;border: 1px solid #cfcfcf;background-color: transparent;margin-top: 3px;padding-left: 10px;border-radius: 5px;}
.basicinfo .content-box .user-info-box .item .item-right input::-webkit-input-placeholder {color: #000;}
.basicinfo .content-box .user-info-box .item .item-right>select{width: 250px;height: 34px;border: 1px solid #cfcfcf;background-color: transparent;margin-top: 3px;padding-left: 10px;border-radius: 5px;}
.basicinfo .content-box .user-info-box .item .item-right .date{width: 100%;height: 34px;}
.basicinfo .content-box .user-info-box .item .item-right .date>select{width: 122px;height: 36px;padding-left: 10px;border: 1px solid #cfcfcf;display: inline-block;position: relative;background-color: transparent;margin-top: 3px;margin-right: 10px;border-radius: 5px;}
.basicinfo .content-box .user-pw-box{overflow: hidden;}
.basicinfo .content-box .user-pw-box>div{height: 44px;display: flex;align-items: center;margin-top: 20px;}
.basicinfo .content-box .user-pw-box>div input{width: 382px;height: 40px;border: 1px solid #b7c7d7;padding-left: 10px;background-color: transparent;}
.basicinfo .content-box .user-pw-box>div  .redstar{color: red;}
.basicinfo .content-box .user-pw-box .oldPw .redstar{margin-left: 10px;}
.basicinfo .content-box .user-pw-box .newPw .redstar{margin-left: 10px;}
.basicinfo .content-box .user-pw-box .savepw{width: 394px;height: 40px;line-height: 40px;color: #fff;background-color: #369ff5;margin-top: 20px;margin-left: 65px;text-align: center;display: block;cursor: pointer;}
</style>
