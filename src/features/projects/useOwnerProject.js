import {useQuery} from "react-query";
import {getUser} from "../../services/authService.js";
import {getOwnerProjectsApi} from "../../services/projectService.js";

export default function useOwnerProjects() {
    const {data, isLoading} = useQuery({
        queryKey: ["owner-projects"],
        queryFn: getOwnerProjectsApi,
        retry: false,
        // refetchOnWindowFocus: true
    })
    const {projects} = data || []
    return {isLoading, projects}
}