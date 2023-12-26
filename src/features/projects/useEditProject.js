import {QueryClient, useMutation, useQueryClient} from "react-query";
import {editProjectApi} from "../../services/projectService.js";
import toast from "react-hot-toast";

export default function useEditProject() {
    const queryClient = useQueryClient()
    const {
        data, isLoading: isLoadingEditProject,
        mutateAsync: editProject
    } =
        useMutation({
            mutationFn: editProjectApi,
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
    return {isLoadingEditProject, editProject}
}