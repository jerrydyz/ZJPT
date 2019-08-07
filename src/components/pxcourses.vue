<template>
  <div class="pxcourses">
      <div class="peixun-title">
        <span class="on">培训课程</span>
      </div>
      <div class="peixun-content-box">
        <div class="plan-item">
          <img
            src="http://ceshi2.jxjyedu.club/data/upload/2019/0718/17/5d303b5abb566_173_108_173_108.png"
            alt
          />
          <div class="item-content">
            <div class="item-title">2019年Python培训</div>
            <div class="item-time">
              <span>完成进度：</span>
              <div class="progress-box">
                <div class="progress" style="width: 100.00%;"></div>
              </div>
              <span>100.00%</span>
            </div>
            <div class="total-time">
              目标学时：
              <span>
                必修60
                <span class="line getcoursr-time">|</span>
                选修0
              </span>
              <span class="getcoursr-time">已获学时：</span>
              <span>
                必修60
                <span class="line">|</span>选修0
              </span>
            </div>
          </div>
          <div class="price-box">
            <div class="price">
              <span class="rmb">￥180.00 元</span>
            </div>
            <a href="http://ceshi2.jxjyedu.club/my/course.html?id=%3Dk-J0">
              <div type="button" class="btn-now">继续学习</div>
            </a>
          </div>
        </div>
        <div class="plan-item">
          <img
            src="http://ceshi2.jxjyedu.club/data/upload/2019/0718/17/5d303be57e46c_173_108_173_108.png"
            alt
          />
          <div class="item-content">
            <div class="item-title">2019年度C语言培训</div>
            <div class="item-time">
              <span>完成进度：</span>
              <div class="progress-box">
                <div class="progress" style="width: 0%;"></div>
              </div>
              <span>0%</span>
            </div>
            <div class="total-time">
              目标学时：
              <span>
                必修60
                <span class="line getcoursr-time">|</span>
                选修0
              </span>
              <span class="getcoursr-time">已获学时：</span>
              <span>
                必修0
                <span class="line">|</span>选修0
              </span>
            </div>
          </div>
          <div class="price-box">
            <div class="price">
              <span class="rmb">￥180.00 元</span>
            </div>
            <form
              action="http://ceshi2.jxjyedu.club/index.php?c=course&amp;m=PayVideo&amp;a=checkPay"
              method="POST"
              target="_blank"
              class="pay_form"
            >
              <input type="hidden" value="5" name="yearid" />
              <input type="hidden" value="16" name="vid" />
              <input type="hidden" value="zy_album" name="check_type" />
              <input type="hidden" value="班级：2019年度C培训课程(60课时)" name="title" />
              <input type="hidden" value="180.00" name="money" />
              <input
                type="hidden"
                value="http://ceshi2.jxjyedu.club/pay/awqvd7cT1vti=4sKI.html"
                name="pay_url"
              />
              <input type="hidden" id="order_album_id" value="0" name="order_album_id" />
            </form>
            <a href="javascript:;" class="charge_video">
              <div type="button" class="btn-now">立即报名</div>
            </a>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "pxcourses",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.pxcourses{width: 950px;display: flex;flex-direction: column;}
.peixun-title{width: 100%;height: 55px;background-color: #fafafa;margin-bottom: 20px;}
.peixun-title span{font-size: 18px;margin-left: 20px;line-height: 55px;color:#0c69f5; border-bottom: 2px solid #0c69f5;}
.peixun-content-box{width: 910px;background-color: #fafafa;padding:0 20px 20px 20px;}
.peixun-content-box .plan-item{width: 100%;height: 113px;padding: 20px 0;border-bottom: 1px solid #c9c9c9;}
.peixun-content-box .plan-item img{margin-right: 30px;display: inline-block;vertical-align: middle;}
.peixun-content-box .plan-item .item-content{width: 455px;height: 94px;display: inline-block;vertical-align: middle;}
.peixun-content-box .plan-item .item-content .item-title{font-size: 18px;}
.peixun-content-box .plan-item .item-content .item-time{font-size: 15px;color: #0a5cff;margin-top: 20px;}
.peixun-content-box .plan-item .item-content .item-time span{font-size: 14px;color: #329df5;}
.peixun-content-box .plan-item .item-content .total-time{font-size: 14px;color: #8e8e8e;margin-top: 10px;}
.peixun-content-box .plan-item .item-content .total-time span{font-size: 14px;color: #8e8e8e;}
.peixun-content-box .plan-item .item-content .total-time .line{font-size: 16px;color: #8e8e8e;line-height: 16px;margin: 0 10px 0 10px;}
.peixun-content-box .plan-item .item-content .total-time .getcoursr-time{margin-left: 10px;font-size: 14px;}
.peixun-content-box .plan-item .price-box{width: 126px;height: 94px;display: inline-block;vertical-align: middle;}
.peixun-content-box .plan-item .price-box .rmb{font-size: 22px; color:#ff0000;}
.peixun-content-box .plan-item .price-box .old-price{text-decoration:line-through;color:#868383;font-size: 13px;}
.peixun-content-box .plan-item .price-box .btn-now{width: 120px;height: 40px;font-size: 16px;text-align: center;line-height: 40px;margin: 35px auto 0;background-color: #329df5;color: #fff;cursor: pointer;}
.peixun-content-box .plan-item .price-box .btn-now:hover{color:#ff0000;}
.peixun-content-box .plan-item .item-content .item-time .progress-box{width: 284px;height: 12px;display:inline-block;vertical-align: middle;background-color: #dcdcdc;border: 1px solid #d2d2d2;}
.peixun-content-box .plan-item .item-content .item-time .progress-box .progress{width: 10%;height: 12px;background-color: #005bff;}


</style>
