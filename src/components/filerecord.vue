<template>
  <div class="filerecord">
    <div class="peixun-title">
      <span class="on">我的档案</span>
    </div>
    <div class="test-content-box">
      <div class="file-title-box">
        <span>年度</span>
        <span>必修学时</span>
        <span>选修学时</span>
        <span>总学时</span>
        <span>状态</span>
        <span>操作</span>
      </div>
      <div class="test-list-box">
        <div class="file-item">
          <span>2019</span>
          <span>60/60</span>
          <span>0/0</span>
          <span>60/60</span>
          <span>不通过</span>
          <span @click="showScoreBox">查看详情</span>
        </div>
      </div>
    </div>
    <div class="study-details" v-show="showScore">
      <div class="score-box">
        <div class="title-box">
          <span>学习详情</span>
          <span class="btn-close" @click="closeScoreBox">x</span>
        </div>
        <table border="0" align="center" cellspacing="0" class="table-box">
          <tbody>
            <tr style="background-color: #ccc;">
              <th style="text-align: center;">培训项目</th>
              <th style="text-align: center;">是否通过考核</th>
              <th style="text-align: center;">通过考核时间</th>
              <th style="text-align: center;">操作</th>
            </tr>
            <tr align="center">
              <td>2019年Python培训</td>
              <td class="isload">不通过</td>
              <td>2019-7-20</td>
              <td class="btn-load" @click="downloadCertificate">下载证书</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="my-certificate" ref="certificate">  
      <img src="/static/images/personal/certificate.png" class="certificateimg">
      <div class="certificate-box">
        <p class="certificate-title">河南省专业技术人员继续教育网络学习<br>合格证明</p>
        <div class="info1 info">
            <div class="name-box">姓名：<span class="name">杜彦召</span> </div>
            <div class="idcard-box">身份证号：<span class="idcard">412723199410103478</span></div>
        </div>
        <div class="info2 info">
            <div class="sex-box">性别：<span class="sex">男</span></div>
            <div class="year-box">培训年度：<span class="year"></span></div>
        </div>
        <div class="xueshi">该学员参加年度专业技术人员继续教育专业科目的网络学习，通过考核。<br>累计完成<span class="alltime">60</span>学时。</div>
        <div class="tczm">特此证明。</div>
        <div class="date" v-html="riqi"></div>
      </div>
      <img src="/static/images/personal/seal.png" class="seal">
    </div>
    
  </div>
</template>

<script>
import html2canvas from 'html2canvas';
export default {
  name: "filerecord",
  data() {
    return {
      showScore: false,
      riqi:'',
    };
  },
  methods:{
    showScoreBox:function(){
      this.showScore=true;
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {month = "0" + month;}
      if (strDate >= 0 && strDate <= 9) {strDate = "0" + strDate;}
      var currentdate = year + '<span style="margin: 0 7px;">年</span>' + month + '<span style="margin: 0 7px">月</span>' + strDate + '<span style="margin-left:7px;">日</span>';
      this.riqi=currentdate;
    },
    closeScoreBox:function(){
      this.showScore=false;
    },
    downloadCertificate:function(){
  
      html2canvas(this.$refs.certificate).then(function(canvas) {
          var base64 = canvas.toDataURL("image/jpeg", 1);
          var a = document.createElement("a");
          a.href = base64;
          a.download = "证书下载";
          a.click();
      });
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.filerecord { width: 950px;display: flex;flex-direction: column;}
.peixun-title {width: 100%;height: 55px;background-color: #fafafa;margin-bottom: 20px;}
.peixun-title span { font-size: 18px; margin-left: 20px; line-height: 55px; color: #0c69f5;border-bottom: 2px solid #0c69f5;}
.test-content-box {width: 950px;background-color: #fafafa;}
.test-content-box .file-title-box { width: 910px; height: 35px;background-color: #138bef;display: flex; justify-content: space-between;padding: 0 20px 0 20px;}
.test-content-box .file-title-box span { display: block; color: #f3faff; line-height: 35px; font-size: 14px;}
.test-content-box .file-title-box span:nth-child(5) { margin-right: 40px;}
.test-content-box .test-list-box {width: 950px;}
.test-content-box .test-list-box .file-item { width: 910px; padding: 0 20px 0 20px;display: flex;justify-content: space-between;}
.test-content-box .test-list-box .file-item:nth-child(2n-1) {background-color: #fff;}
.test-content-box .test-list-box .file-item span { display: block;color: #868686;line-height: 42px;font-size: 14px;}
.test-content-box .test-list-box .file-item span:nth-child(3) {margin-left: 20px;}
.test-content-box .test-list-box .file-item span:nth-child(4) {margin-left: 20px;}
.test-content-box .test-list-box .file-item span:nth-child(6) { color: #138bef;}
.test-content-box .test-list-box .file-item span:nth-child(6):hover {cursor: pointer;color: #fb0800;}
.study-details { width: 100%; height: 100%; position: absolute; left: 0; top: 0;background-color: rgba(255, 255, 255, 0.6);}
.study-details .score-box { width: 700px; height: 400px; position: relative; left: 50%; top: 28%; margin-left: -300px; border: 1px solid #ccc; box-shadow: 0 5px 10px #ccc; background-color: #fff;}
.study-details .score-box .title-box { width: 100%; height: 50px;border-bottom: 1px solid #ccc; padding: 10px;box-sizing: border-box;display: flex;justify-content: space-between;align-items: center;}
.study-details .score-box .title-box span {font-size: 18px;color: #ccc;}
.study-details .score-box .title-box span:nth-child(1) {color: #1a1a1a;}
.study-details .score-box .title-box span:nth-child(2):hover {color: #fb0000;cursor: pointer;}
table {margin-top: 15px;width:100%;}
table tr {height: 40px;font-size: 14px;}
table tr th {font-size: 15px;font-weight: bold;border: 1px solid #c1c1c1;}
table tr td {font-size: 14px; border: 1px solid #c1c1c1;}
table tr td:nth-child(4) {color: #138bef;}
table tr td:nth-child(4):hover {cursor: pointer;color: #fb0000;}

.my-certificate{width: 822px;height: 590px;position: absolute;left: -850px;top:-600px;}
.certificate-box{width: 100%;height: 100%;position: absolute;left: 0;top:0;z-index: 1;}
.certificate-box .certificate-title{width: 560px;line-height: 42px; margin: 100px auto 0; font-size: 32px;text-align: center;color:#48538d;}
.certificate-box .info{width: 512px;display: flex;}
.certificate-box .info1{margin: 60px auto 0;}
.certificate-box .info2{margin: 25px auto 0;}
.certificate-box div{font-size: 18px;font-family: 'KaiTi';}
.certificate-box div span{font-size: 18px;font-family: 'Microsoft YaHei';}
.certificate-box .name-box{width: 220px;}
.certificate-box .sex-box{width: 220px;}
.certificate-box .xueshi{width: 648px;margin: 20px auto 0;text-indent: 68px;font-size: 18px;line-height: 30px;}
.certificate-box .alltime{width: 130px;height: 30px;line-height: 30px;font-size: 18px;display: inline-block;border-bottom: 1px solid #000;text-indent: 0;text-align: center;}
.certificate-box .tczm{width: 648px;margin: 20px auto 0;text-indent: 72px;font-size: 18px;}
.certificate-box .date{position: absolute;right:108px;bottom:75px;font-size: 18px;font-family: 'Microsoft YaHei';}
.certificate-box .date span{font-size: 18px;font-family: 'KaiTi';}
.my-certificate .certificateimg{width: 100%;height: 100%;position: absolute;left: 0;top:0;}
.my-certificate .seal{position: absolute;right: 100px;bottom: 90px;width: 146px;}

</style>
