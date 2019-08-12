<template>
    <div class="examination fl">
        <div class="title">
            <span>参加考试</span>        
        </div>
        <div class="content">
            <div class="top">
                <ul class="clearfix">
                    <li class="fl l1">试卷名称</li>
                    <li class="fr l2">操作</li>
                    <li class="fr l3">分数</li>
                    <li class="fr l5">总分数</li>
                     <li class="fr l4">考试时间</li>
                </ul>
            </div>
             <div class="topcon">
                <ul class="clearfix" v-for="item in data" :key="item.id">
                    <li class="fl l1">{{item.shijuan_info.title}}</li>
                    <li class="fr l2">{{item.is_pass=="0"?'未通过':"考试通过"}}</li>
                    <li class="fr l3">-</li>
                     <li class="fr l5">{{item.shijuan_info.score}}</li>
                     <li class="fr l4"> 2019-7-17-2019-12-18</li>
                </ul>
            </div>
             <div class="block" style="text-align:right;margin-top:20px;">
                <el-pagination
                    layout="prev, pager, next"
                    :total="data.length"
                    :page-size="num"    
                    @current-change="current_change" 
                    :current-page.sync="currentPage" 
                    >
                </el-pagination>
                </div>
            <div class="nodata" v-show="nodata">

            </div>
        </div>
       
    </div>
</template>

<script>
import qs from 'qs'
export default {
    data(){
        return{
            nodata:false,
            data:[],
            year:'',
            uid:'',
            token:'',
            page:1,
            num:10,
            currentPage:1
        }
    },
    created (){
        var that=this
         var date=new Date;
       this.year=date.getFullYear()
        this.uid=sessionStorage.getItem('uid')
        this.token=sessionStorage.getItem('token')
        this.getdata ()

    },
    methods :{
       getdata (){
            var that=this
            this.$axios.post('http://jixujiaoyu_api.songlongfei.club/kaoshi/get_shijuan_list',
                qs.stringify({
                    year:this.year,
                    uid:this.uid,
                    token:this.token,
                    psge:this.page,
                    num:this.num
                })
            ).then(res =>{
                console.log("获取考试信息")
                console.log(res)
                that.data=that.data.concat(res.data.data.data)
                console.log(that.data)
                if(res.data.data.data){
                    that.nodata=false
                }else{
                    that.nodata=true
                }
            })
       },
       current_change (currentPage){
           this.currentPage=currentPage
           console.log(currentPage)
       }
    }

}
</script>

<style lang="less" scoped>
    .examination{
        width: 948px;
        // border:1px solid red;
        .title{
            width: 100%;
            height: 55px;
            background-color: #fafafa;
            margin-bottom: 20px;
            font-size: 18px;
            padding-left: 20px;
            line-height: 55px;
            color: #0c69f5;
            box-sizing: border-box;
            span{
                border-bottom:2px solid #0c69f5;
            }
        }
        .content{
            width: 100%;
            .top{
                 ul{
                  background-color: #138bef;
                  width: 100%;
                  padding: 0 20px;
                    box-sizing: border-box;
                li{
                    // width: 910px;
                    height: 35px;
                    line-height: 35px;
                    font-size:14px;
                    color:#fff;
                     &.l2{
                        width: 150px;
                        text-align: right;
                    }
                     &.l3{
                        width: 150px;
                        text-align: center;
                        margin-right: 10px;
                         }
                     &.l4{
                        width: 280px;
                        text-align: center;

                    }
                     &.l5{
                        width: 150px;
                        text-align: center;

                    }
                }
            }
            }
             .topcon{
                 ul{
                //   background-color: #138bef;
                  width: 100%;
                  padding: 0 20px;
                    box-sizing: border-box;
                li{
                    // width: 910px;
                    height: 35px;
                    line-height: 35px;
                    font-size:14px;
                     color: #868686;
                     overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                     &.l2{
                        width: 150px;
                        text-align: right;
                    }
                     &.l3{
                        width: 150px;
                        text-align: center;
                        margin-right: 10px;
                         }
                     &.l4{
                        width: 280px;
                        text-align: center;

                    }
                    &.l5{
                        width: 150px;
                        text-align: center;

                    }
                }
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
