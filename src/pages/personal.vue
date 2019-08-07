
<template>
  <div class="personal">
    <div class="chooseed">
        <div class="chooseed-content">
            <div class="chooseed-title">首页:</div>
            <ul class="all">
                <li> &gt; <span>个人中心</span></li>
                <li> &gt; <span>{{parentMsg}}</span></li>
            </ul>
        </div>
    </div>
    <div class="personalmain">
        <personalLeft v-bind:message="parentMsg" @listenToChildEvent="showMsgFromChild"></personalLeft>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import personalLeft from "@/components/personalLeft.vue";
export default {
  name: 'personal',
  components: {
    personalLeft,
  },
  data () {
    return {
      parentMsg: '培训课程'
    }
  },
  methods:{
    showMsgFromChild:function(data){
      this.parentMsg=data;
      console.log(data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .personal{width:100%;
        .chooseed{width: 100%;height: 45px;line-height: 45px; background-color: #f1f1f1;}
        .chooseed-content{width: 1200px; margin: 0 auto; display: flex;align-items: center;height: 100%;color:#808080;
            .all{display: flex;align-items: center;list-style-type: none;
                li{font-size: 16px;margin: 0 14px;padding-bottom: 5px;
                    span{font-size: 16px;margin-left: 8px;}
                }
            }
            .chooseed-title{font-size: 16px;padding-bottom: 5px;}
        }
        .personalmain{width: 1200px;margin: 20px auto 0;display: flex;justify-content: space-between;}
        
    }
</style>
