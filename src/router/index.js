import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import works from '@/pages/works'
import news from '@/pages/news'
import laws from '@/pages/laws'
import courses from '@/pages/courses'
import helps from '@/pages/helps'
import aboutus from '@/pages/aboutus'
import personal from '@/pages/personal'
import login from '@/pages/login'
import findpw from '@/pages/findpw'
import register from '@/pages/register'
import courseBuyDetails from '@/pages/courseBuyDetails'
import packagebuy from '@/pages/packagebuy'
import video from '@/pages/video'

import newsDetails from '@/commons/newsDetails'
import courseDetails from '@/commons/courseDetails'

import basicinfo from '@/components/basicinfo'
import pxcourses from '@/components/pxcourses'
import courselist from '@/components/courselist'
import jointest from '@/components/jointest'
import testrecord from '@/components/testrecord'
import filerecord from '@/components/filerecord'
import allorders from '@/components/allorders'

import commonHeader from '@/commons/header'
import commonFooter from '@/commons/footer'
import couse from '../pages/couse'
import my from '../pages/my'
import textpaper from '../pages/textpaper'
import packagedetail from '../pages/packagedetail'
import kaoshi from '../pages/kaoshi'
import submit from '../pages/submit'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/index'
        },

        {
            path: '/index',
            name: 'index',
            components: {
                comheader: commonHeader,
                default: index,
                comfooter: commonFooter,
            }
        },
        {
            path: '/video',
            name: 'video',
            components: {
                default: video,
            }
        },
        {
            path: '/login',
            name: 'login',
            components: {
                default: login,
            }
        },
        {
            path: '/findpw',
            name: 'findpw',
            components: {
                comheader: commonHeader,
                default: findpw,
                comfooter: commonFooter,
            }
        },
        {
            path: '/register',
            name: 'register',
            components: {
                comheader: commonHeader,
                default: register,
                comfooter: commonFooter,
            }
        },
        {
            path: '/works',
            name: 'works',
            components: {
                comheader: commonHeader,
                default: works,
                comfooter: commonFooter,
            }
        },
        {
            path: '/news',
            name: 'news',
            components: {
                comheader: commonHeader,
                default: news,
                comfooter: commonFooter,
            }
        },
        {
            path: '/laws',
            name: 'laws',
            components: {
                comheader: commonHeader,
                default: laws,
                comfooter: commonFooter,
            }
        },
        {
            path: '/courses',
            name: 'courses',
            components: {
                comheader: commonHeader,
                default: courses,
                comfooter: commonFooter,
            }
        },
        {
            path: '/helps',
            name: 'helps',
            components: {
                comheader: commonHeader,
                default: helps,
                comfooter: commonFooter,
            }
        },
        {
            path: '/aboutus',
            name: 'aboutus',
            components: {
                comheader: commonHeader,
                default: aboutus,
                comfooter: commonFooter,
            }
        },
        {
            path: '/courseBuyDetails',
            name: 'courseBuyDetails',
            components: {
                comheader: commonHeader,
                default: courseBuyDetails,
                comfooter: commonFooter,
            }
        },
        {
            path: '/packagebuy',
            name: 'packagebuy',
            components: {
                comheader: commonHeader,
                default: packagebuy,
                comfooter: commonFooter,
            }
        },
        {
            path: '/newsDetails/:newsId',
            name: 'newsDetails',
            components: {
                comheader: commonHeader,
                default: newsDetails,
                comfooter: commonFooter,
            }
        },
        {
            path: '/courseDetails/:courseId',
            name: 'courseDetails',
            components: {
                comheader: commonHeader,
                default: courseDetails,
                comfooter: commonFooter,
            }
        },
        {
            path: '/personal',
            components: {
                comheader: commonHeader,
                default: personal,
                comfooter: commonFooter,
            },
            redirect: '/personal/basicinfo',
            children: [
                { path: 'pxcourses', name: 'pxcourses', component: pxcourses },
                { path: 'basicinfo', name: 'basicinfo', component: basicinfo },
                { path: 'courselist', name: 'courselist', component: courselist },
                { path: 'jointest', name: 'jointest', component: jointest },
                { path: 'testrecord', name: 'testrecord', component: testrecord },
                { path: 'filerecord', name: 'filerecord', component: filerecord },
                { path: 'allorders', name: 'allorders', component: allorders },
            ]
        }, {
            path: '/my',
            name: 'my',
            component: my
        }, {
            path: '/couse',
            name: 'couse',
            component: couse
        }, {
            path: '/textpaper',
            name: 'textpaper',
            component: textpaper
        }, {
            path: '/packagedetail',
            name: 'packagedetail',
            components: {
                comheader: commonHeader,
                default: packagedetail,
                comfooter: commonFooter,
            }
        }, {
            path: '/kaoshi',
            name: 'kaoshi',
            component: kaoshi
        }, {
            path: '/submit',
            name: 'submit',
            component: submit
        }


    ]
})