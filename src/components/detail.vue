<template>
  <div class="allCourses fl">
    <div class="title">
      <span>课程包详情</span>
    </div>
    <div class="content">
      <ul class="clearfix">
        <li class="fl">
          <p class="imm">
            <img src="" alt />
          </p>
          <p class="txt">
            学时标题
            <span>43</span>学时)
          </p>
          <p class="tit">标题课程</p>
          <p class="jindu clearfix">
            <span style="display:block;margin:5px 0;">进度</span>
            <el-progress :percentage="used"></el-progress>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import qs from "qs";
export default {
    data (){
        return{
            used:0
        }
    },
    created (){

    },
    methods:{

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