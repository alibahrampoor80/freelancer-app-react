import React, {useState} from 'react';
import Table from "../../../ui/Table.jsx";
import truncateText from "../../../utils/truncateText.js";
import {toPersianNumbersWithComma} from "../../../utils/toPersianDigits.js";
import toLocalDateShort from "../../../utils/toLocalDateShort.js";
import {MdAssignmentAdd} from "react-icons/md";
import Modal from "../../../ui/Modal.jsx";
import CreateProposal from "../../proposals/CreateProposal.jsx";

const ProjectRow = ({index, project}) => {
    const [open, setOpen] = useState(false)

    const {title, budget, deadline, status} = project
    const projectStatus = {
        OPEN: {
            label: "باز",
            className: "badge--success"
        },
        CLOSED: {
            label: "بسته",
            className: "badge--danger"
        },
    }
    return (
        <Table.Row>
            <td>{index + 1}</td>
            <td>{truncateText(title, 30)}</td>
            <td>{toPersianNumbersWithComma(budget)} تومان</td>
            <td>{toLocalDateShort(deadline)} </td>
            <td>
                <span className={`badge ${projectStatus[status].className}`}>
                {projectStatus[status].label}
                </span>
            </td>
            <td>
                <Modal open={open}
                       onClose={() => setOpen(false)}
                       title={`درخواست انجام پروژه ${title}`}>
                    <CreateProposal onClose={() => setOpen(false)}
                                    projectId={project._id}
                    />
                </Modal>
                <button onClick={() => setOpen(true)}>
                    <MdAssignmentAdd className={`w-5 h-5 text-primary-900`}/>
                </button>
            </td>

        </Table.Row>
    );
};

export default ProjectRow;