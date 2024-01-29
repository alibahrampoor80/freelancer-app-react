import React from 'react';
import RHFSelect from "../../ui/RHFSelect.jsx";
import {useForm} from "react-hook-form";
import useChangeProposalStatus from "./useChangeProposalStatus.js";
import {useQueryClient} from "react-query";
import {useParams} from "react-router-dom";
import Loading from "../../ui/Loading.jsx";

const ChangeProposalStatus = ({onClose, proposalId}) => {
    const {id: projectId} = useParams()
    const {isLoading, changeProposalStatus} = useChangeProposalStatus()
    const {register, handleSubmit} =
        useForm()
    const options = [
        {label: "رد شده", value: 0},
        {label: "در انتظار تایید", value: 1},
        {label: "تایید شده", value: 2},
    ]
    const queryClient = useQueryClient()
    const onSubmit = (data) => {
        changeProposalStatus({id: proposalId, data}, {
            onSuccess: () => {
                onClose()
                queryClient.invalidateQueries({queryKey: [`project`, projectId]})
            }
        })
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

export default ChangeProposalStatus;