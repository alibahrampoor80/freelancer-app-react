import {useQuery} from "react-query";
import {getUser} from "../../services/authService.js";

export default function useUser() {
    return useQuery({
        queryKey: ["get-user"],
        queryFn: getUser,
        retry: false,
        // refetchOnWindowFocus: true
    })
}