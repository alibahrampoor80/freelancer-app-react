import React, {useState} from 'react';
import Table from "../../ui/Table.jsx";
import truncateText from "../../utils/truncateText.js";
import {toPersianNumbersWithComma} from "../../utils/toPersianDigits.js";
import Modal from "../../ui/Modal.jsx";
import ChangeProposalStatus from "./ChangeProposalStatus.jsx";

const statusStyle = [
    {
        label: "رد شده",
        className: "badge--danger"
    },
    {
        label: "در انتظار تایید",
        className: "badge--secondary"
    },
    {
        label: "تایید شده",
        className: "badge--success"
    },
]

const ProposalRow = ({proposal, index}) => {
    const [open, setOpen] = useState(false)
    const {status} = proposal

    return (
        <Table.Row>
            <td>{index + 1}</td>
            <td>{proposal.user.name}</td>
            <td>{truncateText(proposal.description, 50)}</td>
            <td>{proposal.duration} روز</td>
            <td>{toPersianNumbersWithComma(proposal.price)} تومان</td>
            <td><span className={`badge ${statusStyle[status].className}`}>{statusStyle[status].label}</span></td>
            <td>
                <Modal onClose={() => setOpen(false)} open={open} title={`تغییر وضعیت درخواست`}>
                    <ChangeProposalStatus proposalId={proposal._id} onClose={() => setOpen(false)}/>
                </Modal>
                <button onClick={() => setOpen(true)}>تغییر وضعیت</button>
            </td>

        </Table.Row>
    );
};

export default ProposalRow;