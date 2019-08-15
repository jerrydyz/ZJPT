<template>
	<div class="videopage">
		<div class="videopage-left">
			<div class="video-top">
				<div class="video-top-l">
					<a href=""><i class="video-fh"></i><span @click="returnMyCourse">返回我的课程&nbsp;&nbsp;&nbsp;|</span></a>
				</div>
				<div class="video-top-con">
					<a class="cl-prev"></a>
					<h2>{{courseInfo.title}}</h2>
					<a class="cl-next"></a>
				</div>
			</div>
			<div class="player-container">
				<div class="videobox">
					<video-player class="vjs-custom-skin" :options="playerOptions" ref="videoPlayer" @play="onplayerplay" @pause="onplayerpause"></video-player>
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
					<div class="section bigsection" v-for="(itemlist,index) in courseInfo.zhang" :key="index">
						<div class="section_bj"> </div>
						<a class="fl ksname">{{itemlist.title}}</a>
						<div class="section-cur section" v-for="item in itemlist.jie" :key="item.id" @click="palyvideo(item.id)">
							<div class="section_bj" :style="'width:'+jieprogress+'%;background-color:green;'" v-if="item.active"> </div>
							<a class="fl ksname" >{{item.title}}</a>
							<span class="per-progress">50%</span>
							<span class="per-progress" v-if="item.active">{{jieprogress}}%</span>
							<!-- <span class="per-progress">{{parseInt(keshijindu[index].progress)}}%</span> -->
							<!-- <span class="per-progress" v-if="item.active">{{jieprogress}}%</span> -->
						</div> 
					</div>              
				</div>

				<!--笔记-->
				<div class="p10 tagcontent txt_l" id="tagcontent1" v-show="tabstate==2">
					<form>
						<div class="tips1 l5">我的笔记</div>
						<div class="editwrap_tittle mt22">
							<div class="tips r5">标题限<span id="notetittle_length">45</span>字符内</div>
							<textarea  class="j-edittxt edittxt" maxlength="45" id="notetittle" placeholder="在此输入笔记标题... " onblur=""></textarea>
							<label for="edittxt" class="j-hint hint" id="auto-id-drt6TisVISpRhnQa"></label>
						</div>
						<div class="editwrap mt22">
							<div class="tips r5">内容限<span id="notecont_length">200</span>字符内</div>
							<textarea  class="j-edittxt edittxt" maxlength="200" id="notecont" placeholder="在此记录你的想法... "></textarea>
							<label for="edittxt" class="j-hint hint" id="auto-id-drt6TisVISpRhnQa"></label>
						</div>
						<div class="mt5 clearfix">
							<label class="checklabel fl" style="display: none;">
								<input type="checkbox" class="j-privatecheck" hidefocus="true" id="note_isopen" checked="checked" value="1">
								&nbsp;公开</label>
							<input type="button" onclick="noteaddBang(this,92,1)" class="bg_btn_gray Secrecy fr" style="cursor:pointer" value="保存">
						</div>
					</form>
					<ul class="video-list"></ul>
					<div style="margin-top:28px;" class="wie" id="txtmydianbonote">
						<div style="text-align:center;height:auto;overflow:hidden; color:#999999; font-size:12px">暂无数据</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
//引入video样式
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import qs from 'qs'
//引入hls.js
import 'videojs-contrib-hls.js/src/videojs.hlsjs'

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
					src: 'http://jixujiaoyu_api.songlongfei.club/hls/576537c51c12c29adb33c072b48dda2f.m3u8'
				}
			],
	        poster: "/static/images/index/index-banner1.jpg", //你的封面地址
	        //width: document.documentElement.clientWidth,
	        notSupportedMessage: '此视频暂无法播放，请稍后再试' //允许覆盖Video.js无法播放媒体源时显示的默认信息。
		  },
		  courseInfo:'',
		  jiangshi:'',
		  ZHang:'',
		  curVideoId:'',
		  tabstate:1,
		  //正在播放视频百分比进度
		  jieprogress:0,
		  //正在播放视频总时长
		  jiealltime:0,
		  //正在播放视频已看时长
		  curtime:0,
		  //websocket定时器
		  T:'',
		  //每个小节的进度
		  keshijindu:'',
		}
		
  },
  mounted () {
	//获取播放课程信息
	let that = this;
	let datacourse={kecheng_id:this.$route.query.courseId,uid:sessionStorage.getItem("uid"),token:sessionStorage.getItem("token")}
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
			//刚进入页面播放哪个视频
			that.palyvideo();
		}else if(response.data.status=="error"){
			that.$message.error({message:response.data.errormsg,duration:1600});
		}else if(response.data.status=="relogin"){
			that.$message.error({message:"重新登录",duration:1600});
		}
	});
	
  },
  methods: {
	  tabstate1:function(){
		 this.tabstate=1;
	  },
	  tabstate2:function(){
		 this.tabstate=2;
	  },

	  returnMyCourse:function(){
		 
	  },
	  //点击video播放按钮
	onplayerplay:function(){

		this.countVideoTime();
	},
	 //点击video暂停按钮
	onplayerpause:function(){

	},
	//播放视频
	palyvideo:function(id){
		let that = this;
		//调用获取课时进度方法
		this.getKeshiProgress(this.$route.query.courseId);
		//每点击一个视频，初始化数据
		that.jieprogress=0;
		that.jiealltime=0;
		that.curtime=0;
		if(this.T){clearInterval(this.T)}
		
		//获取播放器dom
		let myPlayer = this.$refs.videoPlayer.player;
		//判断是点击课程还是跳转过来
		let videoId;
		if(id){
			videoId=id;
			console.log("点击第几节")
		}else{
			console.log("跳转过来的")
			videoId=this.$route.query.vid;
		}
	
		for(let i=0;i<that.ZHang.length;i++){
			for(let j=0;j<that.ZHang[i].jie.length;j++){
				if(that.ZHang[i].jie[j].id==videoId){
					console.log(videoId);
					that.curVideoId = videoId;
					myPlayer.src(that.ZHang[i].jie[j].video_url);
					that.ZHang[i].jie[j].active = true;
					//本节视频总时长
					that.jiealltime=parseInt(that.ZHang[i].jie[j].video_shichang_seconds) 
					console.log("播放视频url");
					console.log(that.ZHang[i].jie[j].video_url);
				}else{
					that.ZHang[i].jie[j].active = false;
				}
			};
		};
		//告诉后台当前观看视频id
		let playcourse={kecheng_jie_id:videoId,uid:sessionStorage.getItem("uid"),token:sessionStorage.getItem("token")}
		this.$axios({
			method: 'post',
			url: 'http://jixujiaoyu_api.songlongfei.club/kecheng/set_user_kecheng_jie_id',
			data: qs.stringify(playcourse) 
			}).then(function (response) {
			if(response.data.status=="ok"){
				console.log("告诉后台观看的视频id成功")
				console.log(response.data)
			}else if(response.data.status=="error"){
				that.$message.error({message:response.data.errormsg,duration:1600});
			}else if(response.data.status=="relogin"){
				that.$message.error({message:"重新登录",duration:1600});
			}
		});

	},
	//每隔5秒websocket.send()
	countVideoTime:function(){
		let that = this;
		this.T = window.setInterval(wslink, 5000);
		//websocket连接
		function wslink(){
			let websock = false;
			let url = 'ws://jixujiaoyu_server.songlongfei.club:9501';
			if ("WebSocket" in window){
				if(websock)return true;var ws = new WebSocket(url);
				ws.onopen = function(){
					websock = true;
					let jsondata={"kecheng_jie_id":that.curVideoId,"uid":sessionStorage.getItem("uid"),"token":sessionStorage.getItem("token"),"url":"incr@jindu"};
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
							that.jieprogress=parseInt(that.curtime*100/that.jiealltime);
							if(that.jieprogress>100){
								that.jieprogress=100;
							}
							console.log(that.curtime);
							console.log(that.jiealltime);
							console.log(that.jieprogress);
						}else{
							clearInterval(T)
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
		let zhangProgress={kecheng_id:courseid,uid:sessionStorage.getItem("uid"),token:sessionStorage.getItem("token")}
		this.$axios({
			method: 'post',
			url: 'http://jixujiaoyu_api.songlongfei.club/kecheng/get_kecheng_keshi_jindu',
			data: qs.stringify(zhangProgress) 
			}).then(function (response) {
			if(response.data.status=="ok"){
				console.log("获取每小节进度")
				console.log(response.data.data.keshi_jindu)
				that.keshijindu=response.data.data.keshi_jindu;
			}else if(response.data.status=="error"){
				//如果为error进度未获取到，先让进度为0
				//that.$message.error({message:response.data.errormsg,duration:1600});
			}else if(response.data.status=="relogin"){
				that.$message.error({message:"重新登录",duration:1600});
			}
		});
	},
	

  } 
}
</script>

<style lang="less">
  .videopage{width: 100%;height: 100%;background-color: #000;display:flex;
	.videopage-left{width: calc(100% - 370px);box-sizing: border-box;height: calc(100% - 60px);
		.video-top{ height:60px; line-height:60px; background:#3C3C3C; width:calc(100% + 20px);color:#CBCBCB;
			.video-top-l{ width:180px;position:absolute; left:20px; top:0;
				a{color:#CBCBCB;
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
			.videobox{height: 100%;width: calc(100% - 370px);}
		}
	}
	.videopage-right{width: 370px;}
  }
  
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
.cl-info{ height:42px; line-height:42px; color:#b7babe; font-size:12px;position: absolute;bottom: 0;width: calc(100% - 370px);}
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
</style>