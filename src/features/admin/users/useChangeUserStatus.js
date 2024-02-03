import {useMutation} from "react-query";
import {changeUserStatusApi} from "../../../services/authService.js";
import toast from "react-hot-toast";

export default function useChangeUserStatus() {
    const {isLoading, mutate: changeUserStatus} = useMutation({
        mutationFn: changeUserStatusApi,
        onSuccess: (data) => {
            toast.success(data.message)
        },
        onError: (err) => toast.error(err?.response?.data?.message)
    })
    return {changeUserStatus, isLoading}
}