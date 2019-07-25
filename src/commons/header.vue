<template>
  <div class="common-header">
    <div class="head-top">
        <router-link to="/"></router-link>
    </div>
    <div class="nav-box">
        <div class="nav-list">
            <router-link v-for="(item,index) in navList" :key="item.index" :to="item.path">{{item.title}}</router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'common-header',
  data () {
    return {
      navList: [
        {title: "首页", path: "/index"},
        {title: "新闻咨询", path: "/news"},
        {title: "政策法规", path: "/laws"},
        {title: "工作动态", path: "/works"},
        {title: "课程中心", path: "/courses"},
        {title: "帮助中心", path: "/helps"},
        {title: "关于我们", path: "/aboutus"}
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .common-header{
        width: 100%;height: 234px;
        .head-top{width: 100%;height: 186px;background-image: url(/static/images/index/top.jpg);overflow:hidden;
            a{display: block;width: 891px;height: 79px;margin: 50px auto 0;background-image: url(/static/images/index/top-logo.png);}
        }
        .nav-box{width: 100%;height: 48px;background-color: #cb0000;
            .nav-list{width: 1200px;height: 100%;margin: 0 auto;display: flex;align-items: center;justify-content: space-between;
                a{padding-bottom: 5px;color: #fffbfb;font-size: 18px;}
                a:hover{border-bottom: 2px solid #fffbfb;}
                .router-link-active{border-bottom: 2px solid #fffbfb;}
            }
        }
    }
</style>
