import React from 'react';
import Table from "../../ui/Table.jsx";
import truncateText from "../../utils/truncateText.js";
import {toPersianNumbers, toPersianNumbersWithComma} from "../../utils/toPersianDigits.js";

const ProposalsRow = ({proposal, index}) => {
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
    const {status} = proposal
    return (
        <Table.Row>
            <td>{index + 1}</td>
            <td>{truncateText(proposal.description, 50)}</td>
            <td>{toPersianNumbers(proposal.duration)} روز</td>
            <td>{toPersianNumbersWithComma(proposal.price)}</td>
            <td>
                <span className={`badge ${statusStyle[status].className}`}>
                    {statusStyle[status].label}
                </span>
            </td>
        </Table.Row>
    );
};

export default ProposalsRow;