import React, {useState} from 'react';

import ProjectTable2 from "../features/projects/ProjectTable2.jsx";
import ProjectsHeader from "../features/projects/ProjectsHeader.jsx";



const Projects = () => {

    return (
        <div>
            <ProjectsHeader/>
            {/*<ProjectTable/>*/}
            <ProjectTable2/>

        </div>
    );
};

export default Projects;