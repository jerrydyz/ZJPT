<template>
  <div class="mykecheng fl">
    <div class="title">
      <span>我的课程</span>
    </div>
    <div class="content">
        <ul class="clearfix" v-show="datalist.length">
            <li class="fl" v-for="item in datalist" :key="item.id" @click="todetail(item.id)">
                <p><img :src="item.img_url" alt=""></p>
                <p class="txt">{{item.title}}(<span>{{item.xueshi_num}}</span>课时)</p>
                <p class="tit">{{item.title}}</p>  
                <p style="color:red;"><span>主讲:&nbsp;</span>{{item.jiangshi.name}}</p>         
            </li>
           
        </ul>
         <div class="blocks" v-if="datalist.length" style="text-align:right;margin-right:30px;margin-top:20px;">
              <el-pagination
                layout="prev, pager, next"
                :total="datalist.length">
              </el-pagination>
            </div>
        <div class="nodata" v-show="!datalist.length" >
        </div>
    
    </div>
  </div>
</template>

<script>
import qs from 'qs'
export default {
   data() {
      return {
        used: 0,
        uid:'',
        token:'',
        year:'',
        datalist:[],
        idd:''
      }
    },
    created (){
        this.uid=localStorage.getItem('uid')
        this.token=localStorage.getItem('token')
         var date=new Date;
        this.year=date.getFullYear()
        this.checkkecheng()
    },
    methods: {
      //我的课程
      checkkecheng(){
         var that=this
         this.$axios.post('http://jixujiaoyu_api.songlongfei.club/kecheng/get_list_for_buy',
          qs.stringify({
             uid:this.uid,
             token:this.token,
             year:this.year
          })
         ).then(res =>{
           console.log("检查是否购买")
           console.log(res)
           if(res.data.status=="ok"){
                that.datalist=that.datalist.concat(res.data.data)
                console.log( that.datalist)
                for(var i=0;i<that.datalist.length;i++){
                   console.log(i)
                  //  获取课程id
                   that.idd =that.datalist[i].id
                  // that.getprogress ()
                  
                }
           }
         }) 
      },
      //到课程详情页
    todetail (val){
      console.log(val)
        this.$router.push({
          name:'courseDetails',
          params:{
            courseId:val
          }
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
    },
   
    }

};
</script>

<style scoped lang="less">
.mykecheng{
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
      ul{
          li{
              // border:1px solid red;
               width: 260px;
                height: 285px;
                margin-left: 32px;
                margin-top: 30px;
                border: 1px solid #dfe4ed;
                border-radius: 5px;
                padding: 10px;
                background-color: #fff;
                P{
                  img{
                    width: 100%;
                    // height: 189px;
                    border-radius: 5px;
                    overflow: hidden;
                  }
                  &.txt{
                    width: 100%;
                    height: 34px;
                    padding-left: 8px;
                    background-color: rgba(0,0,0,.4);
                    font-size: 14px;
                    color: #fff;
                    line-height: 34px;
                    margin-top:15px;
                    border-radius: 0 0 5px 5px;
                  }
                  &.tit{
                    height: 22px;
                    font-size: 16px;
                    color: #717171;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    margin-top: 12px;
                  }
                  &.jindu{
                    width: 100%;
                    height: 12px;
                    display: flex;
                    justify-content: space-between;
                    margin-top: 16px;
                    span{
                      &.fr{
                        margin-top:-12px;
                      }
                    }
                  }
                }
          }
          li:hover{
           box-shadow: 0 0 10px #c1c1c1; 
           border:1px solid #c1c1c1; 
          }
      }
      .nodata{
                width: 212px;
                height: 240px;
                margin: 80px auto;
                background-image: url('../assets/nodata.png');
            }
  }

}
</style>
<style lang="less">
    .mykecheng{
        .block{
          width: 70%;
          height: 10px;
        }
        .el-slider{
            height: 10px;
        }
        .el-slider__runway{
          margin:-5px 0 0 40px;
        }
    }
</style>
