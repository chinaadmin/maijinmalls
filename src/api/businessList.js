// import ajax from '@/utils/http'
import {post} from '@/utils/request'
import apiUrl from './apiUrl'
import ajax from '@/utils/http'

const {loanUrl,confUrl} = apiUrl;

export async function fetchBusinessListData(data) {
	const res = await post(loanUrl,data);
	return res;
}
export async function fetchConfList(data) {
	const res = await ajax.post(confUrl,data);
	return res;
}
export async function fetchCustomData(data) {
	const res = await ajax.post(confUrl,data)
	return res;
}
