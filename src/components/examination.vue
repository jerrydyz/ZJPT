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
             <div class="topcon" v-show="!nodata">
                <ul class="clearfix" v-for="item in data" :key="item.id">
                    <li class="fl l1">国际商务与国际营销</li>
                    <li class="fr l2">学习未完成</li>
                    <li class="fr l3">-</li>
                     <li class="fr l5">总分数</li>
                     <li class="fr l4"> 2019-7-17-2019-12-18</li>
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
            nodata:true,
            data:[]
        }
    },
    created (){
        var that=this

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
