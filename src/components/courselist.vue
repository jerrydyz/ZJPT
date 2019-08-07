<template>
  <div class="courselist">
    <div class="mycourse-title">
      <span class="on">我的课程</span>
      <div class="addcourse" style="display: none;">
        <div class="addimg">+</div>
        <span>添加课程</span>
      </div>
    </div>
    <div class="mycourse-content-box">
      <div class="mycouse-item" data-courseurl="http://ceshi2.jxjyedu.club/course/86.html">
        <div class="course-img-box">
          <img
            src="http://ceshi2.jxjyedu.club/data/upload/2019/0718/10/5d2fdfa380480_266_138_266_138.jpg"
            alt
          />
          <div class="txt">2019年度Python培训课程（60学时）</div>
        </div>
        <p class="course-title">教育科研能力培养与实践（...</p>
        <div class="study">
          <span>进度</span>
          <div class="progress-box">
            <div class="changed" style="width: 100%"></div>
          </div>
          <span>100%</span>
        </div>
      </div>
      <div class="mycouse-item" data-courseurl="http://ceshi2.jxjyedu.club/course/85.html">
        <div class="course-img-box">
          <img
            src="http://ceshi2.jxjyedu.club/data/upload/2019/0718/10/5d2fdf06ed0f6_266_138_266_138.jpg"
            alt
          />
          <div class="txt">2019年度Python培训课程（60学时）</div>
        </div>
        <p class="course-title">把握做好教育活动中的思想...</p>
        <div class="study">
          <span>进度</span>
          <div class="progress-box">
            <div class="changed" style="width: 100%"></div>
          </div>
          <span>100%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "courselist",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.courselist {
  width: 950px;
  display: flex;
  flex-direction: column;
}
.mycourse-title {
  width: 100%;
  height: 55px;
  margin-bottom: 20px;
  background-color: #fafafa;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.mycourse-title > span {
  font-size: 18px;
  margin-left: 20px;
  line-height: 30px;
  color: #0c69f5;
  border-bottom: 2px solid #0c69f5;
}
.mycourse-title .addcourse {
  width: 95px;
  height: 30px;
  border: 1px solid #018cd7;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
}
.mycourse-title .addcourse .addimg {
  width: 17px;
  height: 17px;
  border-radius: 17px;
  border: 1px solid #018cd7;
  color: #018cd7;
  font-size: 14px;
  text-align: center;
  line-height: 17px;
}
.mycourse-title .addcourse:hover .addimg {
  border: 1px solid #fff;
  color: #fff;
}
.mycourse-title .addcourse:hover {
  background-color: #018cd7;
  color: #fff;
}
.mycourse-title .addcourse:hover span {
  color: #fff;
}
.mycourse-title .addcourse > span {
  color: #018cd7;
}
.mycourse-content-box {
  width: 910px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #fafafa;
  padding-bottom: 30px;
}
.mycourse-content-box .mycouse-item {
  width: 260px;
  height: 285px;
  margin-left: 32px;
  margin-top: 30px;
  border: 1px solid #dfe4ed;
  border-radius: 5px;
  padding: 10px;
  background-color: #fff;
  cursor: pointer;
}
.mycourse-content-box .mycouse-item:hover {
  box-shadow: 0 0 10px #ccc;
}
.mycourse-content-box .mycouse-item:nth-child(3n + 1) {
  margin-left: 0;
}
.mycourse-content-box .mycouse-item .course-img-box {
  position: relative;
  width: 262px;
  height: 189px;
  border-radius: 5px;
  overflow: hidden;
}
.mycourse-content-box .mycouse-item .course-img-box .txt {
  width: 256px;
  height: 34px;
  padding-left: 8px;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  bottom: 0;
  font-size: 14px;
  color: #fff;
  line-height: 34px;
}
.mycourse-content-box .mycouse-item .course-title {
  width: 100%;
  height: 22px;
  font-size: 16px;
  color: #717171;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 12px;
}
.mycourse-content-box .mycouse-item .course-time {
  font-size: 16px;
  color: #fa0808;
  margin-top: 10px;
}
.mycourse-content-box .mycouse-item .study {
  width: 100%;
  height: 12px;
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
}
.mycourse-content-box .mycouse-item .study .progress-box {
  width: 168px;
  height: 12px;
  border: 1px solid #dfe4ed;
}
.mycourse-content-box .mycouse-item .study .progress-box .changed {
  width: 40%;
  height: 100%;
  background-color: #2a9cf1;
}
.mycourse-content-box .mycouse-item .study span {
  font-size: 12px;
}
</style>
