<template>
    <div class="rate">
         <div class="rightcon fl">
         <div class="top">
             <h3>学习进度</h3>
           <div class="clearfix">
                <div class="one fl">
                <p class="p1">本年度已获学时</p>
                <p class="p2">{{xueshi}}</p>    
            </div>
            <div class="two fl" style="background-color:#e1f1ff">
               <div class="clearfix">
                    <div class="zuo fl">
                    <p>
                        <img src="../assets/task_fill.png" alt="">
                    </p>
                    <p class="download">
                        <span>待考试</span>
                        <span>(0)</span>
                    </p>
                </div>
                <div class="line fl"></div>
                 <div class="you fl" @click="download" >
                    <p>
                       <img src="../assets/select_fill.png" alt="">
                    </p>
                    <p class="download" >
                       证书下载
                    </p>
                </div>
               </div>
            </div>
           </div>
         </div>
         <div class="bottom">
             <h3 class="tit">全部课程</h3>
            <div class="shang clearfix" v-for="item in allcourse" :key="item.id">
                 <div class="imgleft fl">
                     <img :src="item.img_url" alt="">
                 </div>
                 <div class="imgmodel fl">
                     <h3 class="lgtit">{{item.title}}</h3>
                     <!-- <el-progress>完成进度：<el-progress :percentage="used"></el-progress></p> -->
                     <!-- <p>目标学时: <span>{{allxueshi}}</span> ; &nbsp; &nbsp;已获学时 : <span>{{kechengxueshi}}</span></p> -->
                 </div>
                 <div class="imgright fr">
                      <p><span>￥</span><span>{{item.price}}元</span></p>
                      <p>参加学习</p>
                 </div>
             </div>
         </div>
         
      </div>
    </div>
</template>

<script>
import qs from 'qs'
export default {
    name:'rate',
    data (){
        return {
            year:'',
            uid:'',
            token:'',
            xueshi:'',
            num:'2',
            allcourse:[],
             list:[],
            count:'',
            pagesize:'',
            yenum:'',
            allxueshi:'',
            kechengxueshi:'',
            used:0,
            id:[],
            idd:''
        }
    },
    created (){
        var that=this
         this.uid= sessionStorage.getItem('uid')
        this.token=sessionStorage.getItem('token')
        var date=new Date;
        this.year=date.getFullYear()
        this.getyeartime ()
        this.getallcourse()
    },
    watch:{
        'used':function (v,v2){
           
        }
    },
    
    methods:{
         //获取年度学时
      getyeartime (){
         var that=this
         var data={
            year:this.year,
            uid:this.uid,
            token:this.token
         }
          this.$axios.post("http://jixujiaoyu_api.songlongfei.club/dangan/get_user_year_xueshi",
         qs.stringify(data)
          ).then(res =>{
            console.log("获取学时")
             console.log(res)
             if(res.data.status=='ok'){
                that.xueshi=res.data.data.xueshi_num
             }
          })
      },
      //下载证书
      download (){
          this.$emit('more','archives')
      },
      //获取全部课程
      getallcourse (){
          var that=this
          var datalist={
              num:this.num,
              year:this.year,
              page:'1'
          }
          this.$axios.post('http://jixujiaoyu_api.songlongfei.club/kecheng/get_kecheng_list',
            qs.stringify(datalist)
          ).then(res =>{
              console.log('获取全部课程')
              console.log(res)
              that.allcourse=that.allcourse.concat(res.data.data.data)
              that.count=res.data.data.count
              that.pagesize=res.data.data.pagesize
              sessionStorage.setItem("id", res.data.data.data.id);
                for(var i=0 ;i<res.data.data.data.length;i++){
                    console.log(i)
                    that.id.push(res.data.data.data[i].id)
                    console.log(that.id)
                }
                // for(var i=0;i<that.id.length;i++){
                //     that.idd=that.id[i]
                //     console.log("==================")
                //     console.log(that.idd)
                // }
                // that. getprogress ()
                })
                
      },
     
       //获取课程进度
    getprogress (){
        var that=this
        that.$axios.post('http://jixujiaoyu_api.songlongfei.club/kecheng/get_kecheng_jindu',
            qs.stringify({
              kecheng_id:that.idd,
              uid:that.uid,
              token:that.token
            })
        ).then(res =>{
            console.log("获取进度")
            console.log(res)
            console.log(res.data.status)
            if(res.data.status=='error'){
              that.used=0
            }else{
               if(res.data.status=="ok"){
                  that.used=res.data.progress
               }
            }
        })
    }
    }


}
</script>

<style lang="less" scoped>
@family:AlibabaPuHuiTiR;
@family1:MicrosoftYaHei;
    .rate{
         .rightcon{
        width: 948px;
        padding: 20px 40px 47px 40px;
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
                width: 49.5%;
                p{
                     height: 30px;
                     line-height: 30px;
                     img{
                         margin-top:15px;
                     }
                     &.download{
                          margin-top:19px;
                     }
                }
            }
            .you{
                width: 50%;
                cursor: auto;
                 p{
                     height: 30px;
                      line-height: 30px;
                       img{
                         margin-top:15px;
                     }
                     &.download{
                          margin-top:19px;
                     }
                }
            }
            .line{
                width: 1px;
                height: 40px;
                background-color: #cadae9;
                margin-top:20px;
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
            margin-top:35px;
            .lgtit{
               font-size:20px;
              font-family:@family;
              color:#333333; 
              margin-bottom: 40px;
               
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