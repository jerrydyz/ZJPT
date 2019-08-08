<template>
  <div class="package fl">
    <div class="title">
      <span>课程包</span>
    </div>
    <div class="content">
      <ul>
        <li class="clearfix" v-for="(item,index) in list" :key="index">
          <div class="left fl">
            <img :src="item.img_url" alt />
          </div>
          <div class="item-content fl">
            <div class="item-title">{{item.title}}</div>
            <div class="item-time clearfix">
              <!-- <span class="fl">完成进度：</span>
              <div class="progress-box fl">
                <div class="progress" style="width: 0.00%;"></div>
              </div>
              <span class="fl">0.00%</span> -->
            </div>
            <div class="total-time">
              目标学时：
              <span>
                 {{item.xueshi_num}}
              </span>
              <span class="getcoursr-time">已获学时：</span>
              <span>
                {{item.kecheng_num}}
              </span>
                
            </div>
          </div>
          <div class="price-box fr">
            <div class="price">
              <span class="rmb">￥{{item.price}} 元</span>
            </div>
            <div type="button" class="btn-now" @click="xuexi">继续学习</div>
          </div>
        </li>
        

      </ul>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
export default {
  name: "package",
  data (){
    return {
      list:[]
        
    }
  },
  created (){
    this.kechengbao()
  },
  methods:{
      kechengbao (){
           //获取课程包信息
       var that=this 
        this.$axios({
          method: 'post',
          url: 'http://jixujiaoyu_api.songlongfei.club/kecheng/get_kechengbao_list',
          }).then(res => {
            console.log(res)
            if(res.data.status=="ok"){
               that.list=res.data.data
            }else{
              
            }
      });
      },
      xuexi (){
         this.$emit('more','mykecheng')
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
            text-align: center;
            line-height: 40px;
            margin: 35px auto 0;
            background-color: #329df5;
            color: #fff;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
