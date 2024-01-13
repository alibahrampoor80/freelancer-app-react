import React from 'react';

const TextField2 = ({
                        label,
                        name,
                        value,
                        onChange,
                        register,
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
                   onChange={event => register(event.target.value)}/>
        </div>
    );
};

export default TextField2;