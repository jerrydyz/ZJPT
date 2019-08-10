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
            <ul v-for="(item,index) in data" :key="index">
                <li class="clearfix dingdan">
                    <p class="fl">
                       <span>订单编号 ：</span><span>{{item.order_id}}</span> 
                    </p>
                    <p class="fr">
                    <span>下单时间 :</span><span>{{item.time}}</span>
                    </p>
                </li>
                <li class="clearfix neirong">
                    <p class="fl">
                        <img src="../assets/guanli.jpg" alt="">
                    </p>
                    <p class="fl guanword">
                       <span>{{item.buy_obj}}</span>
                       <!-- <span>目标学时：<b>16</b>学时</span>  -->
                    </p>
                    <p class="fl monery">￥{{item.monery}}元
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
import qs from 'qs'
export default {
    data (){
        return {
            uid:'',
            token:'',
            page:'1',
            num:'3',
            data:[]

        }
    },
    created (){
          this.uid= sessionStorage.getItem('uid')
        this.token=sessionStorage.getItem('token')
        console.log(this.uid,this.token)
        this.getOrder()
    },
    methods:{
        getOrder (){
            var that=this
            var data={
                uid:this.uid,
                token:this.token,
                page:this.page,
                num:this.num
            }
            this.$axios.post('http://jixujiaoyu_api.songlongfei.club/pay/get_pay_order',
            qs.stringify(data)
            ).then(res =>{
                console.log("订单列表")
                console.log(res)
                if(res.data.status=="ok"){
                     that.data=that.data.concat(res.data.data)
                }

            })
        }
    }
};
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
                                margin-top: 35px;
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
