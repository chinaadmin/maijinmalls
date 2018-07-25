import tools from '@/utils/tool'

let dataFilter = {
		list: '',   //输出的列表
		translateStatus: '',  //转义之后的状态
}

/***************************************************** 车辆库存   start ****************************************************/

dataFilter.translateStatus = function(data) {
	var _value = ""
	if(data === 1) {
		_value = "正常"
	} else if(data === 11) {
		_value = "异常"
	}
	return _value;
}

dataFilter.businessStatus = function(data) {
	var _value = ""
	if(data === 10) {
		_value = "采购中"
	}
	return _value
}
dataFilter.houseStatus = function(data) {
	let _val = "";
	if(data === 0) {
		_val = '自购房';
	}else if(data === 1) {
		_val = "自建房";
	}else if(data === 2) {
		_val = "租用房";
	}else if(data === 3) {
		_val = "亲戚住房";
	}else if(data === 4) {
		_val = "单位宿舍";
	}else if(data === 5) {
		_val = "其他";
	}
	return _val;
}

dataFilter.marryStatus = function(data) {
	let  _val = "";
	if(data === 0) {
		_val = "未婚";
	}else if(data === 1) {
		_val = "已婚";
	}else if(data === 2) {
		_val = "离异"
	}
	return _val;
}

dataFilter.company = function(data) {
	let  _val = "";
	if(data === 0) {
		_val = "机关事业单位";
	}else if( data === 1) {
		_val = '国有股份';
	}else if(data === 2) {
		_val ="外资";
	}else if(data === 3) {
		_val = "合资";
	}else if(data === 4) {
		_val = "民营";
	}else if(data === 5) {
		_val = "个体"
	}

	return _val;
}


dataFilter.infoFilter = function(obj) {
	let _filterInfo = {};
	
	_filterInfo.comTab = obj.comTab;    // formId1000  还是1041的变量
	_filterInfo.bafComid = obj.bafComid;    // 所属公司id
	_filterInfo.bafCustomerid = obj.bafCustomerid;    // 客户id
	_filterInfo.bafVehicleid = obj.bafVehicleid;    // 车辆id
	_filterInfo.bafContractid = obj.bafContractid;    // 车辆id
	_filterInfo.bafId = obj.bafId;    //申请单id
	_filterInfo.bafContractid = obj.bafContractid;    //合同id
	_filterInfo.bafActivityTypeStr = obj.bafActivityTypeStr;    //活动客户类型
	_filterInfo.bafSn = obj.bafSn;    //申请单编号
	_filterInfo.comName  = obj.comName ;    //所属子公司
	_filterInfo.bafTypeStr   = obj.bafTypeStr  ;    //车辆类型
	_filterInfo.bafCrtDte  = obj.bafCrtDte    ;    //创建时间
	_filterInfo.bafAge  = obj.bafAge;    //年龄
	_filterInfo.bafOccupation  = obj.bafOccupation;    //职业
	_filterInfo.bafDuties  = obj.bafDuties;    //职务
	_filterInfo.bafService  = obj.bafService;    //运维费
	_filterInfo.bafCateStr  = obj.bafCateStr;    //客户类型 中介名称
	_filterInfo.bafSourceStr  = obj.bafSourceStr;    //业务来源 业务类型
	_filterInfo.bafGenderStr  = obj.bafGenderStr;    //性别str
	_filterInfo.bafPackageStr  = obj.bafPackageStr;    //套餐str
	_filterInfo.comLisenceName  = obj.comLisenceName;    //营业执照
	_filterInfo.vehiclePlate  = obj.vehiclePlate;    // 车牌号
	_filterInfo.bafStatusName  = obj.bafStatusName;    // 订单状态
	
	_filterInfo.contSn  = obj.contSn;    //合同编号
	_filterInfo.bafMailingaddr   = obj.bafMailingaddr;    // 合同邮寄地址

	_filterInfo.bafName = obj.bafName;    //姓名
	_filterInfo.bafIdcard = obj.bafIdcard;    //身份证
	const marry = dataFilter.marryStatus(obj.bafMarriagestatus);
	_filterInfo.bafMarriagestatus = marry;    //婚姻状态
	_filterInfo.bafChildrens = obj.bafChildrens;    //子女数
	_filterInfo.bafMobile = obj.bafMobile;    //手机1
	_filterInfo.bafMobile2 = obj.bafMobile2;    //手机2
	_filterInfo.bafWechat = obj.bafWechat;    //微信
	_filterInfo.bafMobilepwd = obj.bafMobilepwd;    //手机1服务密码
	_filterInfo.bafEmail = obj.bafEmail;    //邮箱
	_filterInfo.bafLiveaddr = obj.bafLiveaddr;    //现住址
	_filterInfo.bafHouseholdadrr = obj.bafHouseholdadrr;    //户口地址
	const houseType = dataFilter.houseStatus(obj.bafHouse);
	_filterInfo.bafHouse = houseType;    //房子类型

	_filterInfo.bafSpousename = obj.bafSpousename;    //配偶姓名
	_filterInfo.bafSpousehouseholdregister = obj.bafSpousehouseholdregister;    //配偶户籍地
	_filterInfo.bafSpousemobile = obj.bafSpousemobile;    //配偶手机号
	_filterInfo.bafSpouseknew = obj.bafSpouseknew;    //配偶是否知晓
	_filterInfo.bafLinealkinname = obj.bafLinealkinname;    //亲属姓名
	_filterInfo.bafLinealkinrelation = obj.bafLinealkinrelation;    //亲属与本人关系
	_filterInfo.bafLinealkinidcard  = obj.bafLinealkinidcard ;    //亲属身份证
	_filterInfo.bafLinealkinmobile  = obj.bafLinealkinmobile ;    //亲属手机
	_filterInfo.bafLinealkinknew  = obj.bafLinealkinknew ;    //亲属是否知晓
	_filterInfo.bafOthername  = obj.bafOthername ;    //联系人1 姓名
	_filterInfo.bafOtherrelation  = obj.bafOtherrelation ;    //联系人1 与本人关系
	_filterInfo.bafOthermobile  = obj.bafOthermobile ;    //联系人1 手机
	_filterInfo.bafOtherknew  = obj.bafOtherknew ;    //联系人1 是否知晓
	_filterInfo.bafOtheraddr  = obj.bafOtheraddr ;    //联系人1地址

	_filterInfo.bafOther2name  = obj.bafOther2name ;    //联系人2 姓名
	_filterInfo.bafOther2relation  = obj.bafOther2relation ;    //联系人2与本人关系
	_filterInfo.bafOther2mobile  = obj.bafOther2mobile ;    //联系人2手机
	_filterInfo.bafOther2knew  = obj.bafOther2knew ;    //联系人2是否知晓
	_filterInfo.bafOther2addr  = obj.bafOther2addr ;    //联系人2地址

	_filterInfo.bafKnewfrom  = obj.bafKnewfrom ;    //业务知晓来源
	_filterInfo.bafLinealkinaddr  = obj.bafLinealkinaddr ;    //紧急联系人住宅地址
	_filterInfo.bafLinealkincomaddr  = obj.bafLinealkincomaddr ;    //紧急联系人单位地址
	_filterInfo.bafLinealkincomname  = obj.bafLinealkincomname ;    //紧急联系人单位名称
	_filterInfo.bafLinealkincomtel  = obj.bafLinealkincomtel ;    //紧急联系人单位固话


	_filterInfo.bafCompany  = obj.bafCompany ;    //单位名
	const company = dataFilter.company(obj.bafCompanynature);
	_filterInfo.bafCompanynature  = company;    //单位性质
	_filterInfo.bafCompanyaddr  = obj.bafCompanyaddr ;    //单位地址
	_filterInfo.bafCombizlicence  = obj.bafCombizlicence ;    //单位营业执照
	_filterInfo.bafComjoindate  = obj.bafComjoindate ;    //入职时间
	_filterInfo.bafComtel  = obj.bafComtel ;    //公司电话
	_filterInfo.bafMonthlyincomes  = obj.bafMonthlyincomes ;    //月收入
	_filterInfo.bafSocialinsurance  = obj.bafSocialinsurance ;    //是否有社保

	_filterInfo.bafVehiclecolor = obj.bafVehiclecolor  ;    //车辆颜色
	_filterInfo.bafVehplatenumber = obj.bafVehplatenumber  ;    //车牌号
	_filterInfo.bafVehengineno = obj.bafVehengineno  ;    //发动机号
	_filterInfo.bafVehframeno = obj.bafVehframeno  ;    //车架号
	_filterInfo.bafVehiclemodel = obj.bafVehiclemodel  ;    //车型名称
	_filterInfo.bafVehiclebrand = obj.bafVehiclebrand  ;    //品牌名称
	_filterInfo.bafVehicleversion = obj.bafVehicleversion  ;    //车辆具体配置
	_filterInfo.bafVehiclelicense = obj.bafVehiclelicense  ;    //上牌地
	_filterInfo.baf4scontacts = obj.baf4scontacts  ;    //4s店联系人
	_filterInfo.bafContactsmobile = obj.bafContactsmobile  ;    //4s店联系人 手机
	_filterInfo.baf4sname = obj.baf4sname  ;    //4s店=名称
	_filterInfo.bafGuideprice = obj.bafGuideprice ;    //市场指导价
	_filterInfo.bafNetprice = obj.bafNetprice ;    //净车价
	_filterInfo.bafPurchasetax  = obj.bafPurchasetax ;    //购置税
	_filterInfo.bafLicensefee = obj.bafLicensefee ;    //上牌费
	_filterInfo.bafCompulsoryinsurfee = obj.bafLicensefee ;    //交强险
	_filterInfo.bafCommerialinsurfee = obj.bafCommerialinsurfee ;    //商业险 
	_filterInfo.bafVvtax = obj.bafVvtax ;    //商业险
	_filterInfo.bafReturnrate = obj.bafReturnrate ;    //合同回报率

	_filterInfo.bafStatus  = obj.bafStatus  ;    //申请单状态
	_filterInfo.bafBnid  = obj.bafBnid    ;    //银行1 id
	_filterInfo.bafBranchname   = obj.bafBranchname     ;    //银行1 名称
	_filterInfo.bafAccountno   = obj.bafAccountno     ;    //银行1 卡号
	_filterInfo.bafAccountname   = obj.bafAccountname     ;    //银行1 开户人
	_filterInfo.bafBnid2   = obj.bafBnid2     ;    //银行2 id
	_filterInfo.bafBranchname2   = obj.bafBranchname2     ;    //银行2 名称
	_filterInfo.bafAccountno2   = obj.bafAccountno2     ;    //银行2 卡号
	_filterInfo.bafAccountname2   = obj.bafAccountname2     ;    //银行2 开户名
	_filterInfo.bafIsaddingfirstpayment   = obj.bafIsaddingfirstpayment;  //银行 是否第一次月供
	_filterInfo.bafIsaddingfirstpayment   = obj.bafIsaddingfirstpayment;  //银行 是否第一次月供
	_filterInfo.bafFirstpayment = obj.bafFirstpayment;    //保证金
	_filterInfo.bafMonthpay24 = obj.bafMonthpay24;    //尾款24期
	_filterInfo.bafMonthpay36 = obj.bafMonthpay36;    //尾款24期
	_filterInfo.bafLastpayment = obj.bafLastpayment;    //尾款
	
	_filterInfo.bafDeposit = obj.bafDeposit;    //定金
	_filterInfo.bafMonthlypayment = obj.bafMonthlypayment;    //月供
	_filterInfo.bafStartdate = obj.bafStartdate;    //开始日期
	_filterInfo.bafTenancy = obj.bafTenancy;    //期数
	_filterInfo.bafGpsfee = obj.bafGpsfee;    //gps费用
	_filterInfo.bafYearofinsurance = obj.bafYearofinsurance;    //保险年限
	_filterInfo.bafInsurance = obj.bafInsurance;    //保险
	_filterInfo.bafInsuranceotherremark = obj.bafInsuranceotherremark;    //保险说明
	_filterInfo.bafInsurancefee = obj.bafInsurancefee;    //保险费用
	_filterInfo.bafPaymentdate = obj.bafPaymentdate;    //保险支付日
	_filterInfo.bafFilelist = obj.bafFilelist;    //资料清单
	_filterInfo.bafRemark = obj.bafRemark;    //申请备注
	_filterInfo.bafSigndate = obj.bafSigndate;    //签署日期
	_filterInfo.bafSalesman = obj.bafSalesman;    //销售员
	_filterInfo.bafGuarantorname = obj.bafGuarantorname;    //担保 姓名
	_filterInfo.bafGuarantoridcard = obj.bafGuarantoridcard ;    //担保人身份证
	_filterInfo.bafGuarantormobile = obj.bafGuarantormobile ;    //担保手机
	_filterInfo.bafGuarantoraddr = obj.bafGuarantoraddr ;    //担保地址

	return _filterInfo
}

dataFilter.list = function(data) {
	var _data = [];
	var _apiData = data;
	for(var i = 0; i < _apiData.length; i++) {
		var _obj = {
			comName: '',         // 所属分公司
			bafVehiclemodel: '', // 申请车型
 			bafTypeStr: '',       // 业务类型
			bafVehiclebrand: '', // 车型品牌
			bafSn: '',           // 申请单编号
			comLisenceName: '',  // 上牌分公司
			contSn: '',          // 合同编号
			bafName: '',         // 客户名
			bafPackageStr:'',     // 套餐类型
			vehiclePlate: '',     // 车牌
			bafFirstpayment: '',  // 保证金
			bafMonthlypayment: '', // 月供
 			bafTenancy: '',         // 租期
 			bafStatusName: '',      // 申请单状态
 			bafCrtDte: '',          // 申请时间
 			bafId: '',              // 申请单id
 			vehFinance: '',            // 是否融资
 			bafMortgage: '',          // 是否抵押
		}
		_obj.comName = _apiData[i].comName;
		_obj.bafVehiclemodel = _apiData[i].bafVehiclemodel;
		_obj.bafTypeStr = _apiData[i].bafTypeStr;
		_obj.bafVehiclebrand = _apiData[i].bafVehiclebrand;
		_obj.bafSn = _apiData[i].bafSn;
		_obj.comLisenceName = _apiData[i].comLisenceName;
		_obj.contSn = _apiData[i].contSn;
		_obj.bafName = _apiData[i].bafName;
		_obj.bafPackageStr = _apiData[i].bafPackageStr;
		_obj.vehiclePlate = _apiData[i].vehiclePlate;
		_obj.bafFirstpayment = _apiData[i].bafFirstpayment;
		_obj.bafMonthlypayment = _apiData[i].bafMonthlypayment;
		_obj.bafTenancy = _apiData[i].bafTenancy;
		_obj.bafStatusName = _apiData[i].bafStatusName;
		_obj.bafCrtDte = _apiData[i].bafCrtDte;
		_obj.bafId = _apiData[i].bafId;
		_obj.vehFinance = _apiData[i].vehFinance;
		_obj.bafMortgage = _apiData[i].bafMortgage;
		_data.push(_obj);

	}
	return _data;
}

/***************************************************** 车辆库存  end ****************************************************/

export default dataFilter