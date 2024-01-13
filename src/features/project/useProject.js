import {useQuery} from "react-query";
import {getUser} from "../../services/authService.js";
import {getOwnerProjectsApi, getProjectApi} from "../../services/projectService.js";
import {useParams} from "react-router-dom";

export default function useProject() {
    const {id} = useParams()

    const {data, isLoading} = useQuery({
        queryKey: ["project", id],
        queryFn: () => getProjectApi(id),
        retry: false,
        // refetchOnWindowFocus: true
    })
    const {project} = data || []
    return {isLoading, project}
}