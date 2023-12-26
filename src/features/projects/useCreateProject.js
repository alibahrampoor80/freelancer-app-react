import {QueryClient, useMutation, useQueryClient} from "react-query";
import {createProjectApi} from "../../services/projectService.js";
import toast from "react-hot-toast";

export default function useCreateProject() {
    const queryClient = useQueryClient()
    const {
        data, isLoading: isLoadingCreateProject,
        mutateAsync: createProject
    } =
        useMutation({
            mutationFn: createProjectApi,
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
    return {isLoadingCreateProject, createProject}
}