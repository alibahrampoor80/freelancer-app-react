import React, {useEffect} from 'react';
import TextField from "../../ui/TextField.jsx";
import {useMutation} from "react-query";
import {completeProfile} from "../../services/authService.js";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import Loading from "../../ui/Loading.jsx";
import {useForm} from "react-hook-form";
import RadioInputGroup from "../../ui/RadioInputGroup.jsx";
import useUser from "./useUser.js";

const CompleteProfileForm = () => {
    const {
        register, formState: {errors},
        handleSubmit, getValues, watch
    } = useForm()

    const navigate = useNavigate()
    const {data, isLoading, mutateAsync} = useMutation({
        mutationFn: completeProfile
    })
    const {user} = useUser()

    useEffect(() => {
        if (user) navigate('/', {replace: true})
    }, [user, navigate])

    const onSubmit = async (data) => {
        console.log(data)
        try {
            const {user, message} = await mutateAsync(data)
            toast.success(message)

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
        <div className={'flex flex-col items-center gap-y-6 pt-10'}>
            <h1 className={'font-bold text-3xl text-secondary-700'}>تکمیل اطلاعات</h1>
            <div className={'w-full sm:max-w-sm '}>
                <form className={'space-y-8'} onSubmit={handleSubmit(onSubmit)}>
                    <TextField label={'نام و نام خانوادگی'}
                               name={'name'}
                               register={register}
                               validationSchema={{
                                   required: "نام و نام خانوادگی ضروری است"
                               }}
                               errors={errors}
                               required
                    />
                    <TextField label={'ایمیل'}
                               name={'email'}
                               register={register}
                               validationSchema={{
                                   required: "ایمیل ضروری است",
                                   pattern: {
                                       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                       message: "ایمیل وارد شده نامعتبر است!"
                                   }
                               }}
                               errors={errors}
                               required
                    />

                    <RadioInputGroup errors={errors} register={register} watch={watch}
                                     configs={{
                                         name: "role",
                                         validationSchema: {required: "انتخاب نقش ضروری است!"},
                                         options: [
                                             {value: "OWNER", label: "کارفرما"}, {value: "FREELANCER", label: "فریلنسر"}
                                         ]
                                     }}
                    />
                    <div>
                        {
                            isLoading ? <Loading/> : <button
                                className={`btn btn--primary w-full`}>تایید</button>
                        }
                    </div>

                </form>
            </div>
        </div>
    );
};

export default CompleteProfileForm;