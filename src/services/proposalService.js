import http from "./httpService.js";

export function changeProposalStatusApi({id, data}) {
    return http.patch(`/proposal/${id}`, data).then(({data}) => data.data);
}

