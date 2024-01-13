import React, {useState} from 'react';
import {Switch} from "@headlessui/react";
import useToggleStatusProject from "./useToggleProjectStatus.js";
import Loading from "../../ui/Loading.jsx";
import Toggle from "../../ui/Toggle.jsx";

const ToggleProjectStatus = ({project}) => {
    const {status} = project

    const {isLoadingCreateProject, toggleProjectStatus} = useToggleStatusProject()
    const toggleHandler = () => {
        const newStatus = status === "OPEN" ? "CLOSED" : "OPEN"
        toggleProjectStatus({
            id: project._id,
            data: {status: newStatus}
        })
    }
    return (
        <div className={`min-w-[5rem]`}>
            {
                isLoadingCreateProject ? <Loading/> :
                    <Toggle onChange={toggleHandler} label={status === "OPEN" ? "باز" : "بسته"}
                            enabled={status === "OPEN" ? true : false}/>
            }
        </div>
    );
};

export default ToggleProjectStatus;