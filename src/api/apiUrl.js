// apiUrl.js

const serviceApi = {
	erploginUrl: "/login",
	rPermissionsTableUrl: "/Menu/selectLeftMenuBar", //路由权限表
	//loginUrl:"/manageLogin", //login url
	loginUrl: "/manageLogin", //秒台车app登录
	customListUrl: '/manage/order/list', //业务管理 客户管理 url
	getUserInfoUrl: '/user/info', //获取用户信息  url
	logoutUrl: '/login/logout', //退出登录  url
	verifycodeUrl: '/generateCheckCode', //获取验证码 url
	loanUrl: '/selectListBySearch', //模拟数据
	// loanPrepayment:'/selectListBySearch',          //借款预付款
	loanPrepayment: '/selectListBySearch', //借款预付款
	confUrl: '/manage/conf/list',
	loanPayList: '/loan/selectListBySearch',
	financialManage: {
		//借款
		loanPayList: '/loan/selectListBySearch', 	//借款/付款/预付款列表分页数据
		loadcostOption: '/expensetype/selectListBySearch', 	//根据父级ID获取费用类型
		loanPayUpdate: '/loan/updateLoan', 	//借款申请单新增OR编辑
		loanPayDetailsById: '/loan/selectDetailsById', 	//根据借款单id查询借款单信息
		selectCompanyList: '/company/selectCompanyList', 	//分公司下拉选项
		selectDepartmentList: '/department/selectDepartmentList', 	//部门下拉选项
		loanDelById:'/loan/delById',	//借款删除
		updateLoanList:'/loan/updateLoanList',		//借款批量新增
		subAuditLoan:'/loan/subAuditLoan',	//提交审批
		loanWithdraw:'/loan/withdraw',	//借款撤销
		loanToExcel:'/loan/selectInfoBySearchToExcel',  //借款列表导出
		
		//报销
		selectDetailsById:'/expensesclaim/selectDetailsById',		//根据借款单id查询借款单信息
		reimListBySearch:'/expensesclaim/selectListBySearch',		//借款/付款/预付款列表分页数据
		updateInfo:'/expensesclaim/updateInfo',		//报销申请单新增OR编辑
		bankList:'/bankName/selectBankNameForInterior',
		findPlateFramNoInfo:'/vehicle/findPlateFramNoInfo',	//根据车架号车辆号查询车辆信息
		reimDelById:'/expensesclaim/delById',	//报销删除
		expSubAuditLoan:'/expensesclaim/subAuditLoan',	//提交审批
		expWithdraw:'/expensesclaim/withdraw',	//报销撤销
		findInfoedBySearch:'/approval/findInfoedBySearch',		//我已审批
		expToExcel:'/expensesclaim/selectInfoBySearchToExcel',	//报销导出
		
		//汇款
		selectListBySearch:'/remittance/selectListBySearch',	//汇款列表
		checkRemi:'/remittance/checkRemi',		//确定打款
		updateRemittance:'/remittance/updateRemittance',		//汇款新增
		
		//打印
		print:'http://erp.yicartrip.com/Finance/Remittance/print.shtml',
		
		//已收
		BizPaymentsInfoList:'/BizPayments/selectBizPaymentsInfoBySearch',	//已收列表
		BizPaymentsById:'/BizPayments/selectBizPaymentsById',  //已收审核详细信息
		checkBizPaymentsInfo:'/BizPayments/checkBizPaymentsInfo',  //收款明细审核
		dictTypeAndParentId:'/dict/selectDictByDictTypeAndParentId', //支付方式列表
		
		//滞纳金板块
		remissionListBySearch:'/bizLateFee/selectListBySearch',	//滞纳金列表
		remissionDetails:'/bizLateFee/selectDetailsById',	//滞纳金详情
		editBizLateFee:'/bizLateFee/editBizLateFee',  //滞纳金新增、修改
		loadPerAndLateFees:'/bizLateFee/loadPerAndLateFees',  //加载滞纳金期数和已产生的滞纳金
		submitWorkFlow:'/bizLateFee/submitWorkFlow',	//提交审批
		remiCancelCheck:'/bizLateFee/cancelCheck',	//撤销审批
		delBizLateFee:'/bizLateFee/delBizLateFee',	//滞纳金删除
		
		//托收板块
		selectCollInfoBySearch:'/collection/selectCollInfoBySearch',	//托收列表
		selectCollDetail:'/collection/selectCollItemInfoBySearch',	//托收明细
		selectCollDetailToExcel:'/collection/selectInfoBySearchToExcel',	//明细导出列表
		
	},
	systemSetup:{
		//系统设置
		dictionaryList:"/dict/selectDictInfoBySearch",     //字典列表
		dictionaryCategory:"/dictType/selectDictTypeInfoBySearch",    //字典类别
		menuList:"/Menu/selectListBySearch",      //菜单列表
		dictionaryCategorySelect:"/dictType/selectDictTypeInfos.shtml", //字典类别 选择器
		dictionaryListSave:"/dict/editDict" , //字典列表 字典列表 新增保存
		dictionaryListDetails:"/dict/selectDetailsById" ,  //字典列表 单条数据详情
		dictionaryListDel:"/dict/delDict" ,  //字典列表 删除
	},
	customList: {
		selectListBySearch: '/customer/selectListBySearch',
		addCustomer: '/customer/addCustomer',
		selectDetailsById: '/customer/selectDetailsById',
		
		//网络客户
		netSelectListBySearch:'/NetworkCustomer/selectListBySearch',	//网络客户列表分页数据
		netSelectDetailsById:'/NetworkCustomer/selectDetailsById',	//网络客户详情
		updateNetworkCustomer:'/NetworkCustomer/updateNetworkCustomer',	//网络客户编辑提交
		selectInfoToExcel:'/NetworkCustomer/selectInfoToExcel',	//导出
		chooseCompany:'/NetworkCustomer/chooseCompany',	//分配公司
		pushInfo: '/NetworkCustomer/pushInfo',	//推送信息
		addSuccessCase:'/NetworkCustomer/addSuccessCase',	//添加成交情况
	},
	//车型信息
	modelInfor:'/vehiclemodel/findInfoBySearch',
	
	//报表管理
	reportManage:{
		selectListBySearch:'/report/selectListBySearch',
		
	},
	//车辆管理
	insurance:{
		insuranceListBySearch:'/insurance/insuranceListBySearch',	//车辆保险分页查询
		insuranceListById:'/insurance/findInsuranceListById',  //车辆保险详细信息
		selectInsuranceItemList:'/insurance/selectInsuranceItemList',  //商业保险项目名称列表
		saveJqxInsuranceList:'/insurance/saveJqxInsuranceList',	//保存交强险
		insuranceCompanyList:'/insurance/selectInsuranceCompanyList',	//保险公司查询
		findVehicle:'/insurance/findVehicle',  //查询车辆信息
		saveInsuranceCompany:'/insurance/SaveInsuranceCompany', //保险公司新增或修改
		insuranceCompanyInfo:'/insurance/insuranceCompanyInfo',//保险公司详情
		insuranceCompanyDelete:'/insurance/insuranceCompanyDelete',  //保险公司删除
		
		
		insuranceApplyList:'/insurance/insuranceApplyListBySearch',	//车辆保险申请单分页查询
		insuranceApplyById:'/insurance/findInsuranceApplyById',	//车辆保险申请单详细信息
		saveBussInsuranceList:'/insurance/saveBussInsuranceList',  //保存商业险
		insurApply:'/insurance/apply',	//车辆保险申请
		createLoan:'/insurance/createLoan',	//创建借款单
		auditInsuranceApplyById:'/insurance/auditInsuranceApplyById',  //保险申请单提交审核
		deleteInsuranceApplyById:'/insurance/deleteInsuranceApplyById',	//删除保险申请单
		
	},
	//员工信息
	staff:{
		selectDetailsById:'/staff/selectDetailsById',	//获取员工详情
	},
	//区域
	areaList:{
		selectDetailsById:'/AreaGroup/selectDetailsById',	//区域详情
	},

	//银行账户信息
	bankAccount:{
		selectListBySearch:'/bankAccount/selectListBySearch',	//银行账户列表
		smsSendVerify:'/collection/smsSendVerify',	//发送短信
		editBankAccount:'/bankAccount/editBankAccount',	//新增或更新
		postRegVerify:'/collection/userRegVerify',	//绑定银行卡
		selectDetailById:'/bankAccount/selectDetailById',	//银行账户明细
		selectBankNameForConsumer:'/bankName/selectBankNameForConsumer',	//银行客户使用
	},
	
}
export default serviceApi
