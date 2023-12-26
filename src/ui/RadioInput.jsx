import React from 'react';

const RadioInput = ({label, value, name, register, validationSchema, id, watch}) => {
    return (
        <div className="flex items-center gap-x-2 text-secondary-600">
            <input
                className={'cursor-pointer form-radio focus:ring-blue-500 text-blue-500'}
                type="radio"
                name={name}
                id={id}
                value={value}
                {...register(name, validationSchema)}
                checked={watch(name) === value}
            />
            <label htmlFor={id}>{label}</label>

        </div>
    );
};

export default RadioInput;