import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {HiArrowRight} from "react-icons/hi";
import {useMoveBack} from "../hooks/useMoveBack.js";

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className={`h-screen bg-secondary-0`}>
            <div className="container xl:max-w-screen-xl">
                <div className={'sm:max-w-sm flex justify-center mt-5'}>
                    <div>
                        <h1 className={'font-bold text-xl text-secondary-700 mb-8'}>
                            صفحه ی مورد نظر پیدا نشد :(
                        </h1>
                        <button className={`text-primary-900 flex justify-center gap-x-2`} onClick={useMoveBack()}>
                            <HiArrowRight className={'w-6 h-6 text-primary-900'}/>
                            <span>برگشت</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;