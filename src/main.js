// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//全局引入axios
import axios from 'axios'
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios = axios
    //全局引入公共header和footer
    // import commonHeader from '@/commons/header'
    // Vue.component("commonHeader", commonHeader)
    // import commonFooter from '@/commons/footer'
    // Vue.component("commonFooter", commonFooter)

//全局引入loading
import loading from '@/commons/loading'
Vue.component("loading", loading)

//全局引入iconfont
import './assets/iconfont/iconfont.css'
import './style/reset.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import VueVideoPlayer from 'vue-video-player'
// import store from './store/index'
Vue.use(VueVideoPlayer)

Vue.config.productionTip = false
import store from '../src/store/index'
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})