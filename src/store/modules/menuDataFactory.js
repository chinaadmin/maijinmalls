import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
Vue.use(Router)

/* Layout */
import Layout from '../../views/layout/Layout'
let menuDataFactory = {
	loginMenu: "" //例子
}

menuDataFactory.loginMenu = function(data) {
	//1001 这辆管理   1002 财务管理    1000 业务管理  1152渠道管理
	var _array = [];
	var _data = data.data.data.dataList;
	if(_data) {

		for(var i = 0; i < _data.length; i++) {
			if(_data[i].menuId === 1002) {
				//费用管理
				var obj = {
					path: '/financialManage',
					component: Layout,
					redirect: 'dashboard',
					name: 'financialManage',
					meta: {
						title: 'financialManage',
						icon: 'component'
					},
					children: [{
							path: 'receivedList',
							component: _import('financialManage/receivedList/index'),
							name: 'receivedList',
							meta: {
								title: 'receivedList',
							}
						},
						{
							path: 'rcollectionList',
							component: _import('financialManage/rcollectionList/index'),
							name: 'rcollectionList',
							meta: {
								title: 'rcollectionList',
							}
						},
						{
							path: 'remissionList',
							component: _import('financialManage/remissionList/index'),
							name: 'remissionList',
							meta: {
								title: 'remissionList',
							}
						},
						{
							path: 'loanPaymentList',
							component: _import('financialManage/loanPaymentList/index'),
							name: 'loanPaymentList',
							meta: {
								title: 'loanPaymentList',
							}
						},
						{
							path: 'loanReimbursementList',
							component: _import('financialManage/loanReimbursementList/index'),
							name: 'loanReimbursementList',
							meta: {
								title: 'loanReimbursementList',
							}
						},
						{
							path: 'rirectReimbursementList',
							component: _import('financialManage/rirectReimbursementList/index'),
							name: 'rirectReimbursementList',
							meta: {
								title: 'rirectReimbursementList',
							}
						},
						{
							path: 'beenApproval',
							component: _import('financialManage/beenApproval/index'),
							name: 'beenApproval',
							meta: {
								title: 'beenApproval',
							}
						},
						{
							path: 'remittanceList',
							component: _import('financialManage/remittanceList/index'),
							name: 'remittanceList',
							meta: {
								title: 'remittanceList',
							}
						},
					]
				}
				_array.push(obj);
			} else if(_data[i].menuId === 1001) {

				var obj = {
					path: '/vehicleManage',
					component: Layout,
					redirect: 'dashboard',
					name: 'vehicleManage',
					meta: {
						title: 'vehicleManage',
						icon: 'component'
					},
					children: [{
							path: 'vehicleinventory',
							component: _import('vehicleManage/vehicleinventory/index'),
							name: 'vehicleinventory',
							meta: {
								title: 'vehicleinventory'
							}
						},
						{
							path: 'regionalinventory',
							component: _import('vehicleManage/regionalinventory/index'),
							name: 'regionalinventory',
							meta: {
								title: 'regionalinventory'
							}
						},
						{
							path: 'vehicledeployment',
							component: _import('vehicleManage/vehicledeployment/index'),
							name: 'vehicledeployment',
							meta: {
								title: 'vehicledeployment'
							}
						},
						{
							path: '/vehicleManage/purchasingManage',
							component: _import('vehicleManage/purchasingManage/index'),
							redirect: 'noredirect',
							meta: {
								title: 'purchasingManage',
							},
							children: [{
									path: 'purchaseLlist',
									component: _import('vehicleManage/purchasingManage/purchaseLlist/index'),
									name: 'purchaseLlist',
									meta: {
										title: 'purchaseLlist',
									}
								},
								{
									path: 'PickUpList',
									component: _import('vehicleManage/purchasingManage/PickUpList/index'),
									hidden: true,
									name: 'PickUpList',
									meta: {
										title: 'PickUpList',
									}
								},
								{ //跳转到子路由要配置全路径 full path
									path: '/vehicleManage/purchasingManage/registrationlist',
									component: _import('vehicleManage/purchasingManage/registrationlist/index'),
									hidden: true,
									name: 'registrationlist',
									meta: {
										title: 'registrationlist',
									}
								},
							]
						},
						{
							path: '/vehicleManage/vehicleInsurance',
							component: _import('vehicleManage/vehicleInsurance/index'),
							redirect: 'noredirect',
							meta: {
								title: 'vehicleInsurance',
							},
							children: [{
									path: 'vehicleInsuranceList',
									component: _import('vehicleManage/vehicleInsurance/vehicleInsuranceList/index'),
									name: 'vehicleManageList',
									meta: {
										title: 'vehicleInsuranceList'
									}
								},
								{
									path: 'vehicleInsuranceApply',
									component: _import('vehicleManage/vehicleInsurance/vehicleInsuranceApply/index'),
									name: 'vehicleInsuranceApply',
									meta: {
										title: 'vehicleInsuranceApply'
									}
								},
								{
									path: 'insurersList',
									component: _import('vehicleManage/vehicleInsurance/insurersList/index'),
									name: 'insurersList',
									meta: {
										title: 'insurersList'
									}
								},
								//					{
								//						path: 'businessRisksList',
								//						component: _import('vehicleManage/vehicleInsurance/businessRisksList/index'),
								//						name: 'businessRisksList',
								//						meta: {
								//							title: 'businessRisksList'
								//						}
								//					}
							]
						},
						{
							path: '/vehicleManage/violationmanagement',
							component: _import('vehicleManage/violationmanagement/index'),
							redirect: 'dashboard',
							meta: {
								title: 'violationmanagement',
								//					icon: 'component'
							},
							children: [{
									path: 'violationlist',
									component: _import('vehicleManage/violationmanagement/violationlist/index'),
									name: 'violationlist',
									meta: {
										title: 'violationlist'
									}
								},
								{
									path: 'companyhandle',
									component: _import('vehicleManage/violationmanagement/companyhandle/index'),
									name: 'companyhandle',
									meta: {
										title: 'companyhandle'
									}
								},
								{
									path: 'violationstatistics',
									component: _import('vehicleManage/violationmanagement/violationstatistics/index'),
									name: 'violationstatistics',
									meta: {
										title: 'violationstatistics'
									}
								}
							]
						},
						{
							path: 'brandlist',
							component: _import('vehicleManage/brandlist/index'),
							name: 'brandlist',
							meta: {
								title: 'brandlist'
							}
						},
						{
							path: 'modelslist',
							component: _import('vehicleManage/modelslist/index'),
							name: 'modelslist',
							meta: {
								title: 'modelslist'
							}
						},
						{
							path: 'vehiclemodel',
							component: _import('vehicleManage/vehiclemodel/index'),
							name: 'vehiclemodel',
							meta: {
								title: 'vehiclemodel'
							}
						},
						//车辆导入
						//			{
						//				path: 'vehicleimport',
						//				component: _import('vehicleManage/vehicleimport/index'),
						//				name: 'vehicleimport',
						//				meta: {
						//					title: 'vehicleimport'
						//				}
						//			},
						{
							path: 'gpslist',
							component: _import('vehicleManage/gpslist/index'),
							name: 'gpslist',
							meta: {
								title: 'gpslist'
							}
						}
					]
				}
				_array.push(obj);
			} else if(_data[i].menuId === 1000) {
				//业务管理
				var obj = {
					path: '/businessManage',
					component: Layout,
					redirect: 'dashboard',
					name: 'businessManage',
					meta: {
						title: 'businessManage',
						icon: 'component'
					},
					children: [{
						path: 'riskControlAuditList',
						component: _import('businessManage/riskControlAuditList/index'),
						name: 'riskControlAuditList',
						meta: {
							title: 'riskControlAuditList',
							//					noCache: true
						}
					}, {
						path: 'businessList',
						component: _import('businessManage/BusinessList/index'),
						name: 'businessList',
						meta: {
							title: 'businessList',
						}
					}, {
						path: 'contractList',
						component: _import('businessManage/contractList/index'),
						name: 'contractList',
						meta: {
							title: 'contractList',
						}
					}, {
						path: 'contractReceiptsList',
						component: _import('businessManage/ContractReceiptsList/index'),
						name: 'contractReceiptsList',
						meta: {
							title: 'contractReceiptsList',
						}
					}, {
						path: 'collectionList',
						component: _import('businessManage/CollectionList/index'),
						name: 'collectionList',
						meta: {
							title: 'collectionList',
						}
					}, {
						path: 'businessUpload',
						component: _import('businessManage/businessUpload/index'),
						name: 'businessUpload',
						hidden: true,
						meta: {
							title: 'businessUpload',
						}
					}]
				}
				_array.push(obj);
			} else if(_data[i].menuId === 1152) {

				//渠道管理
				var obj = {
					path: '/hannelmanagement',
					component: Layout,
					redirect: 'dashboard',
					name: 'hannelmanagement',
					meta: {
						title: 'hannelmanagement',
						icon: 'component'
					},
					children: [{
							path: 'agentslist',
							component: _import('hannelmanagement/agentslist/index'),
							name: 'agentslist',
							meta: {
								title: 'agentslist',
							}
						},
						{
							path: 'franchiseelist',
							component: _import('hannelmanagement/franchiseelist/index'),
							name: 'franchiseelist',
							meta: {
								title: 'franchiseelist',
							}
						},
						{
							path: 'intermediaries',
							component: _import('hannelmanagement/intermediaries/index'),
							name: 'intermediaries',
							meta: {
								title: 'intermediaries',
							}
						},
					]
				}
				_array.push(obj);
			}
		}
	}

	return _array;
}

export default menuDataFactory