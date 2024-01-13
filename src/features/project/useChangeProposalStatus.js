import {useParams} from "react-router-dom";
import {useMutation, useQuery, useQueryClient} from "react-query";
import {getProjectApi} from "../../services/projectService.js";
import {changeProposalStatusApi} from "../../services/proposalService.js";
import toast from "react-hot-toast";

export default function useChangeProposalStatus() {

    const {isLoading, mutate: changeProposalStatus} = useMutation({
        mutationFn: changeProposalStatusApi,
        onSuccess: (data) => {
            toast.success(data.message)

        },
        onError: (error) => toast.error(error?.response?.data?.message)
    })
    return {isLoading, changeProposalStatus}
}