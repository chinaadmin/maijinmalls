const dictLib = {
	state: {
		allComLib: [],
		cusTypeLib: [],
		bigAreaLib: [],
		certificateTypeLib: [],
		marriageStatusLib: [],
		businessNatureLib: [],
		industryLib: [],
		enterpriseCertificateTypeLib: [],
		cusResult:[],
		custStatus:[],
		netCustSource:[],
		intentBuyTime:[],
		supplierListLib: [],
		vehiclebrand: [],
		payWayList:[],
	},
	mutations: {
		ADD_ALL_COM_LIB: (state,arr) =>{
			state.allComLib = arr;
		},
		ADD_CUS_TYPE_LIB: (state,arr) =>{
			state.cusTypeLib = arr;
		},
		ADD_BIGAREA_LIB: (state,arr) => {
			state.bigAreaLib = arr ;
		},
		ADD_CERTIFICATE_TYPE_LIB: (state,arr) => {
			state.certificateTypeLib = arr;
		},
		ADD_MARRIAGE_STATUS_LIB: (state ,arr) => {
			state.marriageStatusLib = arr;
		},
		ADD_BUSINESS_NATURE_LIB: (state,arr) => {
			state.businessNatureLib = arr;
		},
		ADD_INDUSTRY_LIB:(state,arr) =>{
			state.industryLib = arr;
		},
		ADD_ENTERPRISE_CERTIFICATE_TYPE_LIB: (state,arr) => {
			state.enterpriseCertificateTypeLib = arr;
		},
		CUS_RESULT: (state,arr) => {
			state.cusResult = arr;
		},
		CUS_STATUS: (state,arr) => {
			state.custStatus = arr;
		},
		CUS_SOURSE: (state,arr) => {
			state.netCustSource = arr;
		},
		CUS_INTENT_BUYTIME: (state,arr) => {
			state.intentBuyTime = arr;
		},
		ADD_SUPPLIER_LIST_LIST:(state,arr) => {
			state.supplierListLib = arr;
		},
		VEHICLE_BRAND:(state,arr) => {
			state.vehiclebrand = arr;
		},
		PAY_WAY:(state,arr) => {
			state.payWayList = arr;
		},
	},
	actions: {
		addAllComLib({commit},arr) {
			return new Promise(resolve =>{
				commit('ADD_ALL_COM_LIB',arr)
				resolve()
			})
		},
		addCusTypeLib({commit},arr) {
			return new Promise(resolve =>{
				commit('ADD_CUS_TYPE_LIB',arr);
				resolve()
			})
		},
		addBigAreaLib({commit},arr) {
			return new Promise(resolve =>{
				commit('ADD_BIGAREA_LIB',arr);
				resolve()
			})
		},
		addCertificateTypeLib({commit},arr) {
			return new Promise( resolve =>{
				commit('ADD_CERTIFICATE_TYPE_LIB',arr);
				resolve()
			})
		},
		addMarriageStatusLib({commit},arr) {
			return new Promise( resolve =>{
				commit('ADD_MARRIAGE_STATUS_LIB',arr);
				resolve()
			})
		},
		addBusinessNatureLib({commit},arr) {
			return new Promise( resolve =>{
				commit('ADD_BUSINESS_NATURE_LIB',arr);
				resolve()
			})
		},
		addIndustryLib({commit},arr) {
			return new Promise( resolve =>{
				commit('ADD_INDUSTRY_LIB',arr);
				resolve()
			})
		},
		addEnterpriseCertificateTypeLib({commit},arr) {
			return new Promise( resolve =>{
				commit('ADD_ENTERPRISE_CERTIFICATE_TYPE_LIB',arr);
				resolve()
			})
		},
		//网络客户跟进结果
		cusResult({commit},arr) {
			return new Promise( resolve =>{
				commit('CUS_RESULT',arr);
				resolve()
			})
		},
		//网络客户跟进状态
		custStatusLib({commit},arr) {
			return new Promise( resolve =>{
				commit('CUS_STATUS',arr);
				resolve()
			})
		},
		//网络客户来源
		custSource({commit},arr) {
			return new Promise( resolve =>{
				commit('CUS_SOURSE',arr);
				resolve()
			})
		},
		//意向购车时间
		custIntentBuyTime({commit},arr) {
			return new Promise( resolve =>{
				commit('CUS_INTENT_BUYTIME',arr);
				resolve()
			})
		},
		addSupplierListLib({commit},arr) {
			return new Promise( resolve =>{
				commit('ADD_SUPPLIER_LIST_LIST',arr);
				resolve()
			})
		},
		//车辆品牌
		vehiclebrandList({commit},arr) {
			return new Promise( resolve =>{
				commit('VEHICLE_BRAND',arr);
				resolve()
			})
		},
		//支付方式
		payWayDo({commit},arr) {
			return new Promise( resolve =>{
				commit('PAY_WAY',arr);
				resolve()
			})
		},
	}
}

export default dictLib;