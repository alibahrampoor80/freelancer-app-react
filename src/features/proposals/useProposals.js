import {useQuery} from "react-query";
import {getProposalsApi} from "../../services/proposalService.js";

export default function useProposals() {
    const {data, isLoading} = useQuery({
        queryKey: ['proposals'],
        queryFn: getProposalsApi
    })
    const {proposals} = data || {}
    return {proposals, isLoading}
}