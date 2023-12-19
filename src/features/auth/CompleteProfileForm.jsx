import React, {useState} from 'react';
import TextField from "../../ui/TextField.jsx";
import RadioInput from "../../ui/RadioInput.jsx";
import {useMutation} from "react-query";
import {completeProfile} from "../../services/authService.js";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import Loading from "../../ui/Loading.jsx";

const CompleteProfileForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("")
    const navigate = useNavigate()
    const {data, isLoading, mutateAsync} = useMutation({
        mutationFn: completeProfile
    })
    const handelSubmit = async (e) => {
        e.preventDefault()
        try {
            const {user, message} = await mutateAsync({name, email, role})
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
        <div className={'flex justify-center pt-10'}>
            <div className={'w-full sm:max-w-sm '}>
                <form className={'space-y-8'} onSubmit={handelSubmit}>
                    <TextField label={'نام و نام خانوادگی'} name={'name'}
                               value={name}
                               onChange={event => setName(event.target.value)}/>
                    <TextField label={'ایمیل'} name={'email'}
                               value={email}
                               onChange={event => setEmail(event.target.value)}/>
                    <div className="flex items-center justify-center gap-x-2">

                        <RadioInput name={'role'} label={'کارفرما'} value={'OWNER'}
                                    onChange={e => setRole(e.target.value)}
                                    checked={role === "OWNER"}
                                    id={'OWNER'}
                        />
                        <RadioInput name={'role'} label={'فریلنسر'} value={'FREELANCER'}
                                    onChange={e => setRole(e.target.value)}
                                    checked={role === "FREELANCER"}
                                    id={'FREELANCER'}
                        />

                    </div>
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