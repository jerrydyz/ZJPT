<template>
	<div class="videopage">
		<div class="videopage-left">
			<div class="video-top">
				<div class="video-top-l">
					<a><i class="video-fh"></i><span @click="returnMyCourse">返回我的课程&nbsp;&nbsp;&nbsp;|</span></a>
				</div>
				<div class="video-top-con">
					<a class="cl-prev"></a>
					<h2>{{courseInfo.title}}</h2>
					<a class="cl-next"></a>
				</div>
			</div>
			<div class="player-container">
				<div class="videobox">
					<div class="middlebox">
						<video-player class="vjs-custom-skin" :options="playerOptions" ref="videoPlayer" @play="onplayerplay" @pause="onplayerpause"></video-player>
					</div>
					
				</div>
				<div class="cl-info f-cb">
					<div style="" title="分享" class="cli-share j-sharebox">
						<span class="fl">分享到：</span>
						<div data-bd-bind="1565399572085" class="bdsharebuttonbox bdshare-button-style1-16">
							<a data-cmd="more" class="bds_more " href="#"></a>
							<a title="分享到微信" data-cmd="weixin" class="bds_weixin" href="#"></a>
							<!-- <a title="分享到QQ好友" data-cmd="sqq" class="bds_sqq" href="#"></a>
							<a title="分享到QQ空间" data-cmd="qzone" class="bds_qzone" href="#"></a>
							<a title="分享到新浪微博" data-cmd="tsina" class="bds_tsina" href="#"></a> -->
						</div>
					</div>
				</div>
				
			</div>
		</div>
		<div class="videopage-right">
			<div class="m-ctb">
				<!--右边上面第一部分-->
				<div class="courseintro">
					<h2>{{courseInfo.title}}</h2>
					<div class="video_rinfo" style="position:relative;">
						<img src="http://ceshi2.jxjyedu.club/data/upload/2019/0730/16/5d400136bc6a1_147_95_147_95.jpg">
						<div class="video_rinfo-con">
							<p>年度：{{courseInfo.year}}</p>
							<p>分类：{{courseInfo.type_name}}</p>
							<p>讲师：{{jiangshi.name}}</p>
							<p>学时：{{courseInfo.xueshi_num}}</p>
						</div>
					</div>
				</div>
				<!--右边teb-->
				<ul class="tabs">
					<li class="current" @click="tabstate1"><i class="tabs-ml"></i>目录</li>
					<li @click="tabstate2"><i class="tabs-bj" ></i>笔记</li>
					
				</ul>
			</div>

			<!--teb内容切换盒子-->
			<div id="tagcontent_box">
				<!--课程-->
				<div class="m-chapterList" id="tagcontent0" v-show="tabstate==1">
					<div class="section bigsection" v-for="(itemlist,index) in newzhang" :key="index">
						<div class="section_bj"> </div>
						<a class="fl ksname">{{itemlist.title}}</a>
						<div class="section-cur section" v-for="item in itemlist.jie" :key="item.id" @click="palyvideo(item.id)">
							<div class="section_bj" :style="'width:100%;background-color:blue;'" v-if="item.progress>=100"> </div>
							<div class="section_bj" :style="'width:'+item.progress+'%;background-color:green;'" v-if="item.progress>=0 && item.progress<100"> </div>
							<div class="section_bj myactive" :style="'width:'+jieprogress+'%;background-color:green;'" v-if="item.active"> </div>
							<a class="fl ksname" >{{item.title}}</a>
							<span class="per-progress"> {{parseInt(item.progress)}}% </span>
							<span class="per-progress  myjindu" v-if="item.active">{{jieprogress}}%</span>
						</div> 
					</div>              
				</div>

				<!--笔记-->
				<div class="p10 tagcontent txt_l" id="tagcontent1" v-show="tabstate==2">
					<form>
						<div class="tips1 l5">我的笔记</div>
						<div class="editwrap_tittle mt22">
							<div class="tips r5">标题限<span id="notetittle_length">45</span>字符内</div>
							<textarea  class="j-edittxt edittxt" maxlength="45" id="notetittle" placeholder="在此输入笔记标题... " v-model="bijiTitle"></textarea>
							<label for="edittxt" class="j-hint hint" id="auto-id-drt6TisVISpRhnQa"></label>
						</div>
						<div class="editwrap mt22">
							<div class="tips r5">内容限<span id="notecont_length">200</span>字符内</div>
							<textarea  class="j-edittxt edittxt" maxlength="200" id="notecont" placeholder="在此记录你的想法... " v-model="bijiContent"></textarea>
							<label for="edittxt" class="j-hint hint" id="auto-id-drt6TisVISpRhnQa"></label>
						</div>
						<div class="mt5 clearfix">
							<input type="button" @click="addjieBiji" class="bg_btn_gray Secrecy fr" style="cursor:pointer" value="保存">
						</div>
					</form>
					<ul class="video-list" v-show="bijistate==1">
						<li class="li position-rt" v-for="item in allbiji" :key="item.id">
							<div class="width">
								<div class="li-fl"><a><img src="http://ceshi2.jxjyedu.club/addons/theme/stv2/_static/images/noavatar/middle.jpg"></a></div>
								<div class="li-fr">
									<div class="reply-star clearfix">
										<label class="form-label  fl f3" for="score"><a class="f3">{{name}}</a> <span class=" f9">的笔记</span></label>
									</div>
									<a><p>{{item.title}}</p></a>
									<div class="replymegfooter">
										<div class="wenda-time"> <em>时间：{{item.time}}</em> </div>
									</div>
								</div>
							</div>
						</li>
					</ul>
					<div style="margin-top:28px;" class="wie" id="txtmydianbonote" v-show="bijistate==0">
						<div style="text-align:center;height:auto;overflow:hidden; color:#999999; font-size:12px">暂无数据</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
import 'vue-video-player/src/custom-theme.css'
//引入video样式
import 'video.js/dist/video-js.css'

import qs from 'qs'
//引入hls.js
import 'videojs-contrib-hls.js/src/videojs.hlsjs'
import $jquery from 'jquery'
export default {
  name:'videoPage',
  data () {
    return {
		playerOptions: {
	        playbackRates: [1.0], //播放速度
	        autoplay: false, //如果true,浏览器准备好时开始回放。
	        controls: true, //控制条
	        preload: 'auto', //视频预加载
	        muted: false, //默认情况下将会消除任何音频。
	        loop: false, //导致视频一结束就重新开始。
	        language: 'zh-CN',
	        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
	        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
	        sources: [
				{
					type: 'application/x-mpegURL',
					src: ''
				}
			],
	        //poster: " ", //你的封面地址
	        //width: document.documentElement.clientWidth,
	        notSupportedMessage: '此视频暂无法播放，请稍后再试' //允许覆盖Video.js无法播放媒体源时显示的默认信息。
		  },
		  courseInfo:'',
		  newcourseInfo:'',
		  jiangshi:'',
		  ZHang:'',
		  newzhang:'',
		  curVideoId:'',
		  tabstate:1,
		  //正在播放视频百分比进度
		  jieprogress:0,
		  //正在播放视频总时长
		  jiealltime:0,
		  //自己定时器累加正在播放视频已看时长
		  curtime:0,
		  //websocket定时器
		  T:'',
		  //每个小节的进度
		  keshijindu:[],
		  //笔记title
		  bijiTitle:'',
		  //笔记内容
		  bijiContent:'',
		  //笔记内容有无数据
		  bijistate:1,
		  //所有笔记内容
		  allbiji:'',
		  //笔记作者
		  name:localStorage.getItem("name"),
		}
		
  },
  mounted () {
	  //初始化数据
	this.init();
  },

  methods: {
	  tabstate1:function(){
		 this.tabstate=1;
	  },
	  tabstate2:function(){
		 this.tabstate=2;
	  },

	  returnMyCourse:function(){
		  clearInterval(this.T);
		  let val = this.$route.query.courseId;
		  this.$router.push({
          name:'courseDetails',
          params:{
            courseId:val
          }
        })
	  },
	  //点击video播放按钮
	onplayerplay:function(){
		this.countVideoTime();
	},
	 //点击video暂停按钮
	onplayerpause:function(){
		clearInterval(this.T);
	},
	//刚开始mounted的数据迁移到这
	init:function(){
		//获取播放课程信息
		let that = this;
		let datacourse={kecheng_id:this.$route.query.courseId,uid:localStorage.getItem("uid"),token:localStorage.getItem("token")}
		this.$axios({
			method: 'post',
			url: 'http://jixujiaoyu_api.songlongfei.club/kecheng/get_kecheng_play',
			data: qs.stringify(datacourse) 
			}).then(function (response) {
			if(response.data.status=="ok"){
				console.log("该播放课程信息")
				console.log(response.data.data)
				that.courseInfo=response.data.data;
				that.ZHang=response.data.data.zhang;
				console.log("该播放课程zhangjie")
				console.log(that.ZHang)
				that.jiangshi=response.data.data.jiangshi;
				//获取课程小节笔记
				that.getbiji();
				
				that.getInfo();
			}else if(response.data.status=="error"){
				that.$message.error({message:response.data.errormsg,duration:1600});
			}else if(response.data.status=="relogin"){
				that.clearlocalData();
			}
		});
	},


	//播放视频初始化
	palyvideo:function(id){
		if(this.T){clearInterval(this.T)}
		this.$router.push({ path:'video',query:{courseId:this.$route.query.courseId,vid:id} });
		this.init();		
	},
	//获取信息
	getInfo:function(){
		let that = this;
		for(let i=0;i<that.ZHang.length;i++){
			for(let j=0;j<that.ZHang[i].jie.length;j++){
				that.ZHang[i].jie[j].progress = "0";
				that.ZHang[i].jie[j].read_shichang_seconds = "0";
				if(that.ZHang[i].jie[j].id==that.$route.query.vid){
					that.ZHang[i].jie[j].active = true;
				}else{
					that.ZHang[i].jie[j].active = false;
				}
				
			};
		};
		//调用获取课时进度方法
		that.getKeshiProgress(that.$route.query.courseId);
		setTimeout(() => {
			//获得播放视频时长信息
			that.getCurvideoTime(that.$route.query.vid);
			//调用告诉后台当前观看视频id
			that.curplayvideoId(that.$route.query.vid);
		}, 500);

	},
	//告诉后台当前观看视频id
	curplayvideoId:function(videoId){
		let that = this;
		let playcourse={kecheng_jie_id:videoId,uid:localStorage.getItem("uid"),token:localStorage.getItem("token")}
		this.$axios({
			method: 'post',
			url: 'http://jixujiaoyu_api.songlongfei.club/kecheng/set_user_kecheng_jie_id',
			data: qs.stringify(playcourse) 
			}).then(function (response) {
			if(response.data.status=="ok"){
				console.log("告诉后台观看的视频id成功")
				console.log(response.data);
				
			}else if(response.data.status=="error"){
				that.$message.error({message:response.data.errormsg,duration:1600});
			}else if(response.data.status=="relogin"){
				that.clearlocalData();
			}
		});

	},
		

	//获得播放视频时长信息
	getCurvideoTime:function(videoId){
		let that = this;
		//获取播放器dom
		let myPlayer = this.$refs.videoPlayer.player;

		for(let i=0;i<that.newzhang.length;i++){
			for(let j=0;j<that.newzhang[i].jie.length;j++){
				if(that.newzhang[i].jie[j].id==videoId){
					console.log(videoId);
					that.curVideoId = videoId;
					myPlayer.src(that.newzhang[i].jie[j].video_url);
					console.log("播放视频url");
					console.log(that.newzhang[i].jie[j].video_url);
					console.log("新的newzhang");
					console.log(that.newzhang);
					//本节视频总时长
					that.jiealltime = parseInt(that.newzhang[i].jie[j].video_shichang_seconds);
					console.log("总时长")
					console.log(that.jiealltime)
					//本节视频已看时长
					that.curtime = parseInt(that.newzhang[i].jie[j].read_shichang_seconds);  
					that.jieprogress = parseInt(that.newzhang[i].jie[j].progress);
					console.log("已看时长")
					console.log(that.newzhang[i].jie[j].read_shichang_seconds);
					
				}
			};
		};

	},

	
	
	countVideoTime:function(){
		let that = this;
		//获取播放器dom
		let myPlayer = this.$refs.videoPlayer.player;
		if(that.curtime<that.jiealltime){
			myPlayer.currentTime(that.curtime);
		}else{
			if(this.T){clearInterval(this.T)}
		}
		
		console.log("当前播放时长")
		console.log(myPlayer.currentTime());
		//每隔5秒websocket.send()
		this.T = window.setInterval(wslink, 5000);
		//websocket连接
		function wslink(){
			let websock = false;
			let url = 'ws://jixujiaoyu_server.songlongfei.club:9501';
			if ("WebSocket" in window){
				if(websock)return true;var ws = new WebSocket(url);
				ws.onopen = function(){
					websock = true;
					let myjieid=that.$route.query.vid
					let jsondata={"kecheng_jie_id":myjieid,"uid":localStorage.getItem("uid"),"token":localStorage.getItem("token"),"url":"incr@jindu"};
					let duixiang = JSON.stringify(jsondata);
					ws.send(duixiang);
				};
				ws.onmessage = function (evt) 
				{ 
					let jsonduixiang=JSON.parse(evt.data)
					//视频已经看的时长
					if(jsonduixiang.status=="ok"){
						if(that.curtime<=that.jiealltime){
							that.curtime+=5;
							if(that.jieprogress>100){
								that.jieprogress=100;
							}else{
								that.jieprogress=parseInt(that.curtime*100/that.jiealltime);
							}
							console.log("已观看时间");
							console.log(that.curtime);
							console.log("总时间");
							console.log(that.jiealltime);
							console.log("进度百分比");
							console.log(that.jieprogress);
							
						}else{
							clearInterval(that.T)
						}	
					}else if(jsonduixiang.status=="error"){
						that.$message.error({message:jsonduixiang.msg,duration:1600});
					}
					
				};
			}else{
				alert("您的浏览器不支持 WebSocket!");
			}
		}

	},
	
	//获取该课程进度包含的章节进度
	getKeshiProgress:function(courseid){
		let that = this;
		let zhangProgress={kecheng_id:courseid,uid:localStorage.getItem("uid"),token:localStorage.getItem("token")}
		this.$axios({
			method: 'post',
			url: 'http://jixujiaoyu_api.songlongfei.club/kecheng/get_kecheng_keshi_jindu',
			data: qs.stringify(zhangProgress) 
			}).then(function (response) {
				console.log("章节进度");
				console.log(response.data);
			if(response.data.status=="ok"){
				console.log("获取每小节进度")
				console.log(response.data.data.keshi_jindu);
				console.log(response.data);
				that.keshijindu=response.data.data.keshi_jindu;
				that.newzhang = that.ZHang.map(item => ({...item, jie: item.jie.map(node => Object.assign(node, that.keshijindu.find(child => child.kecheng_jie_id === node.id)))}));
				console.log("合并数组=========")
				console.log(that.newzhang)
			}else if(response.data.status=="error"){
				//that.$message.error({message:response.data.errormsg,duration:1600});
				console.log("新章节")
				that.newzhang=that.ZHang;
				console.log(that.newzhang)
			}else if(response.data.status=="relogin"){
				that.clearlocalData();
			}
		});
	},
	

	//添加课程小节笔记  kecheng/add_kecheng_xiaojie_biji
	addjieBiji:function(){
		let that = this;
		let kecheng_jie={kecheng_jie_id:this.$route.query.vid,title:that.bijiTitle,contents:that.bijiContent,uid:localStorage.getItem("uid"),token:localStorage.getItem("token")}
		this.$axios({
			method: 'post',
			url: 'http://jixujiaoyu_api.songlongfei.club/kecheng/add_kecheng_xiaojie_biji',
			data: qs.stringify(kecheng_jie) 
			}).then(function (response) {
				console.log(response);
			if(response.data.status=="ok"){
				that.$message.success({message:"添加笔记成功",duration:1600});
				//获取课程小节笔记
				that.getbiji();
			}else if(response.data.status=="error"){
				that.$message.error({message:response.data.errormsg,duration:1600});
			}else if(response.data.status=="relogin"){
				that.clearlocalData();
			}
		});
	},

	//获取课程小节笔记 /kecheng/get_kecheng_xiaojie_biji
	getbiji:function(){
		let that = this;
		let kecheng_jie={kecheng_jie_id:this.$route.query.vid,uid:localStorage.getItem("uid"),token:localStorage.getItem("token")}
		this.$axios({
			method: 'post',
			url: 'http://jixujiaoyu_api.songlongfei.club/kecheng/get_kecheng_xiaojie_biji',
			data: qs.stringify(kecheng_jie) 
			}).then(function (response) {
			if(response.data.status=="ok"){
				console.log("该播放课程笔记信息");
				console.log(response.data.data);
				that.allbiji=response.data.data.reverse();
			}else if(response.data.status=="error"){
				that.$message.error({message:response.data.errormsg,duration:1600});
			}else if(response.data.status=="relogin"){
				that.clearlocalData();
			}
		});

	},
	

	//状态为relogin时清除local数据
	clearlocalData:function(){
		let that = this;
		that.$message.error({message:"请重新登录",duration:1600});
		localStorage.removeItem("login1");
		localStorage.removeItem("uid");
		localStorage.removeItem("token");
		localStorage.removeItem("sex");
		localStorage.removeItem("name");
		localStorage.removeItem("mobile");
		localStorage.removeItem("id_card");
		setTimeout(() => {
			that.$router.push({ path: 'login' });
		}, 1600);
	},

  } 
}

</script>

<style lang="less" scoped>
  .videopage{width: 100%;height: 100%;background-color: #000;display:flex;
	.videopage-left{width: calc(100% - 370px);box-sizing: border-box;height: calc(100% - 60px);
		.video-top{ height:60px; line-height:60px; background:#3C3C3C; width:calc(100% + 20px);color:#CBCBCB;
			.video-top-l{ width:180px;position:absolute; left:20px; top:0;
				a{color:#CBCBCB;cursor: pointer;
					.video-fh{ width:20px; float:left; background:url(/static/images/coursedetails/ico.png) no-repeat -112px -64px;height:17px; margin:22px 10px 0 0;background-size:270px 356px;}
				}
			}
			.video-top-con{ margin:0 200px; width:auto; height:70px; position:relative;text-align:center; color:#CBCBCB;
				a{color:#CBCBCB;}
				h2{ font-size:18px; font-weight:100;}
				.cl-prev{background:url(/static/images/coursedetails/ico.png) -194px -1px no-repeat ;width:18px; height:34px; display:block; position:absolute;left:0; top:18px;background-size:270px 356px;}
				.cl-next{background:url(/static/images/coursedetails/ico.png) -195px -50px no-repeat;width:18px; height:34px;display:block; position:absolute; right:0; top:18px;background-size:270px 356px;}
			}
		}
		.player-container{width: 100%;height: calc(100% - 60px);position: absolute;top:60px;bottom:0;background-color: #000;
			.videobox{height: 100%;width: calc(100% - 370px);
				.middlebox{height: 100%;}
			}
		}
	}
	.videopage-right{width: 370px;}
  }
  
.video-js .vjs-big-play-button{border-radius: 50%!important;}

.m-chapterList{border-top:0; text-align:left; position:relative;padding-bottom:1em; font-size:14px; color:#999999;background-color: #333;}
.m-chapterList .chapter{height:40px; color:#666; font-size:14px; font-family:'微软雅黑'; font-weight:bolder; padding:10px 12px 0 12px; line-height:40px; cursor:default;}
.m-chapterList .ch{width:41px; height:40px; text-align:left;}
.m-chapterList .section{width:345px;  float:left; line-height:30px; cursor:pointer; position:relative; -webkit-transition:0.5s all ease; -moz-transition:0.5s all ease; -ms-transition:0.5s all ease; -o-transition:0.5s all ease; transition:0.5s all ease;margin-bottom: 5px;margin-left: 20px;}
.m-chapterList .bigsection{width:365px;margin-left: 0px;}
.m-chapterList .section-cur{ color:#ffffff; display:block;width: 345px;}
.m-chapterList .section-cur .ks{background:#E82F24;color:#ffffff}
.m-chapterList .section-cur a{color:#ffffff; display:block;}
.m-chapterList .section a:hover{color:#90ee99;}
.m-chapterList .section .bgc-change{position: absolute;height: 100%;border-top-left-radius: 10px;border-bottom-left-radius: 10px;}

.m-chapterList .section-cur .bgc-change{width: 10%;background-color: #90ee99;}
.m-chapterList .section-success .bgc-change{width: 100%;background-color: #337ab7;}

.m-chapterList .section .per-progress{position: absolute;right: 12px;top:2px; display: block;width:48px; height:20px;border-radius: 10px;background-color: #fff;float: right;color: #337ab7;text-align: center;line-height: 20px;font-size: 12px;}
.ksicon-0-mark{width: 18px;background: url(/static/images/coursedetails/ico.png) no-repeat -115px -120px;height: 18px;}
.ksicon-30-mark{ height: 18px;width: 18px;margin: 12px 10px 0 0;}
.m-chapterList .section:hover .ksicon-30-mark{filter:alpha(opacity=100);-moz-opacity:1;opacity:1;background: url(/static/images/coursedetails/ico.png) no-repeat -115px -94px;}
.m-chapterList .section-cur .ksicon-30-mark{filter:alpha(opacity=100);-moz-opacity:1;opacity:1;background: url(/static/images/coursedetails/ico.png) no-repeat -115px -94px;}
.m-chapterList .ks{width:60px; text-align:left; font-size:12px; position:relative; margin-right:15px;}
.section_bj{position:absolute;left:0; top:0; height:26px; line-height:26px;  background:green;}
.m-chapterList .ksname{ max-width:200px; height:26px; line-height:26px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; position:relative;margin-left: 5px;color:#999999;}
.m-chapterList .section:hover .ks,.m-chapterList .section:hover .ksname{color:#ffffff}
.reply-star{ width:330px;}
.m-ctb{width:370px; overflow:hidden; z-index:10; position:absolute;right: 0;top:0;}
.m-ctb .courseintro{height: auto;background:#FFF; width:370px; overflow:hidden;}
.m-ctb .courseintro h2{ width:330px; padding:0 20px; height:70px;  line-height:70px;font-size:16px;font-weight:600;display: block; overflow: hidden;  text-overflow: ellipsis;white-space: nowrap;word-break:keep-all;-o-text-overflow:ellipsis; background:#F3F3F3;box-sizing: content-box;}
.video_rinfo{ width:330px; height:auto; overflow:hidden;padding: 20px; float:left;box-sizing: content-box;}
.video_rinfo img{ width:147px; height:95px;float:left;}
.video_rinfo-con{ width:165px; height:95px;float:right; font-size:14px}
.video_rinfo-con ul{width:165px; height:24px; line-height:24px; float:left;}
.video_rinfo-con span{ float:left;}
.video_rinfo-con li{width:11px; height:11px; display:block; float:left; margin-top:6px;}
.video_rinfo-con p{ width:165px; height:24px;float:left;}
.courseintro_h{height:200px; padding:15px; background:#FFF;}
.m-ctb .courseImgCover{position:relative;}
.m-ctb .courseImgCover:hover .courseImg-link{background-color:#16914E; filter:alpha(opacity=40); opacity:0.4;}
.m-ctb .tabs{height:45px; font-family:'微软雅黑'; width:370px; background:#E82F24;}
.tabs li{float:left; width:180px;list-style: none}
.m-ctb .tabicon{margin:15px 5px 0 0px;}
.m-ctb .tabarea{ width:370px; overflow:hidden; background:#f5f7fa;}
.m-ctb .tabs li{height:45px; font-family:'微软雅黑'; width:50%; color:#ffffff; display:block; line-height:45px;cursor: pointer;}
.m-ctb .tabs .current{ background:#0ba0b1; position:relative;}
.m-ctb .tabs i{ width:16px; height:16px; line-height:16px; display: inline-block; margin:13px 10px 0 50px; background-image:url(/static/images/coursedetails/ico.png); background-repeat:no-repeat}
.m-ctb .tabs-ml{ background-position:-141px -36px }
.m-ctb .tabs-bj{ background-position:-141px -64px }
.m-ctb .current .tabs-ml{ background-position:-141px -36px }
.m-ctb .current .tabs-bj{ background-position:-141px -64px }
.bd{position:absolute; top:0; bottom:0; border:none; border-left:solid 1px #d3d3d3;height:100%; right:249px;  width:0; display:none;}
.m-ctb .tabarea .tabbox{display:none; position:absolute; top:0; left:0;	right:0; bottom:0; overflow-y:auto; zoom:1;}
.scoll_box{position:absolute; top:53px;	left:0;	right:0; bottom:43px; z-index:100;overflow-y:auto; zoom:1;}
.m-lastframe .dialog-head .tips{font-size:14px; font-weight:bold; line-height:50px;	margin-left:65px; color:#444;}
.u-edit .hint, .m-mostAsk .editArea .hint{position:absolute; top:10px; left:10px; color:#999;}
#tagcontent0,#tagcontent1{width:370px; position: absolute; overflow-x: hidden; overflow-y: auto; top:250px; bottom:0;right: 0; }
.checklabel{color:#999999;}
.m-videoReportDialog .checklabel:hover{color:#16914E;}
.cl-info{ height:42px; line-height:42px; color:#b7babe; font-size:12px;position: absolute;bottom: 0;right: 370px;}
.cl-info .clis-im{margin-right:20px;}
.cl-info .clis-im span{background-position:-114px -527px; padding-left:24px; color:#fff;}
.cli-intro span{background-position:0 0px;}
.cli-report span{background-position:0 -99px;}
.cli-share{position:relative;padding: 0 22px;cursor: pointer;float: right;width: 160px;}
.bdshare-button-style1-16 {margin-top: 8px;zoom: 1;}
.share p{color:#333;}
.cli-share span{background-position:0 -68px;}
.editwrap{background:none repeat scroll 0px 0px rgb(250, 250, 250); border:1px solid #CECECE; padding:5px; height:65px; position:relative;}
.editwrap_tittle{background:none repeat scroll 0px 0px rgb(250, 250, 250); border:1px solid #CECECE; padding:5px; height:30px; position:relative;margin-top: 22px;}
.cl-title .cl-lesson{width:37px;display:inline-block;}
.bdshare-button-style1-16 a,.bdshare-button-style1-16 .bds_more {float: left;font-size: 12px;padding-left: 17px;line-height: 16px;height: 16px;background-image: url(/static/images/coursedetails/icons_1_16.png);background-size: 16px 3260px; background-repeat: no-repeat;cursor: pointer;margin: 6px 6px 6px 0;}
.bdshare-button-style1-16 .bds_weixin {background-position: 0 -1612px;}
.bdshare-button-style1-16 .bds_sqq {background-position: 0 -2652px;}
.bdshare-button-style1-16 .bds_qzone {background-position: 0 -52px;}
.bdshare-button-style1-16 .bds_tsina {background-position: 0 -104px;}
.tips1 {color: #B2B2B2;height: 26px;line-height: 27px;font-weight: bold;font-size: 12px;}
.editwrap, .editwrap1 { background: none repeat scroll 0 0 rgb(250, 250, 250); border: 1px solid #cecece;padding: 5px;position: relative;}
.mt22 {margin-top: 22px;}
.txt_l {text-align: left;}
.p10 {padding: 20px;}
.mt5 {margin-top: 10px;}
.hint { color: #ccc;font-size: 12px;left: 5px; position: absolute; top: 5px;}
.Secrecy{ background: none repeat scroll 0 0 #E82F24;border: medium none;color: #ffffff;font-size: 12px;height: 29px;line-height: 29px; padding: 0 15px;}
#notetittle ,#questiontitle{height:26px;}
#tagcontent1{background-color: #fff;}
.tips {color: #B2B2B2;height: 26px;line-height: 27px;font-weight: bold;position: absolute;right: 0;top: -27px;font-size: 12px;}
.tips span {color: #FF0000;font-size: 12px;}
.edittxt{outline: none;resize: none; border: 0;background: none repeat scroll 0 0 transparent;border: medium none;font-size: 12px;height: 65px;line-height: 16px;overflow-x: hidden;overflow-y: auto; width: 100%;}


/*问答*/
.video-list{ width:330px; float:left; height:auto; overflow:hidden; padding-top:10px;}
.video-list .li{ width:100%; float:left; height:auto; font-size:12px; padding:10px 0 10px 0;border-bottom:1px solid #eeeeee;}
.video-list .li-fl{ width:40px; float:left; height: auto; margin-right:10px; text-align:center}
.video-list .li-fl span{ width:40px;height: 30px; display: block; overflow: hidden;  text-overflow: ellipsis;white-space: nowrap;word-break:keep-all;-o-text-overflow:ellipsis; float:left;text-align:center}
.video-list .li-fr h3{ width:270px;  height: 30px; line-height:30px; font-weight:100;display: block; overflow: hidden;  text-overflow: ellipsis;white-space: nowrap;word-break:keep-all;-o-text-overflow:ellipsis;}
.video-list .li-fl img{ width:40px; float:left; height: 40px;-moz-border-radius: 100px;-webkit-border-radius: 100px;border-radius:100px;}
.video-list .li-fr{ width:270px; float:left; height: auto;}
.video-list .li-fr .reply-star{ line-height:30px; height:30px;}
.video-list .li-fr .star_ul{ margin:3px 0 0 10px ;}
.video-list .replymegfooter {margin-top: 4px;color: #dddddd;width: 605px;font-size: 12px;}
.video-list .replymegfooter em {font-style: normal;display: inline-block;width: 170px;font-size: 12px;}
.video-list .replymegfooter .formcourse {color: #eeeeee;font-size: 12px;margin-left: 18px;}
.wenda-time,.keyword-list{float:left;}


.video-js .vjs-control-bar{bottom:25px!important;}

</style>