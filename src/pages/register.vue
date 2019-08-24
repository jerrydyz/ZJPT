<template>
  <div class="register">
    <form class="register-box">
        <div class="title-box">
            <div class="register-title">账号注册</div>
            <div class="have-account">已有账号, <router-link to="/login">返回登陆</router-link></div>
        </div>
        <div class="write-infobox">
            <div>
                <span class="redstar">*</span>
                <input id="uname" name="uname" type="text" class="Name" placeholder="请输入姓名" v-model="username" @blur="identifyName">
                <div class="register-state">
                    <div class="register-sucess" v-show="nametips==1"></div>
                    <div class="register-error" v-show="nametips==2"></div>
                </div>
                <div class="register-tips" v-show="nametips==2">请输入2-15个汉字</div>
            </div>
            <div>
                <span class="redstar">*</span>
                <input name="uidcardno" id="pruidcardno" type="text" class="IDcard" maxlength="18" placeholder="请输入身份证号" v-model="IDcard" @blur="identifyIDcard">
                <span class="tips">(作为账号登录)</span>
                <div class="register-state">
                    <div class="register-sucess" v-show="IDcardtips==1"></div>
                    <div class="register-error" v-show="IDcardtips==2"></div>
                </div>
                <div class="register-tips" v-show="IDcardtips==2">请输入18位正确的身份证号</div>
            </div>
            <div> 
                <span class="redstar">*</span>
                <input name="phone" id="prphone" type="text" class="phone" maxlength="11" placeholder="请输入手机号" v-model="phone" @blur="identifyphone">
                <div class="register-state">
                    <div class="register-sucess" v-show="phonetips==1"></div>
                    <div class="register-error" v-show="phonetips==2"></div>
                </div>
                <div class="register-tips" v-show="phonetips==2">请输入正确的手机号</div>
            </div> 
            
            <div>
                <span class="redstar">*</span>
                <input name="udanwei" id="udanwei" type="text" class="unit" placeholder="请输入工作单位" v-model="company" @blur="identifycompany">
                <div class="register-state">
                    <div class="register-sucess" v-show="companytips==1"></div>
                    <div class="register-error" v-show="companytips==2"></div>
                </div>
                <div class="register-tips" v-show="companytips==2">不能为空</div>
            </div>
            <div>
                <span class="redstar">*</span>
                <!-- <input type="text" id="city" name="city" class="city" placeholder="请选择单位所在区域"  v-model="workaddress" @blur="identifyWorkAddress"> -->
                <div class="chooseCity">
                    <select name="" id="" class="province">
                        <option value="">单位所在省</option>
                        <option value="">河南省</option>
                    </select>
                    <select name="" id="" class="city" @change="choosequ($event)" v-model="selected">
                        <option value="">单位所在市</option>
                        <option :value="item.value" v-for="item in cityjson.children" :key="item.value" >{{item.label}}</option>
                    </select>
                    <select name="" id="" class="qu" @blur="identifyWorkAddress">
                        <option value="">单位所在区</option>
                        <option value="" v-for="(item,index) in qu" :key="index">{{item.label}}</option>
                    </select>
                </div>
                <div class="register-state">
                    <div class="register-sucess" v-show="workaddrestips==1"></div>
                    <div class="register-error"  v-show="workaddrestips==2"></div>
                </div>
                <div class="register-tips" v-show="workaddrestips==2">不能为空</div>
            </div> 
            <div> 
                <span class="redstar">*</span>
                <input name="password" id="Pw" type="password" class="Pw" placeholder="建议输入6位以上包含字母和数字的密码" v-model="pw" @blur="identifypw">
                <div class="register-state">
                    <div class="register-sucess" v-show="pwtips==1"></div>
                    <div class="register-error" v-show="pwtips==2"></div>
                </div>
                <div class="register-tips" v-show="pwtips==2">至少输入6位以上密码</div>
            </div> 
            <div> 
                <span class="redstar">*</span>
                <input name="repassword" id="identifyPw" type="password" class="identifyPw" placeholder="请确认密码" v-model="confirmpw" @blur="identifyconfirmpw">
                <div class="register-state">
                    <div class="register-sucess" v-show="confirmpwtips==1"></div>
                    <div class="register-error" v-show="confirmpwtips==2"></div>
                </div>
                <div class="register-tips" v-show="confirmpwtips==2">密码不一致</div>
            </div> 
        </div>
        
        <div class="btns">
            <button type="button" @click="registerNow">立即注册</button>
            <button type="reset">重新填写</button>
        </div>
    </form>
  </div>
</template>

<script>
import qs from 'qs'
export default {
  name: 'register',
  data () {
    return {
      selected:'',
      username: '',
      IDcard: '',
      phone: '',
      company: '',
      workaddress: '',
      pw: '',
      confirmpw: '',
      nametips:0,
      IDcardtips:0,
      phonetips:0,
      companytips:0,
      workaddrestips:0,
      pwtips:0,
      confirmpwtips:0,
      //省市级所有数据
      cityjson:'',
      //区数据
      qu:'',
      apiurl:'http://jixujiaoyu_api.songlongfei.club:1012',
    }
  },
  created(){
      this.initcity();
  },
  methods:{
      initcity:function(){
        this.cityjson={
            value: '410000',
            label: '河南省',
            children: [{
                value: "410100",
                label: "郑州市",
                children: [{
                    value: "410102",
                    label: "中原区"
                }, {
                    value: "410103",
                    label: "二七区"
                }, {
                    value: "410104",
                    label: "管城回族区"
                }, {
                    value: "410105",
                    label: "金水区"
                }, {
                    value: "410106",
                    label: "上街区"
                }, {
                    value: "410108",
                    label: "惠济区"
                }, {
                    value: "410122",
                    label: "中牟县"
                }, {
                    value: "410181",
                    label: "巩义市"
                }, {
                    value: "410182",
                    label: "荥阳市"
                }, {
                    value: "410183",
                    label: "新密市"
                }, {
                    value: "410184",
                    label: "新郑市"
                }, {
                    value: "410185",
                    label: "登封市"
                }, {
                    value: "410186",
                    label: "郑东新区"
                }, {
                    value: "410187",
                    label: "高新区"
                }, {
                    value: "410188",
                    label: "其它区"
                }]
            }, {
                value: "410200",
                label: "开封市",
                children: [{
                    value: "410202",
                    label: "龙亭区"
                }, {
                    value: "410203",
                    label: "顺河回族区"
                }, {
                    value: "410204",
                    label: "鼓楼区"
                }, {
                    value: "410205",
                    label: "禹王台区"
                }, {
                    value: "410211",
                    label: "金明区"
                }, {
                    value: "410221",
                    label: "杞县"
                }, {
                    value: "410222",
                    label: "通许县"
                }, {
                    value: "410223",
                    label: "尉氏县"
                }, {
                    value: "410224",
                    label: "开封县"
                }, {
                    value: "410225",
                    label: "兰考县"
                }, {
                    value: "410226",
                    label: "其它区"
                }]
            }, {
                value: "410300",
                label: "洛阳市",
                children: [{
                    value: "410302",
                    label: "老城区"
                }, {
                    value: "410303",
                    label: "西工区"
                }, {
                    value: "410304",
                    label: "廛河回族区"
                }, {
                    value: "410305",
                    label: "涧西区"
                }, {
                    value: "410306",
                    label: "吉利区"
                }, {
                    value: "410307",
                    label: "洛龙区"
                }, {
                    value: "410322",
                    label: "孟津县"
                }, {
                    value: "410323",
                    label: "新安县"
                }, {
                    value: "410324",
                    label: "栾川县"
                }, {
                    value: "410325",
                    label: "嵩县"
                }, {
                    value: "410326",
                    label: "汝阳县"
                }, {
                    value: "410327",
                    label: "宜阳县"
                }, {
                    value: "410328",
                    label: "洛宁县"
                }, {
                    value: "410329",
                    label: "伊川县"
                }, {
                    value: "410381",
                    label: "偃师市"
                }, {
                    value: "471004",
                    label: "高新区"
                }, {
                    value: "471005",
                    label: "其它区"
                }]
            }, {
                value: "410400",
                label: "平顶山市",
                children: [{
                    value: "410402",
                    label: "新华区"
                }, {
                    value: "410403",
                    label: "卫东区"
                }, {
                    value: "410404",
                    label: "石龙区"
                }, {
                    value: "410411",
                    label: "湛河区"
                }, {
                    value: "410421",
                    label: "宝丰县"
                }, {
                    value: "410422",
                    label: "叶县"
                }, {
                    value: "410423",
                    label: "鲁山县"
                }, {
                    value: "410425",
                    label: "郏县"
                }, {
                    value: "410481",
                    label: "舞钢市"
                }, {
                    value: "410482",
                    label: "汝州市"
                }, {
                    value: "410483",
                    label: "其它区"
                }]
            }, {
                value: "410500",
                label: "安阳市",
                children: [{
                    value: "410502",
                    label: "文峰区"
                }, {
                    value: "410503",
                    label: "北关区"
                }, {
                    value: "410505",
                    label: "殷都区"
                }, {
                    value: "410506",
                    label: "龙安区"
                }, {
                    value: "410522",
                    label: "安阳县"
                }, {
                    value: "410523",
                    label: "汤阴县"
                }, {
                    value: "410526",
                    label: "滑县"
                }, {
                    value: "410527",
                    label: "内黄县"
                }, {
                    value: "410581",
                    label: "林州市"
                }, {
                    value: "410582",
                    label: "其它区"
                }]
            }, {
                value: "410600",
                label: "鹤壁市",
                children: [{
                    value: "410602",
                    label: "鹤山区"
                }, {
                    value: "410603",
                    label: "山城区"
                }, {
                    value: "410611",
                    label: "淇滨区"
                }, {
                    value: "410621",
                    label: "浚县"
                }, {
                    value: "410622",
                    label: "淇县"
                }, {
                    value: "410623",
                    label: "其它区"
                }]
            }, {
                value: "410700",
                label: "新乡市",
                children: [{
                    value: "410702",
                    label: "红旗区"
                }, {
                    value: "410703",
                    label: "卫滨区"
                }, {
                    value: "410704",
                    label: "凤泉区"
                }, {
                    value: "410711",
                    label: "牧野区"
                }, {
                    value: "410721",
                    label: "新乡县"
                }, {
                    value: "410724",
                    label: "获嘉县"
                }, {
                    value: "410725",
                    label: "原阳县"
                }, {
                    value: "410726",
                    label: "延津县"
                }, {
                    value: "410727",
                    label: "封丘县"
                }, {
                    value: "410728",
                    label: "长垣县"
                }, {
                    value: "410781",
                    label: "卫辉市"
                }, {
                    value: "410782",
                    label: "辉县市"
                }, {
                    value: "410783",
                    label: "其它区"
                }]
            }, {
                value: "410800",
                label: "焦作市",
                children: [{
                    value: "410802",
                    label: "解放区"
                }, {
                    value: "410803",
                    label: "中站区"
                }, {
                    value: "410804",
                    label: "马村区"
                }, {
                    value: "410811",
                    label: "山阳区"
                }, {
                    value: "410821",
                    label: "修武县"
                }, {
                    value: "410822",
                    label: "博爱县"
                }, {
                    value: "410823",
                    label: "武陟县"
                }, {
                    value: "410825",
                    label: "温县"
                }, {
                    value: "410882",
                    label: "沁阳市"
                }, {
                    value: "410883",
                    label: "孟州市"
                }, {
                    value: "410884",
                    label: "其它区"
                }]
            }, {
                value: "410900",
                label: "濮阳市",
                children: [{
                    value: "410902",
                    label: "华龙区"
                }, {
                    value: "410922",
                    label: "清丰县"
                }, {
                    value: "410923",
                    label: "南乐县"
                }, {
                    value: "410926",
                    label: "范县"
                }, {
                    value: "410927",
                    label: "台前县"
                }, {
                    value: "410928",
                    label: "濮阳县"
                }, {
                    value: "410929",
                    label: "其它区"
                }]
            }, {
                value: "411000",
                label: "许昌市",
                children: [{
                    value: "411002",
                    label: "魏都区"
                }, {
                    value: "411023",
                    label: "许昌县"
                }, {
                    value: "411024",
                    label: "鄢陵县"
                }, {
                    value: "411025",
                    label: "襄城县"
                }, {
                    value: "411081",
                    label: "禹州市"
                }, {
                    value: "411082",
                    label: "长葛市"
                }, {
                    value: "411083",
                    label: "其它区"
                }]
            }, {
                value: "411100",
                label: "漯河市",
                children: [{
                    value: "411102",
                    label: "源汇区"
                }, {
                    value: "411103",
                    label: "郾城区"
                }, {
                    value: "411104",
                    label: "召陵区"
                }, {
                    value: "411121",
                    label: "舞阳县"
                }, {
                    value: "411122",
                    label: "临颍县"
                }, {
                    value: "411123",
                    label: "其它区"
                }]
            }, {
                value: "411200",
                label: "三门峡市",
                children: [{
                    value: "411202",
                    label: "湖滨区"
                }, {
                    value: "411221",
                    label: "渑池县"
                }, {
                    value: "411222",
                    label: "陕县"
                }, {
                    value: "411224",
                    label: "卢氏县"
                }, {
                    value: "411281",
                    label: "义马市"
                }, {
                    value: "411282",
                    label: "灵宝市"
                }, {
                    value: "411283",
                    label: "其它区"
                }]
            }, {
                value: "411300",
                label: "南阳市",
                children: [{
                    value: "411302",
                    label: "宛城区"
                }, {
                    value: "411303",
                    label: "卧龙区"
                }, {
                    value: "411321",
                    label: "南召县"
                }, {
                    value: "411322",
                    label: "方城县"
                }, {
                    value: "411323",
                    label: "西峡县"
                }, {
                    value: "411324",
                    label: "镇平县"
                }, {
                    value: "411325",
                    label: "内乡县"
                }, {
                    value: "411326",
                    label: "淅川县"
                }, {
                    value: "411327",
                    label: "社旗县"
                }, {
                    value: "411328",
                    label: "唐河县"
                }, {
                    value: "411329",
                    label: "新野县"
                }, {
                    value: "411330",
                    label: "桐柏县"
                }, {
                    value: "411381",
                    label: "邓州市"
                }, {
                    value: "411382",
                    label: "其它区"
                }]
            }, {
                value: "411400",
                label: "商丘市",
                children: [{
                    value: "411402",
                    label: "梁园区"
                }, {
                    value: "411403",
                    label: "睢阳区"
                }, {
                    value: "411421",
                    label: "民权县"
                }, {
                    value: "411422",
                    label: "睢县"
                }, {
                    value: "411423",
                    label: "宁陵县"
                }, {
                    value: "411424",
                    label: "柘城县"
                }, {
                    value: "411425",
                    label: "虞城县"
                }, {
                    value: "411426",
                    label: "夏邑县"
                }, {
                    value: "411481",
                    label: "永城市"
                }, {
                    value: "411482",
                    label: "其它区"
                }]
            }, {
                value: "411500",
                label: "信阳市",
                children: [{
                    value: "411502",
                    label: "浉河区"
                }, {
                    value: "411503",
                    label: "平桥区"
                }, {
                    value: "411521",
                    label: "罗山县"
                }, {
                    value: "411522",
                    label: "光山县"
                }, {
                    value: "411523",
                    label: "新县"
                }, {
                    value: "411524",
                    label: "商城县"
                }, {
                    value: "411525",
                    label: "固始县"
                }, {
                    value: "411526",
                    label: "潢川县"
                }, {
                    value: "411527",
                    label: "淮滨县"
                }, {
                    value: "411528",
                    label: "息县"
                }, {
                    value: "411529",
                    label: "其它区"
                }]
            }, {
                value: "411600",
                label: "周口市",
                children: [{
                    value: "411602",
                    label: "川汇区"
                }, {
                    value: "411621",
                    label: "扶沟县"
                }, {
                    value: "411622",
                    label: "西华县"
                }, {
                    value: "411623",
                    label: "商水县"
                }, {
                    value: "411624",
                    label: "沈丘县"
                }, {
                    value: "411625",
                    label: "郸城县"
                }, {
                    value: "411626",
                    label: "淮阳县"
                }, {
                    value: "411627",
                    label: "太康县"
                }, {
                    value: "411628",
                    label: "鹿邑县"
                }, {
                    value: "411681",
                    label: "项城市"
                }, {
                    value: "411682",
                    label: "其它区"
                }]
            }, {
                value: "411700",
                label: "驻马店市",
                children: [{
                    value: "411602",
                    label: "驿城区"
                }, {
                    value: "411621",
                    label: "西平县"
                }, {
                    value: "411622",
                    label: "上蔡县"
                }, {
                    value: "411623",
                    label: "平舆县"
                }, {
                    value: "411624",
                    label: "正阳县"
                }, {
                    value: "411625",
                    label: "确山县"
                }, {
                    value: "411626",
                    label: "泌阳县"
                }, {
                    value: "411627",
                    label: "汝南县"
                }, {
                    value: "411628",
                    label: "遂平县"
                }, {
                    value: "411681",
                    label: "新蔡县"
                }, {
                    value: "411682",
                    label: "其它区"
                }]
            }]
        }
      },
      //选择完城市后
      choosequ:function(event){
          this.selected = event.target.value;
          console.log(this.selected);
          for( let i=0;i<this.cityjson.children.length;i++){
              if(this.cityjson.children[i].value==this.selected){
                  this.qu=this.cityjson.children[i].children;
              }
          }
      },
      //验证名字
      identifyName:function(){
        var regu =/^[\u4e00-\u9fa5]+$/;
        
        if(this.username==''){
            console.log("1111")
            this.nametips=2;
        }else if(!regu.test(this.username) || this.username.length<2){
            this.nametips=2;
        }else{
            this.nametips=1;
        }     
      },
      identifyIDcard:function(){
        let reg=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if(this.IDcard==''){
            this.IDcardtips=2;
        }else if(!reg.test(this.IDcard)){
            this.IDcardtips=2;
        }else{
            this.IDcardtips=1;
        }
      },
      identifyphone:function(){
        if(this.phone==''){
            this.phonetips=2;
        }else if(!this.phone.match( /^1[3|4|5|6|7|8|9][0-9]\d{8}$/)){
            this.phonetips=2;
        }else{
            this.phonetips=1;
        }  
      },
      identifycompany:function(){
        if(this.company==''){
            this.companytips=2;
        }else{
            this.companytips=1;
        }  
      },
      identifyWorkAddress:function(){
           if(this.qu==''){
            this.workaddrestips=2;
        }else{
            this.workaddrestips=1;
        } 
      },
      identifypw:function(){
        if(this.pw==''){
            this.pwtips=2;
        }else if(this.pw.length<6){
            this.pwtips=2;
        }else{
            this.pwtips=1;
        }  
      },
      identifyconfirmpw:function(){
        if(this.confirmpw==''){
            this.confirmpwtips=2;
        }else if(this.confirmpw!=this.pw){
            this.confirmpwtips=2;
        }else{
            this.confirmpwtips=1;
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
      //用户注册 
      registerNow:function(){
          let that= this;
          let userinfo={name:this.username,id_card:this.IDcard,mobile:this.phone,gongzuodanwei:this.company, password:this.pw}
          this.$axios.post(this.apiurl+'/user/reg',qs.stringify(userinfo)).then(response => {
              if(response.data.status=='ok'){
                console.log(response);
                that.$message.success({message:"您已注册成功，请重新登录",duration:2000});
                setTimeout(() => {
                    that.$router.push({ path: '/login' });
                }, 2000);
               
              }else if(response.data.status=='error'){
                  that.$message.error({message:response.data.errormsg,duration:2000});
              }else if(response.data.status=='relogin'){
                  that.$message.error({message:"请重新登录",duration:2000});
                  that.removeInfo();
                  setTimeout(() => {
                    that.$router.push({ path: '/login' });
                }, 2000);
              }
          })
          .catch(response => {
            console.log(response);
          });
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.register{width: 100%; background-image: url(/static/images/personal/login-bg.png);overflow: hidden;margin-bottom: -40px;}
.register .login-title{width: 903px;height: 77px;margin: 60px auto 30px;display: block;}
.register .register-box{width: 1200px; height: 650px;background-color: rgba(255,255,255,.9);margin: 50px auto;border-radius:20px;padding: 0 20px;box-sizing: border-box;box-shadow: 0 0 10px #aaa;}
.register .register-box .title-box{width: 100%;height: 55px;border-bottom: 2px solid #eee;display: flex;justify-content: space-between;align-items: center;}
.register .register-box .title-box .register-title{font-size: 18px;color:#08306d;}
.register .register-box .title-box .have-account{font-size: 18px;color:#626262;}
.register .register-box .title-box .have-account a{font-size: 18px;color:#2276ff;}
.register .register-box .title-box .have-account a:hover{color:#ce000f;}
.register .register-box .write-infobox{width: 420px;margin: 25px auto 0; }
.register .register-box .write-infobox>div{width: 410px;height: 45px;margin-top: 12px;position: relative;}
.register .register-box .write-infobox>div input:focus{ border: 1px solid #ce000f;}
.register .register-box .write-infobox div .redstar{color: red;position: absolute;left: 10px;top: 17px;font-size: 16px;display: block;z-index: 1;}
.register .register-box .write-infobox .chooseCity{width: 100%;height: 100%;color:#868686;font-size: 16px;box-sizing: border-box;background-color: transparent;}
.register .register-box .write-infobox .chooseCity select{width: 133px;height: 100%;padding: 0 16px;}
.register .register-box .write-infobox div .tips{color:#7ebdeb;font-size: 12px;position: absolute;right: 20px;top: 14px;}
.register .register-box .write-infobox input,.register .register-box .write-infobox select{width: 100%;height: 100%;padding:0 20px;color:#868686;font-size: 16px;box-sizing: border-box;background-color: transparent;border: 1px solid #c1c1c1;border-radius: 5px;}
.register .register-box .write-infobox input::-webkit-input-placeholder {color:#868686;font-size: 16px;}
.register .register-box .write-infobox .register-state{width: 32px;height: 32px;position: absolute;right: -40px;top: 5px;}
.register .register-box .write-infobox .register-state>div{position: absolute;left: 0px;top: 0px;}
.register .register-box .write-infobox .register-state .register-sucess{width: 100%;height: 100%;background-image: url(/static//images/personal/success.png);background-size: cover;}
.register .register-box .write-infobox .register-state .register-error{width: 100%;height: 100%;background-image: url(/static//images/personal/error.png);background-size: cover;}
.register-tips{width: 150px;height: 45px;line-height: 45px;font-size: 12px;position: absolute;right: -200px;top:0;}
.register .register-box .btns{height: 55px;margin: 30px auto 45px;display: flex;justify-content: center;}
.register .register-box .btns button {width: 170px;height: 55px;font-size: 16px;background-color: #ce000f;color:#fff;} 
.register .register-box .btns button:hover{color:#ce000f;background-color: #fff;border:1px solid #ce000f;cursor: pointer;}
.register .register-box .btns button:nth-child(1){margin-right: 32px;}
.common-footer{margin-top: 0;}
</style>
