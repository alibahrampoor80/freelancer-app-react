import React from 'react';
import useProposals from "./useProposals.js";
import Loading from "../../ui/Loading.jsx";
import Empty from "../../ui/Empty.jsx";
import Table from "../../ui/Table.jsx";
import ProposalsRow from "./ProposalsRow.jsx";

const ProposalTable = () => {
    const {proposals, isLoading} = useProposals()
    if (isLoading) return <Loading/>
    if (!proposals.length)return <Empty resourceName={`پروپزال`}/>
    return (
        <Table>
            <Table.Header>
                <th>#</th>
                <th>توضیحات</th>
                <th>زمان تحویل</th>
                <th>هزینه</th>
                <th>وضعیت</th>

            </Table.Header>
            <Table.Body>
                {
                    proposals?.map((proposals, index) => (
                        <ProposalsRow key={proposals._id}
                                      proposal={proposals}
                                    index={index}/>
                    ))
                }
            </Table.Body>

        </Table>
    );
};

export default ProposalTable;