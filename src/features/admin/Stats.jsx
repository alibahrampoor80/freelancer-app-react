import React from 'react';
import {HiCollection, HiCurrencyDollar, HiOutlineViewGrid, HiUser} from "react-icons/hi";
import {toPersianNumbers, toPersianNumbersWithComma} from "../../utils/toPersianDigits.js";
import Stat from "../../ui/Stat.jsx";

const Stats = ({proposals, projects, users}) => {
    return (
        <div className={`grid grid-cols-3 gap-8 mt-5`}>
            <Stat icon={<HiUser className={`h-20 w-20`}/>}
                  value={toPersianNumbersWithComma(users)} color={`yellow`}
                  title={`کاربران`}
            />
            <Stat icon={<HiOutlineViewGrid className={`h-20 w-20`}/>}
                  value={toPersianNumbers(proposals)} color={'primary'}
                  title={`درخواست ها`}/>
            <Stat icon={<HiCollection className={`h-20 w-20`}/>}
                  value={toPersianNumbers(projects)} color={'green'}
                  title={`پروژه ها`}/>
        </div>
    );
};

export default Stats;