// dialog.js
const dialog = {
	state: {
	  riskControlTab: true,
	  businessProgressShow: 1,
	},
	mutations: {
	  SET_RISKCONTROLTAB: (state) => {
	    state.riskControlTab = !state.riskControlTab;
	  },
	  SET_BUSINESSPROGRESS: (state,id) => {
	    state.businessProgressShow = id;
	  },
	},
	actions: {
		switchRiskComtrolTabStatus({ commit }) {
		  return new Promise(resolve => {
		    commit('SET_RISKCONTROLTAB');
		    resolve()
		  })
		},
		switchBusinessProgressShow({ commit },id) {
		  return new Promise(resolve => {
		    commit('SET_BUSINESSPROGRESS',id);
		    resolve()
		  })
		},
	}
}

export default dialog;