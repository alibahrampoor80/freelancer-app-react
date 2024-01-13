import {useMutation, useQuery, useQueryClient} from "react-query";
import {logoutApi} from "../../services/authService.js";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

export default function useLogOut() {
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const {isLoading, mutate: logout} = useMutation({
        mutationFn: logoutApi,
        onSuccess: (data) => {
            queryClient.removeQueries(
                navigate('/auth', {replace: true})
            )
        },

    })
    return {isLoading, logout}
}