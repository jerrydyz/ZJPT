<template>
    <div class="archives fl">
        <div class="title">
            <span>档案记录</span>        
        </div>
        <div class="content">
            <div class="top">
                <ul class="clearfix">
                    <li class="l1">年度</li>
                    <li>必修学时</li>
                    <li>选修学时</li>
                    <li>总学时</li>
                    <li>状态</li>
                    <li class="l6">操作</li>
                </ul>
            </div>
             <div class="topcon">
               <ul v-show="!nodata">
                    <li class="l1">2019</li>
                    <li>60/0</li>
                    <li>0/0</li>
                    <li>60/0</li>
                    <li>不通过</li>
                    <li class="l6">查看详情</li>
                </ul>
               <ul v-show="!nodata">
                    <li class="l1">2019</li>
                    <li>60/0</li>
                    <li>0/0</li>
                    <li>60/0</li>
                    <li>不通过</li>
                    <li class="l6">查看详情</li>
                </ul>
              <ul v-show="!nodata">
                    <li class="l1">2019</li>
                    <li>60/0</li>
                    <li>0/0</li>
                    <li>60/0</li>
                    <li>不通过</li>
                    <li class="l6">查看详情</li>
                </ul>
                <ul v-show="!nodata">
                    <li class="l1">2019</li>
                    <li>60/0</li>
                    <li>0/0</li>
                    <li>60/0</li>
                    <li>不通过</li>
                    <li class="l6" @click="look">查看详情</li>
                </ul>
            </div>
            <div class="nodata" v-show="nodata">

            </div>
        </div>
    <div class="msgbox" v-show="msgtip">
            <div class="conbigbox">
                <div class="titlebox clearfix">
                <span class="fl">学习详情</span>
                <span class="btnclose fr" @click="closetip">x</span>
            </div>
            <div class="conbox">
                <div class="topcon bg">
                    <span class="spn1 spn">培训项目</span>
                    <span class="spn2 spn">是否通过考核</span>
                    <span class="spn3 spn">通过考核时间</span>
                    <span class="spn4 spn">操作</span>
                </div>
                <div class="topcon borcon">
                    <span class="spn1">国际商务与国际营销</span>
                    <span class="spn2">不通过</span>
                    <span class="spn3">无</span>
                    <span class="spn4 load">下载证书</span>
                </div>
            </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            nodata:false,
            msgtip:false,
        }
    },
    methods:{
        look (){
            this.msgtip=true
        },
        closetip (){
             this.msgtip=false
        }
    }

}
</script>

<style lang="less" scoped>
    .archives{
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
                    height: 35px;
                     display: flex;
                    justify-content: space-between;
                   
                li{
                    // width: 910px;
                    width: 16.6%;
                    height: 35px;
                    line-height: 35px;
                    font-size:14px;
                    color:#fff;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    text-align: center;
                    cursor: pointer;
                    &.l1{
                        text-align: left;
                    }
                    &.l6{
                        text-align: right;
                    }
                    
                }
            }
            }
             .topcon{
                 ul{
                  width: 100%;
                  padding: 0 20px;
                    box-sizing: border-box;
                    height: 35px;
                     display: flex;
                    justify-content: space-between;
                   
                li{
                    // width: 910px;
                    width: 16.6%;
                    height: 35px;
                    line-height: 35px;
                    font-size:14px;
                    color:#868686;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    text-align: center;
                    cursor: pointer;
                    &.l1{
                        text-align: left;
                    }
                    &.l6{
                        text-align: right;
                         color:#0c69f5;
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
        .msgbox{
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.5);
            z-index: 9999;
            position: absolute;
            top:0;
            left: 0;
            bottom:0;
            .conbigbox{
                width: 700px;
                height: 400px;
                border: 1px solid #ccc;
                box-shadow: 0 5px 10px #ccc;
                background-color: #fff;
                position: absolute;
                left:50%;
                top:30%;
                margin-left:-350px;
                .titlebox{
                    width: 100%;
                    height: 50px;
                    line-height: 50px;
                    border-bottom: 1px solid #ccc;
                    padding: 0 10px;
                    box-sizing: border-box;
                    font-size:18px;
                    color:#1a1a1a;
                    .btnclose{
                        color:#ccc;
                        cursor: pointer;
                    }
                }
                .conbox{
                    width: 100%;
                    
                    .topcon{
                        height: 40px;
                        line-height: 40px;
                        font-size: 15px;
                        span{
                            display: inline-block;
                            text-align: center;
                            
                            &.spn1{
                                width: 29%;
                                border-right:1px solid #c1c1c1;
                            }
                             &.spn2{
                                width: 25%;
                                border-right:1px solid #c1c1c1;
                            }
                             &.spn3{
                                width: 25%;
                                border-right:1px solid #c1c1c1;
                            }
                             &.spn4{
                                width: 19%;
                            }
                            &.spn{
                                color:#333;
                               font-weight: bold;
                            }
                            &.load{
                                color:#138bef;
                            }
                            &.load:hover{
                                color:red;
                            }
                        }
                    }
                    .bg{
                        font-size: 15px;
                        font-weight: bold;
                        background-color: #ccc;
                        margin-top:15px;
                    }
                    .borcon{
                        border-bottom: 1px solid #c1c1c1;
                    }

                }
            }
        }

    }
</style>
