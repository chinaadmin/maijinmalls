import apiUrl from './apiUrl'
import ajax from '@/utils/http'

const {customList} = apiUrl;

export async function fetchCustomData(data) {
	// const param = ...data;
	const res = await ajax.post(customList.selectListBySearch,param)
	return res;
}
