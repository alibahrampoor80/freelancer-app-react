import React, {useEffect, useState} from 'react';
import OTPInput from "react-otp-input";
import {useMutation} from "react-query";
import {checkOtp} from "../../services/authService.js";
import toast from "react-hot-toast";
import {Link, useNavigate} from "react-router-dom";
import {HiArrowRight} from "react-icons/hi";
import {CiEdit} from "react-icons/ci";
import Loading from "../../ui/Loading.jsx";

const RESEND_TIME = 90
const CheckOtpForm = ({phoneNumber, onBack, onReSendOtp, otpResponse}) => {
    const [otp, setOtp] = useState("")
    const [time, setTime] = useState(RESEND_TIME)
    const navigate = useNavigate()
    const {isLoading, error, data, mutateAsync} = useMutation({
        mutationFn: checkOtp,
    })

    useEffect(() => {
        const timer = time > 0 && setInterval(() => {
            setTime(t => t - 1)
        }, 1000)
        return () => {
            if (timer) clearInterval(timer)
        }
    }, [time])

    const checkOtpHandler = async (e) => {
        e.preventDefault()
        try {
            const {message, user} = await mutateAsync({phoneNumber, otp})
            toast.success(message)
            if (!user.isActive) return navigate('/complete-profile')
            if (!user.status !== 2) {
                navigate("/")
                toast("پروفایل شما در انتظار تایید است", {icon: "😒"})
                return
            }
            if (user.role === "OWNER") return navigate('/owner')
            if (user.role === "FREELANCER") return navigate('/freelancer')
        } catch (err) {
            toast.error(err?.response?.data?.message)
        }
    }

    return (
        <div>
            <button onClick={onBack}>
                <HiArrowRight className={'w-6 h-6 text-secondary-500'}/>
            </button>
            {
                otpResponse && <p className={' flex items-center gap-x-2 my-4'}>
                    <span>{otpResponse?.message}</span>
                    <button onClick={onBack}>
                        <CiEdit className={'w-6 h-6 text-secondary-500'}/>
                    </button>
                </p>
            }
            <div className="mb-4 text-secondary-500">
                <div>{time > 0 ? <p>{time} ثانیه تا ارسال مجدد کد</p> :
                    <button onClick={onReSendOtp}>ارسال مجدد کد</button>}</div>
            </div>
            <form className={'space-y-8'} onSubmit={checkOtpHandler}>
                <p className={'font-bold to-secondary-800'}>کد تایید را وارد کنید</p>
                <OTPInput value={otp}
                          onChange={setOtp}
                          numInputs={6}
                          renderSeparator={<span>-</span>}
                          containerStyle={'flex flex-row-reverse gap-x-2 justify-center'}
                          inputStyle={{
                              width: "2.5rem",
                              padding: "0.5rem 0.2rem",
                              border: "1px solid rgb(var(--color-primary-300))",
                              borderRadius: "0.5rem"
                          }}
                          renderInput={(props) => <input type="number" {...props}/>}
                />
                {
                    isLoading ? <Loading/> :
                        <button className={`btn btn--primary w-full`}>تایید کد</button>
                }
            </form>
        </div>
    );
};

export default CheckOtpForm;