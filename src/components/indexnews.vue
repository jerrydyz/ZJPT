<template>
  <div class="news">
    <div class="news-box" >
      <div class="news-title-box">
        <div class="news-title-top">
            <div class="news-title">{{msg.title}}</div>
            <router-link to="" class="more-news">更多>></router-link>
        </div>
        <div class="news-title-bottom">
            <div class="redsqure"></div>
            <div class="english-title">{{msg.englishTitle}}</div>
            <div class="ellipsis"></div>
        </div>
      </div>
      <loading v-show="msg.state==0"></loading>
      <div class="news-content-box" v-for="item in msg.list" :key="item.id" v-show="msg.state==1">
        <div class="item">
          <router-link :to="'/newsDetails/' + item.id" >
            <div class="item-title">{{item.title}}</div>
          </router-link>
          <div class="item-time">{{item.time.split(" ")[0]}}</div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "indexnews",
  props:['msg'],
  data() {
    return {

    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.news{width: 368px;
    .news-box{width: 100%;
        .news-title-box{width: 100%;height: 34px;margin-bottom: 30px;position: relative;
            .news-title-top{width: 100%;display: flex;justify-content:space-between;
                .news-title{width: 80px;height: 100%;margin-left: 25px;font-size: 20px;font-weight: bold;}
                .more-news{font-size: 14px;color: #878787;
                    &:hover{color:#fb0808;}
                }
            } 
            .news-title-bottom{width: 100%;height: 12px; display: flex;margin-top: 5px;align-items: center;
                .redsqure{width: 14px;height: 4px;background-color: #c70304;align-self:flex-end;}
                .english-title{font-size: 12px;margin-left: 12px;}
                .ellipsis{width: 180px;height: 1px;border-top: 1px dashed #858585;margin-right: 0;position: absolute;right: 0;}
            }  
        }
        .news-content-box{width: 100%;margin-top: 20px;margin-bottom: 20px;
            &:hover{cursor: pointer;}
            .item{position: relative; width: 100%;display: flex;justify-content:space-between;margin-bottom: 15px;box-sizing: border-box;padding:0 5px 0 12px;align-items: center;
                .item-title{width: 270px;font-size: 16px;color: #3d3d3d;font-weight: 500;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
                .item-time{font-size: 12px;color: #3d3d3d;}
                
            }
            .item:before{content: "";width: 6px;height: 6px;border-radius: 6px;background-color: #000;position: absolute;left: 0px;top:50%;display: block;margin-top: -3px;}
            .item:hover{
                div{color:#fb0808;}
                &:before{background-color:#fb0808;}
            }
            
        }
       
    }
} 

</style>
