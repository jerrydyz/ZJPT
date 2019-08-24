<template>
    <div class="examrecord fl">
        <div class="title">
            <span>考试记录</span>        
        </div>
        <div class="content">
            <div class="top">
                <ul class="clearfix">
                    <li class="fl l1">试卷名称</li>
                    <li class="fr l2">状态</li>
                    <li class="fr l3">总分数</li>
                    <li class="fr l4" >分数</li>
                    <li class="fr l5">考试时间</li>
                </ul>
            </div>
             <div class="topcon">
                <ul class="clearfix" v-show="!nodata" v-for="(item,index) in data" :key="index">
                    <li class="fl l1">{{item.shijuan_title}}</li>
                    <li class="fr l2">{{item.is_pass=='1'?'没通过':'通过'}}</li>
                    <li class="fr l3">{{item.zong_score}}</li>
                    <li class="fr l4">{{item.score}}</li>
                     <li class="fr l5"> {{item.time}}</li>
                </ul>
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
            uid:'',
            token:'',
            page:'1',
            num:'10',
            data:[],
            apiurl:'http://jixujiaoyu_api.songlongfei.club:1012',
        }
    },
    created (){
            this.uid=localStorage.getItem('uid')
            this.token=localStorage.getItem('token')
            this.kaoshi()
    },
    methods:{
          kaoshi (){
           //获取考试记录
            var that=this 
            var data={
                page:this.page,
                uid:this.uid,
                token:this.token,
                num:this.num
            }
                this.$axios({
                method: 'post',
                url: this.apiurl+'/kaoshi/get_kaoshi_log',
                data:qs.stringify(data)
                }).then(res => {
                    console.log(res)
                    if(res.data.status){
                        that.data =that.data.concat(res.data.data.data)
                        if(res.data.data.data){
                            that.nodata=true
                        }else{
                            that.nodata=false
                        }
                    }

            });
      },   
    }

}
</script>

<style lang="less" scoped>
    .examrecord{
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
                        width: 150px;
                        text-align: center;

                    }
                     &.l5{
                        width: 280px;
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
                    color:#868686;
                    overflow: hidden;
                     text-overflow: ellipsis;
                      white-space: nowrap;
                      &.l1{
                          box-sizing: border-box;
                      }
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
                        width: 150px;
                        text-align: center;

                    }
                     &.l5{
                        width: 280px;
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
