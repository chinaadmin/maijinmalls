//业务管理 客户管理api

import {post}from '@/utils/request'
import apiUrl from '@/api/apiUrl'
const {customListUrl} = apiUrl;

export async function getCustomList(data) {
	const res = await post(customListUrl,data);
	return res;
}