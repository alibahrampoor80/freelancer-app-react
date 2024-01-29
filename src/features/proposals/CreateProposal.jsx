import React from 'react';
import {useForm} from "react-hook-form";
import TextField from "../../ui/TextField.jsx";
import Loading from "../../ui/Loading.jsx";
import useCreateProposal from "./useCreateProposal.js";

const CreateProposal = ({onClose, projectId}) => {
    const {handleSubmit, register, formState: {errors}} =
        useForm()

    const {createProposal, isLoadingCreateProject} = useCreateProposal()
    const onSubmit = (data) => {
        createProposal({...data, projectId}, {
            onSuccess: () => onClose
        })
    }
    return (
        <div>
            <form className={`space-y-8`} onSubmit={handleSubmit(onSubmit)}>
                <TextField label={`توضیحات`}
                           name={`description`}
                           register={register}
                           required
                           validationSchema={{
                               required: "توضیحات ضروری است",
                               minLength: {
                                   value: 10,
                                   message: "حداقل 10 کارکتر وارد کیند"
                               },
                           }}
                           errors={errors}
                />
                <TextField label={`قیمت`}
                           name={`price`}
                           type={`number`}
                           register={register}
                           required
                           validationSchema={{
                               required: "قیمت ضروری است",
                           }}
                           errors={errors}
                />
                <TextField label={`مدت زمان`}
                           name={`duration`}
                           type={`number`}
                           register={register}
                           required
                           validationSchema={{
                               required: "مدت زمان ضروری است",
                           }}
                           errors={errors}
                />
                <div className={`!mt-8`}>
                    {
                        isLoadingCreateProject ? <Loading/> :
                            <button type={`submit`} className={`btn btn--primary w-full`}>تایید</button>
                    }
                </div>
            </form>
        </div>
    );
};

export default CreateProposal;