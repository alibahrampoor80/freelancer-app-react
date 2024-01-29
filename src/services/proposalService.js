import http from "./httpService.js";

export function changeProposalStatusApi({id, data}) {
    return http.patch(`/proposal/${id}`, data).then(({data}) => data.data);
}

export function getProposalsApi() {
    return http.get(`/proposal/list`).then(({data}) => data.data);
}

export function createProposalsApi(data) {
    return http.post(`/proposal/add`,data).then(({data}) => data.data);
}

