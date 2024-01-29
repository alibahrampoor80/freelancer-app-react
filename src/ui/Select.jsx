import React from 'react';

const Select = ({onChange, options, value}) => {
    return (
        <select value={value} onChange={onChange}
                className={`textField__input py-2 text-xs bg-secondary-0`}>
            {
                options.map(item => (
                    <option key={item.value} value={item.value}>{item.label}</option>
                ))
            }
        </select>
    );
};

export default Select;