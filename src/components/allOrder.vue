<template>
  <div class="allOrder fl">
    <div class="title">
      <span>我的订单</span>
    </div>
    <div class="content">
        <div class="info clearfix">
           <span class="fl">课程信息</span>
           <span class="fl">价格</span>
           <span class="fr">订单状态</span>
        </div>
        <div class="total">
            <ul>
                <li class="clearfix dingdan">
                    <p class="fl">
                       <span>订单编号 ：</span><span>384</span> 
                    </p>
                    <p class="fr">
                    <span>下单时间 :</span><span>2018-08-07 14:00:55</span>
                    </p>
                </li>
                <li class="clearfix neirong">
                    <p class="fl">
                        <img src="../assets/guanli.jpg" alt="">
                    </p>
                    <p class="fl guanword">
                       <span>管理学原理</span><span>目标学时：<b>16</b>学时</span> 
                    </p>
                    <p class="fl monery">￥100.00元
                    </p>
                    <p class="fr zhifu">已支付
                    </p>
                </li>
            </ul>
            <ul>
                <li class="clearfix dingdan">
                    <p class="fl">
                       <span>订单编号 ：</span><span>384</span> 
                    </p>
                    <p class="fr">
                    <span>下单时间 :</span><span>2018-08-07 14:00:55</span>
                    </p>
                </li>
                <li class="clearfix neirong">
                    <p class="fl">
                        <img src="../assets/guanli.jpg" alt="">
                    </p>
                    <p class="fl guanword">
                       <span>管理学原理</span><span>目标学时：<b>16</b>学时</span> 
                    </p>
                    <p class="fl monery">￥100.00元
                    </p>
                    <p class="fr zhifu">已支付
                    </p>
                </li>
            </ul>
            <ul>
                <li class="clearfix dingdan">
                    <p class="fl">
                       <span>订单编号 ：</span><span>384</span> 
                    </p>
                    <p class="fr">
                    <span>下单时间 :</span><span>2018-08-07 14:00:55</span>
                    </p>
                </li>
                <li class="clearfix neirong">
                    <p class="fl">
                        <img src="../assets/guanli.jpg" alt="">
                    </p>
                    <p class="fl guanword">
                       <span>管理学原理</span><span>目标学时：<b>16</b>学时</span> 
                    </p>
                    <p class="fl monery">￥100.00元
                    </p>
                    <p class="fr zhifu">已支付
                    </p>
                </li>
            </ul>
           
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.allOrder {
  width: 948px;
  .title {
    width: 100%;
    height: 55px;
    background-color: #fafafa;
    margin-bottom: 20px;
    font-size: 18px;
    padding-left: 20px;
    line-height: 55px;
    color: #0c69f5;
    box-sizing: border-box;
    span {
      border-bottom: 2px solid #0c69f5;
    }
  }
  .content{
      width: 100%;
    //   border:1px solid red;
      .info{
          width: 100%;
          height: 35px;
          line-height: 35px;
            background-color: #138bef;
            padding: 0 20px 0 20px;
            box-sizing: border-box;
            color:#fff;
            font-size:14px;
             overflow: hidden;
            span{
                display:inline-block;
                overflow: hidden;
                &:nth-child(1){
                    width: 60%;
                }
                 &:nth-child(2){
                    width: 20%;
                }
                 &:nth-child(3){
                    width: 20%;
                    text-align: right;
                }

            }
      }
      .total{
          width: 100%;
            ul{
                li{
                    &.dingdan{
                        height: 35px;
                        line-height: 35px;
                        padding: 0 20px 0 20px;
                        background-color: #f1f1f1;
                        font-size: 12px;
                        color: #333333;
                    }
                    &.neirong{
                        padding: 15px 20px 15px 20px;
                        box-sizing: border-box;
                        background-color: #fff;
                        img{
                            width: 150px;
                            margin-right:10px;
                        }
                        p{
                            // line-height: 90px;
                            &.guanword{
                                width: 350px;
                                span{
                                    display: block;
                                    &:nth-child(1){
                                       width: 100%;
                                        font-size: 18px;
                                        color: #333333;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                        white-space: nowrap;
                                    }
                                     &:nth-child(2){
                                       margin-top:49px;
                                       font-size: 14px;
                                       color: #fe0000
                                    }
                                }
                            }
                            &.monery{
                                font-size: 22px;
                                color: #fe0000;
                                 margin-top:35px; 
                            }
                            &.zhifu{
                               font-size: 14px;
                                color: #fe0000; 
                                margin-top:35px; 
                            }
                        }

                    }
                }
            }
      }
  }
}
</style>
