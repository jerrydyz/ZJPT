import { Message } from 'element-ui';
import ElementUI from 'element-ui';
import { Loading } from 'element-ui';
const mutations = {
    changeRate(state, rateCny) {   //人民币
        state.rateCny = rateCny;
        console.log("sata里得到的汇率")
        console.log(state.rateCny)
        return state.rateCny
    },
    changePage(state, page) {   //更改页数
        state.page = page;
        return state.page
    },
    changeRenew(state,renew){//数据实时更新
       state.renew = renew;
       return state.renew
    },
    changeLoginmsg(state,loginmsg){//登录的错误信息
       state.loginmsg = loginmsg;
       return state.loginmsg
    },
    changeHistoryRenew(state,historyRenew){//数据实时更新
       state.historyRenew = historyRenew;
       return state.historyRenew
    },
    changetoken(state, token) {   //登录成功
        state.token = token;
        return state.token
    },
    changeb2bOne(state, val) {    //保存首页的列表某一个 用于进入下单页面
      state.b2bOne= val;
      return state.b2bOne;
    },
    changePlace(state, val) {    //保存首页的列表某一个 用于进入下单页面
      state.sureplace= val;
      return state.sureplace;
    },
    changeb2bOneShow(state, val) {    //保存首页的列表某一个 用于进入下单页面
      state.b2bOneShow= val;
      return state.b2bOneShow;
    },
    changeUdShow(state, val) {    //保存首页的列表某一个 用于进入下单页面
      state.udShow= val;
      return state.udShow;
    },
    // changeRequireAuth(state, val) {    //是否需要登录权限
    //     state.requireAuth = val;
    //     return state.requireAuth;
    // },
    // changeOpenReg(state, val) {    //是否打开注册框
    //     state.openReg = val;
    //     return state.openReg;
    // },
    // changeCloseLogin(state, val) {    //是否关闭登录框
    //     state.closeLogin = val;
    //     return state.closeLogin;
    // },
    // changePathRoute(state, val) {    //登录后要跳转的路由
    //     state.pathRoute = val;
    //     return state.pathRoute;
    // },
    // changeFormRouter(state, val) {    //保存上个页面的路由信息
    //   state.formRouter = val;
    //   return state.formRouter;
    // },
    changeApprove(state, val) {    //交易协议是否认证成功
      state.tradeAgreement = val;
      return state.tradeAgreement;
    },
    changeUSDTList(state, val) {    //保存首页的列表 用于订单也图片
      state.USDTList= val;
      return state.USDTList;
    },
    changeUSDTCodeOne(state, val) {    //保存首页的列表某一个 用于进入下单页面
      state.USDTCodeOne= val;
      return state.USDTCodeOne;
    },
    changeKline(state, val){    //保存K线
      state.kline = val;
      return state.kline
    },
    changeClose(state, val) {    //平仓通知
        state.b2bClose = val;
        return state.b2bClose;
    },
    changeTimeOut(state, val){   
      state.TimeOut = val;
      return state.TimeOut
    },
    changeBuyerConfirm(state, val){   
      state.BuyerConfirm = val;
      return state.BuyerConfirm
    },
    changeSellerConfirm(state, val){  
      state.SellerConfirm = val;
      return state.SellerConfirm
    },
    changeForceConfirm(state, val){  
      state.ForceConfirm = val;
      return state.ForceConfirm
    },
    changeSuccOrderTranShow(state,val){
      state.succOrderTranShow = val;
      return state.succOrderTranShow;
    },
    //设置socket实例
    initSocket(state,data){
      var _this=this;
      if(data&&data.url){
        state.socketUrl=data.url;
        state.socketExit=true;
        state.socket.close();
      }
      var  loadingInstance = Loading.service({ fullscreen: false,body:true,background:'rgba(0, 0, 0, 0.5)',text:'正在连接服务器……'});
      var mo = function(e) {
          e.preventDefault();
      };
      // 防止页面滚动 
      document.body.style.overflow = "hidden";
      document.addEventListener("touchmove", mo, false);
      state.socket = new WebSocket(state.socketUrl);
      state.socket.onopen = function () {
        state.Callback={};
        console.log("socket[建立连接]");
        //出现滚动条
        document.body.style.overflow = ""; 
        document.removeEventListener("touchmove", mo, false);
        state.newInit=true;
        _this.commit("socketMsg");
        loadingInstance.close();
        if(data&&data.fn){
          data.fn()
        }
      };
      state.socket.onclose = function (err) {
        console.log("socket[关闭连接]");
        if(state.socketExit){
          state.socketExit=false;
        }else{
          state.socketRecon--;
          console.log(state.socketRecon);
          console.log("开始重连");
          if(state.socketRecon>=1){

            //Indicator.open("断线正在重连中...");
            setTimeout(function(){
              // state.socketUrl=window.SocketUrl;
              loadingInstance.close();
              _this.commit("initSocket",{
                fn:function(){
                  // if(sessionStorage.getItem("user")){
                  //   var obj=JSON.parse(sessionStorage.getItem("user"));
                  //   vv.Glogin(obj.userName,vv.base64.decode(obj.psd));
                  // }
                  var user = unescape(vv.getCookie('uName'));
                  var paw=unescape(vv.base64.decode(vv.getCookie('pwd')));
                  if(user&&paw){
                      vv.Glogin(user,paw,true);
                      console.log("我在执行重新登录哦")
                  }
                  state.socketRecon=11;
                }
              });
            },1000);
          }else {
            loadingInstance.close();
            state.socketRecon=0;
            _this.commit("outLogin",{
              type:"disconnect",
              msg:"与服务器断开连接，请重新登录"
            })
          }
        }
      };
      state.socket.onerror = function (err) {
        console.log("socket[链接出错]");
      }
    },
  
      //使用socket发送消息
      socketSend(state,val){
        if(!val.data) val.data={};
        var info = {
          "act": val.act,
          "data": JSON.stringify(val.data)
        };
        if(typeof val.fn==="function"){
          var ps=0;
          for(var item in state.Callback){
            if(item==val.act){
              state.Callback[item].push(val.fn);
              ps=1; break;
            }
          }
          if(ps===0){
            state.Callback[val.act]=[val.fn];
          }
        }
         console.log("socket >>> ",JSON.stringify(info));
        //WebSocket对象发送还没结束，然后又调用了send方法接着继续发送，加个延时回调
        //setTimeout(function () {
          state.socket.send(JSON.stringify(info));
        //},500)
      },
      //使用socket接收消息
      socketMsg(state){
        var _this=this;
        // state.socket.on('inWrapper', function(msg) {
        state.socket.onmessage=function(msg){
          var code=/^[a-zA-Z].*/;
          if(code.test(msg.data)){
             _this.commit("changeKline", msg.data); 
          }else{
            var msg = JSON.parse(msg.data);
            // console.log("接收消息")
            if(msg.type!="Price"&&msg.type!="Heartbeat") console.log("socket <<< ", msg);
            switch (msg.type) {
    
              case "CallReturn": {                                  //调用返回
                switch(msg.srData){
                  case "fwUser_login":{if(msg.ok){
                    state.userId=msg.user.userId;
                    state.sessionId=msg.sktSessionId;
                    state.user=msg.user.userName;
                    state.cacheNumber=msg.cacheNumber;
                  } } break;
                  // case "addr_list":{ state.myads=msg.data; } break;
                  // case "user_getBankInfo":{ state.banks=msg; } break;
                  // case "money_getMoneyCfg":{ state.rate=msg; } break;
                  // case "user_agreeTrade":{ state.tradeAgreement=!msg.isOk } break;
                  // case "money_inChannelList":{state.channel=msg.data} break;
                  case "fwUser_getMoneyInfo":{
                    state.money=msg;
                    // state.user.canUseMoney=msg.canUseMoney;
                    // window.sessionStorage.setItem("user",JSON.stringify(state.user));
                  } break;
                }
                // var callback=state.Callback;
                // for(var item in callback){
                //   if(item==msg.srData&&callback[item][0]){
                    // Indicator.close();
                //     callback[item][0](msg);
                //     callback[item].splice(0,1);
                //   }
                // }
                // state.Callback=callback;
                // for(var i=0;i<state.callback.length;i++){
                //      if(state.callback[i].name==msg.srData&&state.callback[i].fn){
                //          // Indicator.close(); 
                //          state.callback[i].fn(msg);
                //          state.callback.splice(i,1);
                //          i--;
                //      }
                // }
                var callback=state.Callback;
                for(var item in callback){
                  if(item==msg.srData&&callback[item][0]){
                    callback[item][0](msg);
                    callback[item].splice(0,1);
                  }
                }
                state.Callback=callback;
              } break;
              // case "Price": {          //行情到来
              //   // console.log(msg)
              //   _this.commit("changeKline", msg.srData);
              // } break;
              case "C2CNotice": {          //通知处理
                console.log(msg)
                if(msg.noticeType=="TimeOut"){
                   _this.commit("changeTimeOut", msg.orderId);     
                }
                if(msg.noticeType=="BuyerConfirm"){
                   _this.commit("changeBuyerConfirm", msg.orderId);     
                }
                if(msg.noticeType=="SellerConfirm"){
                   _this.commit("changeSellerConfirm", msg.orderId);     
                }
                if(msg.noticeType=="ForceConfirm"){
                   _this.commit("changeForceConfirm", msg.orderId);     
                }
                
                console.log(msg)
              } break;
              case "OtherLogin": {     //异地登录
                _this.commit("outLogin",{
                  type:"otherLogin",
                  msg:msg.msg
                });
              } break;
              case "Close": {           //平仓通知
                _this.commit("changeClose",msg)
              } break;
              // case "PanicBuySucc": {   //抢购成功
    
              // } break;
              // case "PanicBuyFail": {   //抢购失败
    
              // } break;
              // case "StopClose": {      //止盈止损平仓
    
              // } break;
              // case "ForceClose": {     //强制平仓（爆仓）
    
              // } break;
              // case "Close": {     //平仓处理
              //     _this.commit("changeClose", msg);
              //     Toast({ message: msg.msg, position: 'middle', duration: 1000 });
              // } break;
              case "Restart" : {
                // Indicator.close();
                console.log("哈哈")
                // if(msg.msg=="请重新登录"){
                    vv.$store.commit("changetoken",false);
                    var user = unescape(vv.getCookie('uName'));
                    var paw=unescape(vv.base64.decode(vv.getCookie('pwd')));
                    if(user&&paw){  
                        vv.Glogin(user,paw,true)
                    }else{
                        // Toast({ message: msg.msg, position: 'middle', duration: 2000 });
                        vv.setCookie("uName",state.user,0)
                        _this.commit("changePage","/login")
                        vv.$router.push({ path: "/login" });
                    }           
                // }
    

              } break;
            }
          }
        }
      },
      outLogin(state,data){
        window.sessionStorage.setItem("user","");
        vv.$store.commit("changetoken",false);
        if(data.type=="otherLogin"){  //异地登录or修改密码or断开连接
            vv.$store.state.otherLogin=true
        }else if(data.type=="outLogin"){ //退出登录
          window.setTimeout(function(){
            window.location.reload();
          },1000)
        }else if(data.type=="disconnect"){
          state.newInit=false;
          vv.$store.state.disconnect=true
        }
      },
      megtsFun(state,arg){  //默认跳转到申诉页
        state.megts=arg;
      }
}
export default mutations
