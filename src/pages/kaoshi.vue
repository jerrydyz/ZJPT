<template>
  <div class="kaoshi">
    <div class="title">
      <div class="top w clearfix">
        <p class="fl">河南省继续教育学会在线学习平台</p>
        <p class="fr">
          <span class="spn1">首页</span>
          <span>退出</span>
        </p>
      </div>
    </div>
    <div class="topbox bg3f">
      <div class="screen-outer">
        <div class="screen-outer">
          <div class="exercises-left"  style="position: static; margin-top: 0px; top: 20px;">
            <div class="study-record">
              <ul class="study-record-box">
                <li class="bgclr">
                 <!-- <p> 用时</p> -->
                 <p id="stime" v-html="time"></p>
                </li>
                <li @click="submitpapers">我要交卷</li>
                <!-- <li>
                  <label>
                    <input type="checkbox" id="single_mod"  @click="ckecktype($event)"/>单题模式
                  </label>
                </li> -->
              </ul>
              <!--答题卡-->
              <dl class="answer-sheet">
                <dt>答题卡</dt>
                <dd v-for="(item,index) in datalist1" @click="leftBtn($event)">{{index+1}}</dd>
                <dd v-for="(item,index) in datalist2"  @click="leftBtn($event)">{{index+datalist1.length+1}}</dd>
                 <dd v-for="(item,index) in datalist3"  @click="leftBtn($event)">{{index+datalist1.length+datalist2.length+1}}</dd>
                  <dd v-for="(item,index) in datalist3"  @click="leftBtn($event)">{{index+datalist1.length+datalist2.length+datalist3.length+1}}</dd>
              </dl>
            </div>
          </div>
            <div class="exercises-content">
              <ul class="test-paper-box">
                <h3>{{tit}}</h3>
                <!--单选题-->
                <li
                  class="test-paper"
                  v-for="(item,index) in datalist1"
                  :key="item.id"
                >
                  <h5>
                    <small>{{index+1}}</small>
                    (
                    <span>{{msg1}} {{score1}}分</span> )
                  </h5>
                  <p></p>
                  <p>{{item.question}}</p>
                  <p></p>
                  <ul class="answer">
                    <li v-for="(key,val) in xuanze">
                      <b>{{val}}、</b>
                      <p>{{key}}</p>
                    </li>
                  </ul>
                  <div class="choice shiti_select_div" :shiti_id="item.id" :shiti_type="item.type" >
                    <ul>
                      <li v-for="(key,val) in xuanze">
                        <label ></label>
                          <input class="anserItem" type="radio" :name="['danxuan_'+item.id]" :value="val"  @click="radio($event,item.id,index)" />
                          {{val}}
                        
                      </li>
                    </ul>
                    <div class="collection" style="display:none">
                      <span class="look" @click="lookjiexi(index)">
                        <small>查看解析</small>
                        <i class="icon iconlook"></i>
                      </span>
                    </div>
                  </div>
                  <div style="display:none">
                    <div class="fz" v-show="lookcollect">
                      <b>解析：</b>
                      <p>{{item.tips}}</p>
                    </div>
                  </div>
                </li>

                <!--多选题-->

                <li
                  class="test-paper"
                  id="ex6"
                  data-question-num="6"
                  v-for="(check,index) in datalist2"
                  :key="check.id"
                >
                  <h5>
                    <small>{{index+datalist1.length+1}}</small> (
                    <span>{{msg2}} {{score2}} 分</span>)
                  </h5>

                  <p></p>

                  <p>{{check.question}}</p>

                  <p></p>

                  <ul class="answer">
                    <li v-for="(key,val) in xuanze2" :key="val">
                      <b>{{val}}、</b>
                      <p>{{key}}</p>
                    </li>

                  </ul>

                  <div class="choice shiti_select_div"  :shiti_id="check.id" :shiti_type="check.type">
                    <ul>
                      <li v-for="(key,val) in xuanze2" >
                        <label  @click="checkbox($event,check.id,index+Math.random())">
                          <input class="anserItem" type="checkbox"  :name="['duoxuan_'+check.id+'[]']" :value='val'/>
                        {{key}}
                        </label>
                      </li>
                    </ul>

                    <div class="collection" style="display:none">
                      <span class="look">
                        <small>查看解析</small>
                        <i class="icon iconlook"></i>
                      </span>
                    </div>
                  </div>

                  <div class="fz" style="display:none">
                    <b>解析：</b>

                    <p>{{check.tips}}</p>
                  </div>
                </li>

                <!--判断题-->

                <li
                  class="test-paper"
                  id="ex7"
                  data-question-num="7"
                  v-for="(dan,index) in datalist3"
                  :key="dan.id"
                >
                  <h5>
                    <small>{{index+datalist1.length+datalist2.length+1}}</small>（
                    <span>{{msg3}} {{score3}}</span> 分）
                  </h5>

                  <p></p>

                  <p>{{dan.question}}</p>

                  <p></p>

                  <ul class="answer">
                    <li v-for="(key,val) in xuanze3">
                      <b>{{key}}</b>
                    </li>
                  </ul>

                  <div class="choice shiti_select_div"  :shiti_id="dan.id" :shiti_type="dan.type">
                    <ul>
                      <li v-for="(key,val) in xuanze3">
                        <label>
                          <input class="anserItem" type="radio" :name="['panduan_'+dan.id]" :value="val"  @click="panduan($event,dan.id,index+Math.random()*10)"/>
                          {{key}}
                        </label>
                      </li>
                    </ul>

                    <div class="collection" style="display:none">
                      <span class="look">
                        <small>查看解析</small>
                        <i class="icon iconlook"></i>
                      </span>
                    </div>
                  </div>

                  <div class="fz" style="display:none">
                    <b>解析：</b>

                    <p>{{dan.tips}}</p>
                  </div>
                </li>

                <!--填空题-->

                <li
                  class="test-paper"
                  v-for="(tian,index) in datalist4"
                  :key="tian.id"
                >
                  <h5>
                    <small>{{index+datalist1.length+datalist2.length+datalist3.length+1}}</small>(
                    <span>{{msg4}} {{score4}}分</span> )
                  </h5>

                  <p></p>

                  <p>{{tian.question}}</p>

                  <p></p>

                  <div class="choice shiti_select_div"  :shiti_id="tian.id" :shiti_type="tian.type">
                    <ul class="blanks">
                      <li v-for="knum in tian.kong_num">
                            <input type="text" :shiti_tiankong="['tiankong_'+tian.id]">
                      </li>
                    </ul>
                    <div class="collection" style="display:none">
                      <span class="look">
                        <small>查看提示</small>
                        <i class="icon iconlook"></i>
                      </span>
                    </div>
                  </div>

                  <div class="fz" style="display:none">
                    <b>提示：</b>
                  </div>
                </li>
              </ul>
              <!--下一题-->
              <div class="next-exercises" v-show="next">
                <a href="javascript:;">下一题</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import qs from "qs";
import Vue from 'vue'
export default {
  data() {
    return {
      time:'',
      uid: "",
      token: "",
      shijuanid: "14",
      data: [],
      tit: "",
      datalist1: [],
      datalist2: [],
      datalist3: [],
      datalist4: [],
      msg1: "", //单选题题目
      score1: "",
      msg2: "", //多选题题目
      score2: "",
      msg3: "", //判断题题目
      score3: "",
      msg4: "", //填空题题目
      score4: "",
      xuanze: {},
      xuanze2: {},
      xuanze3: {},
      xuanze4: {},
      daan: "",
      B: "",
      D: "",
      F: "",
      H: "",
      title1: "",
      showdaan: true,
      choice: true,
      tips: "",
      showtip: false,
      answerdata: [],
      answerlist: [],
      rightkey1: "",
      rightkey2: [],
      rightkey3: "",
      rightkey4: [],
      jiexi1: "",
      jiexi2: "",
      jiexi3: "",
      jiexi4: "",
      lookcollect: false, //查看解析按钮
      pick1:'',
      val:'',
      next:false,//下一题
      raduo1:[],//单选题答案
      id1:"",//单选题id
      raduo2:[],//多选题答案
      id2:"",//单选题id
      raduo3:'',//判断题答案
      id3:"",//判断题id
      // raduo4:'',//填空题答案
      id4:"",//填空题id,
      ss:0,
      mm:0,
      hh:0,
      ss_str:'',
      mm_str:'',
      answers:[],
      replay:{},
      replay2:{},
      replay3:{},
      radio_id:'',
      radio_answer:'',
      checkeboxs:[],
        times:''
    };
  },
  created() {
    var that=this
    this.uid= localStorage.getItem('uid') 
      // this.token=localStorage.getItem('token')
    this.token =this.$route.query.token
    this.getshijuan();
    this.getAnswer();
    this.times=setInterval(function(){
      that.usetime ()
    },1000)
    
    //console.log($)
    
  },
  watch: {},
  methods: {
    //考试用时
    usetime (){
      this.ss++; //秒值以1为单位递增   
      if(this.ss>=60) { //当秒数大于等于60     
     this.mm+=1; //分钟加1      
     this.ss=0; //秒数退回0   
     }   
  if(this.mm>=60) { //当分钟大于等于60      
      this.hh+=1; //小时数加1      
      this.mm=0; //分钟数退回0   
     }   
      this.ss_str=(this.ss<10 ? "0" + this.ss : this.ss); //格式化秒数   
     this.mm_str=(this.mm<10 ? "0" + this.mm : this.mm); //格式化分钟数   
      // this.tMsg="考试用时: " + this.hh + "小时" + this.mm_str + "分" + this.ss_str + "秒"; //输出的字串   
      this.tMsg= this.mm_str + "分" + this.ss_str + "秒";
     this.time=this.tMsg;
    },
    //获取单选按钮的值
    radio(e,id,num) {
      // Vue.set(this.answers,num,{'shiti_id':id,'answer':e.target.value})
    },
    //获取多选按钮的值
    checkbox(e,id,num) {
      // console.log(e.target.value,id,num)
      // console.log(this.checkeboxs)
      // Vue.set(this.answers,num,{'shiti_id':id,'answer':this.checkeboxs})
    },
    //获取判断的值
    panduan(e,id,num) {
      // console.log(e.target.value,id,num)
      // Vue.set(this.answers,num,{'shiti_id':id,'answer':e.target.value})
      // console.log(this.answers)
    },
   // 查看解析
    lookjiexi(dat) {
      console.log("1111");
      this.lookcollect = !this.lookcollect;
      console.log(dat);
    },
    getshijuan() {
      var that = this;
      this.$axios
        .post(
          "http://jixujiaoyu_api.songlongfei.club:1012/kaoshi/get_shijuan_info",
          qs.stringify({
            uid: this.uid,
            token: this.token,
            user_shijuan_id: this.shijuanid
          })
        )
        .then(res => {
          console.log("获取试卷信息");
          console.log(res);
          if (res.data.status == "ok") {
            that.tit = res.data.data.title;
            that.data = that.data.concat(res.data.data.shijuan_bankuai);
            for (var i = 0; i < that.data.length; i++) {
              if (that.data[i].type == 1) {
                that.msg1 = res.data.data.shijuan_bankuai[i].title;
                that.score1 = res.data.data.shijuan_bankuai[i].score;
                that.datalist1 = res.data.data.shijuan_bankuai[i].shiti;
                console.log(that.datalist1);
                for (var j = 0; j < that.datalist1.length; j++) {
                  var A = that.datalist1[j].answer_options;
                  that.B = that.datalist1[j].question;
                  var jsonobj = JSON.parse(A);
                  that.xuanze = jsonobj;
                 
                 }
              }
              if (that.data[i].type == 2) {
                that.datalist2 = res.data.data.shijuan_bankuai[i].shiti;
                that.msg2 = res.data.data.shijuan_bankuai[i].title;
                that.score2 = res.data.data.shijuan_bankuai[i].score;
                console.log(that.datalist2);
                for (var k = 0; k < that.datalist2.length; k++) {
                  var C = that.datalist2[k].answer_options;
                  that.D = that.datalist2[k].question;
                  var jsonobj2 = JSON.parse(C);
                  that.xuanze2 = jsonobj2;
                }
              }
              if (that.data[i].type == 3) {
                that.datalist3 = res.data.data.shijuan_bankuai[i].shiti;
                that.msg3 = res.data.data.shijuan_bankuai[i].title;
                that.score3 = res.data.data.shijuan_bankuai[i].score;
                console.log(that.datalist3);
                for (var h = 0; h < that.datalist3.length; h++) {
                  console.log("=============================================");
                  var E = that.datalist3[h].answer_options;
                  that.F = that.datalist3[h].question;
                  var jsonobj3 = JSON.parse(E);
                  that.xuanze3 = jsonobj3;
                  console.log("哈哈哈");
                  console.log(that.xuanze3);
                  // that.tips = that.datalist3[i].tips;
                }
              }
              if (that.data[i].type == 4) {
                that.datalist4 = res.data.data.shijuan_bankuai[i].shiti;
                that.msg4 = res.data.data.shijuan_bankuai[i].title;
                that.score4 = res.data.data.shijuan_bankuai[i].score;
                console.log(that.datalist4);
                for (var f = 0; f < that.datalist4.length; f++) {
                  var G = that.datalist4[f].answer_options;
                  that.H = that.datalist4[f].question;
                  var jsonobj4 = JSON.parse(G);
                  that.xuanze4 = jsonobj4;
                  console.log("杜崇")
                  console.log(that.xuanze4)
                  console.log( that.datalist4)
                }
              }
            }
          }
        });
    },
    showtips(val) {
      console.log(val + 1);
      this.showtip = !this.showtip;
    },
    getAnswer() {
      var that = this;
      this.$axios
        .post(
          "http://jixujiaoyu_api.songlongfei.club:1012/kaoshi/get_kaoshi_log_info",
          qs.stringify({
            uid: this.uid,
            token: this.token,
            kaoshi_id: this.kaoshi_id
          })
        )
        .then(res => {
          console.log("获取考试答案");
          console.log(res);
          if (res.data.status == "ok") {
            that.answerdata = that.answerdata.concat(
              res.data.data.shijuan.shijuan_bankuai
            );
            for (var i = 0; i < that.answerdata.length; i++) {
              that.answerlist = that.answerdata[i].shiti;
              for (var j = 0; j < that.answerlist.length; j++) {
                if (that.answerlist[j].type == 1) {
                  that.rightkey1 = that.answerlist[j].answer;
                  that.jiexi1 = that.answerlist[j].jiexi;
                }
                if (that.answerlist[j].type == 2) {
                  that.rightkey2 = that.answerlist[j].answer;
                  that.jiexi2 = that.answerlist[j].jiexi;
                }
                if (that.answerlist[j].type == 3) {
                  that.rightkey3 = that.answerlist[j].answer;
                  that.jiexi3 = that.answerlist[j].jiexi;
                }
                if (that.answerlist[j].type == 4) {
                  that.rightkey4 = that.answerlist[j].answer;
                  that.jiexi4 = that.answerlist[j].jiexi;
                }
              }
            }
          }
        });
    },
    //提交试卷
    submitpapers() {
      var that = this;
      var data = {
        uid: this.uid,
        token: this.token,
        user_shijuan_id: this.shijuanid,
        use_time:this.time,
        answers:this.shouji_input()
      };
      this.$axios
        .post("http://jixujiaoyu_api.songlongfei.club:1012/kaoshi/submit_shijuan",data)
        .then(res => {
          console.log("提交考试试卷");
          console.log(res);
          if(res.data.status=='ok'){
            clearInterval(that.times)
            this.time="考试结束"
            var kaoshi_id=res.data.data.kaoshi_id
            console.log("长时间吃饭你说的")
            console.log(kaoshi_id)
            this.$router.push({
              path:'/submit',
              query:{
                 kaoshi_id:kaoshi_id
              }
            })
           
          }
        });
    },
    //单体模式
    ckecktype (e){
          console.log(e.target.checked)
          if(e.target.checked){
              
          }
    },
  //左侧按钮
    leftBtn (e){
       console.log(e.target.innerHTML)
      
    },
    shouji_input(){
      //$(".")
      var json_data = new Array();
      //console.log($(".shiti_select_div"));
      $(".shiti_select_div").each(function(k,v){
        //alert(k);
        var shiti_id = $(v).attr("shiti_id");
        var shiti_type = $(v).attr("shiti_type");
        switch(shiti_type){
          case "1"://单选
            var val = $("input[name='danxuan_"+shiti_id+"']:checked").val();
            if(val == undefined){
              val = "";
            }
            console.log(shiti_id + "=" + val);
            var json_data_item = {"shiti_id":shiti_id,"answer":val};
            json_data.push(json_data_item);
            break;
          case "2"://多选
            var answer = new Array();
                  $('input[name="duoxuan_'+shiti_id+'[]"]:checked').each(function(){ 
                          answer.push($(this).val()); 
                          });      
            var json_data_item = {"shiti_id":shiti_id,"answer":answer};
            json_data.push(json_data_item);                               
             break;
          case "3"://判断
            var val = $("input[name='panduan_"+shiti_id+"']:checked").val();
            if(val == undefined){
              val = "";
            }
            console.log(shiti_id + "=" + val);
            var json_data_item = {"shiti_id":shiti_id,"answer":val};
            json_data.push(json_data_item);          
             break;
          case "4"://填空
            var answer = new Array();
                  $('input[shiti_tiankong="tiankong_'+shiti_id+'"]').each(function(kk,vv){ 
                      answer.push($(vv).val()); 
                      });      
            var json_data_item = {"shiti_id":shiti_id,"answer":answer};
            json_data.push(json_data_item);             
             break;
          default:
            console.log("错误类型编号:"+shiti_type);
        }
      });
      //console.log(json_data);
       return json_data;
    }
   
  }
};
</script>

<style lang="less" scoped>
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
  }
}
.bg3f {
  background: #fff;
}
.topbox {
  width: 100%;
}
.screen-outer {
  width: 1200px;
  margin: 0 auto;
  display: table;
}
.exercises-left {
  width: 220px;
  background: #fff;
  float: left;
}
.exercises-left .study-record {
  width: 100%;
}
.study-record {
  width: 290px;
  overflow: hidden;
  background-color: #fff;
  border-radius: 4px;
  float: right;
  margin-top: 30px;
}
.exercises-left .study-record-box {
  border: 1px solid #eee;
}
.study-record-box .bgclr {
  font-size: 18px;
  background: #eee;
  line-height: 50px;
  color: #656565;
}
.study-record-box .bgclr {
  font-size: 18px;
  background: #eee;
  line-height: 50px;
  color: #656565;
}
.study-record-box .bgclr .icondate {
  display: inline-block;
  width: 23px;
  height: 22px;
  background-position: -7px -7px;
  margin: -4px 5px;
  background-size: 134px 38px;
}
.study-record-box li {
  line-height: 48px;
  font-size: 16px;
  text-align: center;
}
.study-record-box li a {
  color: #888;
  font-size: 16px;
}
.answer-sheet {
  margin-top: 40px;
  border: 1px solid #eee;
  float: left;
  width: 99%;
  overflow: auto;
}
.answer-sheet dt {
  color: #656565;
  font-size: 16px;
  text-align: center;
  line-height: 50px;
  background: #eee;
}
.answer-sheet dd {
  background: #fff;
  color: #888;
  border: 1px solid #eee;
  width: 24.6%;
  height: 54px;
  line-height: 54px;
  text-align: center;
  float: left;
  cursor: pointer;
  margin: 20px 6px 10px 10px;
}
.answer-sheet dd a {
  display: block;
  color: #888;
  width: 100%;
  text-align: center;
  line-height: 53px;
  font-size: 18px;
}
.exercises-content {
  float: left;
  width: 960px;
  margin-bottom: 100px;
  margin-top: 30px;
  margin-left: 15px;
}
.test-paper-box h3 {
  height: 40px;
  font-size: 18px;
  color: #e82f24;
}

.test-paper-box h3 small {
  color: #888;
  font-size: 16px;
}

.test-paper-box h4 {
  color: #656565;
  font-size: 16px;
  border-left: 5px solid #e82f24;
  padding: 0 12px;
  margin-bottom: 22px;
}

.test-paper {
  border-top: 1px solid #eee;
  display: inline-block;
  width: 100%;
}

.test-paper h5 {
  font-size: 14px;
  color: #e82f24;
  line-height: 74px;
}

.test-paper h5 small {
  display: inline-block;
  width: 24px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  background: #e82f24;
  color: #fff;
  border-radius: 50%;
}

.test-paper p {
  font-size: 16px;
  color: #656565;
  display: inline-block;
}

.test-paper p span {
  display: inline-block;
  border-bottom: 1px solid #ccc;
  margin: 0 3px;
  text-align: center;
}

.test-paper p span em {
  display: inline-block;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  border: 1px solid #9e9e9e;
  line-height: 18px;
  font-size: 12px;
  margin: 0 auto;
  color: #888;
}

.test-paper b {
  color: #ea6c6c;
  font-size: 12px;
}

.test-paper .answer {
  margin-left: 40px;
}

.test-paper .answer li {
  color: #656565;
  font-size: 14px;
  margin-top: 25px;
}

.test-paper .answer b {
  color: #9e9e9e;
  font-size: 14px;
}

.test-paper .blanks {
  display: inline-block;
  width: 650px;
}

.test-paper .blanks li {
  text-align: center;
  float: left;
  margin-bottom: 30px;
}

.test-paper .blanks b {
  display: inline-block;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  border: 1px solid #9e9e9e;
  line-height: 18px;
  font-size: 12px;
  color: #888;
}

.test-paper .blanks input {
  width: 100px;
  border: 0;
  border-bottom: 1px solid #bfbfbf;
  text-align: center;
  color: #656565;
  font-size: 14px;
  margin-right: 40px;
}

.test-paper .choice {
  float: left;
  width: 100%;
  margin: 36px 0;
  font-size: 14px;
  color: #656565;
}

.test-paper textarea {
  margin-left: 40px;
  width: 680px;
  min-height: 68px;
  float: left;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  border-color: #ddd;
  resize: none;
  padding: 16px 20px;
  font-size: 14px;
  color: #888;
}

.test-paper .choice ul {
  float: left;
  margin-left: 40px;
}

.test-paper .choice li {
  float: left;
  margin-right: 50px;
}

.test-paper .choice li input {
  margin: -3px 8px 0 0;
}

.test-paper .choice .collection {
  float: right;
}

.test-paper .choice span {
  margin-left: 50px;
  cursor: pointer;
}

.test-paper .choice span i {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-position: -65px -8px;
  margin: -4px 5px;
  background-size: 134px 38px;
}

.test-paper .choice span .iconlook {
  background-position: -109px -9px;
  transform: rotate(-180deg);
  -ms-transform: rotate(-180deg);
  -webkit-transform: rotate(-180deg);
  transition: 0.2s;
}

.test-paper .lu-ms-tim {
  float: left;
  width: 100%;
  color: #51cb96;
  //   display: none;
}

.test-paper .lu-ms-tim em {
  float: left;
  padding: 5px 50px;
  font-size: 14px;
  background: #f0fefa;
  text-align: center;
  line-height: 36px;
}

.test-paper .lu-ms-tim .bgco {
  background: #f7f7f7;
  color: #656565;
}

.test-paper .lu-ms-tim .co {
  color: #ea6c6c;
}

.test-paper .lu-ms-tim em p {
  font-size: 14px;
  color: #888;
  text-indent: 30px;
}

.test-paper .lu-ms-tim em strong {
  display: block;
  font-size: 30px;
}

.test-paper p b {
  color: #e82f24;
  font-size: 16px;
}

.lu-ms-tim ul li {
  display: inline-block;
  margin-right: 40px;
  color: #656565;
}

.lu-ms-tim ul li b {
  display: inline-block;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  border: 1px solid #9e9e9e;
  line-height: 18px;
  font-size: 12px;
  text-align: center;
  color: #888;
}

.lu-ms-tim .blank-cls {
  text-align: left !important;
}

.test-paper .fz {
  float: left;
  font-size: 14px;
  margin: 20px 0 30px;
}

.next-exercises a {
  display: block;
  margin: auto;
  background: #e82f24;
  width: 300px;
  height: 50px;
  border-radius: 50px;
  color: #fff;
  font-size: 16px;
  text-align: center;
  line-height: 50px;
}

.test-paper .block {
  display: block !important;
}
.checked{
   background-color: red;
}
</style>