<template>
    <div class="newsPage">
      <div class="nav-tips">
          <span>您所在的当前位置：</span>
          <span>首页</span>
          <span>&gt; {{worksdata.title}}</span>
      </div>
      <div class="news-model-cont">
          <div class="news-model-left">
              <div class="title-symbol">
                  <div>{{worksdata.title}}</div>
                  <div></div>
                  <div>{{worksdata.englishTitle}}</div>
              </div>
          </div>
          <div class="news-model-right">
              <router-link :to="'/newsDetails/' + item.id" v-for="item in worksdata.list" :key="item.id" class="news-item-box">
                  <div class="news-title">{{item.title}}</div>
                  <div class="news-time">{{item.time.split(" ")[0]}}</div>
              </router-link>
              <div class="page">
                  <div class="pagebox">
                      <span @click="prev">上一页</span><span @click="next">下一页</span> </div>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
import qs from 'qs'
export default {
  name: 'news',
  data () {
    return {
      page:1,
      worksdata:{
          title:'工作动态',
          englishTitle:'WORK DYNAMICS',
          list:''
      },
    }
  },
  mounted() {
    this.ajaxdata();
  },
   methods:{
      prev:function(){
          this.page-=1;
          if(this.page>=1){
            this.ajaxdata();
          }else{
              this.page=1;
              this.ajaxdata();
              console.log("page小于1")
          }
      },
      next:function(){
          this.page+=1;
          this.ajaxdata();
      },
      ajaxdata:function(){
        let that=this;
        //请求新闻news
        let datanews={type_id:'3',page:this.page,num:'15'}
        this.$axios({
          method: 'post',
          url: 'http://jixujiaoyu_api.songlongfei.club/news/get_news_list',
          data: qs.stringify(datanews) 
          }).then(function (response) {
            if(response.data.status=="ok"){
              console.log("news")
              that.worksdata.list=response.data.data.data
              console.log(response.data.data.data)
            }else{
              
            }
          });
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .newsPage{min-height: 700px;width: 1200px;margin: 0 auto;
        .nav-tips{margin-top: 15px;
            span{font-size: 16px}
        }
        .news-model-cont{display: flex;margin-top: 15px;
            .news-model-left{margin-right: 15px;width: 214px;
                .title-symbol{width: 200px;height: 88px;display: flex;flex-direction:column;justify-content:space-between;
                    div:nth-child(1){width: 100%;height: 28px;font-size: 28px;font-weight: bold;color: #000;}
                    div:nth-child(2){width: 40px;height: 5px;background-color: #c60404;}
                    div:nth-child(3){width: 100%;background-image:-webkit-linear-gradient(left,red,#fd8403,yellow);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
                }
            }
            .news-model-right{position: relative; width: 985px;height:725px;border:1px solid #c1c1c1;padding: 20px;
                .news-item-box{display: flex;justify-content: space-between;border-bottom:1px dashed #c1c1c1;
                    div{font-size: 18px;height: 45px;line-height: 45px;}
                    .news-title{width: 750px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;color: #000;}
                    .news-time{color:#000;}
                    &:hover{
                        div{color:#fb0800;cursor: pointer;}
                    }
                }
                .page{width: 100%;height: 45px;position: absolute;bottom: 0;
                    .pagebox{text-align: center;
                        span{margin-right: 15px;font-size: 15px;line-height: 45px;cursor: pointer;}
                    }
                }
            }
        }
    }
</style>
