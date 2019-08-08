<template>
  <div class="aboutus">
    <div class="aboutus-content-box">
        <span>关于我们</span>
        <span>ABOUT US</span>
        <span></span>
        <div class="aboutus-content">
            <div class="content-left"></div>
            <div class="content-right">
                <p>河南省继续教育学会是河南省继续教育基地，河南省专业技术人员培训网是由河南省继续教育学会主办的网络继续教育平台。</p>
                <p>河南省继续教育学会（简称HACE）是河南省教育厅主管，河南省民政厅登记的公益机构，是由河南省各所高校的继续教育学院、政府机关和企事业单位的继续教育机构和河南省各地市的民办继续教育机构自愿组成、自我管理、自我运行的非营利性社会团体组织。本会的宗旨是通过整合河南省各所高校的继续教育学院、政府机关和企事业单位的继续教育机构以及河南省各地市的民办继续教育机构，组织教育科研，开展考察交流。从而促进河南省继续教育事业的发展。</p>
                <p>河南省继续教育学会致力于加强继续教育理论研究，组织学术交流，跟踪发展趋势，发展继续教育学科，推进中国特色继续教育体系建设；加强继续教育资源建设，开展继续教育项目和课程，组织编写继续教育教材和资源，实现资源共享，努力提高教学质量，开展继续教育质量效益评估，建设继续教育师资库，进行继续教育基地管理；开展继续教育培训活动，以满足社会需求为导向，研发继续教育培训项目内容体系，提高各类受教育者的知道和技能；加强继续教育平台建设，创建河南省继续教育网，充分利用“互联网+教育”，开发网络学习平台，满足不同受教育者的个性化需求；加强与教育、科研、生产等部门在继续教育方面的联系和协调，促进会员之间的交流与合作，促进继续教育资源共享。</p>               
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
export default {
  name: 'aboutus',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    //关于我们页面
    let datamark={mark:'guanyuwomen'};
    this.$axios.post("http://jixujiaoyu_api.songlongfei.club/html/index",qs.stringify(datamark)).then(response => {    
      if(response.data.status=="ok"){
        console.log(response.data.data)  
      }else{
        alert("mark")
      } 
      })
      .catch(response => {
        console.log(response);
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.aboutus{width: 1200px; color:#989898;margin: 40px auto 10px;
    .aboutus-content-box{position: relative;z-index: 1;background-color: #fff;overflow: hidden;box-shadow: 0 0 10px #dbdbdb;
        span:nth-child(1){display: block;font-size: 24px;color:#000;margin-top: 60px;text-align: center;}
        span:nth-child(2){display: block;font-size: 36px;color:#000;margin-top: 24px;text-align: center;}
        span:nth-child(3){display: block;width: 38px;height: 2px;background-color: #000;margin: 10px auto 0;}
        .aboutus-content{margin: 30px 0 60px;display: flex;align-items: flex-start; 
            .content-left{width: 300px;height: 303px;background-image: url(/static/images/aboutus/aboutus-img.png);margin-left: 110px;}
            .content-right{width: 640px;margin-left: 70px;
                p{margin: 0px; padding: 0px;font-family: 微软雅黑; font-size: 18px; text-indent: 36px; white-space: normal; background-color: rgb(255, 255, 255);  box-sizing: border-box;}
            }
        }
   }
}
</style>
