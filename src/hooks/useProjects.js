import {useQuery} from "react-query";
import {getProjectsApi} from "../services/projectService.js";
import {useLocation} from "react-router-dom";
import queryString from 'query-string'

export default function useProjects() {
    const {search} = useLocation()
    const queryObject = queryString.parse(search)

    const {data, isLoading} = useQuery({
        queryKey: ["projects", queryObject],
        queryFn: () => getProjectsApi(search),
        retry: false,
        // refetchOnWindowFocus: true
    })
    const {projects} = data || []
    return {isLoading, projects}
}