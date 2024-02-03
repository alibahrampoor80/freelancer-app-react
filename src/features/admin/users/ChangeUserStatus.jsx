import RHFSelect from "../../../ui/RHFSelect.jsx";
import Loading from "../../../ui/Loading.jsx";
import {useForm} from "react-hook-form";
import {useQueryClient} from "react-query";
import useChangeUserStatus from "./useChangeUserStatus.js";


const changeUserStatus = ({onClose, userId}) => {
    const options = [
        {label: "رد شده", value: 0},
        {label: "در تایید انتظار", value: 1},
        {label: "تایید شده", value: 2},
    ]
    const {register, handleSubmit} = useForm()
    const {isLoading, changeUserStatus} = useChangeUserStatus()
    const queryClient = useQueryClient()
    const onSubmit = (data) => {
        changeUserStatus(
            { userId, data }, // {userId, data: {status:0, 1, 2}}
            {
                onSuccess: () => {
                    onClose();
                    queryClient.invalidateQueries({ queryKey: ["users"] });
                },
            }
        );
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <RHFSelect name={`status`} label={`تغییر وضعیت`}
                           register={register} required
                           options={options}/>
                <div className="mt-8">
                    {
                        isLoading ? <Loading/> :
                            <button className={`btn btn--primary w-full`}
                                    type={'submit'}>تایید</button>
                    }
                </div>
            </form>
        </div>
    );
};

export default changeUserStatus;