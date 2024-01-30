import React from 'react';
import useProposals from "../proposals/useProposals.js";
import Loading from "../../ui/Loading.jsx";
import DashboardHeader from "../owner/DashboardHeader.jsx";
import useUsers from "./useUsers.js";
import useProjects from "../../hooks/useProjects.js";
import Stats from "./Stats.jsx";


const DashboardLayout = () => {
    const {proposals, isLoading} = useProposals()
    const {projects, isLoading: isLoading2} = useProjects()
    const {users, isLoading: isLoading3} = useUsers()
    console.log(projects)
    if (isLoading || isLoading2 || isLoading3) return <Loading/>
    return (
        <div>
            <DashboardHeader/>
            <Stats proposals={proposals.length} projects={projects.length} users={users.length}/>
        </div>
    );
};

export default DashboardLayout;