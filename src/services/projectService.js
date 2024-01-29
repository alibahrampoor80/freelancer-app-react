import http from "./httpService.js";

export async function getOwnerProjectsApi(data) {
    return await http.get('/project/owner-projects', data).then(({data}) => data.data)
}

export async function removeProjectApi(id) {
    return await http.delete(`/project/${id}`).then(({data}) => data.data)
}

export async function createProjectApi(data) {
    return await http.post(`/project/add`, data).then(({data}) => data.data)
}

export async function editProjectApi({id, newProject}) {
    return await http.patch(`/project/update/${id}`, newProject).then(({data}) => data.data)
}

export function changeProjectStatusApi({id, data}) {
    return http.patch(`/project/${id}`, data).then(({data}) => data.data);
}

export function getProjectApi(id) {
    return http.get(`/project/${id}`).then(({data}) => data.data);
}

export function getProjectsApi(qs) {
    return http.get(`/project/list${qs}`).then(({data}) => data.data);
}

