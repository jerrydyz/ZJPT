<template>
  <div class="index">
    <div class="swiper-news-login">
      <swiper :options="swiperOption" ref="mySwiper" class="myswiper">
        <!-- slides -->
        <swiper-slide class="slider"><img src="/static/images/index/index-banner1.jpg"></swiper-slide>
        <swiper-slide class="slider"><img src="/static/images/index/index-banner2.jpg"></swiper-slide>
        <swiper-slide class="slider"><img src="/static/images/index/index-banner3.jpg"></swiper-slide>
        <swiper-slide class="slider"><img src="/static/images/index/index-banner4.jpg"></swiper-slide>
        <swiper-slide class="slider"><img src="/static/images/index/index-banner5.jpg"></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
      </swiper>
      <div class="news-box">
        <div class="news-title-box">
          <div class="news-title-top">
              <div class="news-title">新闻资讯</div>
              <router-link to="/news" class="more-news">更多>></router-link>
          </div>
          <div class="news-title-bottom">
              <div class="redsqure"></div>
              <div class="english-title">NEWS INFORMATION</div>
              <div class="ellipsis"></div>
          </div>
        </div>
        <div class="news-content-box" data-id="70">
                <div class="item">
                    <a href="http://ceshi2.jxjyedu.club/news/70.html" target="_blank">
                        <div class="item-title">未来教师的角色与素养</div>
                    </a>
                    <div class="item-time">2019-07-09</div>
                </div>
            </div><div class="news-content-box" data-id="69">
                <div class="item">
                    <a href="http://ceshi2.jxjyedu.club/news/69.html" target="_blank">
                        <div class="item-title">一图看懂《中国教育现代化2035》</div>
                    </a>
                    <div class="item-time">2019-07-09</div>
                </div>
            </div><div class="news-content-box" data-id="68">
                <div class="item">
                    <a href="http://ceshi2.jxjyedu.club/news/68.html" target="_blank">
                        <div class="item-title">学习贯彻习近平总书记全国教育大会重要讲话精神心得体会</div>
                    </a>
                    <div class="item-time">2019-07-09</div>
                </div>
            </div><div class="news-content-box" data-id="67">
                <div class="item">
                    <a href="http://ceshi2.jxjyedu.club/news/67.html" target="_blank">
                        <div class="item-title">全面加强师德师风建设</div>
                    </a>
                    <div class="item-time">2019-07-09</div>
                </div>
            </div><div class="news-content-box" data-id="66">
                <div class="item">
                    <a href="http://ceshi2.jxjyedu.club/news/66.html" target="_blank">
                        <div class="item-title">吹响全面提高义务教育质量号角</div>
                    </a>
                    <div class="item-time">2019-07-09</div>
                </div>
            </div><div class="news-content-box" data-id="65">
                <div class="item">
                    <a href="http://ceshi2.jxjyedu.club/news/65.html" target="_blank">
                        <div class="item-title">深化教育教学改革全面提高义务教育质量</div>
                    </a>
                    <div class="item-time">2019-07-09</div>
                </div>
            </div><div class="news-content-box" data-id="64">
                <div class="item">
                    <a href="http://ceshi2.jxjyedu.club/news/64.html" target="_blank">
                        <div class="item-title">中共中央 国务院关于深化教育教学改革全面提高义务教育质量...</div>
                    </a>
                    <div class="item-time">2019-07-09</div>
                </div>
            </div><div class="news-content-box" data-id="63">
                <div class="item">
                    <a href="http://ceshi2.jxjyedu.club/news/63.html" target="_blank">
                        <div class="item-title">深化教育教学改革 提升义务教育质量</div>
                    </a>
                    <div class="item-time">2019-07-09</div>
                </div>
            </div>
      </div>
      <div class="login-box">
          <div class="login-title-box">
              <div class="login-title"></div>
          </div>
          <form id="ajax_login_form" method="POST">
              <div class="info-box">
                  <input type="text" placeholder="请输入身份证号" maxlength="18" class="register_content_input" v-model= "LUserPhone"><br>
                  <!-- <span class="tishixiaoxi disappear">请输入手机号。</span> -->
                  <input type="password" placeholder="请输入密码" class="register_content_input input-pw" v-model="LUserPsd"><br>
                  <!-- <span class="tishixiaoxi disappear">请输入密码。</span> -->
                  <input type="text" placeholder="请输入验证码" maxlength="4" class="yanzhengma_input" @blur="checkLpicma" v-model="picLyanzhengma">
                  <input type="button" id="code" @click="createCode"  class="verification1" v-model="checkCode"/> <br>
                  <!-- <span class="tishixiaoxi disappear">请输入验证码。</span> -->
                  <a class="user_login" @click="Login">登录</a>

                  <div class="btns-box">
                      <router-link to="" class="find-pw">找回密码</router-link>
                      <router-link to="" class="btn-regin">注册账号</router-link>
                  </div>
              </div>
          </form>
      </div>
    </div>
    <router-link to="" class="procedure-box"></router-link>
    <div class="index-news">
        <indexnews :msg="lawsjson"></indexnews>
        <indexnews :msg="worksjson"></indexnews>
        <indexnews :msg="helpsjson"></indexnews>
    </div>
    <div class="continue-education">
        <div class="continue-edu-title"></div>
          <div class="year-choose">
              <div class="year-title">培训年度:</div>
              <ul class="year">
                  <li class="on">全部</li>
                  <li>2019</li>
              </ul>
          </div>
          <div class="course-choose">
              <div class="course-title">课程类型:</div>
              <ul class="course">
                  <li class="on">全部</li>
                  <li>教育类</li>
              </ul>
          </div>
          <div class="kinds-choose">
              <div class="kinds-title">课程分类:</div>
              <ul class="kinds">
                  <li class="on">全部</li>
                  <li >高等教师</li>
                  <li >中小学教师</li>
                  <li >中职教师</li>
                  <li >学前教育教师</li>
              </ul>
          </div>
    </div>
    <div class="course-box">
        <div class="course-item">
            <div class="item-img"><img src="http://ceshi2.jxjyedu.club/data/upload/2019/0718/10/5d2fe0addbe1b_540_338_540_338.png"></div>
            <p class="item-name">新时代教师能力素质发展</p>
            <div class="item-other">
                <div class="item-time">30学时</div>
                <div class="item-teacher">主讲：<span class="teacher-name">马陆亭</span></div>
            </div>  
        </div>   
    </div>
    <div class="friend-link-box wrap">
        <div class="friend-link-title"></div>
        <div class="links-box">
            <a class="item-link" href="https://www.hnzjgl.gov.cn/" target="_blank"><img src="http://ceshi2.jxjyedu.club/addons/theme/stv2/_static/2019/images/index/10.png"></a>
            <a class="item-link" href="http://www.hnjxedu.org.cn/" target="_blank"><img src="http://ceshi2.jxjyedu.club/addons/theme/stv2/_static/2019/images/index/1.png"></a>
            <a href="http://www.haedu.gov.cn/" target="_blank" class="item-link"><img src="http://ceshi2.jxjyedu.club/addons/theme/stv2/_static/2019/images/index/6.png"></a>
        </div>
    </div>

  </div>
</template>

<script>
import $jquery from 'jquery'

import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import indexnews from "@/components/indexnews.vue";
export default {
  name: 'index',
  components: {
    indexnews,
    swiper,
    swiperSlide
  },
  data () {
    return {
      lawsjson:{
          title:'政策法规',
          englishTitle:'POLICIES REGULATIONS',
          path:'/laws',
          list:''
      },
      worksjson:{
          title:'工作动态',
          englishTitle:'WORK DYNAMICS',
          path:'/works',
          list:''
      },
      helpsjson:{
          title:'帮助中心',
          englishTitle:'HELP CENTER',
          path:'/helps',
          list:''
      },
      swiperOption: {
          loop:true,
          autoplay:true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
      },
      LUserPhone:'',
      LUserPsd:'',
      picLyanzhengma:'',
      checkCode:''
    }
  },
  created(){
    this.createCode();
  },

  mounted() {
    console.log($jquery(".find-pw").html());
    this.$axios.post("https://www.easy-mock.com/mock/5d303349a6ecd97aa68d2ab7/example/test").then(response => {
        console.log(response.data.data);
        this.lawsjson.list=response.data.data;
        this.worksjson.list=response.data.data;
        this.helpsjson.list=response.data.data;
        
      })
      .catch(response => {
        console.log(response);
      });
  },
  methods:{
      // 图片验证码
      createCode(){
          let code = "";    
          var codeLength = 4;//验证码的长度   
          var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',   
           'S','T','U','V','W','X','Y','Z');//随机数   
          for(var i = 0; i < codeLength; i++) {//循环操作   
              var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）   
              code += random[index];//根据索引取得随机数加到code上   
          }   
              this.checkCode = code;//把code值赋给验证码   
      },
      // 失焦验证图和密码
      checkLpicma(){
          this.picLyanzhengma.toUpperCase();//取得输入的验证码并转化为大写         
          if(this.picLyanzhengma == '') {
            alert("请输入验证码")
          }else if(this.picLyanzhengma.toUpperCase() != this.checkCode ) { //若输入的验证码与产生的验证码不一致时  
            alert("验证码不正确")  
            this.createCode();//刷新验证码   
            this.picLyanzhengma = '';
          }else { //输入正确时  
              return true;
          } 
      },
      Login(){
          if(this.checkLpicma() == true){
              this.$axios.post("https://www.easy-mock.com/mock/5d303349a6ecd97aa68d2ab7/example/test").then(response => {
                console.log(response.data.data);
                
                
              })
              .catch(response => {
                console.log(response);
              });
          }
      } 
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .index{width: 1200px;margin: 40px auto 0;font-size: 0;
        .swiper-news-login{display: flex;justify-content: space-between;width: 100%;
            .myswiper{width: 515px;height: 334px; margin: 0;
              .slider{width: 100%;height: 100%;
                img{width: 100%;height: 100%;}
              }
              .swiper-pagination-bullets {bottom: 20px;
                .swiper-pagination-bullet{width: 15px;height: 15px;}
                .swiper-pagination-bullet-active{background-color: red;}
              }
            }
            .news-box{width: 317px;height: 336px;margin-right: 36px;overflow: hidden;
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
                      .ellipsis{width: 140px;height: 1px;border-top: 1px dashed #858585;margin-right: 0;position: absolute;right: 0;}
                  }  
              }
              .news-content-box{width: 100%;margin-top: 20px;margin-bottom: 20px;
                &:hover{cursor: pointer;}
                .item{position: relative; width: 100%;display: flex;justify-content:space-between;margin-bottom: 15px;box-sizing: border-box;padding:0 5px 0 12px;align-items: center;
                    .item-title{width: 210px;font-size: 16px;color: #3d3d3d;font-weight: 500;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
                    .item-time{font-size: 12px;color: #3d3d3d;}
                    
                }
                .item:before{content: "";width: 6px;height: 6px;border-radius: 6px;background-color: #000;position: absolute;left: 0px;top:50%;display: block;margin-top: -3px;}
                .item:hover{
                    div{color:#fb0808;}
                    &:before{background-color:#fb0808;}
                } 
            }         
          } 
          .login-box{ width: 292px;border: 1px solid #d7d7d7; 
              .login-title-box{width: 100%;height: 55px;
                .login-title{width: 126px;height: 34px;background-image: url(/static/images/index/login-title.png);margin-top: 25px;margin-left: 18px;}
              }
              .info-box{width: 252px;margin: 0 auto;
                .btns-box{width: 100%;height: 20px;display: flex;justify-content:space-between;align-items: center;margin-top: 5px;}
                  .find-pw{font-size: 12px;color: #878787;
                    &:hover{color: #c60404;}
                  }
                  .btn-regin{font-size: 12px;color: #878787;
                    &:hover{color: #c60404;}
                  }
              }
            }  
        }
        .procedure-box{display: block; width: 1200px; height: 76px;background-image: url(/static/images/index/procedure.png);margin: 40px auto;}
        .index-news{width: 1200px;height: 100%;display: flex;justify-content: space-between;overflow: hidden;}
        .continue-education{width: 1200px;
          .continue-education{width: 100%;overflow: hidden;}
             .continue-edu-title{width: 394px;height: 42px;background-image: url(/static/images/index/continue-edu.png);margin: 40px auto;}
             .year-choose{display: flex;align-items: flex-start;height: 36px;
                .year-title{font-size: 16px;color:#3d3d3d;padding-bottom: 5px;}
                .year{display: flex;list-style: none;
                  li{font-size: 16px;color:#3d3d3d;margin: 0 14px;padding-bottom: 5px;cursor: pointer;
                      &:hover{border-bottom: 2px solid #eb2d2d;}
                   }
                   .on{border-bottom: 2px solid #eb2d2d;}
                }
             }
             .course-choose{display: flex;align-items: flex-start;height: 36px;
                .course-title{font-size: 16px;color:#3d3d3d;padding-bottom: 5px;}
                .course{display: flex;list-style: none;
                  li{font-size: 16px;color:#3d3d3d;margin: 0 14px;padding-bottom: 5px;cursor: pointer;
                    &:hover{border-bottom: 2px solid #eb2d2d;}
                  }
                  .on{border-bottom: 2px solid #eb2d2d;}
                }
             }
             .kinds-choose{display: flex;align-items: flex-start;height: 36px;
                .kinds-title{font-size: 16px;color:#3d3d3d;padding-bottom: 5px;}
                .kinds{display: flex;list-style: none;
                  li{font-size: 16px;color:#3d3d3d;margin: 0 14px;padding-bottom: 5px;cursor: pointer;
                     &:hover{border-bottom: 2px solid #eb2d2d;}
                  }
                  .on{border-bottom: 2px solid #eb2d2d;}
                }
             }
        }
        .course-box{display: flex;flex-wrap:wrap;justify-content: flex-start;
          .course-item{width: 225px;height: 225px;margin-top: 20px;margin-left: 15px;
            &:hover{box-shadow: 0 0 10px #c1c1c1;cursor: pointer;}
            &:nth-child(5n+1){margin-left: 0;}
            .item-img{width: 225px;height: 126px;
              img{width: 100%;height: 100%;}
            }
            .item-name{font-size: 14px; color:#313131;letter-spacing: 2px;padding:0 8px;line-height: 20px;margin-top: 8px;}
            .item-other{display: flex;justify-content:space-between;margin-top: 15px;padding:0 8px;
              .item-time{color:#fb0808;font-size: 14px;}
              .item-teacher{color:#313131;font-size: 14px;}
            }
          }
        }
        .friend-link-box{width: 1200px; margin: 0 auto;
          .friend-link-title{width: 100%;height: 34px;background-image: url(/static/images/index/friend-link.png);margin: 40px auto }
          .links-box{width: 100%;display: flex;flex-wrap:wrap;justify-content: space-between;
            .item-link{transform: scale(1);transition: all 1s;
              &:hover{transform: scale(1.1);transition: all 1s;}
            }
          }
        }
    }
.register_content_input{width:252px; height: 48px;box-sizing: border-box;padding-left: 15px;border: 1px solid #c1c1c1;border-radius: 5px;margin: 0 auto;font-size: 14px;}
.input-pw{margin-top: 12px;}
.yanzhengma_input{width: 130px;height: 40px;font-size: 14px;box-sizing: border-box;padding-left: 15px;border-radius: 5px;border: 1px solid #c1c1c1;display: inline-block;vertical-align: middle;margin-top: 12px;}
.verification1{width: 100px;height: 40px;font-size: 18px;letter-spacing:3px;color: #c60404;background: #f2f2f5;border-radius: 5px;border: 1px solid #c1c1c1;margin-left: 20px;display: inline-block;vertical-align: middle;margin-top: 12px;cursor: pointer;}
.user_login{display: block;width: 252px;height: 48px;font-size: 18px;text-align: center;line-height: 50px;color: #fff;background-color: #c60404;border-radius: 5px;margin-top: 12px;cursor:pointer;}
</style>
