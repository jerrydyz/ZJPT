<template>
  <div class="courseBuyDetails">
        <div class="class-order">
          <div class="class_order_box" style="background:#fff">
            <div class="info-assd-lirxd" style="height:218px;">
              <div class="class_order_tit">确认订单</div>
              <div class="info" style="width:50%;">
                <div class="tit">课程详情</div>
                <a class="kechenglink">
                  <img :src="courseInfo.img_url"/>
                  <h3>{{courseInfo.title}}</h3>
                </a>
                <div class="item">
                  <span>课时：{{parseInt(courseInfo.xueshi_num)}} 课时</span>
                </div>
              </div>
              <div class="info" style="width:25%;">
                <div class="tit">讲师</div>
                <div class="item">
                  <span>{{teacher.name}}</span>
                </div>
              </div>
              <div class="info ddiel-us" style="width:25%;">
                <div class="tit">价格</div>
                <h3 style="color:#fc6238">{{courseInfo.price}}</h3>
              </div>
            </div>
            <div class="con">
              <div class="relCard">
                <p>学时卡密码：</p>
                <div style="height: 66px">
                  <input name="card" type="text" class="pay_number" placeholder="请输入学时卡密码" v-model="xueshika" />
                  <span class="pay_use_draw" @click="useCardPay">使用</span>
                </div>
              </div>
            </div>
            <dl class="class_order_pay">
              <dt>支付方式</dt>
              <dd>
                <span :class="{selected:selectstate==1}" @click="alipay">支付宝支付</span>
                <span :class="{selected:selectstate==2}" @click="wxpay">微信支付</span>
              </dd>
            </dl>

            <div class="class_order_bot">
              <div class="custom-box">
                <label class="check">
                  <input type="checkbox" class="check_xy" checked />我已阅读并同意
                  <a target="_blank" href="http://ceshi2.jxjyedu.club/single/buy.html" style="color: #188eee;">《河南省继续教育在线公共服务平台购买条款》</a>
                </label>
                  <div class="btn">
                    <span class="now-pay" @click="nowPay">立即支付</span>
                  </div>
                <div class="price">
                  <div class="item">
                    实付金额：<div class="dne-omns-elis" id="pay_money" style="display: inline">￥{{courseInfo.price}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="WXbox" v-show="wxpaybox==1">
            <div class="shang-box">
                <span class="shang-close" @click="closeWXpay" title="关闭">关闭</span>
                <div class="shang-payimg"><img :src="wxPayQRcode"></div>
                <div class="shang-info">
                    <p>打开微信扫一扫，即可进行扫码支付哦</p>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import qs from 'qs'
import { Message } from 'element-ui';
export default {
  name: "packagebuy",
  data() {
    return {
      selectstate: 1,
      buycourseId:'',
      xueshika:'',
      wxpaybox:0,
      wxPayQRcode:'',
      courseInfo:'',
      teacher:'',

    };
  },
  
  mounted () {
    let that =this;
    this.buycourseId=this.$route.query.packid;
    let courseId={year:''}
    this.$axios.post("http://jixujiaoyu_api.songlongfei.club/kecheng/get_kechengbao_list",qs.stringify(courseId))
      .then(response => {
        if(response.data.status=="ok"){
          console.log(response.data.data);
          let alldata = response.data.data;
          for(let i=0;i<alldata.length;i++){
              if(alldata[i].id==this.buycourseId){
                  that.courseInfo=alldata[i];
                  console.log(that.courseInfo);
              }
          }
        //   that.teacher=response.data.data.jiangshi
        }else if(response.data.status=="error"){
          this.$message.error({message: response.data.msg,duration:1600});
        }else if(response.data.status=="relogin"){
          that.clearlocalData();
        }
        
      })
      .catch(response => {
        console.log(response);
      });
  },
  methods:{
      //状态为relogin时清除local数据
      clearlocalData:function(){
        let that = this;
        that.$message.error({message:"请重新登录",duration:1600});
        localStorage.removeItem("login1");
        localStorage.removeItem("uid");
        localStorage.removeItem("token");
        localStorage.removeItem("sex");
        localStorage.removeItem("name");
        localStorage.removeItem("mobile");
        localStorage.removeItem("id_card");
        setTimeout(() => {
          that.$router.push({ path: '/login' });
        }, 1600);
      },
      alipay:function(){
          this.selectstate=1;
      },
      wxpay:function(){
          this.selectstate=2;
      },
      useCardPay:function(){
            let buycourse={uid:localStorage.getItem("uid"),token:localStorage.getItem("token"),type:'1',type_id:this.buycourseId,code:this.xueshika}
            this.$axios.post("http://jixujiaoyu_api.songlongfei.club/pay/xueshika",qs.stringify(buycourse))
            .then(response => {
                if(response.data.status=="ok"){
                    this.$message.success({message: "您已购买成功",duration:1600});
                    this.$router.push({ path: '/my' });
                }else if(response.data.status=="error"){
                  this.$message.error({message: response.data.errormsg,duration:1600});
                }else if(response.data.status=="relogin"){
                  this.clearlocalData();
                }
                
            })
            .catch(response => {
                console.log(response);
            });
      },
      nowPay:function(){
          let that = this;
          if(this.selectstate==1){
              //alipay
            var urllink='http://jixujiaoyu_api.songlongfei.club/pay/alipay?uid='+localStorage.getItem("uid")+'&token='+localStorage.getItem("token")+'&type='+1+'&type_id='+this.buycourseId+''
            window.open(urllink);
          }else if(this.selectstate==2){
              //wxpay
                let buycourse={uid:localStorage.getItem("uid"),token:localStorage.getItem("token"),type:'1',type_id:this.buycourseId}
                this.$axios.post("http://jixujiaoyu_api.songlongfei.club/pay/wxpay",qs.stringify(buycourse))
                .then(response => {
                    if(response.data.status=="ok"){
                        that.wxpaybox=1;
                        that.wxPayQRcode=response.data.data.url;
                        console.log(response.data.data.url);

                    }else if(response.data.status=="error"){

                    }else if(response.data.status=="relogin"){

                    }
                    
                })
                .catch(response => {
                    console.log(response);
                });
          }
      },
      closeWXpay:function(){
          this.wxpaybox=0;
      }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.courseBuyDetails{width: 1200px;margin: 45px auto 0;}
.class_order_tit{margin-bottom:15px;color:#000;font-size:18px;}
.class_order_box{margin-bottom:20px;padding:19px;border:solid 1px #ededed;}
.class_order_box .tit{margin-bottom:30px;color:#333;font-size:14px;background: #fafafa;padding: 0 2%;line-height: 40px;}
.class_order_box .tit span{line-height: 80px;font-size:14px}
.ddiel-us span{font-size:18px;color:#fc6238}
.class_order_box  .info-assd-lirxd{display:inline-block;width:100%;height: 180px;}
.class_order_box  .info-assd-lirxd .info{float: left;}
.class_order_box .info{overflow:hidden;margin-bottom:20px;float: left}
.class_order_box .info span{line-height: 40px;}
.class_order_box .info img{float:left;margin-right:20px;width:120px;height:80px;}
.class_order_box .info h3{line-height: 40px;font-size:18px;color:#333}
.class_order_box .info .price{margin-bottom:5px;color:#666;font-size:16px;}
.class_order_box .info .price span{color:#fc6238;font-weight:700;}
.class_order_box .info .item{color:#888;font-size:14px;line-height:28px;}
.class_order_box .info .item span{margin-right:30px;}
.class_order_box .info .item a{color:#06f;}
.class_order_box .info .kechenglink{display: block;}
.class_order_box .info .kechenglink img{float: left;margin-right: 20px;width: 120px;height: 80px;}
.class_order_card{padding:20px 0;border-top:solid 1px #ededed;border-bottom:solid 1px #ededed;}
.class_order_card dt{font-size:14px;line-height:40px;color: #333}
.class_order_card dt span{cursor:pointer;}
.class_order_card dt span i{margin:0 0 0 5px;width:12px;height:8px;background-position:-419px -172px;}
.class_order_card dt.open span i{background-position:-469px -172px;}
.class_order_card dd{margin-top:20px;border:solid 1px #ededed;}
.class_order_hd{height:36px;background-color:#fafafa;line-height:36px;}
.class_order_hd li{float:left;width:100px;color:#424344;text-align:center;font-size:14px;cursor:pointer;}
.class_order_hd li.on{background-color:#fff;color:#E82F24;}
.class_order_bd{padding:20px;}
.class_order_bd p{color:#999;font-size:16px;}
.class_order_bd .box{overflow:hidden;padding:10px 0;}
.class_order_bd .con{display:none;}
.class_order_bd .box input{display:inline-block;margin-right:5px;padding:2px 4px;width:90px;height:30px;border:solid 1px #ccc;text-align:center;font-size:14px;}
.class_order_bd .box span{display:inline-block;margin-right:5px;color:#999;font-size:20px;line-height:36px;}
.class_order_bd .box a{display:inline-block;width:100px;height:36px;background-color:#06f;color:#fff;text-align:center;line-height:36px;}
.class_order_pr{padding:0 20px;height:36px;background-color:#fafafa;color:#888;font-size:14px;line-height:36px;}
.class_order_pr span{color:#fc6f4d;}
.class_order_pay dt{padding:10px 0;color:#333;font-size:14px;line-height:36px;}
.class_order_pay dd span{padding: 0 10px;display:inline-block;margin-right:20px;height:34px;border:solid 1px #ededed;color:#333;text-align:center;font-size:16px;line-height:34px;cursor:pointer;}
.class_order_pay dd span.selected{border-color:#06f;background:url(/static/images/coursedetails/slected.png) right bottom no-repeat;}
.class_order_bot .custom-box{width:100%;display: inline-block;line-height: 80px;margin-top: 20px;border-top: solid 1px #ededed;}
.class_order_bot .custom-box .check{float: left}
.class_order_bot .custom-box .check .check_xy{width: 13px;height: 13px;border: 1px solid #ccc;}
.class_order_bot .custom-box form{float: right;}
.class_order_bot .info{line-height:32px;}
.class_order_bot .item{color:#999;font-size:14px;}
.class_order_bot .item span{color:#fc6238;}
.class_order_bot .item .fr{width:120px;color:#000;}
.class_order_bot .price{float: right;margin-right: 20px;}
.class_order_bot .price .dne-omns-elis{display: inline;color:#fc6238}
.class_order_bot .price.fr{padding-right:10px;color:#fc6f4d;font-size:26px;}
.class_order_bot .btn{float: right;}
.class_order_bot .btn .now-pay{margin-top:12px;display:inline-block;width:140px;border-radius:2px;background-color:#E82F24;color:#fff;text-align:center;font-size:14px;line-height:40px;cursor: pointer;}
.pay_number{float: left;padding: 0 10px;width: 370px;height: 35px;margin-top: 10px;border: solid 1px #b6c7d6;border-radius: 4px;}
.pay_use_draw{display: block;width: 70px;height: 35px;margin: 10px 0 0 10px;border: solid 1px #E82F24;border-radius: 4px;background-color: #E82F24;color: #fff;text-align: center;font-size: 14px;line-height: 35px;float: left;cursor: pointer;}
.WXbox{position: absolute;left: 0;top:0;width: 100%;height: 100%;background-color: rgba(0,0,0,.5);}
.WXbox .shang-box{width: 300px;height: 315px;padding: 10px;background-color: #fff; border-radius: 10px; position: fixed;z-index: 9999;left: 59%;top: 50%;margin-left: -280px;margin-top: -280px; border: 1px dotted #dedede;}
.WXbox .shang-close{float: right;cursor: pointer;}
.WXbox .shang-payimg{width: 250px;height: 250px;padding: 10px;margin: 20px auto 0;border-radius: 3px;}
.WXbox .shang-info p{ color: #C3C3C3;text-align: center;font-size: 16px;}
</style>
