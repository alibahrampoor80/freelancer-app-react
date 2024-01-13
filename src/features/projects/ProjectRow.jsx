import React, {useState} from 'react';
import Table from "../../ui/Table.jsx";
import truncateText from "../../utils/truncateText.js";
import {toPersianNumbersWithComma} from "../../utils/toPersianDigits.js";
import toLocalDateShort from "../../utils/toLocalDateShort.js";
import {HiEye, HiOutlineTrash} from "react-icons/hi";
import {TbPencilMinus} from "react-icons/tb";
import Modal from "../../ui/Modal.jsx";
import ConfirmDelete from "../../ui/ConfirmDelete.jsx";
import useRemoveProject from "./useRemoveProject.js";
import CreateProjectForm from "./CreateProjectForm.jsx";
import ToggleProjectStatus from "./ToggleProjectStatus.jsx";
import {Link} from "react-router-dom";

const ProjectRow = ({project, index}) => {
    const [isEditOpen, setIsEditOpen] = useState(false)
    const [isDeleteOpen, setIsDeleteOpen] = useState(false)

    const {isLoadingDelete, removeProject} = useRemoveProject()

    return (
        <Table.Row>
            <td>{index + 1}</td>
            <td>{truncateText(project.title, 30)}</td>
            <td>{project.category.title}</td>
            <td>{toPersianNumbersWithComma(project.budget)}</td>
            <td>{toLocalDateShort(project.deadline)}</td>
            <td>
                <div className={`flex flex-wrap items-center gap-2 max-w-[200px]`}>
                    {project.tags.map(tag => <span key={tag}
                                                   className={'badge badge--secondary'}>{tag}
                    </span>
                    )}
                </div>
            </td>
            <td>{project.freelancer?.name || "-"}</td>
            <td>
                {/*{project.status === "OPEN" ?*/}
                {/*    <span className={`badge badge--success`}>باز</span> :*/}
                {/*    <span className={`badge badge--danger`}>بسته</span>*/}
                {/*}*/}
                <ToggleProjectStatus project={project}/>
            </td>
            <td>
                <div className="flex items-center gap-x-4">
                    <button onClick={() => setIsEditOpen(true)}>
                        <TbPencilMinus className={'w-5 h-5 text-primary-900'}/>
                    </button>
                    <Modal open={isEditOpen}
                           title={` ویرایش ${project.title}`}
                           onClose={() => setIsEditOpen(false)}>
                        <CreateProjectForm
                            projectToEdit={project}
                            onClose={() => setIsEditOpen(false)}
                        />
                    </Modal>
                    <button onClick={() => setIsDeleteOpen(true)}>
                        <HiOutlineTrash className={'w-5 h-5 text-error'}/>
                    </button>
                    <Modal open={isDeleteOpen}
                           title={` حذف ${project.title}`}
                           onClose={() => setIsDeleteOpen(false)}>
                        <ConfirmDelete
                            resourceName={project.title}
                            onClose={() => setIsDeleteOpen(false)}
                            onConfirm={() => removeProject(project._id, {
                                onSuccess: (data) => setIsDeleteOpen(false)
                            })}
                            disabled={false}
                        />
                    </Modal>
                </div>
            </td>
            <td>
                <Link to={project._id} className={`flex justify-center`}>
                    <HiEye className={`w-5 h-5 text-primary-800`}/>
                </Link>
            </td>
        </Table.Row>
    );
};

export default ProjectRow;