<template>
  <div class="mykecheng fl">
    <div class="title">
      <span>我的课程</span>
    </div>
    <div class="content">
        <ul class="clearfix" v-if="datalist!=0">
            <li class="fl" v-for="item in datalist" :key="item.id">
                <p><img :src="item.img_url" alt=""></p>
                <p class="txt">{{item.title}}(<span>{{item.xueshi_num}}</span>课时)</p>
                <p class="tit">{{item.title}}</p>           
                <p class="jindu clearfix">
                  <span class="fl">进度</span>
                 <div class="block fl">
                   <el-slider v-model="value2"></el-slider>
                </div>
                <span class="fr" style="margin-top:-12px;">0%</span>
                </p>
            </li>
        </ul>
        <div class="nodata" v-else >
        </div>
    
    </div>
  </div>
</template>

<script>
import qs from 'qs'
export default {
   data() {
      return {
        value1: 0,
        value2: 50,
        value3: 36,
        value4: 48,
        value5: 42,
        uid:'',
        token:'',
        year:'',
        datalist:[]
      }
    },
    created (){
        this.uid=sessionStorage.getItem('uid')
        this.token=sessionStorage.getItem('token')
         var date=new Date;
        this.year=date.getFullYear()
        this.checkkecheng()

    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      },
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
           }
         }) 
      }
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
