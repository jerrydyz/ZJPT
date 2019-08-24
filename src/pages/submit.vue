<template>
  <div class="submit">
    <div class="title">
      <div class="top w clearfix">
        <p class="fl">河南省继续教育学会在线学习平台</p>
        <p class="fr">
          <span class="spn1">首页</span>
          <span>退出</span>
        </p>
      </div>
    </div>
    <div class="content w">
      <div class="exam-score">
        <div class="exam-score-head">考试结果</div>
        <h3>{{title}}</h3>
        <p>交卷时间：{{time}}</p>
        <ul class="clearfix">
          <li class="bg01">
            <h5>得分</h5>
            <p>{{score}}</p>
          </li>
          <li class="bg02">
            <h5>用时</h5>
            <p>{{usetime}}</p>
          </li>
          <li class="bg03">
            <h5>完成率</h5>
            <p>{{getnum}}</p>
          </li>
          <li class="bg04">
            <h5>错题数量</h5>
            <p>{{error_num}}</p>
          </li>
        </ul>
      </div>
      <div class="screen-outer">
        <div
          class="score-left clearfix"
          style="position: static; top: 20px; bottom: auto; margin-top: 0px;"
        >
          <!--错题列表-->
          <div class="error-exam fl">
            <dl class="clearfix">
              <dt>错题记录</dt>
              <dd v-for="n in num">{{n}}</dd>
            </dl>
          </div>
        </div>
        <!--答题-->
        <div class="score-content fl">
          <ul class="test-paper-box" style="padding-left:10px;box-sizing:border-box" 
          >
            <h4>试题解析</h4>
            <!--单选题-->
            <!-- 单多选 -->
            <li class="test-paper wrong" v-for="(item,index) in datalist1"  >
              <h5>
                <small>{{index+1}}</small>（单选题）
              </h5>
              <p></p>
              <p>{{item.question}}</p>
              <p></p>
              <ul class="answer" >
                   <li  v-for="(key,val) in xuanze">
                      <b>{{val}}、</b>
                      <p>{{key}}</p>
                    </li>
              </ul>
              <div class="choice"></div>
              <div class="lu-ms-tim block clearfix">
                <em class="bgco">
                  您的答案
                  <strong>{{item.user_answer['answer']==""?"未做答":item.user_answer['answer']}}</strong>
                </em>
                <em>
                  正确答案
                  <strong>{{item.answer}}</strong>
                </em>
              </div>
              <div class="fz block">
                <b>解析：</b>
                <p>{{item.jiexi}}</p>
              </div>
            </li>
           
            <!-- 多选 -->
            <li class="test-paper wrong"  v-for="(check,index) in datalist2"  >
              <h5>
                <small>{{index+1}}</small>（多选题）
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
              <div class="choice">
                
              </div>
              <div class="lu-ms-tim block clearfix">
                <em class="bgco"  >
                  您的答案
                  <strong>{{check.user_answer['answer'].join(" ")==""?"未做答":check.user_answer['answer'].join(" ")}}</strong>
                </em>
                <em>
                  正确答案
                  <strong>{{check.answer.join(" ")}}</strong>
                </em>
              </div>
              <div class="fz block">
                <b>解析：</b>
                <p>{{check.jiexi}}</p>
              </div>
            </li>
            <!-- 判断题 -->
            <li class="test-paper wrong" v-for="(dan,index) in datalist3" >
              <h5>
                <small>{{index+1}}</small>（判断题）
              </h5>
              <p></p>
              <p>{{dan.question}}</p>
              <p></p>
              <ul class="answer">
                 <li v-for="(key,val) in xuanze3">
                      <b>{{key}}</b>
                    </li>
              </ul>
              <div class="choice">
              </div>
              <div class="lu-ms-tim block clearfix">
                <em class="bgco">
                  您的答案
                  <strong>{{dan.user_answer['answer']==""?"未做答":dan.user_answer['answer']}}</strong>
                </em>
                <em >
                  正确答案
                  <strong>{{dan.answer}}</strong>
                </em>
              </div>
              <div class="fz block">
                <b>解析：</b>
                <p>{{dan.jiexi}}</p>
              </div>
            </li>
            <!-- 填空 -->
            <li class="test-paper wrong"  v-for="(tian,index) in datalist4" :key="tian.id" >
              <h5>
                <small>{{index+1}}</small>（填空题）
              </h5>
              <p></p>
              <p>{{tian.question}}</p>
              <p></p>
              <div class="choice">
              </div>
              <div class="lu-ms-tim block clearfix">
                <em class="blank-cls bgco">
                  您的答案
                  <ul>
                    <li class="co">
                      <span style="font-size:30px;font-weight:bold">
                       {{tian.user_answer['answer'].join(" ")==" "?"未做答":tian.user_answer['answer'].join(" ")}}
                      </span>
                    </li>
                  </ul>
                </em>
                <em class="blank-cls">
                  正确答案
                  <ul>
                    <li>
                      <span>
                        {{tian.answer.join(" ")}}
                      </span>
                    </li>
                  </ul>
                </em>
              </div>
              <div class="fz block">
                <b>解析：</b>
                <p>{{tian.jiexi}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import qs from "qs";
import Vue from 'vue'
export default {
  name: "submit",
  data() {
    return {
      paperdata: [],
      uid: localStorage.getItem('uid'),
      token: localStorage.getItem('token'),
      kaoshi_id: "",
      datalist:'',
      data:[],
      title:'',
      usetime:'',
      time:'',
      title:"",
      error_num:'',
      empty_num:'',
      right_num:'',
      score:'',
       xuanze: {},
      xuanze2: {},
      xuanze3: {},
      xuanze4: {},
      datalist1: [],
      datalist2: [],
      datalist3: [],
      datalist4: [],
      jsondata:[],
      answer:'',
      answer2:[],
      answer3:'',
      answer4:[],
      answer5:[],
      num:'',
       B: "",
      D: "",
      F: "",
      H: "",
      bankuai:[],
      shiti:[],
      user_answer:{},
      shiti_arr:[]

    };
  },
  computed:{
     getnum (){
        return this.right_num/this.num
     }
  },
  created() {
    this.kaoshi_id = this.$route.query.kaoshi_id;
    this.getpaperdata();
     
  },
  methods: {
    getpaperdata() {
      var that = this;
      var data = {
        uid: this.uid,
        token: this.token,
        kaoshi_id: this.kaoshi_id
      };
      this.$axios
        .post(
          "http://jixujiaoyu_api.songlongfei.club:1012/kaoshi/get_kaoshi_log_info",
          qs.stringify(data)
        )
        .then(res => {
          console.log(res);
          if(res.data.status=="ok"){
             that.datalist=res.data.data.answer
             that.data=res.data.data.shijuan.shijuan_bankuai
             that.title=res.data.data.shijuan.title
             that.time=res.data.data.time
             that.usetime=res.data.data.use_time
             that.empty_num=res.data.data.empty_num
             that.error_num=res.data.data.error_num
             this.right_num=res.data.data.right_num
             that.score=res.data.data.score
            //  that.getshijuan ()
            //  console.log(that.datalist)
             console.log(JSON.parse(that.datalist))
             that.jsondata=JSON.parse(that.datalist)
             ///////////////////////////////
               console.log("start");
            that.bankuai = res.data.data.shijuan.shijuan_bankuai;
            var answer = JSON.parse(res.data.data.answer);
            that.num=answer.length
            console.log(that.bankuai);
            console.log(answer);
            for(var i=0;i<that.bankuai.length;i++){
              that.shiti_arr = that.bankuai[i]['shiti'];
              for(var j=0;j<that.shiti_arr.length;j++){
                var shiti_id = that.shiti_arr[j]['id'];
                for(var n=0;n<answer.length;n++){
                  if(answer[n]['shiti_id'] == shiti_id){
                      that.bankuai[i]['shiti'][j]["user_answer"] = answer[n];
                    break;
                  }
                }
                 if(that.shiti_arr[j].type==1){
                   var A = that.shiti_arr[j].answer_options;
                   var jsonobj = JSON.parse(A);
                   that.xuanze = jsonobj;
                   that.datalist1 = that.bankuai[i]['shiti'];
                 }
                  if(that.shiti_arr[j].type==2){
                   var C = that.shiti_arr[j].answer_options;
                   var jsonobj2 = JSON.parse(C);
                   that.xuanze2 = jsonobj2;
                    that.datalist2 = that.bankuai[i]['shiti'];
                 }
                 if(that.shiti_arr[j].type==3){
                   var E = that.shiti_arr[j].answer_options;
                   var jsonobj3 = JSON.parse(E);
                   that.xuanze3 = jsonobj3;
                     that.datalist3 = that.bankuai[i]['shiti'];
                 }
                 if(that.shiti_arr[j].type==4){
                   var G = that.shiti_arr[j].answer_options;
                   var jsonobj4 = JSON.parse(G);
                   that.xuanze4 = jsonobj4;
                     that.datalist4 = that.bankuai[i]['shiti'];
                 }
              }
           
            }
            console.log("杜崇")
             console.log(that.bankuai);
            console.log("end");
             ///////////////////////////
             /*
            for(var i=0; i<that.data.length;i++){
              var shiti_arr = that.data[i];//试题
              
            for (var i = 0; i < that.data.length; i++) {
              if (that.data[i].type == 1) {
                that.datalist1 = that.data[i].shiti;
                for (var j = 0; j < that.datalist1.length; j++) {
                  var A = that.datalist1[j].answer_options;
                  that.B = that.datalist1[j].question;
                  var jsonobj = JSON.parse(A);
                  that.xuanze = jsonobj;
                  that.num=that.jsondata.length
                   for(var e=0;e<that.jsondata.length;e++){
                    if(that.datalist1[j].id===that.jsondata[e].shiti_id){
                        that.answer=that.jsondata[e].answer
                    }
                 }
                 }
              }
              if (that.data[i].type == 2) {
                that.datalist2 =that.data[i].shiti;
                for (var k = 0; k < that.datalist2.length; k++) {
                  var C = that.datalist2[k].answer_options;
                  that.D = that.datalist2[k].question;
                  var jsonobj2 = JSON.parse(C);
                  that.xuanze2 = jsonobj2;
                   for(var z=0;z<that.jsondata.length;z++){
                    if(that.datalist2[k].id===that.jsondata[z].shiti_id){
                        that.answer2=that.jsondata[z].answer
                    }
                 }
                }
                
              }
              if (that.data[i].type == 3) {
                that.datalist3 = that.data[i].shiti;
                for (var h = 0; h < that.datalist3.length; h++) {
                  var E = that.datalist3[h].answer_options;
                  that.F = that.datalist3[h].question;
                  var jsonobj3 = JSON.parse(E);
                  that.xuanze3 = jsonobj3;
                  // that.tips = that.datalist3[i].tips;
                   for(var w=0;w<that.jsondata.length;w++){
                    if(that.datalist3[h].id===that.jsondata[w].shiti_id){
                        that.answer3=that.jsondata[w].answer
                    }
                 }
                }
                
              }
              if (that.data[i].type == 4) {
                that.datalist4 = that.data[i].shiti;
                console.log(that.datalist4)
                for (var f = 0; f < that.datalist4.length; f++) {
                  var G = that.datalist4[f].answer_options;
                  that.H = that.datalist4[f].question;
                  var jsonobj4 = JSON.parse(G);
                  that.xuanze4 = jsonobj4;
                    for(var x=0;x<that.jsondata.length;x++){
                    if(that.datalist4[f].id===that.jsondata[x].shiti_id){
                        that.answer4=that.jsondata[x].answer
                    }
                 }
                }
               
              }
            }
        } 
          */
          }
        });
    },
    
    
  }
};
</script>

<style lang="less" scoped>
.submit {
  width: 100%;
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
  .content {
    .exam-score {
      display: inline-block;
      width: 100%;
      text-align: center;
      border-radius: 5px;
      box-shadow: 0 4px 12px 0 rgba(162, 166, 184, 0.2);
      margin-bottom: 30px;
      .exam-score-head {
        line-height: 70px;
        color: #e82f24;
        font-size: 18px;
        border-bottom: 1px solid #e82f24;
      }
      h3 {
        font-size: 22px;
        color: #333;
        margin-top: 20px;
      }
      p {
        font-size: 16px;
        color: #888;
        margin-top: 10px;
      }
      ul {
        display: inline-block;
        margin: 10px auto 30px;
        li {
          width: 250px;
          height: 80px;
          float: left;
          h5 {
            color: #888;
            font-size: 16px;
            margin-top: 10px;
          }
          p {
            color: #656565;
            font-size: 18px;
          }
          &.bg01 {
            background: #e2f5fc;
          }
          &.bg02 {
            background: #fff4ec;
          }
          &.bg03 {
            background: #f2ffec;
          }
          &.bg04 {
            background: #eceffe;
          }
        }
      }
    }
    .screen-outer {
      .score-left {
        width: 280px;
        background: #fff;
        float: left;
        .error-exam {
          width: 100%;
          box-shadow: 5px 5px 5px #ccc;
          border-radius: 5px;
          padding-bottom: 40px;
          box-sizing: border-box;
          dt {
            width: 100%;
            height: 60px;
            text-align: center;
            line-height: 60px;
            color: #e82f24;
            font-size: 18px;
            border-bottom: 1px solid #e82f24;
            margin-bottom: 20px;
          }
          dd {
            float: left;
            color: #ea6c6c;
            border: 1px solid #ea6c6c;
            width: 40px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            border-radius: 5px;
            margin: 3px;
          }
        }
      }
      .score-content {
        width: 890px;
        margin-left: 15px;
        background-color: #fff;
        .test-paper-box {
          h4 {
            color: #656565;
            font-size: 16px;
            border-left: 5px solid #e82f24;
            padding: 0 16px;
            margin-bottom: 22px;
          }
          .test-paper {
            border-top: 1px solid #eee;
            display: inline-block;
            width: 100%;
            h5 {
              font-size: 14px;
              color: #e82f24;
              line-height: 74px;
              small {
                display: inline-block;
                width: 24px;
                height: 24px;
                line-height: 24px;
                text-align: center;
                background: #e82f24;
                color: #fff;
                border-radius: 50%;
              }
            }
            p {
              font-size: 16px;
              color: #656565;
              display: inline-block;
            }
            .answer {
              margin-left: 40px;
              li {
                color: #656565;
                font-size: 14px;
                margin-top: 25px;
                b {
                  color: #9e9e9e;
                  font-size: 14px;
                }
                p {
                  font-size: 16px;
                  color: #656565;
                  display: inline-block;
                }
              }
            }
            .choice {
              width: 100%;
              padding: 20px 0;
              font-size: 14px;
              color: #656565;
              box-sizing: border-box;
            }
            .lu-ms-tim {
              color: #51cb96;
              // display: none;
              em {
                float: left;
                padding: 5px 50px;
                font-size: 14px;
                background: #f0fefa;
                text-align: center;
                line-height: 36px;
                box-sizing: border-box;
                strong {
                  display: block;
                  font-size: 30px;
                }
              }
              .bgco {
                background: #f7f7f7;
                color: #6565;
              }
            }
            .block {
              display: block !important;
              padding-left: 10px;
              box-sizing: border-box;
              b {
                color: #ea6c6c;
                font-size: 12px;
              }
            }
            .fz {
              font-size: 14px;
              margin: 20px 20px 30px;
            }
            .kd {
              margin: 20px;
            }
          }
        }
      }
    }
  }
}
</style>