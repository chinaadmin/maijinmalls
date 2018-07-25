const purchaseApply = {
	state: {
		purcahseCurrentId: "",
		purchaseCurrentInfos: '',
		purchaseFlowActive: {
			vehPaId: '',  //当前采购单ID
			loanFromId: '',//表单来源id
			loanRecId: '',  //操作id
			dyTitle: '',    //动态切换页面的标题
		},
	},
	mutations: {
		PUT_CURRENT_ID:(state,id) =>{
			state.purcahseCurrentId = id;
		},
		UPDATE_PURCHASE_FLOW:(state,obj) =>{
			const{ vehPaId = "", dyTitle = "",loanRecId = "",loanFromId = ""} = obj;
			state.purchaseFlowActive.vehPaId = vehPaId;
			state.purchaseFlowActive.dyTitle = dyTitle;
			state.purchaseFlowActive.loanFromId = loanFromId;
			state.purchaseFlowActive.loanRecId = loanRecId;
		},
		SAVE_CURRENT_PURCHASE_INFO:(state,obj) =>{
			state.purchaseCurrentInfos = obj;
		}
	},
	actions: {
		saveCurrentid({commit},id) {
			return new Promise(resolve =>{
				commit('PUT_CURRENT_ID',id);
				resolve()
			})
		},
		updatePurchaseFlow({commit},obj) {
			return new Promise(resolve =>{
				commit('UPDATE_PURCHASE_FLOW',obj);
				resolve()
			})
		},
		saveCurrentIdInfos({commit},obj) {
			return new Promise(resolve =>{
				commit('SAVE_CURRENT_PURCHASE_INFO',obj);
				resolve()
			})
		}
	}
}

export default purchaseApply