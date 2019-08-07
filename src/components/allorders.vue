<template>
  <div class="allorders">
      <div class="peixun-title">
        <span class="on">全部课程订单</span>
      </div>
      <div class="order-content-box">
        <div class="order-title-box">
          <span>课程信息</span>
          <span>价格</span>
          <span>订单状态</span>
          <span style="display:none;">操作</span>
        </div>
        <div class="order-list-box">
          <div class="order-item">
            <div class="order-num-date">
              <div class="order-num">
                订单编号：356
                <span class="num"></span>
              </div>
              <div class="order-date">
                下单时间：
                <span class="date">2019-07-20 09:06:13</span>
              </div>
            </div>
            <div class="order-item-content">
              <div class="order-item-left">
                <img
                  style="width: 151px;height: 94px;"
                  src="http://ceshi2.jxjyedu.club/data/upload/2019/0718/10/5d2fdf06ed0f6_540_338_540_338.jpg"
                  alt
                />
                <div class="txt-box">
                  <div class="txt-title">把握做好教育活动中的思想政治工作（11学...</div>
                  <p></p>
                  <div class="total-time">目标学时：30 学时</div>
                </div>
              </div>
              <div class="order-item-price">￥0.00元</div>
              <div class="order-item-state">已支付</div>
              <div class="order-item-operation" style="display: none;">订单已完成</div>
            </div>
          </div>
          <div class="order-item">
            <div class="order-num-date">
              <div class="order-num">
                订单编号：357
                <span class="num"></span>
              </div>
              <div class="order-date">
                下单时间：
                <span class="date">2019-07-20 09:06:13</span>
              </div>
            </div>
            <div class="order-item-content">
              <div class="order-item-left">
                <img
                  style="width: 151px;height: 94px;"
                  src="http://ceshi2.jxjyedu.club/data/upload/2019/0718/10/5d2fdfa380480_540_338_540_338.jpg"
                  alt
                />
                <div class="txt-box">
                  <div class="txt-title">教育科研能力培养与实践（14学时）</div>
                  <p></p>
                  <div class="total-time">目标学时：30 学时</div>
                </div>
              </div>
              <div class="order-item-price">￥0.00元</div>
              <div class="order-item-state">已支付</div>
              <div class="order-item-operation" style="display: none;">订单已完成</div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "allorders",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.testrecord{width: 950px;display: flex;flex-direction: column;}
.peixun-title{width: 100%;height: 55px;background-color: #fafafa;margin-bottom: 20px;}
.peixun-title span{font-size: 18px;margin-left: 20px;line-height: 55px;color:#0c69f5; border-bottom: 2px solid #0c69f5;}
.order-content-box{width: 950px;background-color: #fafafa;}
.order-content-box .order-title-box{width: 910px;;height: 35px;background-color: #138bef;display: flex;justify-content: space-between;padding:0 20px 0 20px;}
.order-content-box .order-title-box span{display: block;color: #f3faff;line-height: 35px;font-size: 14px;}
.order-content-box .order-title-box span:nth-child(1){width:270px;}
.order-content-box .order-list-box{width: 950px;}
.order-content-box .order-list-box .order-item{width: 100%;margin-top: 10px;}
.order-content-box .order-list-box .order-item .order-num-date{width: 910px;height: 35px;padding:0 20px 0 20px;background-color: #f1f1f1;font-size: 12px;color:#333333;display: flex;justify-content: space-between;align-items: center;}
.order-content-box .order-list-box .order-item .order-item-content{width: 910px;padding:15px 20px 15px 20px;height: 94px;display: flex;justify-content: space-between;align-items: center;}
.order-content-box .order-list-box .order-item .order-item-content .order-item-left{width: 387px;display: flex;justify-content: space-between;}
.order-content-box .order-list-box .order-item .order-item-content .order-item-left .txt-box{width: 226px;height: 94px;margin-left: 10px;}
.order-content-box .order-list-box .order-item .order-item-content .order-item-left .txt-box .txt-title{width: 100%; font-size: 18px;color:#333333;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
.order-content-box .order-list-box .order-item .order-item-content .order-item-left .txt-box p{width: 100%;height: 36px;color:#777777;font-size: 14px;line-height: 18px;margin-top: 8px;overflow: hidden;text-overflow: ellipsis;}
.order-content-box .order-list-box .order-item .order-item-content .order-item-left .txt-box .total-time{font-size: 14px;color:#fe0000;margin-top: 8px;}
.order-content-box .order-list-box .order-item .order-item-content .order-item-price{margin-left: -100px;}
.order-content-box .order-list-box .order-item .order-item-content .order-item-price{font-size: 22px;color:#fe0000;}
.order-content-box .order-list-box .order-item .order-item-content .order-item-state{font-size: 14px;color:#fe0000;}
.order-content-box .order-list-box .order-item .order-item-content .order-item-operation{width: 88px;height: 30px;background-color: #329df5;text-align: center;line-height: 30px;color: #fff;cursor: pointer;}
.order-content-box .order-list-box .order-item .order-item-content .order-item-operation:hover{color:#ff0000;}


</style>
