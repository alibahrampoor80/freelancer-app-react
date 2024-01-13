import React from 'react';
import HeaderMenu from "./HeaderMenu.jsx";
import UserAvatar from "../features/auth/UserAvatar.jsx";
import useUser from "../features/auth/useUser.js";

const Header = () => {
    const {isLoading} = useUser()
    return (
        <div className={`bg-secondary-0 py-4 px-8 border-b border-secondary-200 `}>
            <div
                className={`container xl:max-w-screen-lg flex items-center justify-end gap-x-8 ${isLoading ? "blur-sm" : ""}`}>
                <UserAvatar/>
                <HeaderMenu/>
            </div>
        </div>
    );
};

export default Header;