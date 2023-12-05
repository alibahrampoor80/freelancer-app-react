import React, {useState} from 'react';
import TextField from "../../ui/TextField.jsx";

const CompleteProfileForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    return (
        <div className={'w-full sm:max-w-sm container mt-6'}>
            <form className={'space-y-8'}>
                <TextField label={'نام و نام خانوادگی'} name={'name'}
                           value={name}
                           onChange={event => setName(event.target.value)}/>
                <TextField label={'ایمیل'} name={'email'}
                           value={email}
                           onChange={event => setEmail(event.target.value)}/>
                <button className={`btn btn--primary w-full`}>تایید</button>
            </form>
        </div>
    );
};

export default CompleteProfileForm;