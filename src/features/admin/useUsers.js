import {useQuery} from "react-query";
import {getUsersApi} from "../../services/authService.js";

export default function useUsers() {
    const {data, isLoading} = useQuery({
        queryKey: ["users"],
        queryFn: getUsersApi,
        retry: false,
        // refetchOnWindowFocus: true
    })
    const {users} = data || []
    return {isLoading, users}
}