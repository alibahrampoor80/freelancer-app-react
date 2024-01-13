import React from 'react';
import useOwnerProjects from "./useOwnerProject.js";
import Loading from "../../ui/Loading.jsx";
import Empty from "../../ui/Empty.jsx";
import Table from "../../ui/Table.jsx";
import ProjectRow from "./ProjectRow.jsx";

const ProjectTable2 = () => {
    const {projects, isLoading} = useOwnerProjects()
    if (isLoading) return <Loading/>
    if (!projects?.length) return <Empty resourceName={`پروژه`}/>

    return (
        <Table>
            <Table.Header>
                <th>#</th>
                <th>عنوان پروژه</th>
                <th>دسته بندی</th>
                <th>بودجه</th>
                <th>ددلاین</th>
                <th>تگ ها</th>
                <th>فریلنسر</th>
                <th>وضعیت</th>
                <th>عملیات</th>
                <th>درخواست ها</th>
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
    );
};

export default ProjectTable2;