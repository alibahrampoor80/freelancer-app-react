import React from 'react';

const TextField = ({
                       label,
                       name,
                       classNameLabel = "",
                       className = "",
                       register,
                       type = "text",
                       required,
                       validationSchema, errors
                   }) => {
    return (
        <div>
            <label htmlFor={name} className={`mb-2 block text-secondary-700 ${classNameLabel}`}>{label}
                {required && <span className={`text-error`}>*</span>}</label>
            <input type={type}
                   {...register(name, validationSchema)}
                   id={name}
                   className={`textField__input ${className}`}
                   autoComplete={'off'}
            />
            {
                errors && errors[name] && <span className={'text-error block text-sm mt-2'}>{errors[name]?.message}< /span>
            }
        </div>
    );
};

export default TextField;