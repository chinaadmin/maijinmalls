// import ajax from '@/utils/http'
import apiAddress from '@/api/apiUrl'
import http from '@/utils/http'


/*******借款*******/
//新增提交
export async function loanPayUpdate(data) {
	const res = await http.post(apiAddress.financialManage.loanPayUpdate,data);
	return res;
}

//分公司下拉选项
export async function selectCompanyList(data) {
	const res = await http.post(apiAddress.financialManage.selectCompanyList,data);
	return res;
}

//部门下拉选项
export async function selectDepartmentList(data) {
	const res = await http.post(apiAddress.financialManage.selectDepartmentList,data);
	return res;
}

//详情
export async function loanPayDetailsById(data) {
	const res = await http.post(apiAddress.financialManage.loanPayDetailsById+"?loanId="+data,data);
	return res;
}

//列表
export async function loanPayList(data) {
	const res = await http.post(apiAddress.financialManage.loanPayList,data);
	return res;
}

//费用下拉选
//一级菜单
export async function costOption() {
	const res = await http.post(apiAddress.financialManage.loadcostOption+"?parentId=0","");
	return res;
}
//二级
export async function costOptionChild(parentId) {
	const res = await http.post(apiAddress.financialManage.loadcostOption+"?parentId="+parentId,"");
	return res;
}

//借款删除
export async function loanDelById(id) {
	const res = await http.post(apiAddress.financialManage.loanDelById+"?id="+id,"");
	return res;
}

//借款批量新增
export async function updateLoanList(data) {
	const res = await http.post(apiAddress.financialManage.updateLoanList,data);
	return res;
}

//提交审批
export async function subAuditLoan(data) {
	const res = await http.post(apiAddress.financialManage.subAuditLoan+'?id='+data,"");
	return res;
}

//借款撤销
export async function loanWithdraw(data) {
	const res = await http.post(apiAddress.financialManage.loanWithdraw+'?id='+data,"");
	return res;
}

//借款列表导出
export async function loanToExcel(data) {
	const res = await http.get(apiAddress.financialManage.loanToExcel,data);
	return res;
}

/*******报销*******/
//报销列表
export async function reimSelectList(data) {
	const res = await http.post(apiAddress.financialManage.reimListBySearch,data);
	return res;
}

//提交审批
export async function expSubAuditLoan(data) {
	const res = await http.post(apiAddress.financialManage.expSubAuditLoan+'?id='+data,"");
	return res;
}

//报销撤销
export async function expWithdraw(data) {
	const res = await http.post(apiAddress.financialManage.expWithdraw+'?id='+data,"");
	return res;
}

//详细信息
export async function loanReimDetailsById(data) {
	const res = await http.post(apiAddress.financialManage.selectDetailsById+'?ecId='+data,"");
	return res;
}

//新增、编辑提交
export async function loanReimUpdateInfo(data) {
	const res = await http.post(apiAddress.financialManage.updateInfo,data);
	return res;
}

//银行列表
export async function bankNameList(data) {
	const res = await http.post(apiAddress.financialManage.bankList,data);
	return res;
}

//根据车排号和车架号查询车辆信息
export async function findPlateFramNoInfo(data) {
	const res = await http.post(apiAddress.financialManage.findPlateFramNoInfo,data);
	return res;
}

//报销删除
export async function reimDelById(id) {
	const res = await http.post(apiAddress.financialManage.reimDelById+"?id="+id,"");
	return res;
}

//报销导出  
export async function expToExcel(data,hearders) {
	const res = await http.get(apiAddress.financialManage.expToExcel,data,1000,{responseType: 'arraybuffer'});
	console.log(res);
	console.log(res.headers);
	
	  // let fileName = res.headers['content-disposition'].match(/expensesClaim(\S*)xls/)[0];
	   //console.log(fileName);
       let blob = new Blob([res.data], {type: "application/vnd.ms-excel"}); 
       console.log(blob);
        let objectUrl = URL.createObjectURL(blob); 
        window.location.href = objectUrl
//        let blob = new Blob([res], {type: "application/vnd.ms-excel"});  
//
//        var link = document.createElement('a');  
//
//        link.href = window.URL.createObjectURL(blob);  
//
//        link.download = "expensesClaim";  
//
//        link.click();  
      
	//return res;
}


//我已审批
export async function findInfoedBySearch(data) {
	const res = await http.post(apiAddress.financialManage.findInfoedBySearch,data);
	return res;
}

//汇款列表
export async function selectListBySearch(data) {
	const res = await http.post(apiAddress.financialManage.selectListBySearch,data);
	return res;
}

//汇款新增
export async function updateRemittance(data) {
	const res = await http.post(apiAddress.financialManage.updateRemittance,data);
	return res;
}

//打印
export async function print(data1,data2) {
	const res = await http.post(apiAddress.financialManage.print+"?formid="+data1+"&id="+data2,"");
	return res;
}

//报表管理
export async function reportManageSearch(data) {
	const res = await http.post(apiAddress.reportManage.selectListBySearch,data);
	return res;
}

//网络客户列表分页数据
export async function netCustomList(data) {
	const res = await http.post(apiAddress.customList.netSelectListBySearch,data);
	return res;
}

//网络客户详情
export async function netCustomListDetails(data) {
	const res = await http.post(apiAddress.customList.netSelectDetailsById,data);
	return res;
}

//网络客户编辑提交
export async function updateNetworkCustomer(data) {
	const res = await http.post(apiAddress.customList.updateNetworkCustomer,data);
	return res;
}

//导出
export async function selectInfoToExcel(data) {
	const res = await http.post(apiAddress.customList.selectInfoToExcel,data);
	return res;
}
//分配公司
export async function chooseCompany(data) {
	const res = await http.post(apiAddress.customList.chooseCompany,data);
	return res;
}

//推送信息
export async function pushInfo(data) {
	const res = await http.post(apiAddress.customList.pushInfo,data);
	return res;
}

//添加成交情况
export async function addSuccessCase(data) {
	const res = await http.post(apiAddress.customList.addSuccessCase,data);
	return res;
}

//车型信息
export async function modelInformation(data) {
	const res = await http.post(apiAddress.modelInfor,data);
	return res;
}


/************车辆保险*******************/
//车辆保险列表
export async function insuranceListBySearch(data) {
	const res = await http.post(apiAddress.insurance.insuranceListBySearch,data);
	return res;
}

//车辆保险详细信息
export async function insuranceListById(data) {
	const res = await http.get(apiAddress.insurance.insuranceListById+'/'+data,'');
	return res;
}

//保险申请单详情
export async function insuranceApplyById(data) {
	const res = await http.get(apiAddress.insurance.insuranceApplyById+'/'+data,'');
	return res;
}

//保险申请单提交审核
export async function auditInsuranceApplyById(data) {
	const res = await http.post(apiAddress.insurance.auditInsuranceApplyById,data);
	return res;
}

//删除保险申请单
export async function deleteInsuranceApplyById(data) {
	const res = await http.post(apiAddress.insurance.deleteInsuranceApplyById,data);
	return res;
}

//车辆保险申请单分页查询
export async function insuranceApplyList(data) {
	const res = await http.post(apiAddress.insurance.insuranceApplyList,data);
	return res;
}

//商业保险项目名称列表
export async function selectInsuranceItemList(data) {
	const res = await http.post(apiAddress.insurance.selectInsuranceItemList,data);
	return res;
}

//保险公司查询
export async function insuranceCompanyList(data) {
	const res = await http.post(apiAddress.insurance.insuranceCompanyList,data);
	return res;
}

//保险公司查询
export async function findVehicle(data) {
	const res = await http.post(apiAddress.insurance.findVehicle,data);
	return res;
}

//保存交强险
export async function saveJqxInsuranceList(data) {
	const res = await http.post(apiAddress.insurance.saveJqxInsuranceList,data);
	return res;
}

//保存商业险
export async function saveBussInsuranceList(data) {
	const res = await http.post(apiAddress.insurance.saveBussInsuranceList,data);
	return res;
}

//保险公司新增或提交
export async function saveInsuranceCompany(data) {
	const res = await http.post(apiAddress.insurance.saveInsuranceCompany,data);
	return res;
}

//保险公司详情
export async function insuranceCompanyInfo(data) {
	const res = await http.post(apiAddress.insurance.insuranceCompanyInfo,data);
	return res;
}

//保险公司删除
export async function insuranceCompanyDelete(data) {
	const res = await http.post(apiAddress.insurance.insuranceCompanyDelete,data);
	return res;
}

//车辆保险申请
export async function insurApply(data) {
	const res = await http.post(apiAddress.insurance.insurApply,data);
	return res;
}

//创建借款单
export async function createLoan(data) {
	const res = await http.post(apiAddress.insurance.createLoan,data);
	return res;
}

//已收
export async function BizPaymentsInfoList(data) {
	const res = await http.post(apiAddress.financialManage.BizPaymentsInfoList,data);
	return res;
}

//已收审核详细信息
export async function BizPaymentsById(data) {
	const res = await http.post(apiAddress.financialManage.BizPaymentsById,data);
	return res;
}

//收款明细审核
export async function checkBizPaymentsInfo(data) {
	const res = await http.post(apiAddress.financialManage.checkBizPaymentsInfo,data);
	return res;
}

//收款方式数据列表
export async function dictTypeAndParentId(data) {
	const res = await http.post(apiAddress.financialManage.dictTypeAndParentId,data);
	return res;
}

/*********滞纳金开始******************/
//滞纳金列表
export async function remissionListBySearch(data) {
	const res = await http.post(apiAddress.financialManage.remissionListBySearch,data);
	return res;
}

//滞纳金详情
export async function remissionDetails(data) {
	const res = await http.post(apiAddress.financialManage.remissionDetails,data);
	return res;
}

//滞纳金新增、修改
export async function editBizLateFee(data) {
	const res = await http.post(apiAddress.financialManage.editBizLateFee,data);
	return res;
}

//加载滞纳金期数和已产生的滞纳金
export async function loadPerAndLateFees(data) {
	const res = await http.post(apiAddress.financialManage.loadPerAndLateFees,data);
	return res;
}

//滞纳金提交审批
export async function submitWorkFlow(data) {
	const res = await http.post(apiAddress.financialManage.submitWorkFlow,data);
	return res;
}

//滞纳金撤销审批
export async function remiCancelCheck(data) {
	const res = await http.post(apiAddress.financialManage.remiCancelCheck,data);
	return res;
}

//滞纳金删除
export async function delBizLateFee(data) {
	const res = await http.post(apiAddress.financialManage.delBizLateFee,data);
	return res;
}
/*********滞纳金结束******************/


/*********托收开始******************/
//托收列表		
export async function selectCollInfoBySearch(data) {
	const res = await http.post(apiAddress.financialManage.selectCollInfoBySearch,data);
	return res;
}

//托收明细
export async function selectCollDetail(data) {
	const res = await http.post(apiAddress.financialManage.selectCollDetail,data);
	return res;
}

//明细导出列表
export async function selectCollDetailToExcel(data) {
	const res = await http.get(apiAddress.financialManage.selectCollDetailToExcel,data);
	return res;
}


/*********托收结束******************/

//员工详情
export async function staffDetailsById(data) {
	const res = await http.post(apiAddress.staff.selectDetailsById,data);
	return res;
}

//银行账户信息
//银行账户列表
export async function bankListBySearch(data) {
	const res = await http.post(apiAddress.bankAccount.selectListBySearch,data);
	return res;
}

//发送短信
export async function smsSendVerify(data) {
	const res = await http.post(apiAddress.bankAccount.smsSendVerify,data);
	return res;
}

//银行账户新增或更新
export async function editBankAccount(data) {
	const res = await http.post(apiAddress.bankAccount.editBankAccount,data);
	return res;
}
//绑定银行卡
export async function postRegVerify(data) {
	const res = await http.post(apiAddress.bankAccount.postRegVerify,data);
	return res;
}

//客户使用银行
export async function selectBankNameForConsumer(data) {
	const res = await http.post(apiAddress.bankAccount.selectBankNameForConsumer,data);
	return res;
}


//银行账户明细
export async function selectDetailById(data) {
	const res = await http.post(apiAddress.bankAccount.selectDetailById,data);
	return res;
}

//区域信息
export async function areaSelectDetailsById(data) {
	const res = await http.post(apiAddress.areaList.selectDetailsById,data);
	return res;
}