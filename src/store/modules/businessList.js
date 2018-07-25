import {fetchBusinessListData,fetchConfList} from '@/api/businessList'
import dataListFilter from '@/utils/businessListFilter.js'
import tool from '@/utils/tool'

const businessList = {
  state: {
    businessList: [],
    controlList: [],
    rowsTotal: 1,
    businessIdInfos: null,
    businessIdFlow: null,
    businessProceeTab: 'first',
  },
  mutations: {
    SET_BUSINESSLIST:(state,obj) =>{
      const filterList = dataListFilter.list(obj.dataList);

      state.controlList = obj.controlList;

      state.rowsTotal = obj.rowsTotal;

      state.businessList = filterList;
    },
    UPDATE_BUSINESS_ID_INFO:(state,obj) =>{
      if(obj !== null ){
        const filterInfo = dataListFilter.infoFilter(obj);
        state.businessIdInfos = filterInfo;
      }else {
        state.businessIdInfos = obj;
      }
    },
    UPDATE_BUSINESS_ID_FLOW:(state,obj) =>{
      const {controls,dataList} = obj;
      const filling = [];
      var _obj ={
        firstStep: [],
        secStep: [],
        thirdStep: [],
        fourthStep: [],
        fifthStep: [],
        sixthStep: [],
        seventhStep: [],
        eightthStep: [],
        ninethStep: [],
        tenthStep: [],
        eleventhStep: [],
        twelfthStep: [],

      }
      for(let i = 0; i < controls.length; i++) {
        const belongIndex = controls[i].mfSeq || false;
         if(controls[i].mfSeq === 1) {
              var obj = {
                mfName: "",
                mfRemark: "",
                mfSeq: "",
                bftdStatus: '',
                bftdId: '',
              }
              obj.mfName =  controls[i].mfName;
               obj.mfRemark =  controls[i].mfRemark;
               obj.mfSeq =  controls[i].mfSeq;
              _obj.firstStep.push(obj);
         }
         if(controls[i].mfSeq === 2) {
            var obj = {
              mfName: "",
              mfRemark: "",
              mfSeq: "",
              bftdStatus: '',
              bftdId: '',

            }
            obj.mfName =  controls[i].mfName;
             obj.mfRemark =  controls[i].mfRemark;
             obj.mfSeq =  controls[i].mfSeq;
            _obj.secStep.push(obj);
         }
         if(controls[i].mfSeq === 3) {
            var obj = {
              mfName: "",
              mfRemark: "",
              mfSeq: "",
              bftdStatus: '',
              bftdId: '',

            }
            obj.mfName =  controls[i].mfName;
             obj.mfRemark =  controls[i].mfRemark;
             obj.mfSeq =  controls[i].mfSeq;
            _obj.thirdStep.push(obj);
         }
         if(controls[i].mfSeq === 4) {
            var obj = {
              mfName: "",
              mfRemark: "",
              mfSeq: "",
              bftdStatus: '',
              bftdId: '',

            }
            obj.mfName =  controls[i].mfName;
             obj.mfRemark =  controls[i].mfRemark;
             obj.mfSeq =  controls[i].mfSeq;
            _obj.fourthStep.push(obj);
         }
          if(controls[i].mfSeq === 5) {
            var obj = {
              mfName: "",
              mfRemark: "",
              mfSeq: "",
              bftdStatus: '',
              bftdId: '',

            }
            obj.mfName =  controls[i].mfName;
             obj.mfRemark =  controls[i].mfRemark;
             obj.mfSeq =  controls[i].mfSeq;
            _obj.fifthStep.push(obj);
         }
          if(controls[i].mfSeq === 6) {
            var obj = {
              mfName: "",
              mfRemark: "",
              mfSeq: "",
              bftdStatus: '',
              bftdId: '',

            }
            obj.mfName =  controls[i].mfName;
             obj.mfRemark =  controls[i].mfRemark;
             obj.mfSeq =  controls[i].mfSeq;
            _obj.sixthStep.push(obj);
         }
          if(controls[i].mfSeq === 7) {
            var obj = {
              mfName: "",
              mfRemark: "",
              mfSeq: "",
              bftdStatus: '',
              bftdId: '',

            }
            obj.mfName =  controls[i].mfName;
             obj.mfRemark =  controls[i].mfRemark;
             obj.mfSeq =  controls[i].mfSeq;
            _obj.seventhStep.push(obj);
         }
          if(controls[i].mfSeq === 8) {
            var obj = {
              mfName: "",
              mfRemark: "",
              mfSeq: "",
              bftdStatus: '',
              bftdId: '',

            }
            obj.mfName =  controls[i].mfName;
             obj.mfRemark =  controls[i].mfRemark;
             obj.mfSeq =  controls[i].mfSeq;
            _obj.eightthStep.push(obj);
         }
          if(controls[i].mfSeq === 9) {
            var obj = {
              mfName: "",
              mfRemark: "",
              mfSeq: "",
              bftdStatus: '',
              bftdId: '',

            }
            obj.mfName =  controls[i].mfName;
             obj.mfRemark =  controls[i].mfRemark;
             obj.mfSeq =  controls[i].mfSeq;
            _obj.ninethStep.push(obj);
         }
          if(controls[i].mfSeq === 10) {
            var obj = {
              mfName: "",
              mfRemark: "",
              mfSeq: "",
              bftdStatus: '',
              bftdId: '',

            }
            obj.mfName =  controls[i].mfName;
             obj.mfRemark =  controls[i].mfRemark;
             obj.mfSeq =  controls[i].mfSeq;
            _obj.tenthStep.push(obj);
         }
          if(controls[i].mfSeq === 11) {
            var obj = {
              mfName: "",
              mfRemark: "",
              mfSeq: "",
              bftdStatus: '',
              bftdId: '',

            }
            obj.mfName =  controls[i].mfName;
             obj.mfRemark =  controls[i].mfRemark;
             obj.mfSeq =  controls[i].mfSeq;
            _obj.eleventhStep.push(obj);
         }
          if(controls[i].mfSeq === 12) {
            var obj = {
              mfName: "",
              mfRemark: "",
              mfSeq: "",
              bftdStatus: '',
              bftdId: '',
            }
            obj.mfName =  controls[i].mfName;
             obj.mfRemark =  controls[i].mfRemark;
             obj.mfSeq =  controls[i].mfSeq;
            _obj.twelfthStep.push(obj);
         }
      }
      dataList[0].cotrols = _obj.firstStep;
      dataList[1].cotrols = _obj.secStep;
      dataList[2].cotrols = _obj.thirdStep;
      dataList[3].cotrols = _obj.fourthStep;
      dataList[4].cotrols = _obj.fifthStep;
      dataList[5].cotrols = _obj.sixthStep;
      dataList[6].cotrols = _obj.seventhStep;
      dataList[7].cotrols = _obj.eightthStep;
      dataList[8].cotrols = _obj.ninethStep;
      dataList[9].cotrols = _obj.tenthStep;
      dataList[10].cotrols = _obj.eleventhStep;
      dataList[11].cotrols = _obj.twelfthStep;
      for(let i = 0; i < dataList.length; i++) {
        const needStatus = dataList[i].bftdStatus;
        for(let k = 0; k < dataList[i].cotrols.length; k++) {
            dataList[i].cotrols[k].bftdStatus = needStatus;
        }
        let dateStr = tool.timeStamptoYMD(dataList[i].bftdHandledate,1);
        dataList[i].bftdHandledate = dateStr;
      }
      state.businessIdFlow = dataList;
    },
    SWITCH_PROCESS_TAB:(state,str="first") =>{  // 不传默认是'first'
      state.businessProceeTab = str;
    }
  },
  actions: {
    updateBusinessList({ commit },obj) {
      commit('SET_BUSINESSLIST',obj);
    },
    updateBusinessIdInfo({commit},data) {
      commit('UPDATE_BUSINESS_ID_INFO',data);
    },
    updateBusinessFlowInfo({commit},data) {
      commit('UPDATE_BUSINESS_ID_FLOW',data);
    },
    switchProcessTab({commit},str) {
      commit('SWITCH_PROCESS_TAB',str)
    }

  }
}

export default businessList
