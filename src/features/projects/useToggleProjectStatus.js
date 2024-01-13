import {QueryClient, useMutation, useQueryClient} from "react-query";
import {createProjectApi, changeProjectStatusApi} from "../../services/projectService.js";
import toast from "react-hot-toast";

export default function useToggleStatusProject() {
    const queryClient = useQueryClient()
    const {isLoading: isLoadingCreateProject, mutateAsync: toggleProjectStatus} =
        useMutation({
            mutationFn: changeProjectStatusApi,
            onSuccess: async (data) => {
                toast.success(data.message)
                await queryClient.invalidateQueries({
                    queryKey: [`owner-projects`],
                })
            },
            onError: (error) => {
                toast.error(error?.response?.data?.message)
            }
        })
    return {isLoadingCreateProject, toggleProjectStatus}
}