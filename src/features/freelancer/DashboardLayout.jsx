import React from 'react';
import Loading from "../../ui/Loading.jsx";
import DashboardHeader from "./DashboardHeader.jsx";
import Stats from "./Stats.jsx";
import useProposals from "../proposals/useProposals.js";

const DashboardLayout = () => {
    const {isLoading, proposals} = useProposals()
    if (isLoading) return <Loading/>

    return (
        <div>
            <DashboardHeader/>
            <Stats proposals={proposals}/>
        </div>
    );
};

export default DashboardLayout;