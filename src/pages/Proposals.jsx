import React from 'react';
import ProposalTable from "../features/proposals/ProposalTable.jsx";

const Proposals = () => {
    return (
        <div>
            <h1 className={`font-black text-secondary-700 text-xl mb-8`}>پروپزال های شما</h1>
            <ProposalTable/>
        </div>
    );
};

export default Proposals;