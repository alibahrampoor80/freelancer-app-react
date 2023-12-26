import React, {useState} from 'react';
import TextField from "../../ui/TextField.jsx";
import {getOtp} from "../../services/authService.js";
import {useMutation} from "react-query";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading.jsx";

const SendOtpForm = ({register, setPhoneNumber, sendOtpHandler, isLoading}) => {


    return (
        <div>
            <form className={'space-y-4'} onSubmit={sendOtpHandler}>
                <TextField
                           name={'phoneNumber'}
                           register={register}
                           classNameLabel={"font-bold"}
                           label={'شماره موبایل'}
                           required
                />
                <div className={'flex justify-center'}>
                    {
                        isLoading ? <Loading/> :
                            <button className={'btn btn--primary w-full'}
                                    type={'submit'}>ارسال کد تایید</button>
                    }
                </div>
            </form>
        </div>
    );
};

export default SendOtpForm;