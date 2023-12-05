import React, {useState} from 'react';

import AuthContainer from "../features/auth/AuthContainer.jsx";

const Auth = () => {

    return (
        <div className={'flex justify-center pt-10'}>
            <div className={'w-full sm:max-w-sm'}>
              <AuthContainer/>
            </div>
        </div>
    );
};

export default Auth;