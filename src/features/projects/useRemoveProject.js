import {useMutation, useQueryClient} from "react-query";
import {removeProjectApi} from "../../services/projectService.js";
import toast from "react-hot-toast";

export default function useRemoveProject() {
    const queryClient = useQueryClient()
    const {isLoading: isLoadingDelete, mutate: removeProject} = useMutation({
        mutationFn: removeProjectApi,
        onSuccess: async (data) => {
            toast.success(data.message)
            await queryClient.invalidateQueries({queryKey: ['owner-projects']})
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message)
        }

    })
    return {isLoadingDelete, removeProject}
}