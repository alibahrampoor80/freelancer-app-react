import {useMutation, useQueryClient} from "react-query";
import toast from "react-hot-toast";
import {createProposalsApi} from "../../services/proposalService.js";

export default function useCreateProposal() {
    const queryClient = useQueryClient()
    const {
        data, isLoading: isLoadingCreateProject,
        mutateAsync: createProposal
    } =
        useMutation({
            mutationFn: createProposalsApi,
            onSuccess: async (data) => {
                toast.success(data.message)
                await queryClient.invalidateQueries({
                    queryKey: [`proposals`],
                })
            },
            onError: (error) => {
                toast.error(error?.response?.data?.message)
            }
        })
    return {isLoadingCreateProject, createProposal}
}