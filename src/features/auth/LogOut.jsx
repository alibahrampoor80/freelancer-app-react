import React from 'react';
import {HiArrowRightOnRectangle} from "react-icons/hi2";
import useLogOut from "./useLogOut.js";
import Loading from "../../ui/Loading.jsx";

const LogOut = () => {
    const {isLoading, logout} = useLogOut()
    return (
        isLoading ? <Loading/> : <button onClick={logout}>
            <HiArrowRightOnRectangle className={`w-5 h-5 text-secondary-500 hover:text-error`}/>
        </button>
    );
};

export default LogOut;