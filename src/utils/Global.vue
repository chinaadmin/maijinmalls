<script type="text/javascript">
	let _url  ="/api"   // 本地测试
	//let _url  = "";   // 线上测试
	
//全局 
const api = {
	registerSendCode: _url + "/registerSms.do",   //注册 发送验证码
    sendCode: _url + "/sendLoginSms.do",   //发送验证码
    imgCode:_url +"/kaptcha/createImage.do", //图片验证码
    isRegister: _url + "/isRegister.do",  //判断是否注册
    userRegister:_url + "/registerUser.do",  //用户注册
    loginImgIsCode:_url + "/login/isShowImgCode.do",  //登录时判断是否需要图片验证码
    userLogin:_url + "/login.do", //用户登录
    outLogin:_url + "/logout.do", //退出登录
    messageUserLogin:_url + "/login.do", //短信验证码登录
    obtainingUserInfor:_url + "/customer/getUserInfo.do", //获取用户登录信息
    retrievePasswordCode:_url + "/customer/resetLoginPwdSms.do", //找回密码验证码
    retrievePassword:_url + "/customer/resetLoginPwd.do", //找回密码
    modifyLoginPassword:_url +"/customer/updateLoginPwd.do", //修改登录密码
    realNameAuthent:_url +"/customer/realName.do", //实名认证
    commodityDetails:_url +"/product/detail.do", //商品详情
    moreGoods:_url +"/product/queryMoreProduct.do", //更多商品
    goodQuery:_url +"/product/queryByKeyWords.do", //关键字搜索
    isLoginState:_url +"/checkUserLogin.do", //判断是否登录
    order:{
    	confirOfOrder:_url+"/order/confirmOrder.do", //确认订单
    	alipay:_url+"/order/payOrder.do", //支付宝支付
    	cancelOrder:_url+"/order/cancel.do", //取消订单
    	orderDetails:_url+"/order/detail.do", //订单详情
    	confirmCaching:_url+"/order/confirmReceipt.do", //确认收货
    	
    },
    home:{
    	broadcast:_url+"/queryTopBanner.do", //首页轮播图
    	hotSellingGoods:_url+"/findTopHotProduct.do", //热销商品
    	popularBrand:_url+"/findTopHotBrand.do", //热门品牌
    	commodityInfor:_url+"/findTopProduct.do", //商品信息
    },
    brand:{
    	moreBrands:_url+"/brand/findMoreBrand.do", //更多品牌
    	moreBrandsDetails:_url+"/brand/findMore.do", //更多品牌详情
    },
    my:{
    	pickofWeek:_url+"/product/queryRecommended.do", //我的 推荐商品
    	myInfo:_url+"/order/queryInfo.do" , //我的 基本信息
    	mySetUp:_url+"/order/queryInfo.do" , //我的 设置
    	userReceivAddr:_url+"/address/list.do" , //我的 收货地址
    	addReceivAddr:_url+"/address/saveOrUpdate.do" , //新增 收货地址
    	myOrderList:_url+"/order/list.do" , //我的 订单列表
    	queryGoldExVoucher:_url+"/voucher/query.do", //查询换金券
    },
    pay:{
    	wxPublic:_url+"/order/obtainCode.do",
    }
}
export default
{
  api
}
























</script>