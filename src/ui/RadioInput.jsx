import React from 'react';

const RadioInput = ({label, value, onChange, name, id, checked}) => {
    return (
        <div className="flex items-center gap-x-2 text-secondary-600">
            <input type="radio"
                   name={name}
                   onChange={onChange}
                   value={value}
                   className={'cursor-pointer form-radio focus:ring-pink-500 text-pink-500'}
                   checked={checked}
                   id={id}/>
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

export default RadioInput;