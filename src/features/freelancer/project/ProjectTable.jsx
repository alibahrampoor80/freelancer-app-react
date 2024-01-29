import React from 'react';
import Loading from "../../../ui/Loading.jsx";
import Empty from "../../../ui/Empty.jsx";
import Table from "../../../ui/Table.jsx";

import useProjects from "../../../hooks/useProjects.js";
import ProjectRow from "./ProjectRow.jsx";

const ProjectTable = () => {
    const {projects, isLoading} = useProjects()
    if (isLoading) return <Loading/>
    if (!projects?.length) return <Empty resourceName={`پروژه`}/>

    return (
        <Table>
            <Table.Header>
                <th>#</th>
                <th>عنوان پروژه</th>
                <th>بودجه</th>
                <th>ددلاین</th>
                <th>وضعیت</th>
                <th>عملیات</th>
            </Table.Header>
            <Table.Body>
                {
                    projects?.map((project, index) => (
                        <ProjectRow key={project._id}
                                    project={project}
                                    index={index}/>
                    ))
                }
            </Table.Body>

        </Table>
    )
};

export default ProjectTable;