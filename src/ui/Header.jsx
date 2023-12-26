import React from 'react';
import useUser from "../features/auth/useUser.js";

const Header = () => {
    const {data} = useUser()
    // console.log(data)
    return (
        <div className="bg-secondary-0 py-4 px-8 ">
            header
        </div>
    );
};

export default Header;