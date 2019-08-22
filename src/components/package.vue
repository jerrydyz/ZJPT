<template>
  <div class="package fl">
    <div class="title">
      <span>课程包</span>
    </div>
    <div class="content">
      <ul>
        <li class="clearfix xiaoshou" v-for="(item,index) in list" :key="index" @click="gopackdetail(item.id)">
          <div class="left fl">
            <img :src="item.img_url" alt />
          </div>
          <div class="item-content fl">
            <div class="item-title">{{item.title}}</div>
            <div class="item-time clearfix">
            </div>
            <div class="total-time">学时：<span>{{item.xueshi_num}}</span></div>
          </div>
          <div class="price-box fr">
            <div class="price"><span class="rmb">￥{{item.price}} 元</span></div>
            <div type="button" class="btn-now" @click.stop="xuexi(item.id)" v-html="msg"></div>
          </div>
        </li>
        

      </ul>
       <div class="blocks" style="text-align:right;margin-right:20px;margin-top:20px;">
              <el-pagination
                layout="prev, pager, next"
                :total="list.length"
                :current-page.sync="pageNo"
                :page-size="3"
                @current-change="changePage()"
                >
              </el-pagination>
            </div>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
export default {
  name: "package",
  data (){
    return {
      list:[],
      used:10,
      id:[],
      year:'',
      msg:'购买',
      pageNo:1,
      idd:''
        
    }
  },
  created (){
    this.kechengbao()
    this.uid = sessionStorage.getItem("uid");
    this.token = sessionStorage.getItem("token");
    var date = new Date();
    this.year = date.getFullYear();
  },
  methods:{
      kechengbao (){
           //获取课程包信息
       var that=this 
        this.$axios({
          method: 'post',
          url: 'http://jixujiaoyu_api.songlongfei.club/kecheng/get_kechengbao_list',
          data:qs.stringify({
            year:this.year
          })
          }).then(res => {
            console.log("课程包信息")
            console.log(res)
            if(res.data.status=="ok"){
              that.list=[]
               that.list=that.list.concat(res.data.data)
               for(var i=0;i<res.data.data.length;i++){
                 that.id.push(res.data.data[i].id)
                 console.log("========")
                 console.log(that.id)
                
                //  that.getbaoprogress()
               }
               for(var i=0;i<that.id.length;i++){
                   that.idd=that.id[i]
                   console.log("单个id")
                   console.log(that.idd)
                  // that.getbaoprogress()
               }
            }else{
              
            }
      });
      },
      xuexi (packageid) {
        let that =this;
        let courseId={uid:localStorage.getItem("uid"),token:localStorage.getItem("token"),kecheng_bao_id:packageid}
        this.$axios.post("http://jixujiaoyu_api.songlongfei.club/kecheng/check_kecheng_bao_is_buy",qs.stringify(courseId))
          .then(response => {
            if(response.data.status=="ok"){
              if(response.data.data.check_res=="0"){
                this.$router.push({path:'packagebuy',query:{packid:packageid}});
              }else if(response.data.data.check_res=="1"){
                this.$message.error({message: "您已购买过该课程包",duration:1600});
              } 
            }else if(response.data.status=="error"){
              this.$message.error({message: response.data.msg,duration:1600});
            }else if(response.data.status=="relogin"){
              that.clearlocalData();
            }
            
        });
         
      },
      getbaoprogress (){
         var that=this
          that.$axios.post('http://jixujiaoyu_api.songlongfei.club//kecheng/get_kecheng_keshi_jindu',
                    qs.stringify({
                      kecheng_id:that.idd,
                      uid:that.uid,
                      token:that.token
                    })
                  ).then(res =>{
                      console.log("获取课程包进度")
                      if(res.data.status=='error'){
                          that.used=0
                           that.msg="购买课程"                             
                          
                      }else{
                          that.used=res.data.progress
                          console.log("=======================")
                      }
                  })
         
      },
      changePage (val){
        this.pageNo=val
          console.log(this.pageNo)
      },
       gopackdetail (id){
       this.$router.push({
         path:'/packagedetail',
         query:{
              codeid:id
           }
           
         
       })
    }
  }
};
</script>

<style scoped lang="less">
.package {
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
  .content {
    width: 100%;
    background-color: #fafafa;
    padding: 0 20px 20px 20px;
    ul {
      li {
        width: 100%;
        height: 142px;
        padding: 20px 0;
        border-bottom: 1px solid #c9c9c9;
        box-sizing: border-box;
        margin-bottom:10px;
        cursor: pointer;
        .left {
          margin-right: 30px;
          width: 173px;
          height: 108px;
          img {
            width: 100%;
          }
        }
        .item-content {
          width: 455px;
          height: 94px;
          vertical-align: middle;
          .item-title {
            font-size: 18px;
          }
          .item-time {
            font-size: 15px;
            color: #0a5cff;
            margin-top: 10px;
          }
          .total-time {
            font-size: 14px;
            color: #8e8e8e;
            margin-top: 10px;
          }
        }
        .price-box {
          width: 126px;
          height: 106px;
          vertical-align: middle;
          .rmb {
            font-size: 22px;
            color: #ff0000;
          }
          .btn-now {
            width: 120px;
            height: 40px;
            font-size: 16px;
            font-weight: bold;
            text-align: center;
            line-height: 40px;
            margin: 35px auto 0;
            background-color: #329df5;
            color: #ff0000;
            letter-spacing: 5px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
