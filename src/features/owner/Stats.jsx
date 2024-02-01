import React from 'react';
import {HiCollection, HiCurrencyDollar, HiOutlineViewGrid} from "react-icons/hi";
import Stat from "../../ui/Stat.jsx";

const Stats = ({projects}) => {
    const numOfProject = projects?.length
    const numOfAcceptedProject = projects?.map(p => p.status === 2).length
    const numOfAcceptedProposal = projects?.reduce((acc, curr) => curr.proposals.length + acc, 0)

    return (
        <div className={`grid grid-cols-3 gap-8 mt-5`}>
            <Stat icon={<HiOutlineViewGrid className={`h-20 w-20`}/>}
                  value={numOfProject} color={'primary'}
                  title={`پروژه ها`}/>
            <Stat icon={<HiCurrencyDollar className={`h-20 w-20`}/>}
                  value={numOfAcceptedProject} color={'green'}
                  title={`پروژه های واگزار شده `}/>
            <Stat icon={<HiCollection className={`h-20 w-20`}/>}
                  value={numOfAcceptedProposal} color={`yellow`}
                  title={`درخواست ها`}
            />
        </div>
    );
};

export default Stats;