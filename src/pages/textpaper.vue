<template>
  <div class="textpaper" ref="elememt">
    <div class="title">
      <div class="top w clearfix">
        <p class="fl">河南省继续教育学会在线学习平台</p>
        <p class="fr">
          <span class="spn1">首页</span>
          <span>退出</span>
        </p>
      </div>
    </div>
    <div class="content w clearfix">
      <!-- 面包屑导航 start -->
      <div class="topbox bg3f">
        <div class="screen-outer">
          <div class="screen-outer clearfix">
            <div class="exercises-left" style="position: fiexd; margin-top: 0px; top: 20px;">
              <div class="study-record">
                <!--答题卡-->
                <dl class="answer-sheet">
                  <dt>答题卡</dt>
                  <dd>1</dd>
                  <dd>2</dd>
                  <dd>3</dd>
                  <dd>4</dd>
                  <dd>5</dd>
                  <dd>6</dd>
                  <dd>7</dd>
                  <dd>8</dd>
                </dl>
              </div>
            </div>
            <!--答题-->
            <div class="exercises-content">
              <ul class="test-paper-box">
                <h3>{{tit}}</h3>
                <!--单选题-->
                <li
                  class="test-paper"
                  id="ex1"
                  data-question-num="1"
                  v-for="(item,index) in datalist1"
                  :key="item.id"
                >
                  <h5>
                    <small>{{index+1}}</small>
                    <span v-html="msg"></span>
                    {{fen}}
                    <span>分）</span>
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
                  <div class="choice" v-show="choice">
                    <ul>
                      <li  v-for="(key,val) in xuanze"  @click="radio($event,item.id)">
                        
                        <input
                          type="radio"
                          :value="key"
                          :name="item.id"
                        />
                          <label>
                              {{val}}
                        </label>
                        
                      </li>
                      {{radioValue}}
                    </ul>
                  </div>
                  <div class="tips">
                    <span @click="showtips(index)">提示:</span>
                    <span v-show="showtip">12345</span>
                  </div>
                  <div v-show="showdaan">
                    <div class="lu-ms-tim">
                      <em>
                        正确答案
                        <strong>{{rightkey1}}</strong>
                      </em>
                    </div>
                    <div class="fz">
                      <b>解析：</b>
                      <p>{{jiexi1}}</p>
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
                    <small>{{index}}</small>（多选题,10 分）
                  </h5>
                  <p></p>
                  <p>{{check.question}}</p>
                  <p></p>
                  <ul class="answer">
                    <li v-for="(key,val) in xuanze2">
                      <b>{{val}}、</b>
                      <p>{{key}}</p>
                    </li>
                  </ul>
                  <div class="choice">
                    <ul>
                      <li v-for="(key,val) in xuanze2">
                        <label>
                          <input type="checkbox" name="user_answer[76][]" :value="val"  @click="checkbox($event)"/>{{val}}
                        </label>
                      </li>
                    </ul>
                    <div class="collection">
                      <span
                        class="like"
                        style="display:none;"
                        data-question_id="76"
                        data-action="1"
                      >
                        <i class="icon iconlike"></i>
                        <small>收藏题目</small>
                      </span>
                    </div>
                  </div>
                  <div class="tips">
                    <span @click="showtips(index)">提示:</span>
                    <span v-show="showtip">12345</span>
                  </div>
                  <div v-show="showdaan">
                    <div class="lu-ms-tim" v-for="(it,index) in rightkey2" :key="index">
                      <em>
                        正确答案
                        <strong>{{item}}</strong>
                      </em>
                    </div>
                    <div class="fz">
                      <b>解析：</b>
                      <p>{{jiexi2}}</p>
                    </div>
                  </div>
                </li>
                <!--判断题-->
                <li
                  class="test-paper"
                  id="ex7"
                  data-question-num="7"
                  v-for="(panduan,index) in datalist3"
                  :key="panduan.id"
                >
                  <h5>
                    <small>{{index+1}}</small>（判断题,10 分）
                  </h5>
                  <p></p>
                  <p>{{panduan.question}}</p>
                  <p></p>
                  <ul class="answer">
                    <li v-for="(val,key) in xuanze3">
                      <b>{{key=='true'?"A":"B"}} 、</b>
                      {{val}}
                    </li>
                  </ul>
                  <div class="choice">
                    <ul>
                      <li>
                        <label>
                          <input type="radio" name="user_answer[77]" value="A" />A
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="radio" name="user_answer[77]" value="B" />B
                        </label>
                      </li>
                    </ul>
                    <!-- <div class="collection">
                      <span
                        class="like"
                        style="display:none;"
                        data-question_id="77"
                        data-action="1"
                      >
                        <i class="icon iconlike"></i>
                        <small>收藏题目</small>
                      </span>
                    </div>-->
                  </div>
                  <div class="tips">
                    <span @click="showtips(index)">提示:</span>
                    <span v-show="showtip">12345</span>
                  </div>
                  <div class="lu-ms-tim" v-show="showdaan">
                    <em>
                      正确答案
                      <strong>{{rightkey3}}</strong>
                    </em>
                  </div>
                  <div class="fz">
                    <b>解析：</b>
                    <p>{{jiexi3}}</p>
                  </div>
                </li>
                <!--填空题-->
                <li
                  class="test-paper"
                  id="ex8"
                  data-question-num="8"
                  v-for="(tiankong,index) in datalist4"
                  :key="tiankong.id"
                >
                  <h5>
                    <small>{{index+1}}</small>（填空题,10 分）
                  </h5>
                  <p></p>
                  <p>{{tiankong.question}}</p>
                  <p></p>
                  <div class="choice">
                    <ul class="blanks">
                      <li v-for="(val,key) in xuanze4">
                        <b>{{index+1}}</b>
                        <input type="text" name="user_answer[78][]" />
                      </li>
                    </ul>
                    <div class="collection">
                      <span
                        class="like"
                        style="display:none;"
                        data-question_id="78"
                        data-action="1"
                      >
                        <i class="icon iconlike"></i>
                        <small>收藏题目</small>
                      </span>
                    </div>
                  </div>
                  <div class="tips">
                    <span @click="showtips(index)">提示:</span>
                    <span v-show="showtip">12345</span>
                  </div>
                  <div class="lu-ms-tim" v-show="showdaan">
                    <em class="blank-cls">
                      正确答案
                      <ul>
                        <li v-for="(item,index) in rightkey2" :key="index">
                          <span>
                            <b>{{index+1}}</b>
                            、{{item}}
                          </span>
                        </li>
                      </ul>
                    </em>
                  </div>
                  <div class="fz">
                    <b>解析：</b>
                    <p>省会判断</p>
                  </div>
                </li>
              </ul>
              <div id="btn">提交试卷</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import qs from "qs";
export default {
  data() {
    return {
      top: "",
      uid: "45",
      token: "641ec4adcc15913536861f9f5596ca48",
      shijuanid: "13",
      kaoshi_id: "2",
      data: [],
      tit: "",
      datalist1: [],
      datalist2: [],
      datalist3: [],
      datalist4: [],
      fen: "10",
      msg: "（单选题，",
      xuanze: {},
      xuanze2: {},
      xuanze3: {},
      xuanze4: {},
      daan: "",
      B: "",
      D: "",
      F: "",
      H: "",
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
      radioValue:"",//单选值
      index:''
    };
  },
  created() {
    // this.uid= sessionStorage.getItem('uid')
    //   this.token=sessionStorage.getItem('token')
    this.getshijuan();
    this.getAnswer();
    // this.submitpapers()
  },
  watch: {
    top: function(val, oldval) {
      console.log(val);
      console.log(oldval);
    },
    deep: true
  },
  methods: {
    //获取单选按钮的值
    radio(e,id) {
      console.log(e.target.value,id);
      console.log(typeof id)
      this.index=id

    },
    //获取多选按钮的值
    checkbox (e){
       console.log(e.target.value);
    },
    //获取判断的值
    panduan (e){
       console.log(e.target.value);
    },
    getshijuan() {
      var that = this;
      this.$axios
        .post(
          "http://jixujiaoyu_api.songlongfei.club/kaoshi/get_shijuan_info",
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
                that.msg = "单选题";
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
                console.log(that.datalist3);
                for (var h = 0; h < that.datalist3.length; h++) {
                  console.log("=============================================");
                  var E = that.datalist3[h].answer_options;
                  that.F = that.datalist3[h].question;
                  var jsonobj3 = JSON.parse(E);
                  that.xuanze3 = jsonobj3;
                  console.log("哈哈哈");
                  console.log(that.xuanze3);
                  that.tips = that.datalist3[i].tips;
                }
              }
              if (that.data[i].type == 4) {
                that.datalist4 = res.data.data.shijuan_bankuai[i].shiti;
                console.log(that.datalist4);
                for (var f = 0; f < that.datalist4.length; f++) {
                  var G = that.datalist4[f].answer_options;
                  that.H = that.datalist4[f].question;
                  var jsonobj4 = JSON.parse(G);
                  that.xuanze4 = jsonobj4;
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
          "http://jixujiaoyu_api.songlongfei.club/kaoshi/get_kaoshi_log_info",
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
        uid: 45,
        token: "69ea0f972cd086b9df242569ab63019e",
        user_shijuan_id: this.shijuanid,
        use_time: "",
        answers: [
          { shiti_id: id, answer: e.target.value },
          { shiti_id: "4", answer: ["A", "B", "D"] },
          { shiti_id: "5", answer: "true" },
          { shiti_id: "8", answer: ["kong1", "kong2", "kong3"] }
        ]
      };
      
      this.$axios.
        post(
          "http://jixujiaoyu_api.songlongfei.club/kaoshi/submit_shijuan"
        ).then(res => {
          console.log("提交考试试卷");
          console.log(res);
        });
    }
  }
};
</script>
<style scoped lang="less">
.textpaper {
  width: 100%;
  height: 100%;
  position: relative;
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
      overflow: hidden;
      background-color: #fff;
      border-radius: 4px;
      float: right;
      margin-top: 30px;
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
    .exercises-content {
      float: right;
      width: 960px;
      margin-bottom: 100px;
      margin-top: 30px;
    }
    .test-paper-box h3 {
      height: 40px;
      font-size: 18px;
      color: #e82f24;
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
      margin-right: 10px;
    }
    .test-paper p {
      font-size: 16px;
      color: #656565;
      display: inline-block;
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
    .test-paper p {
      font-size: 16px;
      color: #656565;
      display: inline-block;
    }
    .test-paper .choice {
      // float: left;
      width: 100%;
      margin: 15px 0;
      font-size: 14px;
      color: #656565;
      height: 30px;
      line-height: 30px;
    }
    .test-paper .tips {
      color: red;
      margin-bottom: 15px;
      span {
        display: inline-block;
        padding: 0 10px;
      }
    }
    .test-paper .choice ul {
      // float: left;
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
      // display: none;
    }
    .test-paper .choice span i {
      display: inline-block;
      width: 20px;
      height: 20px;
      background-position: -65px -8px;
      margin: -4px 5px;
      background-size: 134px 38px;
    }
    .test-paper .lu-ms-tim {
      float: left;
      width: 100%;
      color: #51cb96;
      // display: none;
    }
    .test-paper .lu-ms-tim em {
      float: left;
      padding: 5px 50px;
      font-size: 14px;
      background: #f0fefa;
      text-align: center;
      line-height: 36px;
    }
    .test-paper .lu-ms-tim em strong {
      display: block;
      font-size: 30px;
    }
    .test-paper .fz {
      float: left;
      font-size: 14px;
      margin: 20px 0 30px;
      // display: none;
    }
    .test-paper b {
      color: #ea6c6c;
      font-size: 12px;
    }
    .test-paper p {
      font-size: 16px;
      color: #656565;
      display: inline-block;
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
    .test-paper .choice span {
      margin-left: 50px;
      cursor: pointer;
      display: none;
    }
    #btn {
      // border:1px solid red;
      text-align: center;
      height: 50px;
      line-height: 50px;
      width: 150px;
      margin: 0 auto;
      background-color: #51cb96;
      color: #fff;
      cursor: default;
      border-radius: 10px;
    }
  }
 
}
</style>