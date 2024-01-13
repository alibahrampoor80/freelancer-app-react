import React from 'react';
import Empty from "../../ui/Empty.jsx";
import Table from "../../ui/Table.jsx";
import ProposalRow from "./ProposalRow.jsx";

const ProposalTable = ({proposals}) => {

    if (!proposals.length) return <Empty resourceName={`درخواستی`}/>
    return (
        <Table>
            <Table.Header>
                <th>#</th>
                <th>فریلنسر</th>
                <th>توضیحات</th>
                <th>زمان تحویل</th>
                <th>هزینه</th>
                <th>وضعیت</th>
                <th>عملیات</th>
            </Table.Header>
                <Table.Body>
                    {
                        proposals.map((project, index) => (
                            <ProposalRow key={project._id} proposal={project} index={index}/>
                        ))
                    }
                </Table.Body>

        </Table>
    );
};

export default ProposalTable;