import React from 'react';
import DashboardHeader from "./DashboardHeader.jsx";
import Stats from "./Stats.jsx";
import useOwnerProjects from "../projects/useOwnerProject.js";
import Loading from "../../ui/Loading.jsx";

const DashboardLayout = () => {
    const {projects, isLoading} = useOwnerProjects()
    if (isLoading) return <Loading/>
    return (
        <div>
            <DashboardHeader/>
            <Stats projects={projects}/>
        </div>
    );
};

export default DashboardLayout;