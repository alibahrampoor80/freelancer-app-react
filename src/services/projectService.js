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

