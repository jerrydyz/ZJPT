<template>
  <div class="allCourses fl">
    <div class="title">
      <span>全部课程</span>
    </div>
    <div class="content">
      <ul class="clearfix">
        <li class="fl" v-for="item in allcourse" :key="item.id">
          <p class="imm">
            <img :src="item.img_url" alt />
          </p>
          <p class="txt">
            {{item.title}}(
            <span>{{item.xueshi_num}}</span>学时)
          </p>
          <p class="tit">{{item.title}}</p>
          <p class="jindu clearfix">
            <span class="fl">进度</span>
            <!-- <div class="block fl">
                   <el-slider v-model="value1"></el-slider>
            </div>-->
            <el-progress :percentage="50" class="fl"></el-progress>

            <!-- <span class="fr" style="margin-top:-12px;">0%</span> -->
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import qs from "qs";
export default {
  data() {
    return {
      value1: 0,
      value2: 50,
      value3: 36,
      value4: 48,
      value5: 42,
      year: "",
      uid: "",
      token: "",
      num: "2",
      allcourse: [],
      count: "",
      pagesize: "",
      yenum: "",
      allxueshi: "",
      kechengxueshi: ""
    };
  },
  created() {
    this.uid = sessionStorage.getItem("uid");
    this.token = sessionStorage.getItem("token");
    var date = new Date();
    this.year = date.getFullYear();
    this.getallcourse();
  },
  methods: {
    //进度条
    formatTooltip(val) {
      return val / 100;
    },
    //获取全部课程
    getallcourse() {
      var that = this;
      var datalist = {
        num: this.num,
        year: this.year,
        page: "1"
      };
      this.$axios
        .post(
          "http://jixujiaoyu_api.songlongfei.club/kecheng/get_kecheng_list",
          qs.stringify(datalist)
        )
        .then(res => {
          console.log("获取全部课程");
          console.log(res);
          that.allcourse = that.allcourse.concat(res.data.data.data);
          that.count = res.data.data.count;
          that.pagesize = res.data.data.pagesize;
          sessionStorage.setItem("id", res.data.data.id);
        });
    }
  }
};
</script>

<style scoped lang="less">
.allCourses {
  width: 948px;
  .title {
    width: 100%;
    height: 55px;
    background-color: #fafafa;
    // margin-bottom: 20px;
    font-size: 18px;
    padding-left: 20px;
    line-height: 55px;
    color: #0c69f5;
    box-sizing: border-box;
    span {
      border-bottom: 2px solid #0c69f5;
    }
  }
  .content {
    width: 100%;
    ul {
      li {
        // border:1px solid red;
        width: 260px;
        height: 285px;
        margin-left: 32px;
        margin-top: 15px;
        border: 1px solid #dfe4ed;
        border-radius: 5px;
        padding: 10px;
        background-color: #fff;
        p {
          &.imm {
            height: 130px;
          }
          img {
            width: 100%;
            height: 100%;
            border-radius: 5px;
            overflow: hidden;
          }

          &.txt {
            width: 100%;
            height: 34px;
            padding-left: 8px;
            background-color: rgba(0, 0, 0, 0.4);
            font-size: 14px;
            color: #fff;
            line-height: 34px;
            margin-top: 15px;
            border-radius: 0 0 5px 5px;
          }
          &.tit {
            height: 22px;
            font-size: 16px;
            color: #717171;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-top: 12px;
          }
          &.jindu {
            width: 100%;
            height: 12px;
            display: flex;
            justify-content: space-between;
            margin-top: 16px;
            span {
              &.fr {
                margin-top: -12px;
              }
            }
          }
        }
      }
      li:hover {
        box-shadow: 0 0 10px #c1c1c1;
        border: 1px solid #c1c1c1;
      }
    }
  }
}
</style>
<style lang="less">
.allCourses {
  .block {
    width: 70%;
    height: 10px;
  }
  .el-slider {
    height: 10px;
  }
  .el-slider__runway {
    margin: -5px 0 0 40px;
  }
}
</style>
