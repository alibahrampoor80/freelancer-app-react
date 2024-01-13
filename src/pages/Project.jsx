import React from 'react';
import useProject from "../features/project/useProject.js";
import Loading from "../ui/Loading.jsx";
import ProjectHeader from "../features/project/ProjectHeader.jsx";
import ProposalTable from "../features/project/ProposalTable.jsx";

const Project = () => {
    const {project, isLoading} = useProject()

    if (isLoading) return <Loading/>
    return (
        <div>
            <ProjectHeader project={project}/>
            <ProposalTable proposals={project.proposals}/>
        </div>
    );
};

export default Project;