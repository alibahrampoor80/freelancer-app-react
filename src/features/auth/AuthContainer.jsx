import React, {useEffect, useState} from 'react';
import SendOtpForm from "./SendOtpForm.jsx";
import CheckOtpForm from "./CheckOtpForm.jsx";
import {useMutation} from "react-query";
import {getOtp} from "../../services/authService.js";
import toast from "react-hot-toast";
import useUser from "./useUser.js";
import {useNavigate} from "react-router-dom";
import Loading from "../../ui/Loading.jsx";

const AuthContainer = () => {
    const [step, setStep] = useState(2)
    const [phoneNumber, setPhoneNumber] = useState("09303149371")
    const navigate = useNavigate()
    const {user, isLoading: isLoadingUser} = useUser()

    useEffect(() => {
        if (user) navigate('/', {replace: true})
    }, [user, navigate])

    const {
        isLoading, error,
        data: otpResponse,
        mutateAsync
    } = useMutation({
        mutationFn: getOtp,
    })

    const sendOtpHandler = async (e) => {
        e.preventDefault()
        try {
            const data = await mutateAsync({phoneNumber})
            setStep(2)
            toast.success(data.message)
        } catch (err) {
            toast.error(err?.response?.data?.message)
        }
    }


    const renderStep = () => {
        switch (step) {
            case 1:
                return <SendOtpForm phoneNumber={phoneNumber}
                                    sendOtpHandler={sendOtpHandler}
                                    isLoading={isLoading}
                                    setPhoneNumber={setPhoneNumber}/>
            case 2:
                return <CheckOtpForm step={step}
                                     onBack={() => setStep(1)}
                                     onReSendOtp={sendOtpHandler}
                                     phoneNumber={phoneNumber}
                                     otpResponse={otpResponse}
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