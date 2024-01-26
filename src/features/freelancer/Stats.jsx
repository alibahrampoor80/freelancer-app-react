import React from 'react';
import {HiCollection, HiCurrencyDollar, HiOutlineViewGrid} from "react-icons/hi";
import Stat from "../../ui/Stat.jsx";
import {toPersianNumbers, toPersianNumbersWithComma} from "../../utils/toPersianDigits.js";


const Stats = ({proposals}) => {
    const numOfProposals = proposals.length
    const acceptedProposals = proposals.filter(p => p.status === 2)
    const balance = acceptedProposals.reduce((acc, curr) => acc + curr.price, 0)
 
    return (
        <div className={`grid grid-cols-3 gap-8 mt-5`}>
            <Stat icon={<HiOutlineViewGrid className={`h-20 w-20`}/>}
                  value={toPersianNumbers(numOfProposals)} color={'primary'}
                  title={`درخواست ها`}/>
            <Stat icon={<HiCurrencyDollar className={`h-20 w-20`}/>}
                  value={toPersianNumbers(acceptedProposals.length)} color={'green'}
                  title={`درخواست های تایید شده `}/>
            <Stat icon={<HiCollection className={`h-20 w-20`}/>}
                  value={toPersianNumbersWithComma(balance)} color={`yellow`}
                  title={`کیف پول`}
            />
        </div>
    );
};

export default Stats;