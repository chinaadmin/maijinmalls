import tools from '@/utils/tool'

let dataStructureFilter = {
	addAddrfilter: "", //新增地址 数据过滤
	dictionaryList: {
		//字典列表
		sfky: "", //是否可用过滤
		list: "", //父级列表
		inputPerfor: {
			dictionaryCategorySelect: "", // 字典类别
			zdlb: "", //字典类别过滤
			zdlbAdd: "", //字典列表 新增保存
			edithx: "", //修改 回显数据
		}

	}
}

/*****************************************************    start ****************************************************/
dataStructureFilter.addAddrfilter = function(data, type) {
    console.log(data);
	var _data = "";
	if(type) {

	} else {
		var _obj = {
			addressId: "", //地址id
			province: "", //省
			area: "", //区
			city: "", //市
			expressAddr: "", //收货详细地址
			expressName: "", //收货人姓名
			expressPhone: "", //收货电话号码
		}
		_obj.addressId = data.v_id;
		_obj.expressAddr = data.v_addresss;
		_obj.expressName = data.v_name;
		var _v_phone_init =  data.v_phone_init.substring(4, 5);
		if(_v_phone_init){
			if(_v_phone_init === "*"){
			_obj.expressPhone = data.v_phone;
		}else{
			_obj.expressPhone = data.v_phone_init;
		}
		}else{
			_obj.expressPhone = data.v_phone;
		}
		
		_obj.province = data.v_addressName[0];
		_obj.city = data.v_addressName[1];
		_obj.area = data.v_addressName[2];
		
		_data = _obj;
	}

	return _data;
}
dataStructureFilter.dictionaryList.inputPerfor.edithx = function(data, type) {
	console.log(data);
	var _data = "";
	if(data) {
		var _obj = {
			zdMc: "", //字典名称
			zdBm: "", //字典编码
			pxJb: "", //排序级别
			fjCd: "" //父级菜单
		}
		_obj.zdMc = data.dictDictname;
		_obj.zdBm = data.dictDictcode;
		_obj.pxJb = data.dictSort;
		_obj.fjCd = data.dictDicttypecode;
		_data = _obj;
	}
	return _data;
}

dataStructureFilter.dictionaryList.inputPerfor.zdlbAdd = function(data, type) {
	var _data = "";
	console.log(data);
	if(data) {

		var _obj = {
			dictDictname: "", //字典名称
			dictDictcode: "", //字典编码
			dictSort: "", //排序级别
			dictDicttypecode: "" //父级菜单
		}
		if(type === "edit") {
			//dtId : "" //父级菜单
			_obj.dictId = data.dictId;
		}
		_obj.dictDictname = data.zdMc;
		_obj.dictDictcode = data.zdBm;
		_obj.dictSort = data.pxJb;
		_obj.dictDicttypecode = data.fjCd;
		_data = _obj;
	}
	return _data;
}

dataStructureFilter.dictionaryList.inputPerfor.zdlb = function(data, type) {
	var _data = "";
	if(data) {
		var _obj = {
			dictName: "", //字典名称
			dictType: "", //字典类别
		}
		_obj.dictName = data.zdmc;
		_obj.dictType = data.zdlb;
		_data = _obj;
	}
	return _data;

}

dataStructureFilter.dictionaryList.inputPerfor.dictionaryCategorySelect = function(data, type) {
	var _data = [];
	var _apiData = data;
	if(type === 0) {
		for(var i = 0; i < _apiData.length; i++) {
			var _obj = {
				v_key: "", // key
				v_val: "", // name

			}
			//_obj.zdlxDictionaryList = _apiData[i].dictDictcode;
			_obj.v_key = _apiData[i].dictDicttypecode;
			_obj.v_val = _apiData[i].dictDictname;

			_data.push(_obj);

		}
	} else {

	}

	return _data;
}

dataStructureFilter.dictionaryList.sfky = function(data) {
	var _value = "否"
	if(data) {
		_value = "是"
	}
	return _value;
}
dataStructureFilter.dictionaryList.clzt = function(data) {
	var _value = ""
	if(data === 10) {
		_value = "采购中"
	} else if(data === 11) {
		_value = "配送中"
	} else if(data === 20) {
		_value = "待上牌"
	} else if(data === 21) {
		_value = "上牌中"
	} else if(data === 30) {
		_value = "可租"
	} else if(data === 31) {
		_value = "预定"
	} else if(data === 32) {
		_value = "已租"
	} else if(data === 40) {
		_value = "收车中"
	} else if(data === 41) {
		_value = "收车锁定"
	} else if(data === 50) {
		_value = "调配审核中"
	} else if(data === 51) {
		_value = "调配中"
	} else if(data === 52) {
		_value = "调配申请中"
	} else if(data === 60) {
		_value = "年审审核中"
	} else if(data === 61) {
		_value = "年审中"
	} else if(data === 70) {
		_value = "维修审核中"
	} else if(data === 71) {
		_value = "待维修"
	} else if(data === 72) {
		_value = "维修中"
	} else if(data === 80) {
		_value = "事故审核中"
	} else if(data === 81) {
		_value = "事故待维修"
	} else if(data === 82) {
		_value = "事故维修中"
	} else if(data === 90) {
		_value = "待过户"
	} else if(data === 91) {
		_value = "过户中"
	} else if(data === 92) {
		_value = "已过户"
	} else if(data === 98) {
		_value = "报废"
	} else if(data === 100) {
		_value = "问题车"
	}
	return _value
}

dataStructureFilter.dictionaryList.list = function(data) {
	var _data = [];
	var _apiData = data;
	for(var i = 0; i < _apiData.length; i++) {
		var _obj = {
			idDictionaryList: "", // id
			zdlxDictionaryList: "", // 字典类型
			zdfjDictionaryList: "", // 字典父级
			zdmDictionaryList: "", // 字典名
			zdbmDictionaryList: "", // 字典编码
			pxDictionaryList: "", //排序
			sfkyDictionaryList: "", // 是否可用
		}

		//_obj.zdlxDictionaryList = _apiData[i].dictDictcode;
		_obj.idDictionaryList = _apiData[i].dictId;
		_obj.zdlxDictionaryList = _apiData[i].dictTypeName;
		_obj.zdfjDictionaryList = _apiData[i].dictDicttypecode;
		_obj.zdmDictionaryList = _apiData[i].dictDictname;
		_obj.zdbmDictionaryList = _apiData[i].dictId;
		_obj.pxDictionaryList = _apiData[i].dictSort;
		var _dictIsavailable = dataStructureFilter.dictionaryList.sfky(_apiData[i].dictIsavailable);
		_obj.sfkyDictionaryList = _dictIsavailable;
		_data.push(_obj);

	}
	return _data;
}

/***************************************************** 字典列表  end ****************************************************/

export default dataStructureFilter