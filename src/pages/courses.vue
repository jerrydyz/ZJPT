<template>
  <div class="courses">
    <div class="label-choose-box">
        <div class="chooseed">
            <div class="chooseed-content">
                <div class="chooseed-title">精品课程</div>
            </div>
        </div>
        <div class="choosed-symbol">
            <div class="year-choose">
                <div class="year-title">培训年度:</div>
                <ul class="year">
                    <li :class="{on:yeartabState==''}" @click="courseYear()">全部</li>
                    <li :class="{on:yeartabState==item}" v-for="(item,index) in kecheng_year" :key="index" @click="courseYear(item)">{{item}}</li>
                </ul>
            </div>
            <div class="course-choose">
                <div class="course-title">课程类型:</div>
                <ul class="course">
                    <li :class="{on:typetabState==''}" @click="courseType()">全部</li>
                    <li :class="{on:typetabState==item.id}" v-for="(item,index) in kecheng_type" :key="index" @click="courseType(item.id)">{{item.name}}</li>
                </ul>
            </div>
            <div class="kinds-choose">
                <div class="kinds-title">课程分类:</div>
                <ul class="kinds">
                    <li :class="{on:categorytabState==''}" @click="courseCategory()">全部</li>
                    <li :class="{on:categorytabState==item.id}" v-for="(item,index) in kecheng_category" :key="index" @click="courseCategory(item.id)">{{item.name}}</li>            
                </ul>
            </div>
        </div>
    </div>
    <div class="course-box">
        <router-link :to="'/courseDetails/' + item.id" v-for="(item,index) in courseslist" :key="index" class="course-item" >
            <div class="item-img"><img :src="item.img_url"></div>
            <p class="item-name">{{item.title}}</p>
            <div class="item-other">
                <div class="item-time">{{item.kecheng_jie_num}}学时</div>
                <div class="item-teacher">主讲：<span class="teacher-name">{{item.jiangshi.name}}</span></div>
            </div>  
        </router-link>     
    </div>
  </div>
</template>

<script>
import qs from 'qs'
export default {
  name: 'courses',
  data () {
    return {
      //课程列表
      courseslist:'',
      //课程年份
      kecheng_year:'',
      //课程类型
      kecheng_type:'',
      //课程分类
      kecheng_category:'',
      //课程年份参数
      yearid:'',
      //课程类型参数
      typeid:'',
      //课程分类参数
      categoryid:'',
      //yeartabState
      yeartabState:'',
      //yeartabState
      typetabState:'',
      //yeartabState
      categorytabState:'',
    }
  },
  mounted(){
      let that = this;
      //获取课程年份 
    this.$axios({
      method: 'get',
      url: 'http://jixujiaoyu_api.songlongfei.club/kecheng/get_kecheng_year',
      }).then(function (response) {
        if(response.data.status=="ok"){
          console.log("课程年份")
          console.log(response.data.data)
          that.kecheng_year=response.data.data;
        }else{
          
        }
      });
     //获取课程类型 
    this.$axios({
      method: 'get',
      url: 'http://jixujiaoyu_api.songlongfei.club/kecheng/get_kecheng_type',
      }).then(function (response) {
        if(response.data.status=="ok"){
          console.log("课程类型")
          console.log(response.data.data)
          that.kecheng_type=response.data.data;
        }else{
          
        }
      });
      //获取课程分类 
    this.$axios({
      method: 'get',
      url: 'http://jixujiaoyu_api.songlongfei.club/kecheng/get_kecheng_category',
      }).then(function (response) {
        if(response.data.status=="ok"){
          console.log("课程分类")
          console.log(response.data.data)
          that.kecheng_category=response.data.data;
        }else{
          
        }
      });
       //获取课程列表 
    let datacourse={year:'2019', type_id:'',category_id:''}
    this.$axios({
      method: 'post',
      url: 'http://jixujiaoyu_api.songlongfei.club/kecheng/get_kecheng_list',
      data: qs.stringify(datacourse) 
      }).then(function (response) {
        if(response.data.status=="ok"){
          console.log("课程列表")
          console.log(response.data.data.data)
          that.courseslist=response.data.data.data;
        }else{
          
        }
      });
  },
  methods:{
      courseYear(id) {
        if(id){
          this.yeartabState=id;
          this.yearid=id;
          this.getCourseList(this.yearid,this.typeid,this.categoryid);
        }else{
          this.yeartabState='';
        }
        
      }, 
      courseType(id){
        if(id){
          this.typetabState=id;
          this.typeid=id;
          this.getCourseList(this.yearid,this.typeid,this.categoryid);
        }else{
          this.typetabState='';
        }
        
      },  
      courseCategory(id){
        if(id){
          this.categorytabState=id;
          this.categoryid=id;
          this.getCourseList(this.yearid,this.typeid,this.categoryid);
        }else{
          this.categorytabState='';
        }
        
      },

      //点击标签选项后获取课程列表 
      getCourseList(yearid,typeid,categoryid){
        let that = this;
        let datacourse={year:yearid, type_id:typeid,category_id:categoryid,page:'1',num:'10'}
        this.$axios({
          method: 'post',
          url: 'http://jixujiaoyu_api.songlongfei.club/kecheng/get_kecheng_list',
          data: qs.stringify(datacourse) 
          }).then(function (response) {
            if(response.data.status=="ok"){
              console.log("课程列表")
              console.log(response.data.data.data)
              that.courseslist=response.data.data.data;
            }else{
              
            }
          });
      },



  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .courses{width: 100%;
        .label-choose-box{width: 100%;overflow: hidden;font-size: 16px;color:#808080;
            .choosed-symbol{width:1200px; margin:0 auto}
            .chooseed{width: 100%;height: 45px;line-height: 45px; background-color: #f1f1f1;
                .chooseed-content{display: flex;align-items: center;height: 100%;width: 1200px;margin: 0 auto;
                    .chooseed-title{font-size: 16px;padding-bottom: 5px;margin:0 auto;font-weight: bold;}
                    
                }
            }
        }
        .course-box{display: flex;flex-wrap:wrap;justify-content: flex-start;width: 1200px;margin: 0 auto;
            .course-item{width: 225px;height: 225px;margin-top: 20px;margin-left: 15px;
                .item-img{width: 225px;height: 126px;
                    img{width: 100%;height: 100%;}
                }
                &:hover{box-shadow: 0 0 10px #ccc;cursor: pointer;}
                .item-name{font-size: 14px; color:#313131;letter-spacing: 2px;padding:0 8px;line-height: 20px;margin-top: 8px;text-overflow: ellipsis;white-space: nowrap;}
                .item-other{display: flex;justify-content:space-between;margin-top: 15px;padding:0 8px;
                    .item-teacher{color:#313131;font-size: 14px;}
                    .item-time{color:#fb0808;font-size: 14px;}
                }
            }
        }
    }

    .label-choose-box .year-choose,.label-choose-box .course-choose,.label-choose-box .kinds-choose{display: flex;align-items: center;height: 80px;border-bottom: 1px solid #f1f1f1;}
    .label-choose-box .year-choose .year,.label-choose-box .course-choose .course,.label-choose-box .kinds-choose .kinds{display: flex;list-style: none;}
    .label-choose-box .year-choose .more,.label-choose-box .course-choose .more,.label-choose-box .kinds-choose .more{font-size: 16px;position: absolute;right: 0;color:#808080;}
    .label-choose-box .year-choose .year-title,.label-choose-box .course-choose .course-title,.label-choose-box .kinds-choose .kinds-title{font-size: 16px;padding-bottom: 5px;}
    .label-choose-box .year-choose .year li,.label-choose-box .course-choose .course li,.label-choose-box .kinds-choose .kinds li{font-size: 16px;margin: 0 10px;padding-bottom: 5px;cursor: pointer;}
    .label-choose-box  .on{border-bottom: 2px solid #eb2d2d;}
    .label-choose-box  li:hover{border-bottom: 2px solid #eb2d2d;}

    
</style>
