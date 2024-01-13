import React from 'react';
import useOwnerProjects from "./useOwnerProject.js";
import Loading from "../../ui/Loading.jsx";
import truncateText from "../../utils/truncateText.js";
import toLocalDateShort from "../../utils/toLocalDateShort.js";
import {toPersianNumbersWithComma} from "../../utils/toPersianDigits.js";

const ProjectTable = () => {
    const {projects, isLoading} = useOwnerProjects()
    if (isLoading) return <Loading/>
    // if (!projects.length) return <Empty resourceName={`پروژه`}/>

    return (
        <div className={`bg-secondary-0 overflow-x-auto`}>
            <table>
                <thead>
                <tr className={`title-row`}>
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
                </tr>
                </thead>
                <tbody>
                {
                    projects?.map((project, index) => (
                        <tr key={project._id}>
                            <td>{index + 1}</td>
                            <td>{truncateText(project.title, 30)}</td>
                            <td>{project.category.title}</td>
                            <td>{toPersianNumbersWithComma(project.budget)}</td>
                            <td>{toLocalDateShort(project.deadline)}</td>
                            <td>
                                <div className={`flex flex-wrap items-center gap-2 max-w-[200px]`}>
                                    {project.tags.map(tag => <span key={tag}
                                                                   className={'badge badge--secondary'}>{tag}</span>
                                    )}
                                </div>
                            </td>
                            <td>{project.freelancer?.name || "-"}</td>
                            <td>
                                {project.status === "OPEN" ?
                                    <span className={`badge badge--success`}>باز</span> :
                                    <span className={`badge badge--danger`}>بسته</span>
                                }
                            </td>
                            <td>...</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
};

export default ProjectTable;