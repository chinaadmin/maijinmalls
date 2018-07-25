/***
 * 公用接口
 * ***/

//返回品牌列表
import _global_ from '@/utils/Global'
import http from '@/utils/http'
import store from '@/store'

export async function s_brandList(url,data) {
	var dataArr = [];
	var url = _global_.api.home.popularBrand;
	var param = "";
	return await http.post(url, param).then(res => {
		if(res){
			dataArr = res.result;
		    store.state.vux.brandList = dataArr;
		}
		return dataArr;
	})
}