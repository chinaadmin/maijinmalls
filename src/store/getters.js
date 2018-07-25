const getters = {
  sidebar: state => state.app.sidebar,
  language: state => state.app.language,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  myrouter:state => state.permission.myrouter,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  status: state => state.user.status,
  roles: state => state.user.roles,
  setting: state => state.user.setting,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  errorLogs: state => state.errorLog.logs,
  riskControlTabStatus: state=> state.dialog.riskControlTab,
  allComLib: state => state.dictLib.allComLib,
  cusTypeLib: state => state.dictLib.cusTypeLib,
  bigAreaLib: state => state.dictLib.bigAreaLib,
  certificateTypeLib: state => state.dictLib.certificateTypeLib,
  marriageStatusLib: state => state.dictLib.marriageStatusLib,
  businessNatureLib: state => state.dictLib.businessNatureLib,
  industryLib: state => state.dictLib.industryLib,
  enterpriseCertificateTypeLib: state => state.dictLib.enterpriseCertificateTypeLib,
  cusResultList: state => state.dictLib.cusResult,
  cusStatusList: state => state.dictLib.custStatus,
  cusSourceList: state => state.dictLib.netCustSource,
  intentBuyTimeList: state => state.dictLib.intentBuyTime,
  supplierListLib: state => state.dictLib.supplierListLib,
  vehiclebrandList: state => state.dictLib.vehiclebrand,
  insuranceCompanyLib: state => state.dictLib.insuranceCompany,
  payWayListLib:state => state.dictLib.payWayList,

  /*采购列表getter输出开始*/
  purcahseCurrentId:state => state.purchaseApply.purcahseCurrentId,
  purchaseFlowActive:state => state.purchaseApply.purchaseFlowActive,
  purchaseCurrentInfos: state => state.purchaseApply.purchaseCurrentInfos,

  /*业务列表getter输出开始*/
  ConfListData: state => state.businessList.confList,
  businessProgressShow: state => state.dialog.businessProgressShow,
  businessList: state => state.businessList.businessList,
  rowsTotal: state => state.businessList.rowsTotal,
  controlList: state => state.businessList.controlList,
  businessIdInfos: state => state.businessList.businessIdInfos,
  businessIdFlow: state => state.businessList.businessIdFlow,
  businessProceeTab: state => state.businessList.businessProceeTab
}


export default getters
