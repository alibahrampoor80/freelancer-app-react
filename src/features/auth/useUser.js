import {useQuery} from "react-query";
import {getUser} from "../../services/authService.js";

export default function useUser() {
    const {isLoading, data} = useQuery({
        queryKey: ["user"],
        queryFn: getUser,
        retry: false,
        // refetchOnWindowFocus: true
    })
    const {user} = data || {}
    return {isLoading, user}
}