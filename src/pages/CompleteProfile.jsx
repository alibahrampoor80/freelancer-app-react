import React from 'react';
import CompleteProfileForm from "../features/auth/CompleteProfileForm.jsx";

const CompleteProfile = () => {
    return (
        <div className={`h-screen bg-secondary-0`}>
            <div className="container xl:max-w-screen-xl">
                <CompleteProfileForm/>
            </div>
        </div>
    );
};

export default CompleteProfile;