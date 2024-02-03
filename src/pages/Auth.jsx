import React, {useState} from 'react';

import AuthContainer from "../features/auth/AuthContainer.jsx";

const Auth = () => {

    return (
        <div className={`h-screen bg-secondary-0`}>
            <div className={'container xl:max-w-screen-xl'}>
                <div className={'flex justify-center pt-10'}>
                    <div className={'w-full sm:max-w-sm'}>
                        <AuthContainer/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;