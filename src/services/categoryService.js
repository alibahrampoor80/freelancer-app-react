import http from "./httpService.js";

export async function getCategoryApi(data) {
    return await http.get('/category/list', data).then(({data}) => data.data)
}