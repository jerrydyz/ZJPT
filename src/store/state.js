const state = {
    close:false,//退出登录socket断开
    formRouter:"",      //上个页面的路由
    page: '/index',           //footer里的page
    socketUrl: '',            //ws地址
    httpUrl:"",     //http地址
    token:false,          //是否已经登录状态
    canUseMoney:"",     //账户余额
    USDTCodeOne:{},    //保存第一个商品
    USDTList:[],     //保存b2b商品列表
    socketRecon:11,        //重连倒计时
    // Callback :{},        //存储所有的回调函数
    b2bOne:{},        //第一个商品信息
    b2bOneShow:{},    //展示商品id
    b2bClose:{},            //平仓处理
    money:"",     //余额
    loginmsg:'',  //登录错误信息
    udShow:false,
    tradeAgreement:"",      //登录后获取同意交易
    // isApprove: false,         //是否认证成功
    socket:{},           //ws实例
    rateCny:0,
    sureplace:false,
    renew:false,
    historyRenew:false,
    newInit:false,
    otherLogin:false,
    disconnect:false,
    leftMoney:0,
    // socketExit:false,    //重连
    // socketRecon:11,        //重连倒计时
    // Callback :{},        //存储所有的回调函数
    // pathRoute: "",       //登录后要跳转的路由
    // openReg: "",           //是否打开注册框
    // closeLogin:"",          //关闭登录框
    kline:"",               //行情数据
    usdRate:"",           //美元人名币汇率
	//银行卡参数
	bankType: false,
    user:"",//用户
    callback:[],//存储所有的回调函数
    TimeOut:"",
    BuyerConfirm:"",
    SellerConfirm:"",
    ForceConfirm:"",
    Callback :{},        //存储所有的回调函数
    b2bClose:{},            //平仓处理
    succOrderTranShow:true,   //成功订单的立即划转按钮
    cacheNumber:"",
    userId:"",   //用户Id
    sessionId:"",//回话Id
	provinceList: {

        '北京市': ['朝阳区', '海淀区', '通州区', '房山区', '丰台区', '昌平区', '大兴区', '顺义区', '西城区', '延庆县', '石景山区', '宣武区', '怀柔区', '崇文区', '密云县', '东城区', '门头沟区', '平谷区'],


        '广东省': ['东莞市', '广州市', '中山市', '深圳市', '惠州市', '江门市', '珠海市', '汕头市', '佛山市', '湛江市', '河源市', '肇庆市', '潮州市', '清远市', '韶关市', '揭阳市', '阳江市', '云浮市', '茂名市', '梅州市', '汕尾市'],


        '山东省': ['济南市', '青岛市', '临沂市', '济宁市', '菏泽市', '烟台市', '泰安市', '淄博市', '潍坊市', '日照市', '威海市', '滨州市', '东营市', '聊城市', '德州市', '莱芜市', '枣庄市'],

        '江苏省': ['苏州市', '徐州市', '盐城市', '无锡市', '南京市', '南通市', '连云港市', '常州市', '扬州市', '镇江市', '淮安市', '泰州市', '宿迁市'],


        '河南省': ['郑州市', '南阳市', '新乡市', '安阳市', '洛阳市', '信阳市', '平顶山市', '周口市', '商丘市', '开封市', '焦作市', '驻马店市', '濮阳市', '三门峡市', '漯河市', '许昌市', '鹤壁市', '济源市'],


        '上海市': ['松江区', '宝山区', '金山区', '嘉定区', '南汇区', '青浦区', '浦东新区', '奉贤区', '闵行区', '徐汇区', '静安区', '黄浦区', '普陀区', '杨浦区', '虹口区', '闸北区', '长宁区', '崇明县', '卢湾区'],


        '河北省': ['石家庄市', '唐山市', '保定市', '邯郸市', '邢台市', '河北区', '沧州市', '秦皇岛市', '张家口市', '衡水市', '廊坊市', '承德市'],


        '浙江省': ['温州市', '宁波市', '杭州市', '台州市', '嘉兴市', '金华市', '湖州市', '绍兴市', '舟山市', '丽水市', '衢州市'],


        '香港特别行政区': ['香港岛', '九龙半岛', '新界'],


        '陕西省': ['西安市', '咸阳市', '宝鸡市', '汉中市', '渭南市', '安康市', '榆林市', '商洛市', '延安市', '铜川市'],

        '湖南省': ['长沙市', '邵阳市', '常德市', '衡阳市', '株洲市', '湘潭市', '永州市', '岳阳市', '怀化市', '郴州市', '娄底市', '益阳市', '张家界市', '湘西州'],


        '重庆市': ['江北区', '渝北区', '沙坪坝区', '九龙坡区', '万州区', '永川市', '南岸区', '酉阳县', '北碚区', '涪陵区', '秀山县', '巴南区', '渝中区', '石柱县', '忠县', '合川市', '大渡口区', '开县', '长寿区', '荣昌县', '云阳县', '梁平县', '潼南县', '江津市', '彭水县', '璧山县', '綦江县', '大足县', '黔江区', '巫溪县', '巫山县', '垫江县', '丰都县', '武隆县', '万盛区', '铜梁县', '南川市', '奉节县', '双桥区', '城口县'],


        '福建省': ['漳州市', '泉州市', '厦门市', '福州市', '莆田市', '宁德市', '三明市', '南平市', '龙岩市'],


        '天津市': ['和平区', '北辰区', '河北区', '河西区', '西青区', '津南区', '东丽区', '武清区', '宝坻区', '红桥区', '大港区', '汉沽区', '静海县', '宁河县', '塘沽区', '蓟县', '南开区', '河东区'],


        '云南省': ['昆明市', '红河州', '大理州', '文山州', '德宏州', '曲靖市', '昭通市', '楚雄州', '保山市', '玉溪市', '丽江地区', '临沧地区', '思茅地区', '西双版纳州', '怒江州', '迪庆州'],

        '四川省': ['成都市', '绵阳市', '广元市', '达州市', '南充市', '德阳市', '广安市', '阿坝州', '巴中市', '遂宁市', '内江市', '凉山州', '攀枝花市', '乐山市', '自贡市', '泸州市', '雅安市', '宜宾市', '资阳市', '眉山市', '甘孜州'],


        '广西省': ['贵港市', '玉林市', '北海市', '南宁市', '柳州市', '桂林市', '梧州市', '钦州市', '来宾市', '河池市', '百色市', '贺州市', '崇左市', '防城港市'],


        '安徽省': ['芜湖市', '合肥市', '六安市', '宿州市', '阜阳市', '安庆市', '马鞍山市', '蚌埠市', '淮北市', '淮南市', '宣城市', '黄山市', '铜陵市', '亳州市', '池州市', '巢湖市', '滁州市'],


        '海南省': ['三亚市', '海口市', '琼海市', '文昌市', '东方市', '昌江县', '陵水县', '乐东县', '五指山市', '保亭县', '澄迈县', '万宁市', '儋州市', '临高县', '白沙县', '定安县', '琼中县', '屯昌县'],


        '江西省': ['南昌市', '赣州市', '上饶市', '吉安市', '九江市', '新余市', '抚州市', '宜春市', '景德镇市', '萍乡市', '鹰潭市'],


        '湖北省': ['武汉市', '宜昌市', '襄樊市', '荆州市', '恩施州', '孝感市', '黄冈市', '十堰市', '咸宁市', '黄石市', '仙桃市', '随州市', '天门市', '荆门市', '潜江市', '鄂州市', '神农架林区'],


        '山西省': ['太原市', '大同市', '运城市', '长治市', '晋城市', '忻州市', '临汾市', '吕梁市', '晋中市', '阳泉市', '朔州市'],


        '辽宁省': ['大连市', '沈阳市', '丹东市', '辽阳市', '葫芦岛市', '锦州市', '朝阳市', '营口市', '鞍山市', '抚顺市', '阜新市', '本溪市', '盘锦市', '铁岭市'],


        '台湾省': ['台北市', '高雄市', '台中市', '新竹市', '基隆市', '台南市', '嘉义市'],


        '黑龙江省': ['齐齐哈尔市', '哈尔滨市', '大庆市', '佳木斯市', '双鸭山市', '牡丹江市', '鸡西市', '黑河市', '绥化市', '鹤岗市', '伊春市', '大兴安岭地区', '七台河市'],


        '内蒙古自治区': ['赤峰市', '包头市', '通辽市', '呼和浩特市', '乌海市', '鄂尔多斯市', '呼伦贝尔市', '兴安盟', '巴彦淖尔盟', '乌兰察布盟', '锡林郭勒盟', '阿拉善盟'],


        '澳门特别行政区': ['花地玛堂区', '圣安多尼堂区', '大堂区', '望德堂区', '风顺堂区'],


        '贵州省': ['贵阳市', '黔东南州', '黔南州', '遵义市', '黔西南州', '毕节地区', '铜仁地区', '安顺市', '六盘水市'],


        '甘肃省': ['兰州市', '天水市', '庆阳市', '武威市', '酒泉市', '张掖市', '陇南地区', '白银市', '定西地区', '平凉市', '嘉峪关市', '临夏回族自治州', '金昌市', '甘南州'],


        '青海省': ['西宁市', '海西州', '海东地区', '海北州', '果洛州', '玉树州', '黄南藏族自治州'],


        '新疆维吾尔自治区': ['乌鲁木齐市', '伊犁州', '昌吉州', '石河子市', '哈密地区', '阿克苏地区', '巴音郭楞州', '喀什地区', '塔城地区', '克拉玛依市', '和田地区', '阿勒泰州', '吐鲁番地区', '阿拉尔市', '博尔塔拉州', '五家渠市', '克孜勒苏州', '图木舒克市'],


        '西藏区': ['拉萨市', '山南地区', '林芝地区', '日喀则地区', '阿里地区', '昌都地区', '那曲地区'],


        '吉林省': ['吉林市', '长春市', '白山市', '白城市', '延边州', '松原市', '辽源市', '通化市', '四平市'],


        '宁夏回族自治区': ['银川市', '吴忠市', '中卫市', '石嘴山市', '固原市'],

    },
    CityInfo:[
        {value: 1, label: '北京市', children: [
            {value: 1, label: '北京市', }
        ]},
        {value: 2, label: '天津市', children: [
            {value: 2, label: '天津市', }
        ]},
        {value: 3, label: '河北省', children: [
            {value: 3, label: '石家庄市', },
            {value: 4, label: '唐山市', },
            {value: 5, label: '秦皇岛市', },
            {value: 6, label: '邯郸市', },
            {value: 7, label: '邢台市', },
            {value: 8, label: '保定市', },
            {value: 9, label: '张家口市', },
            {value: 10, label: '承德市', },
            {value: 11, label: '沧州市', },
            {value: 12, label: '廊坊市', },
            {value: 13, label: '衡水市', }
        ]},
        {value: 4, label: '山西省', children: [
            {value: 14, label: '太原市', },
            {value: 15, label: '大同市', },
            {value: 16, label: '阳泉市',},
            {value: 17, label: '长治市', },
            {value: 18, label: '晋城市', },
            {value: 19, label: '朔州市', },
            {value: 20, label: '晋中市', },
            {value: 21, label: '运城市', },
            {value: 22, label: '忻州市', },
            {value: 23, label: '临汾市', },
            {value: 24, label: '吕梁市', }
        ]},
        {value: 5, label: '内蒙古自治区', children: [
            {value: 25, label: '呼和浩特市', },
            {value: 26, label: '包头市', },
            {value: 27, label: '乌海市', },
            {value: 28, label: '赤峰市', },
            {value: 29, label: '通辽市', },
            {value: 30, label: '鄂尔多斯市', },
            {value: 31, label: '呼伦贝尔市', },
            {value: 32, label: '巴彦淖尔市', },
            {value: 33, label: '乌兰察布市', },
            {value: 34, label: '兴安盟', },
            {value: 35, label: '锡林郭勒盟', },
            {value: 36, label: '阿拉善盟', }
        ]},
        {value: 6, label: '辽宁省', children: [
            {value: 37, label: '沈阳市', },
            {value: 38, label: '大连市', },
            {value: 39, label: '鞍山市', },
            {value: 40, label: '抚顺市',},
            {value: 41, label: '本溪市',},
            {value: 42, label: '丹东市', },
            {value: 43, label: '锦州市', },
            {value: 44, label: '营口市', },
            {value: 45, label: '阜新市', },
            {value: 46, label: '辽阳市', },
            {value: 47, label: '盘锦市', },
            {value: 48, label: '铁岭市', },
            {value: 49, label: '朝阳市', },
            {value: 50, label: '葫芦岛市', }
        ]},
        {value: 7, label: '吉林省', children: [
            {value: 51, label: '长春市', },
            {value: 52, label: '吉林市', },
            {value: 53, label: '四平市', },
            {value: 54, label: '辽源市', },
            {value: 55, label: '通化市', },
            {value: 56, label: '白山市', },
            {value: 57, label: '松原市', },
            {value: 58, label: '白城市', },
            {value: 59, label: '延边', }
        ]},
        {value: 8, label: '黑龙江省', children: [
            {value: 60, label: '哈尔滨市', },
            {value: 61, label: '齐齐哈尔市', },
            {value: 62, label: '鸡西市', },
            {value: 63, label: '鹤岗市', },
            {value: 64, label: '双鸭山市', },
            {value: 65, label: '大庆市', },
            {value: 66, label: '伊春市', },
            {value: 67, label: '佳木斯市', },
            {value: 68, label: '七台河市', },
            {value: 69, label: '牡丹江市', },
            {value: 70, label: '黑河市', },
            {value: 71, label: '绥化市',},
            {value: 72, label: '大兴安岭地区', }
        ]},
        {value: 9, label: '上海市', children: [
            {value: 73, label: '上海市',}
        ]},
        {value: 10, label: '江苏省', children: [
            {value: 74, label: '南京市', },
            {value: 75, label: '无锡市',},
            {value: 76, label: '徐州市', },
            {value: 77, label: '常州市', },
            {value: 78, label: '苏州市', },
            {value: 79, label: '南通市', },
            {value: 80, label: '连云港市', },
            {value: 81, label: '淮安市', },
            {value: 82, label: '盐城市', },
            {value: 83, label: '扬州市', },
            {value: 84, label: '镇江市', },
            {value: 85, label: '泰州市', },
            {value: 86, label: '宿迁市', }
        ]},
        {value: 11, label: '浙江省', children: [
            {value: 87, label: '杭州市', },
            {value: 88, label: '宁波市', },
            {value: 89, label: '温州市', },
            {value: 90, label: '嘉兴市', },
            {value: 91, label: '湖州市', },
            {value: 92, label: '绍兴市',},
            {value: 93, label: '金华市', },
            {value: 94, label: '衢州市', },
            {value: 95, label: '舟山市', },
            {value: 96, label: '台州市', },
            {value: 97, label: '丽水市', }
        ]},
        {value: 12, label: '安徽省', children: [
            {value: 98, label: '合肥市', },
            {value: 99, label: '芜湖市', },
            {value: 100, label: '蚌埠市', },
            {value: 101, label: '淮南市', },
            {value: 102, label: '马鞍山市', },
            {value: 103, label: '淮北市', },
            {value: 104, label: '铜陵市', },
            {value: 105, label: '安庆市', },
            {value: 106, label: '黄山市', },
            {value: 107, label: '滁州市', },
            {value: 108, label: '阜阳市', },
            {value: 109, label: '宿州市', },
            {value: 110, label: '巢湖市', },
            {value: 111, label: '六安市', },
            {value: 112, label: '亳州市', },
            {value: 113, label: '池州市', },
            {value: 114, label: '宣城市', }
        ]},
        {value: 13, label: '福建省', children: [
            {value: 115, label: '福州市', },
            {value: 116, label: '厦门市', },
            {value: 117, label: '莆田市', },
            {value: 118, label: '三明市', },
            {value: 119, label: '泉州市', },
            {value: 120, label: '漳州市', },
            {value: 121, label: '南平市', },
            {value: 122, label: '龙岩市', },
            {value: 123, label: '宁德市', }
        ]},
        {value: 14, label: '江西省', children: [
            {value: 124, label: '南昌市', },
            {value: 125, label: '景德镇市', },
            {value: 126, label: '萍乡市', },
            {value: 127, label: '九江市', },
            {value: 128, label: '新余市', },
            {value: 129, label: '鹰潭市',},
            {value: 130, label: '赣州市',},
            {value: 131, label: '吉安市', },
            {value: 132, label: '宜春市', },
            {value: 133, label: '抚州市', },
            {value: 134, label: '上饶市', }
        ]},
        {value: 15, label: '山东省', children: [
            {value: 135, label: '济南市', },
            {value: 136, label: '青岛市', },
            {value: 137, label: '淄博市',},
            {value: 138, label: '枣庄市', },
            {value: 139, label: '东营市', },
            {value: 140, label: '烟台市', },
            {value: 141, label: '潍坊市', },
            {value: 142, label: '济宁市', },
            {value: 143, label: '泰安市', },
            {value: 144, label: '威海市', },
            {value: 145, label: '日照市', },
            {value: 146, label: '莱芜市', },
            {value: 147, label: '临沂市', },
            {value: 148, label: '德州市',},
            {value: 149, label: '聊城市',},
            {value: 150, label: '滨州市',},
            {value: 151, label: '荷泽市', }
        ]},
        {value: 16, label: '河南省', children: [
            {value: 152, label: '郑州市', },
            {value: 153, label: '开封市', },
            {value: 154, label: '洛阳市', },
            {value: 155, label: '平顶山市', },
            {value: 156, label: '安阳市', },
            {value: 157, label: '鹤壁市', },
            {value: 158, label: '新乡市', },
            {value: 159, label: '焦作市', },
            {value: 160, label: '濮阳市', },
            {value: 161, label: '许昌市', },
            {value: 162, label: '漯河市',},
            {value: 163, label: '三门峡市', },
            {value: 164, label: '南阳市', },
            {value: 165, label: '商丘市', },
            {value: 166, label: '信阳市', },
            {value: 167, label: '周口市', },
            {value: 168, label: '驻马店市', }
        ]},
        {value: 17, label: '湖北省', children: [
            {value: 169, label: '武汉市', },
            {value: 170, label: '黄石市', },
            {value: 171, label: '十堰市', },
            {value: 172, label: '宜昌市', },
            {value: 173, label: '襄樊市', },
            {value: 174, label: '鄂州市', },
            {value: 175, label: '荆门市', },
            {value: 176, label: '孝感市', },
            {value: 177, label: '荆州市', },
            {value: 178, label: '黄冈市', },
            {value: 179, label: '咸宁市', },
            {value: 180, label: '随州市', },
            {value: 181, label: '恩施', },
            {value: 182, label: '神农架', }
        ]},
        {value: 18, label: '湖南省', children: [
            {value: 183, label: '长沙市', },
            {value: 184, label: '株洲市', },
            {value: 185, label: '湘潭市', },
            {value: 186, label: '衡阳市', },
            {value: 187, label: '邵阳市', },
            {value: 188, label: '岳阳市', },
            {value: 189, label: '常德市', },
            {value: 190, label: '张家界市', },
            {value: 191, label: '益阳市', },
            {value: 192, label: '郴州市',},
            {value: 193, label: '永州市', },
            {value: 194, label: '怀化市', },
            {value: 195, label: '娄底市', },
            {value: 196, label: '湘西', }
        ]},
        {value: 19, label: '广东省', children: [
            {value: 197, label: '广州市', },
            {value: 198, label: '韶关市', },
            {value: 199, label: '深圳市', },
            {value: 200, label: '珠海市', },
            {value: 201, label: '汕头市', },
            {value: 202, label: '佛山市', },
            {value: 203, label: '江门市', },
            {value: 204, label: '湛江市', },
            {value: 205, label: '茂名市', },
            {value: 206, label: '肇庆市', },
            {value: 207, label: '惠州市', },
            {value: 208, label: '梅州市', },
            {value: 209, label: '汕尾市', },
            {value: 210, label: '河源市', },
            {value: 211, label: '阳江市', },
            {value: 212, label: '清远市', },
            {value: 213, label: '东莞市', },
            {value: 214, label: '中山市', },
            {value: 215, label: '潮州市', },
            {value: 216, label: '揭阳市', },
            {value: 217, label: '云浮市', }
        ]},
        {value: 20, label: '广西壮族自治区', children: [
            {value: 218, label: '南宁市', },
            {value: 219, label: '柳州市', },
            {value: 220, label: '桂林市', },
            {value: 221, label: '梧州市', },
            {value: 222, label: '北海市', },
            {value: 223, label: '防城港市', },
            {value: 224, label: '钦州市', },
            {value: 225, label: '贵港市', },
            {value: 226, label: '玉林市', },
            {value: 227, label: '百色市', },
            {value: 228, label: '贺州市', },
            {value: 229, label: '河池市', },
            {value: 230, label: '来宾市', },
            {value: 231, label: '崇左市', }
        ]},
        {value: 21, label: '海南省', children: [
            {value: 232, label: '海口市', },
            {value: 233, label: '三亚市', }
        ]},
        {value: 22, label: '重庆市', children: [
            {value: 234, label: '重庆市', }
        ]},
        {value: 23, label: '四川省', children: [
            {value: 235, label: '成都市', },
            {value: 236, label: '自贡市', },
            {value: 237, label: '攀枝花市', },
            {value: 238, label: '泸州市', },
            {value: 239, label: '德阳市', },
            {value: 240, label: '绵阳市', },
            {value: 241, label: '广元市', },
            {value: 242, label: '遂宁市', },
            {value: 243, label: '内江市', },
            {value: 244, label: '乐山市', },
            {value: 245, label: '南充市', },
            {value: 246, label: '眉山市', },
            {value: 247, label: '宜宾市', },
            {value: 248, label: '广安市', },
            {value: 249, label: '达州市', },
            {value: 250, label: '雅安市', },
            {value: 251, label: '巴中市', },
            {value: 252, label: '资阳市', },
            {value: 253, label: '阿坝', },
            {value: 254, label: '甘孜', },
            {value: 255, label: '凉山', }
        ]},
        {value: 24, label: '贵州省', children: [
            {value: 256, label: '贵阳市', },
            {value: 257, label: '六盘水市', },
            {value: 258, label: '遵义市', },
            {value: 259, label: '安顺市', },
            {value: 260, label: '铜仁地区', },
            {value: 261, label: '黔西', },
            {value: 262, label: '毕节地区', },
            {value: 263, label: '黔东', },
            {value: 264, label: '黔南', }
        ]},
        {value: 25, label: '云南省', children: [
            {value: 265, label: '昆明市', },
            {value: 266, label: '曲靖市', },
            {value: 267, label: '玉溪市', },
            {value: 268, label: '保山市', },
            {value: 269, label: '昭通市', },
            {value: 270, label: '丽江市', },
            {value: 271, label: '思茅市', },
            {value: 272, label: '临沧市', },
            {value: 273, label: '楚雄', },
            {value: 274, label: '红河', },
            {value: 275, label: '文山', },
            {value: 276, label: '西双版纳', },
            {value: 277, label: '大理', },
            {value: 278, label: '德宏', },
            {value: 279, label: '怒江', },
            {value: 280, label: '迪庆', }
        ]},
        {value: 26, label: '西藏自治区', children: [
            {value: 281, label: '拉萨市', },
            {value: 282, label: '昌都地区', },
            {value: 283, label: '山南地区', },
            {value: 284, label: '日喀则地区', },
            {value: 285, label: '那曲地区', },
            {value: 286, label: '阿里地区', },
            {value: 287, label: '林芝地区',}
        ]},
        {value: 27, label: '陕西省', children: [
            {value: 288, label: '西安市', },
            {value: 289, label: '铜川市', },
            {value: 290, label: '宝鸡市', },
            {value: 291, label: '咸阳市', },
            {value: 292, label: '渭南市', },
            {value: 293, label: '延安市', },
            {value: 294, label: '汉中市', },
            {value: 295, label: '榆林市', },
            {value: 296, label: '安康市', },
            {value: 297, label: '商洛市', }
        ]},
        {value: 28, label: '甘肃省', children: [
            {value: 298, label: '兰州市', },
            {value: 299, label: '嘉峪关市',},
            {value: 300, label: '金昌市',},
            {value: 301, label: '白银市', },
            {value: 302, label: '天水市', },
            {value: 303, label: '武威市', },
            {value: 304, label: '张掖市', },
            {value: 305, label: '平凉市', },
            {value: 306, label: '酒泉市', },
            {value: 307, label: '庆阳市', },
            {value: 308, label: '定西市', },
            {value: 309, label: '陇南市', },
            {value: 310, label: '临夏', },
            {value: 311, label: '甘南', }
        ]},
        {value: 29, label: '青海省', children: [
            {value: 312, label: '西宁市', },
            {value: 313, label: '海东地区', },
            {value: 314, label: '海北', },
            {value: 315, label: '黄南', },
            {value: 316, label: '海南', },
            {value: 317, label: '果洛', },
            {value: 318, label: '玉树', },
            {value: 319, label: '海西', }
        ]},
        {value: 30, label: '宁夏回族自治区', children: [
            {value: 320, label: '银川市', },
            {value: 321, label: '石嘴山市', },
            {value: 322, label: '吴忠市', },
            {value: 323, label: '固原市', },
            {value: 324, label: '中卫市', }
        ]},
        {value: 31, label: '新疆维吾尔自治区', children: [
            {value: 325, label: '乌鲁木齐市', },
            {value: 326, label: '克拉玛依市', },
            {value: 327, label: '吐鲁番地区', },
            {value: 328, label: '哈密地区', },
            {value: 329, label: '昌吉', },
            {value: 330, label: '博尔塔拉', },
            {value: 331, label: '巴音郭楞', },
            {value: 332, label: '阿克苏地区', },
            {value: 333, label: '克孜勒苏柯尔克孜', },
            {value: 334, label: '喀什地区', },
            {value: 335, label: '和田地区', },
            {value: 336, label: '伊犁哈萨克',},
            {value: 337, label: '塔城地区', },
            {value: 338, label: '阿勒泰地区', },
            {value: 339, label: '石河子市', },
            {value: 340, label: '阿拉尔市', },
            {value: 341, label: '图木舒克市', },
            {value: 342, label: '五家渠市', }
        ]},
        {value: 32, label: '香港特别行政区', children: [
            {value: 343, label: '香港', }
        ]},
        {value: 33, label: '澳门特别行政区', children: [
            {value: 344, label: '澳门', }
        ]},
        {value: 34, label: '台湾省', children: [
            {value: 345, label: '台湾',}
        ]}
    ],  
    typeList:{
        'BTC':{
            explain:{
                name:'比特币 (Bitcoin)',
                time:'2018/11/1',
                allNum:'2100万',
                num:'1673.82万',
                price:'--',
                whitePaper:'https://bitcoin.org/bitcoin.pdf',
                web:'https://bitcoin.org/en/',
                search:'https://blockchain.info/',
                desc:'比特币（bitcoin，简称BTC）是目前使用最为广泛的一种数字货币，它诞生于2009年1月3日，是一种点对点（P2P）传输的数字加密货币，总量2100万枚。比特币网络每10分钟释放出一定数量的币，预计在2140年达到极限。比特币被投资者称为“数字黄金”。比特币依据特定算法，通过大量的计算产生，不依靠特定货币机构发行，其使用整个P2P网络中众多节点构成的分布式数据库来确认并记录所有交易行为，并使用密码学设计确保货币流通各个环节安全性，可确保无法通过大量制造比特币来人为操控币值。基于密码学的设计可以使比特币只能被真实拥有者转移、支付及兑现。同样确保了货币所有权与流通交易的匿名性。',
            },
            data:{
                name:'比特币综合指数',
                code:'BBTC',
                exchange: 'Huobi OKEX BINANCE',
                type:'永续合约',
                scale:'指数点*1USDT',
                Currency:'USDT',
                small:'0.01（指数点）',
                transTime:'24小时',
                closeTime:'北京时间05:00',
                margin:'合约价值的0.5%~5%',
                openCharge:'≤建仓合约价值*0.4%',
                closeCharge:'≤平仓合约价值*0.4%',              
                delayMoney:'≤建仓合约价值*0.08%',
                offerTime:'无',
            }
        },
        'ETH':{
            explain:{
                name:'以太坊（Ethereum）',
                time:'2014/07/24',
                allNum:'9631.15万',
                num:'9631.15万',
                price:'$0.31',
                whitePaper:'https://github.com/ethereum/wiki',
                web:'https://www.ethereum.org/',
                search:' https://etherscan.io/',
                desc:'以太坊（Ethereum）是下一代密码学账本，可以支持众多的高级功能，包括用户发行货币，智能协议，去中心化的交易和设立去中心化自治组织（DAOs）或去中心化自治公司（DACs）。以太坊并不是把每一单个类型的功能作为特性来特别支持，相反，以太坊包括一个内置的图灵完备的脚本语言，允许通过被称为“合同”的机制来为自己想实现的特性写代码。一个合同就像一个自动的代理，每当接收到一笔交易，合同就会运行特定的一段代码，这段代码能修改合同内容的数据存储或者发送交易。',
            },
            data:{
                name:'以太币综合指数',
                code:'BETH',
                exchange:'Huobi OKEX BINANCE',
                type:'永续合约',
                scale:'指数点*10USDT',
                Currency:'USDT',
                small:'0.01（指数点）',
                transTime:'24小时',
                closeTime:'北京时间05:00',
                margin:'合约价值的0.5%~5%',
                openCharge:'≤建仓合约价值*0.4%',
                closeCharge:'≤平仓合约价值*0.4%',              
                delayMoney:'≤建仓合约价值*0.08%',
                offerTime:'无',
            }
        },
        'XRP':{
            explain:{
                name:'Ripple（XRP）',
                time:'2011/04/18',
                allNum:'10000000万',
                num:'3873914.48万',
                price:'--',
                whitePaper:'--',
                web:'https://ripple.com',
                search:'https://ripple.com/graph',
                desc:'瑞波币（Ripple/XRP）提供一个无阻碍的利用区块链技术的全球支付网络，是世界上第一个开放的支付网络，通过加入Ripple正在成长的全球支付网络可以转账任意一种货币，包括美元、欧元、人民币、日元或者比特币，简便易行快捷，交易确认在几秒以内完成，交易费用几乎是零，没有所谓的跨行异地以及跨国支付费用。Ripple是开放源码的点到点支付网络，它可以使任何机构或个人轻松、廉价并安全的把金钱转账到互联网上的任何机构或个人，无论在世界的哪个地方。Ripple是P2P软件，没有任何个人、公司、或政府操控，任何人可以创建一个ripple账户。',
            },
            data:{
                name:'瑞波币综合指数',
                code:'BXRP',
                exchange:'Huobi OKEX BINANCE',
                type:'永续合约',
                scale:'指数点*10000USDT',
                Currency:'USDT',
                small:'0.000001（指数点）',
                transTime:'24小时',
                closeTime:'北京时间05:00',
                margin:'合约价值的0.5%~5%',
                openCharge:'≤建仓合约价值*0.4%',
                closeCharge:'≤平仓合约价值*0.4%',              
                delayMoney:'≤建仓合约价值*0.08%',
                offerTime:'无',
            }
        },
        'LTC':{
            explain:{
                name:'莱特币（LTC）',
                time:'2011/11/09',
                allNum:'8400万',
                num:'5428.26万',
                price:'--',
                whitePaper:'--',
                web:'https://litecoin.com/',
                search:'https://explorer.litecoin.net/chain/Litscoin',
                desc:'莱特币诞生于2011年11月9日，被称为是“数字白银”。莱特币在技术上和比特币具有相同的实现原理。它是第一个基于Scypt算法的网络数字货币，于比特币相比，莱特币拥有更快的交易确认时间，更高的网络交易容量和效率。莱特币现在拥有完整的产业链，充分的流动性，足以证明其是成熟、安全、稳定的商用金融系统。',
            },
            data:{
                name:'莱特币综合指数',
                code:'BLTC',
                exchange:'Huobi OKEX BINANCE',
                type:'永续合约',
                scale:'指数点*100USDT',
                Currency:'USDT',
                small:'0.01（指数点）',
                transTime:'24小时',
                closeTime:'北京时间05:00',
                margin:'合约价值的0.5%~5%',
                openCharge:'≤建仓合约价值*0.4%',
                closeCharge:'≤平仓合约价值*0.4%',              
                delayMoney:'≤建仓合约价值*0.08%',
                offerTime:'无',
            }
        },
        'EOS':{
            explain:{
                name:'Enterprise Operation System（EOS）',
                time:'2017/7/2',
                allNum:'10亿',
                num:'5.36亿',
                price:'--',
                whitePaper:'http://github.com/EOSIO/Documentation',
                web:' https://eos.io/',
                search:'https://etherscan.io/token/EOS',
                desc:'EOS（Enterprise Operation System）是由Block.one公司主导开发的一种全新的基于区块链智能合约平台，旨在为高性能发布应用提供底层区块链平台服务。EOS项目的目标是实现一个类似操作系统的支撑分布式应用程序的区块链架构。该架构可以提供账户，身份认证，数据库，异步通信以及可在数以万计的CPU/GPU群集上进行程序调度和并行运算。EOS最终可以支持每秒执行数百万个交易，同时普通用户执行智能合约无需支付使用费用。',
            },
            data:{
                name:'EOS综合指数',
                code:'BEOS',
                exchange:'Huobi OKEX BINANCE',
                type:'永续合约',
                scale:'指数点*1000USDT',
                Currency:'USDT',
                small:'0.0001（指数点）',
                transTime:'24小时',
                closeTime:'北京时间05:00',
                margin:'合约价值的0.5%~5%',
                openCharge:'≤建仓合约价值*0.4%',
                closeCharge:'≤平仓合约价值*0.4%',              
                delayMoney:'≤建仓合约价值*0.08%',
                offerTime:'无',
            }
        },
        'EUR':{
            data:{
                name:'欧元指数',
                scale:'1标准合约=指数点*10000USDT',
                Currency:'USDT',
                small:'0.0001（指数点）',
                smallPrice:"0.1标准合约",
                transTime:'5*24小时',
                stopTime:"周六，周日",
                closeTime:'北京时间05:00',
                margin:'合约价值的0.5%~5%',
                openCharge:'≤建仓合约价值*0.4%',
                closeCharge:'≤平仓合约价值*0.4%',              
                delayMoney:'≤建仓合约价值*0.08%',
                qingPing:"70%(风险率=净值/保证金)",  
                offerTime:'无',
            }
        }, 
        'GBP':{
            data:{
                name:'英镑指数',
                scale:'1标准合约=指数点*10000USDT',
                Currency:'USDT',
                small:'0.0001（指数点）',
                smallPrice:"0.1标准合约",
                transTime:'5*24小时',
                stopTime:"周六，周日",
                closeTime:'北京时间05:00',
                margin:'合约价值的0.5%~5%',
                openCharge:'≤建仓合约价值*0.4%',
                closeCharge:'≤平仓合约价值*0.4%',              
                delayMoney:'≤建仓合约价值*0.08%',
                qingPing:"70%(风险率=净值/保证金)",   
                offerTime:'无',
            }
        },
        'AUD':{
            data:{
                name:'澳元指数',
                scale:'1标准合约=指数点*10000USDT',
                Currency:'USDT',
                small:'0.0001（指数点）',
                smallPrice:"0.1标准合约",
                transTime:'5*24小时',
                stopTime:"周六，周日",
                closeTime:'北京时间05:00',
                margin:'合约价值的0.5%~5%',
                openCharge:'≤建仓合约价值*0.4%',
                closeCharge:'≤平仓合约价值*0.4%',              
                delayMoney:'≤建仓合约价值*0.08%',
                qingPing:"70%(风险率=净值/保证金)",   
                offerTime:'无',
            }
        },
        'JPY':{
            data:{
                name:'日元指数',
                scale:'1标准合约=指数点*10000USDT',
                Currency:'USDT',
                small:'0.0001（指数点）',
                smallPrice:"0.1标准合约",
                transTime:'5*24小时',
                stopTime:"周六，周日",
                closeTime:'北京时间05:00',
                margin:'合约价值的0.5%~5%',
                openCharge:'≤建仓合约价值*0.4%',
                closeCharge:'≤平仓合约价值*0.4%',              
                delayMoney:'≤建仓合约价值*0.08%',
                qingPing:"70%(风险率=净值/保证金)",    
                offerTime:'无',
            }
        },
        'CAD':{
            data:{
                name:'加元指数',
                scale:'1标准合约=指数点*10000USDT',
                Currency:'USDT',
                small:'0.0001（指数点）',
                smallPrice:"0.1标准合约",
                transTime:'5*24小时',
                stopTime:"周六，周日",
                closeTime:'北京时间05:00',
                margin:'合约价值的0.5%~5%',
                openCharge:'≤建仓合约价值*0.4%',
                closeCharge:'≤平仓合约价值*0.4%',              
                delayMoney:'≤建仓合约价值*0.08%',
                qingPing:"70%(风险率=净值/保证金)",    
                offerTime:'无',
            }
        },
        'CHF':{
            data:{
                name:'瑞郎指数',
                scale:'1标准合约=指数点*10000USDT',
                Currency:'USDT',
                small:'0.0001（指数点）',
                smallPrice:"0.1标准合约",
                transTime:'5*24小时',
                stopTime:"周六，周日",
                closeTime:'北京时间05:00',
                margin:'合约价值的0.5%~5%',
                openCharge:'≤建仓合约价值*0.4%',
                closeCharge:'≤平仓合约价值*0.4%',              
                delayMoney:'≤建仓合约价值*0.08%',
                qingPing:"70%(风险率=净值/保证金)",   
                offerTime:'无',
            }
        },
        'DollarIndex':{
            data:{
                name:'美元指数',
                scale:'1标准合约=指数点*100USDT',
                Currency:'USDT',
                small:'0.001（指数点）',
                smallPrice:"0.1标准合约",
                transTime:'北京时间周一至周五09:00-次日06:00',
                stopTime:"周六，周日",
                closeTime:'北京时间05:00',
                margin:'合约价值的0.5%~5%',
                openCharge:'≤建仓合约价值*0.4%',
                closeCharge:'≤平仓合约价值*0.4%',              
                delayMoney:'≤建仓合约价值*0.08%',
                qingPing:"70%(风险率=净值/保证金)",     
                offerTime:'无',
            }
        },
        'XAU':{
            data:{
                name:'黄金指数',
                scale:'1标准合约=指数点*10USDT',
                Currency:'USDT',
                small:'0.01（指数点）',
                smallPrice:"0.1标准合约",
                transTime:'5*24小时',
                stopTime:"周六，周日",
                closeTime:'北京时间05:00',
                margin:'合约价值的0.5%~5%',
                openCharge:'≤建仓合约价值*0.4%',
                closeCharge:'≤平仓合约价值*0.4%',              
                delayMoney:'≤建仓合约价值*0.08%',
                qingPing:"70%(风险率=净值/保证金)",    
                offerTime:'无',
            }
        },
        'XAG':{
            data:{
                name:'白银指数',
                scale:'1标准合约=指数点*500USDT',
                Currency:'USDT',
                small:'0.01（指数点）',
                smallPrice:"0.1标准合约",
                transTime:'5*24小时',
                stopTime:"周六，周日",
                closeTime:'北京时间05:00',
                margin:'合约价值的0.5%~5%',
                openCharge:'≤建仓合约价值*0.4%',
                closeCharge:'≤平仓合约价值*0.4%',              
                delayMoney:'≤建仓合约价值*0.08%',
                qingPing:"70%(风险率=净值/保证金)",    
                offerTime:'无',
            }
        },
        'CL':{
            data:{
                name:'原油指数',
                scale:'1标准合约=指数点*100USDT',
                Currency:'USDT',
                small:'0.01（指数点）',
                smallPrice:"0.1标准合约",
                transTime:'5*24小时',
                stopTime:"周六，周日",
                closeTime:'北京时间05:00',
                margin:'合约价值的0.5%~5%',
                openCharge:'≤建仓合约价值*0.4%',
                closeCharge:'≤平仓合约价值*0.4%',              
                delayMoney:'≤建仓合约价值*0.08%',
                qingPing:"70%(风险率=净值/保证金)",     
                offerTime:'无',
            }
        },
        'HSI':{
            data:{
                name:'恒生指数',
                scale:'1标准合约=指数点*1USDT',
                Currency:'USDT',
                small:'0.01（指数点）',
                smallPrice:"0.1标准合约",
                transTime:'北京时间周一至周五9:15-12:00 13:00-16:30 17:15-次日1:00',
                stopTime:"周六，周日",
                closeTime:'北京时间05:00',
                margin:'合约价值的0.5%~5%',
                openCharge:'≤建仓合约价值*0.4%',
                closeCharge:'≤平仓合约价值*0.4%',              
                delayMoney:'≤建仓合约价值*0.08%',
                qingPing:"70%(风险率=净值/保证金)",    
                offerTime:'无',
                desc:'香港股市价格的重要指标，指数由若干只成份股（即蓝筹股）市值计算出来的，代表了香港交易所所有上市公司的12个月平均市值涵盖率的63%，恒生指数由恒生银行下属恒生指数有限公司负责计算及按季检讨，公布成份股调整。恒生指数，由香港恒生银行全资附属的恒生指数服务有限公司编制，是以香港股票市场中的50家上市股票为成份股样本，以其发行量为权数的加权平均股价指数，是反映香港股市价幅动趋势最有影响的一种股价指数。该指数于1969年11月24日首次公开发布，基期为1964年7月31日．基期指数定为100。'
            }
        },
        'FDAX':{
            data:{
                name:'德国指数',
                scale:'1标准合约=指数点*1USDT',
                Currency:'USDT',
                small:'0.01（指数点）',
                smallPrice:"0.1标准合约",
                transTime:'北京时间周一至周五15:00-次日5:00',
                stopTime:"周六，周日",
                closeTime:'北京时间05:00',
                margin:'合约价值的0.5%~5%',
                openCharge:'≤建仓合约价值*0.4%',
                closeCharge:'≤平仓合约价值*0.4%',              
                delayMoney:'≤建仓合约价值*0.08%',
                qingPing:"70%(风险率=净值/保证金)",      
                offerTime:'无',
                desc:'德国DAX 指数（德语：Der Dax最早来源于Deutscher Aktienindex）是德国重要的股票指数。由德意志交易所集团（Deutsche Börse Group）推出的一个蓝筹股指数。该指数中包含有30家主要的德国公司。DAX指数是全欧洲与英国伦敦金融时报指数齐名的重要证券指数，也是世界证券市场中的重要指数之一。该指数通过Xetra交易系统进行交易，因此其交易方式不同于传统的公开交易方式，而是采用电子交易的方式，便于进行全球交易。'
            }
        },
        'YM':{
            data:{
                name:'道琼斯指数',
                scale:'1标准合约=指数点*1USDT',
                Currency:'USDT',
                small:'0.01（指数点）',
                smallPrice:"0.1标准合约",
                transTime:'北京时间周一至周四7:30-次日5:15 5:30-6:00 周五7:00-次日5:15',
                stopTime:"周六，周日",
                closeTime:'北京时间05:00',
                margin:'合约价值的0.5%~5%',
                openCharge:'≤建仓合约价值*0.4%',
                closeCharge:'≤平仓合约价值*0.4%',              
                delayMoney:'≤建仓合约价值*0.08%',
                qingPing:"70%(风险率=净值/保证金)",   
                offerTime:'无',
                desc:'道琼斯指数最早是在1884年由道琼斯公司的创始人查尔斯·亨利·道（Charles Henry Dow 1851-1902年）开始编制的一种算术平均股价指数。道琼斯指数是世界上历史最为悠久的股票指数，它的全称为股票价格平均指数。'
            }
        },
        'JP225':{
            data:{
                name:'日经225指数',
                scale:'1标准合约=指数点*1USDT',
                Currency:'USDT',
                small:'0.01（指数点）',
                smallPrice:"0.1标准合约",
                transTime:'北京时间周一至周五7:45-14:00 15:15-次日2:00',
                stopTime:"周六，周日",
                closeTime:'北京时间05:00',
                margin:'合约价值的0.5%~5%',
                openCharge:'≤建仓合约价值*0.4%',
                closeCharge:'≤平仓合约价值*0.4%',              
                delayMoney:'≤建仓合约价值*0.08%',
                qingPing:"70%(风险率=净值/保证金)",    
                offerTime:'无',
                desc:'日经指数是《日本经济新闻》社编制的股票价格指数。最早编于1950年9月。是根据东京证券交易所第一市场上市的225家公司的股票算出修正平均股价，其所选样本均为在东京证券交易所第一市场上市的股票，样本选定后原则上不再更改;基期为1949年5月16日；1981年定位制造业150家、建筑业10家、水产业3家、矿业3家、商业12家、陆运及海运14家、金融保险业15家、不动产业3家、仓库业、电力和煤气4家、服务业5家;该指数从1950年一直延续至今，其连续性及可比性较好，是考察和分析日本股票市场长期演变及动态的最常用和最可靠指标。',
            }
        }, 
        'A50':{
            data:{
                name:'富时中国A50指数',
                scale:'1标准合约=指数点*1USDT',
                Currency:'USDT',
                small:'0.01（指数点）',
                smallPrice:"0.1标准合约",
                transTime:'北京时间周一至周五9:00-16:30 17:00-次日4:45',
                stopTime:"周六，周日",
                closeTime:'北京时间05:00',
                margin:'合约价值的0.5%~5%',
                openCharge:'≤建仓合约价值*0.4%',
                closeCharge:'≤平仓合约价值*0.4%',              
                delayMoney:'≤建仓合约价值*0.08%',
                qingPing:"70%(风险率=净值/保证金)",   
                offerTime:'无',
                desc:'富时中国A50指数，是由全球四大指数公司之一的富时指数有限公司（现名为富时罗素指数），为满足中国国内投资者以及合格境外机构投资者(QFII)需求所推出的实时可交易指数。富时中国A50指数包含了中国A股市场市值最大的50家公司，其总市值占A股总市值的33%，是最能代表中国A股市场的指数，许多国际投资者把这一指数看作是衡量中国市场的精确指标。富时中国A50指数于1999年由富时指数编制。',
            }
        },       

    },
    megts:false,  //提交默认申诉页
    //初始模板
    opt:{"panes":[{"sources":[{"type":"MainSeries","id":"Aou8vZ","state":{"style":1,"esdShowDividends":true,"esdShowSplits":true,"esdShowEarnings":true,"esdShowBreaks":false,"esdBreaksStyle":{"color":"rgba( 235, 77, 92, 1)","style":2,"width":1},"esdFlagSize":2,"showCountdown":false,"showInDataWindow":true,"visible":true,"silentIntervalChange":false,"showPriceLine":true,"priceLineWidth":1,"priceLineColor":"","showPrevClosePriceLine":false,"prevClosePriceLineWidth":1,"prevClosePriceLineColor":"rgba( 85, 85, 85, 1)","minTick":"default","extendedHours":false,"sessVis":false,"statusViewStyle":{"fontSize":17,"showExchange":true,"showInterval":true,"showSymbolAsDescription":false},"candleStyle":{"upColor":"#53b987","downColor":"#eb4d5c","drawWick":true,"drawBorder":true,"borderColor":"#378658","borderUpColor":"#53b987","borderDownColor":"#eb4d5c","wickColor":"#737375","wickUpColor":"#a9cdd3","wickDownColor":"#f5a6ae","barColorsOnPrevClose":false},"hollowCandleStyle":{"upColor":"rgba( 83, 185, 135, 1)","downColor":"rgba( 255, 77, 92, 1)","drawWick":true,"drawBorder":true,"borderColor":"rgba( 55, 134, 88, 1)","borderUpColor":"rgba( 83, 185, 135, 1)","borderDownColor":"rgba( 255, 77, 92, 1)","wickColor":"rgba( 115, 115, 117, 1)","wickUpColor":"rgba( 169, 220, 195, 1)","wickDownColor":"rgba( 245, 166, 174, 1)"},"haStyle":{"upColor":"rgba( 83, 185, 135, 1)","downColor":"rgba( 255, 77, 92, 1)","drawWick":true,"drawBorder":true,"borderColor":"rgba( 55, 134, 88, 1)","borderUpColor":"rgba( 83, 185, 135, 1)","borderDownColor":"rgba( 255, 77, 92, 1)","wickColor":"rgba( 115, 115, 117, 1)","wickUpColor":"rgba( 83, 185, 135, 1)","wickDownColor":"rgba( 255, 77, 92, 1)","showRealLastPrice":false,"barColorsOnPrevClose":false,"inputs":{},"inputInfo":{}},"barStyle":{"upColor":"rgba( 83, 185, 135, 1)","downColor":"rgba( 255, 77, 92, 1)","barColorsOnPrevClose":false,"dontDrawOpen":false},"lineStyle":{"color":"rgba( 60, 120, 216, 1)","linestyle":0,"linewidth":1,"priceSource":"close","styleType":2},"areaStyle":{"color1":"rgba( 96, 96, 144, 0.5)","color2":"rgba( 1, 246, 245, 0.5)","linecolor":"rgba( 0, 148, 255, 1)","linestyle":0,"linewidth":1,"priceSource":"close","transparency":50},"priceAxisProperties":{"autoScale":true,"autoScaleDisabled":false,"lockScale":false,"percentage":false,"percentageDisabled":false,"log":false,"logDisabled":false,"alignLabels":true},"renkoStyle":{"upColor":"rgba( 83, 185, 135, 1)","downColor":"rgba( 255, 77, 92, 1)","borderUpColor":"rgba( 83, 185, 135, 1)","borderDownColor":"rgba( 255, 77, 92, 1)","upColorProjection":"rgba( 169, 220, 195, 1)","downColorProjection":"rgba( 245, 166, 174, 1)","borderUpColorProjection":"rgba( 169, 220, 195, 1)","borderDownColorProjection":"rgba( 245, 166, 174, 1)","wickUpColor":"rgba( 83, 185, 135, 1)","wickDownColor":"rgba( 255, 77, 92, 1)","inputs":{"source":"close","boxSize":3,"style":"ATR","atrLength":14,"wicks":true},"inputInfo":{"source":{"name":"Source"},"boxSize":{"name":"Box size"},"style":{"name":"Style"},"atrLength":{"name":"ATR Length"},"wicks":{"name":"Wicks"}}},"pbStyle":{"upColor":"rgba( 83, 185, 135, 1)","downColor":"rgba( 255, 77, 92, 1)","borderUpColor":"rgba( 83, 185, 135, 1)","borderDownColor":"rgba( 255, 77, 92, 1)","upColorProjection":"rgba( 169, 220, 195, 1)","downColorProjection":"rgba( 245, 166, 174, 1)","borderUpColorProjection":"rgba( 169, 220, 195, 1)","borderDownColorProjection":"rgba( 245, 166, 174, 1)","inputs":{"source":"close","lb":3},"inputInfo":{"source":{"name":"Source"},"lb":{"name":"Number of line"}}},"kagiStyle":{"upColor":"rgba( 83, 185, 135, 1)","downColor":"rgba( 255, 77, 92, 1)","upColorProjection":"rgba( 169, 220, 195, 1)","downColorProjection":"rgba( 245, 166, 174, 1)","inputs":{"source":"close","style":"ATR","atrLength":14,"reversalAmount":1},"inputInfo":{"source":{"name":"Source"},"style":{"name":"Style"},"atrLength":{"name":"ATR Length"},"reversalAmount":{"name":"Reversal amount"}}},"pnfStyle":{"upColor":"rgba( 83, 185, 135, 1)","downColor":"rgba( 255, 77, 92, 1)","upColorProjection":"rgba( 169, 220, 195, 1)","downColorProjection":"rgba( 245, 166, 174, 1)","inputs":{"sources":"Close","reversalAmount":3,"boxSize":1,"style":"ATR","atrLength":14},"inputInfo":{"sources":{"name":"Source"},"boxSize":{"name":"Box size"},"reversalAmount":{"name":"Reversal amount"},"style":{"name":"Style"},"atrLength":{"name":"ATR Length"}}},"baselineStyle":{"baselineColor":"rgba( 117, 134, 150, 1)","topFillColor1":"rgba( 83, 185, 135, 0.1)","topFillColor2":"rgba( 83, 185, 135, 0.1)","bottomFillColor1":"rgba( 235, 77, 92, 0.1)","bottomFillColor2":"rgba( 235, 77, 92, 0.1)","topLineColor":"rgba( 83, 185, 135, 1)","bottomLineColor":"rgba( 235, 77, 92, 1)","topLineWidth":1,"bottomLineWidth":1,"priceSource":"close","transparency":50,"baseLevelPercentage":50},"symbol":"AAPL","shortName":"AAPL","timeframe":"","onWidget":false,"interval":"D"},"zorder":-1,"haStyle":{"studyId":"BarSetHeikenAshi@tv-basicstudies-60"},"renkoStyle":{"studyId":"BarSetRenko@tv-prostudies-15"},"pbStyle":{"studyId":"BarSetPriceBreak@tv-prostudies-15"},"kagiStyle":{"studyId":"BarSetKagi@tv-prostudies-15"},"pnfStyle":{"studyId":"BarSetPnF@tv-prostudies-15"}},{"type":"Study","id":"Lp7odJ","state":{"styles":{"plot_0":{"linestyle":0,"linewidth":1,"plottype":0,"trackPrice":false,"transparency":35,"visible":true,"color":"rgba(255, 0, 0, 0.65)","histogramBase":0,"joinPoints":false,"title":"Plot"}},"precision":"default","inputs":{"in_0":5,"in_1":"close","in_2":0},"palettes":{},"bands":{},"area":{},"graphics":{},"showInDataWindow":true,"visible":true,"showStudyArguments":true,"plots":{"0":{"id":"plot_0","type":"line"}},"_metainfoVersion":27,"isTVScript":false,"isTVScriptStub":false,"is_hidden_study":false,"description":"Moving Average","shortDescription":"MA","is_price_study":true,"id":"Moving Average@tv-basicstudies","scriptIdPart":"","name":"Moving Average@tv-basicstudies","description_localized":"移动平均线(Moving Average)","shortId":"Moving Average","packageId":"tv-basicstudies","version":"1","fullId":"Moving Average@tv-basicstudies-1","productId":"tv-basicstudies","matchPriority":1,"matchIndex":0},"zorder":-2,"metaInfo":{"palettes":{},"inputs":[{"id":"in_0","name":"Length","defval":9,"type":"integer","min":1,"max":10000},{"id":"in_1","name":"Source","defval":"close","type":"source","options":["open","high","low","close","hl2","hlc3","ohlc4"]},{"id":"in_2","name":"Offset","defval":0,"type":"integer","min":-10000,"max":10000}],"plots":[{"id":"plot_0","type":"line"}],"graphics":{},"defaults":{"styles":{"plot_0":{"linestyle":0,"linewidth":1,"plottype":0,"trackPrice":false,"transparency":35,"visible":true,"color":"#0000FF"}},"precision":4,"inputs":{"in_0":9,"in_1":"close","in_2":0}},"_metainfoVersion":27,"isTVScript":false,"isTVScriptStub":false,"is_hidden_study":false,"styles":{"plot_0":{"title":"Plot","histogramBase":0,"joinPoints":false}},"description":"Moving Average","shortDescription":"MA","is_price_study":true,"id":"Moving Average@tv-basicstudies-1","scriptIdPart":"","name":"Moving Average@tv-basicstudies","description_localized":"移动平均线(Moving Average)","shortId":"Moving Average","packageId":"tv-basicstudies","version":"1","fullId":"Moving Average@tv-basicstudies-1","productId":"tv-basicstudies","matchPriority":1,"matchIndex":0}},{"type":"Study","id":"e1LUub","state":{"styles":{"plot_0":{"linestyle":0,"linewidth":1,"plottype":0,"trackPrice":false,"transparency":35,"visible":true,"color":"rgba(0, 255, 0, 0.65)","histogramBase":0,"joinPoints":false,"title":"Plot"}},"precision":"default","inputs":{"in_0":10,"in_1":"close","in_2":0},"palettes":{},"bands":{},"area":{},"graphics":{},"showInDataWindow":true,"visible":true,"showStudyArguments":true,"plots":{"0":{"id":"plot_0","type":"line"}},"_metainfoVersion":27,"isTVScript":false,"isTVScriptStub":false,"is_hidden_study":false,"description":"Moving Average","shortDescription":"MA","is_price_study":true,"id":"Moving Average@tv-basicstudies","scriptIdPart":"","name":"Moving Average@tv-basicstudies","description_localized":"移动平均线(Moving Average)","shortId":"Moving Average","packageId":"tv-basicstudies","version":"1","fullId":"Moving Average@tv-basicstudies-1","productId":"tv-basicstudies","matchPriority":1,"matchIndex":0},"zorder":-3,"metaInfo":{"palettes":{},"inputs":[{"id":"in_0","name":"Length","defval":9,"type":"integer","min":1,"max":10000},{"id":"in_1","name":"Source","defval":"close","type":"source","options":["open","high","low","close","hl2","hlc3","ohlc4"]},{"id":"in_2","name":"Offset","defval":0,"type":"integer","min":-10000,"max":10000}],"plots":[{"id":"plot_0","type":"line"}],"graphics":{},"defaults":{"styles":{"plot_0":{"linestyle":0,"linewidth":1,"plottype":0,"trackPrice":false,"transparency":35,"visible":true,"color":"#0000FF"}},"precision":4,"inputs":{"in_0":9,"in_1":"close","in_2":0}},"_metainfoVersion":27,"isTVScript":false,"isTVScriptStub":false,"is_hidden_study":false,"styles":{"plot_0":{"title":"Plot","histogramBase":0,"joinPoints":false}},"description":"Moving Average","shortDescription":"MA","is_price_study":true,"id":"Moving Average@tv-basicstudies-1","scriptIdPart":"","name":"Moving Average@tv-basicstudies","description_localized":"移动平均线(Moving Average)","shortId":"Moving Average","packageId":"tv-basicstudies","version":"1","fullId":"Moving Average@tv-basicstudies-1","productId":"tv-basicstudies","matchPriority":1,"matchIndex":0}},{"type":"Study","id":"tgOVSD","state":{"styles":{"plot_0":{"linestyle":0,"linewidth":1,"plottype":0,"trackPrice":false,"transparency":35,"visible":true,"color":"rgba(255, 255, 0, 0.65)","histogramBase":0,"joinPoints":false,"title":"Plot"}},"precision":"default","inputs":{"in_0":20,"in_1":"close","in_2":0},"palettes":{},"bands":{},"area":{},"graphics":{},"showInDataWindow":true,"visible":true,"showStudyArguments":true,"plots":{"0":{"id":"plot_0","type":"line"}},"_metainfoVersion":27,"isTVScript":false,"isTVScriptStub":false,"is_hidden_study":false,"description":"Moving Average","shortDescription":"MA","is_price_study":true,"id":"Moving Average@tv-basicstudies","scriptIdPart":"","name":"Moving Average@tv-basicstudies","description_localized":"移动平均线(Moving Average)","shortId":"Moving Average","packageId":"tv-basicstudies","version":"1","fullId":"Moving Average@tv-basicstudies-1","productId":"tv-basicstudies","matchPriority":1,"matchIndex":0},"zorder":-4,"metaInfo":{"palettes":{},"inputs":[{"id":"in_0","name":"Length","defval":9,"type":"integer","min":1,"max":10000},{"id":"in_1","name":"Source","defval":"close","type":"source","options":["open","high","low","close","hl2","hlc3","ohlc4"]},{"id":"in_2","name":"Offset","defval":0,"type":"integer","min":-10000,"max":10000}],"plots":[{"id":"plot_0","type":"line"}],"graphics":{},"defaults":{"styles":{"plot_0":{"linestyle":0,"linewidth":1,"plottype":0,"trackPrice":false,"transparency":35,"visible":true,"color":"#0000FF"}},"precision":4,"inputs":{"in_0":9,"in_1":"close","in_2":0}},"_metainfoVersion":27,"isTVScript":false,"isTVScriptStub":false,"is_hidden_study":false,"styles":{"plot_0":{"title":"Plot","histogramBase":0,"joinPoints":false}},"description":"Moving Average","shortDescription":"MA","is_price_study":true,"id":"Moving Average@tv-basicstudies-1","scriptIdPart":"","name":"Moving Average@tv-basicstudies","description_localized":"移动平均线(Moving Average)","shortId":"Moving Average","packageId":"tv-basicstudies","version":"1","fullId":"Moving Average@tv-basicstudies-1","productId":"tv-basicstudies","matchPriority":1,"matchIndex":0}}],"leftAxisState":{"m_priceRange":{"m_maxValue":0.5,"m_minValue":-0.5},"m_isAutoScale":true,"m_isPercentage":false,"m_isLog":false,"m_isLockScale":false,"m_height":666,"m_topMargin":0.05,"m_bottomMargin":0.05},"leftAxisSources":[],"rightAxisState":{"m_priceRange":{"m_maxValue":183.5,"m_minValue":150.24},"m_isAutoScale":true,"m_isPercentage":false,"m_isLog":false,"m_isLockScale":false,"m_height":666,"m_topMargin":0.05,"m_bottomMargin":0.05},"rightAxisSources":["Aou8vZ","Lp7odJ","e1LUub","tgOVSD"],"overlayPriceScales":{},"stretchFactor":2368.8415446071904,"mainSourceId":"Aou8vZ"},{"sources":[{"type":"Study","id":"VqpARj","state":{"styles":{"plot_0":{"linestyle":0,"linewidth":4,"plottype":1,"trackPrice":false,"transparency":35,"visible":true,"color":"rgba(21, 250, 255, 0.65)","histogramBase":0,"joinPoints":false,"title":"Histogram"},"plot_1":{"linestyle":0,"linewidth":1,"plottype":0,"trackPrice":false,"transparency":35,"visible":true,"color":"rgba(0, 255, 0, 0.65)","histogramBase":0,"joinPoints":false,"title":"MACD"},"plot_2":{"linestyle":0,"linewidth":1,"plottype":0,"trackPrice":false,"transparency":35,"visible":true,"color":"rgba(255, 0, 0, 0.65)","histogramBase":0,"joinPoints":false,"title":"Signal"}},"precision":"default","inputs":{"in_0":12,"in_1":26,"in_3":"close","in_2":9},"palettes":{},"bands":{},"area":{},"graphics":{},"showInDataWindow":true,"visible":true,"showStudyArguments":true,"plots":{"0":{"id":"plot_0","type":"line"},"1":{"id":"plot_1","type":"line"},"2":{"id":"plot_2","type":"line"}},"_metainfoVersion":27,"isTVScript":false,"isTVScriptStub":false,"is_hidden_study":false,"description":"MACD","shortDescription":"MACD","is_price_study":false,"id":"Moving Average Convergence/Divergence@tv-basicstudies","scriptIdPart":"","name":"Moving Average Convergence/Divergence@tv-basicstudies","description_localized":"MACD","shortId":"Moving Average Convergence/Divergence","packageId":"tv-basicstudies","version":"1","fullId":"Moving Average Convergence/Divergence@tv-basicstudies-1","productId":"tv-basicstudies"},"zorder":-1,"metaInfo":{"palettes":{},"inputs":[{"id":"in_0","name":"fastLength","defval":12,"type":"integer","min":1,"max":2000},{"id":"in_1","name":"slowLength","defval":26,"type":"integer","min":1,"max":2000},{"id":"in_3","name":"Source","defval":"close","type":"source","options":["open","high","low","close","hl2","hlc3","ohlc4"]},{"id":"in_2","name":"signalLength","defval":9,"type":"integer","min":1,"max":50}],"plots":[{"id":"plot_0","type":"line"},{"id":"plot_1","type":"line"},{"id":"plot_2","type":"line"}],"graphics":{},"defaults":{"styles":{"plot_0":{"linestyle":0,"linewidth":1,"plottype":1,"trackPrice":false,"transparency":35,"visible":true,"color":"#FF0000"},"plot_1":{"linestyle":0,"linewidth":1,"plottype":0,"trackPrice":false,"transparency":35,"visible":true,"color":"#0000FF"},"plot_2":{"linestyle":0,"linewidth":1,"plottype":0,"trackPrice":false,"transparency":35,"visible":true,"color":"#FF0000"}},"precision":4,"inputs":{"in_0":12,"in_1":26,"in_3":"close","in_2":9}},"_metainfoVersion":27,"isTVScript":false,"isTVScriptStub":false,"is_hidden_study":false,"styles":{"plot_0":{"title":"Histogram","histogramBase":0,"joinPoints":false},"plot_1":{"title":"MACD","histogramBase":0,"joinPoints":false},"plot_2":{"title":"Signal","histogramBase":0,"joinPoints":false}},"description":"MACD","shortDescription":"MACD","is_price_study":false,"id":"Moving Average Convergence/Divergence@tv-basicstudies-1","scriptIdPart":"","name":"Moving Average Convergence/Divergence@tv-basicstudies","description_localized":"MACD","shortId":"Moving Average Convergence/Divergence","packageId":"tv-basicstudies","version":"1","fullId":"Moving Average Convergence/Divergence@tv-basicstudies-1","productId":"tv-basicstudies"}}],"leftAxisState":{"m_priceRange":null,"m_isAutoScale":true,"m_isPercentage":false,"m_isLog":false,"m_isLockScale":false,"m_height":177,"m_topMargin":0.05,"m_bottomMargin":0.05},"leftAxisSources":[],"rightAxisState":{"m_priceRange":{"m_maxValue":2.7336278464751445,"m_minValue":-4.397427370983451},"m_isAutoScale":true,"m_isPercentage":false,"m_isLog":false,"m_isLockScale":false,"m_height":177,"m_topMargin":0.05,"m_bottomMargin":0.05},"rightAxisSources":["VqpARj"],"overlayPriceScales":{},"stretchFactor":631.1584553928096,"mainSourceId":"VqpARj"}],"version":2
    },
};

export default state
