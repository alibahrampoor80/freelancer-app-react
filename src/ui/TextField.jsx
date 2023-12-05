import React from 'react';

const TextField = ({
                       label,
                       name,
                       value,
                       onChange,
                       classNameLabel = "",
                       className = ""
                   }) => {
    return (
        <div>
            <label htmlFor={name} className={`mb-2 block ${classNameLabel}`}>{label}</label>
            <input type="text" id={name} className={`textField__input ${className}`}
                   value={value}
                   name={name}
                   autoComplete={'off'}
                   onChange={onChange}/>
        </div>
    );
};

export default TextField;