<template>
    <div class="archives fl">
        <div class="title">
            <span>档案记录</span>        
        </div>
        <div class="content">
            <div class="top">
                <ul class="clearfix">
                    <li class="l1">年度</li>
                    <li>姓名</li>
                    <li>身份证号</li>
                    <li>学时</li>
                    <li class="l6">操作</li>
                </ul>
            </div>
             <div class="topcon" v-show="!nodata">
               <ul v-for="(item,index) in list" :key="index">
                    <li class="l1">{{item.year}}</li>
                    <li>{{name}}</li>
                    <li>{{id_card}}</li>
                    <li>{{item.xueshi_num}}</li>
                    <li class="l6">下载证书</li>
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
            year:'',
            list:[],//返回来的数据
            name:'',
            id_card:''
        }
    },
    created (){
        var date=new Date;
       this.year=date.getFullYear()
        this.uid=localStorage.getItem('uid')
        this.token=localStorage.getItem('token')
         this.name= localStorage.getItem('name')
         this.id_card=localStorage.getItem('id_card')
        this.dangan()
    },
    methods:{
        dangan (){
           //获取课程包信息
            var that=this 
            var data={
                year:this.year,
                uid:this.uid,
                token:this.token
            }
                this.$axios({
                method: 'post',
                url: 'http://jixujiaoyu_api.songlongfei.club/dangan/get_user_year_xueshi',
                data:qs.stringify(data)
                }).then(res => {
                    console.log(res)
                    console.log('档案记录')
                    that.list=res.data.data
                    if(res.data.data.length){
                        that.nodata=false
                    }else{
                        that.nodata=true
                    }
                   
      });
      },
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
                    width: 20%;
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
                    width: 20%;
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
