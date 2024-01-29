import React from 'react';
import {useSearchParams} from "react-router-dom";
import Select from "./Select.jsx";

const FilterDropDown = ({options, filterField}) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const value = searchParams.get(filterField) || ""
    const handelChange = (event) => {
        searchParams.set(filterField, event.target.value)
        setSearchParams(searchParams)
    }
    return (
        <Select value={value} options={options} onChange={handelChange}/>
    );
};

export default FilterDropDown;