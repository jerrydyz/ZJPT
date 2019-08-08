<template>
    <div class="rate">
         <div class="rightcon fl">
         <div class="top">
             <h3>学习进度</h3>
           <div class="clearfix">
                <div class="one fl">
                <p class="p1">本年度已获学时</p>
                <p class="p2">60</p>    
            </div>
            <div class="two fl">
               <div class="clearfix">
                    <div class="zuo fl">
                    <p>
                        <i></i>
                    </p>
                    <p>
                        <span>待考试</span>
                        <span>(0)</span>
                    </p>
                </div>
                 <div class="you fl">
                    <p>
                        <i></i>
                    </p>
                    <p>
                       证书下载
                    </p>
                </div>
               </div>
            </div>
           </div>
         </div>
         <div class="bottom">
             <h3 class="tit">全部课程</h3>
             <div class="shang clearfix">
                 <div class="imgleft fl">
                     <img src="../assets/my02.png" alt="">
                 </div>
                 <div class="imgmodel fl">
                     <h3 class="lgtit">2019年度中小学教师思想素质提升课程</h3>
                     <p>报名时间:2019-5-1 至 2019-6-30</p>
                     <p>目标学时:必修60&nbsp;&nbsp; 选修0  &nbsp;&nbsp;;&nbsp;&nbsp;已获学时 : 必修0  &nbsp;&nbsp;选修0</p>
                 </div>
                 <div class="imgright fr">
                      <p><span>￥</span><span>45.00元</span></p>
                      <p>立即报名</p>
                 </div>
             </div>
              <div class="shang clearfix">
                 <div class="imgleft fl">
                     <img src="../assets/my02.png" alt="">
                 </div>
                 <div class="imgmodel fl">
                     <h3 class="lgtit">2019年度中小学教师思想素质提升课程</h3>
                     <p>完成进度：<span></span>%</p>
                     <p>目标学时:必修60&nbsp;&nbsp; 选修0  &nbsp;&nbsp;;&nbsp;&nbsp;已获学时 : 必修0  &nbsp;&nbsp;选修0</p>
                 </div>
                 <div class="imgright fr">
                      <p><span>￥</span><span>180.00元</span></p>
                      <p>参加学习</p>
                 </div>
             </div>
         </div>
         
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@family:AlibabaPuHuiTiR;
@family1:MicrosoftYaHei;
    .rate{
         .rightcon{
        width: 948px;
        padding: 30px 40px 79px 40px;
        box-sizing: border-box;
        background-color: #fff;
        .top{
          margin-bottom: 45px;
             h3{
             font-size:20px;
             font-family:@family;
             color:#0069cb; 
             padding-bottom: 10px;
             box-sizing: border-box;
             border-bottom: 1px solid #f4f4f4;
            margin-bottom: 20px;
        }
        .one{
            width: 250px;
            height: 90px;
            background-color: #e1f1ff;
            padding-top:20px;
            padding-left:15px;
            margin-right: 10px;
             border: 4px solid #e5e5e5;
            .p1{
               color:#1b1a16;
               letter-spacing: 1px;
            }
            .p2{
                color:#fe0000;
                font-size:30px;
            }
        }
        .two{
            width: 320px;
            height: 90px;
            border: 4px solid #e5e5e5;
            text-align: center;
            line-height: 90px;
            .zuo{
                width: 50%;
            }
            .you{
                width: 50%;
            }

          }
        }
       
    }
    .bottom{
        padding-bottom: 20px;
        box-sizing: border-box;
        h3.tit{
            font-size:20px;
             font-family:@family;
             color:#0069cb; 
             padding-bottom: 10px;
             box-sizing: border-box;
             border-bottom: 1px solid #f4f4f4;
           
        }
        .shang{
            width: 100%;
             margin-top: 20px;
              border-bottom: 1px solid #ebf0f6;
               padding-bottom: 20px;
                 box-sizing: border-box;
          .imgleft{
             width: 150px;
             height: 93px;
             margin-top:7px;
             vertical-align: middle;
            margin-right:30px;
            img{
              width: 100%;
              height: 100%;
            }
          } 
          .imgmodel{
            width: 550px;
            .lgtit{
               font-size:20px;
              font-family:@family;
              color:#333333; 
              margin-bottom: 25px;
               
            }
             p:nth-child(2){
                color:#46a5f7;
                margin-bottom: 10px;
              }
              p:nth-child(3){
                color:#cccccc;
              }
          } 
          .imgright{
            //  border: 1px solid red;
            //  display: none;
            width: 120px;
            height: 96px;
            text-align: right;
             p:nth-child(1){
              text-align: right;
              color:#fe0000;
              font-size: 18px;
              font-weight: bold;
            }
            p:nth-child(2){
              text-align: center;
              width: 100%;
              height: 40px;
              line-height: 40px;
              background-color: #319df5;
              color:#fff;
              font-size:16px;
              font-family: @family1;
              margin-top:34px;
            }
          }
        }
    }
    }

</style>
