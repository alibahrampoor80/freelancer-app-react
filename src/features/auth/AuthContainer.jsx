import React, {useState} from 'react';
import SendOtpForm from "./SendOtpForm.jsx";
import CheckOtpForm from "./CheckOtpForm.jsx";
import {useMutation} from "react-query";
import {getOtp} from "../../services/authService.js";
import toast from "react-hot-toast";
import {useForm} from "react-hook-form";

const AuthContainer = () => {
    const [step, setStep] = useState(1)
    const {
        register, formState: {errors},
        handleSubmit, getValues
    } = useForm()

    const {
        isLoading, error,
        data: otpResponse,
        mutateAsync
    } = useMutation({
        mutationFn: getOtp,
    })
    const sendOtpHandler = async (data) => {

        try {
            const {message} = await mutateAsync(data)
            setStep(2)
            toast.success(message)
        } catch (err) {
            toast.error(err?.response?.data?.message)
        }
    }


    const renderStep = () => {
        switch (step) {
            case 1:
                return <SendOtpForm register={register}
                                    sendOtpHandler={handleSubmit(sendOtpHandler)}
                                    isLoading={isLoading}
                />
            case 2:
                return <CheckOtpForm step={step}
                                     onBack={() => setStep(1)}
                                     onReSendOtp={sendOtpHandler}
                                     register={register}
                                     otpResponse={otpResponse}
                                     phoneNumber={getValues("phoneNumber")}
                />
            default :
                return null
        }
    }

    return (
        renderStep()
    );
};

export default AuthContainer;