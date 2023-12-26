import React from 'react';
import RadioInput from "./RadioInput.jsx";

const RadioInputGroup = ({configs, watch, register, errors}) => {
    const {name, validationSchema = {}, options} = configs
    return (
        <div>
            <div className={`flex flex-wrap items-center justify-center gap-x-8`}>
                {
                    options.map((option) => (
                        <RadioInput key={option.value}
                                    label={option.label}
                                    value={option.value}
                                    id={option.value}
                                    name={name}
                                    register={register}
                                    watch={watch}
                                    validationSchema={validationSchema}
                        />
                    ))
                }
            </div>
            {
                errors && errors[name] &&
                <span className={'text-error block text-sm mt-2 flex-1'}>{errors[name]?.message}</span>
            }
        </div>
    );
};

export default RadioInputGroup;