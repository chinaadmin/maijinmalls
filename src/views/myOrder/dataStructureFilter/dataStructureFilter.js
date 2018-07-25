import tools from '@/utils/tool'

let dataStructureFilter = {
	myOrderListfilter: "", //新增地址 数据过滤

}

/*****************************************************    start ****************************************************/
dataStructureFilter.myOrderListfilter = function(data, type) {
	console.log(data);
	var _data = "";
	if(type) {

	} else {
		var _arry = [];
		var _orderStatusName = "";
		for(var i=0;i<data.length;i++){
			var _obj = {
			v_id: "",
			goodType: "",
			orderNum: "",
			orderState: "",
			redeemCode:"",
			v_img: '', //图片地址
			v_title: '', //订单标题
			v_kz: "10222克", //商品克重
			v_num: "2", //购买数量
			v_spjs: "2", //购买总数
			v_hjze: "555", //合计金额
		}
			_obj.orderNum =  data[i].orderStatus;
			if(data[i].orderStatus === 10){
				_orderStatusName = "待付款";
			}else if(data[i].orderStatus === 15){
				_orderStatusName = "支付中";
			}else if(data[i].orderStatus === 20){
				_orderStatusName = "待发货";
			}else if(data[i].orderStatus === 30){
				_orderStatusName = "待收货";
			}else if(data[i].orderStatus === 40){
				_orderStatusName = "已收货";
			}else if(data[i].orderStatus === 50){
				_orderStatusName = "待兑换";
			}else if(data[i].orderStatus === 60){
				_orderStatusName = "已兑换";
			}else if(data[i].orderStatus === 70){
				_orderStatusName = "已完成";
			}else if(data[i].orderStatus === 80){
				_orderStatusName = "已取消";
			}else if(data[i].orderStatus === 90){
				_orderStatusName = "支付失败";
			}else if(data[i].orderStatus === 91){
				_orderStatusName = "支付超时";
			}
		_obj.v_id = data[i].orderId;
		_obj.goodType = data[i].brandName;
		_obj.orderState = _orderStatusName;
		_obj.v_img = data[i].smallIcon;
		_obj.v_title = data[i].productName;
		_obj.v_kz = data[i].specifications;
		_obj.v_num = data[i].itemNum;
		_obj.v_spjs = data[i].itemNum;
		_obj.v_hjze = data[i].orderAmount;
		_obj.redeemCode=data[i].redeemCode;
		_arry.push(_obj);
		
		}
		
		_data = _arry;
	}

	return _data;
}

/***************************************************** 字典列表  end ****************************************************/

export default dataStructureFilter