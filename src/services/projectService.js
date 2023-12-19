import http from "./httpService.js";

export async function getOwnerProjectsApi(data) {
    return await http.get('/project/owner-projects', data).then(({data}) => data.data)
}