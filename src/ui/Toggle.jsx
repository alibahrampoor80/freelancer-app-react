import React from 'react';
import {Switch} from "@headlessui/react";

const Toggle = ({label, enabled, onChange}) => {
    return (
        <div>
            <Switch.Group>
                <div className="flex items-center gap-x-2">
                    <Switch.Label className="mr-4">{label}</Switch.Label>
                    <Switch
                        checked={enabled}
                        onChange={onChange}
                        className={`${
                            enabled ? 'bg-primary-900' : 'bg-secondary-200'
                        } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none `}>
                        <span
                            className={`${enabled ? '-translate-x-6' : '-translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}/>
                    </Switch>
                </div>
            </Switch.Group>
        </div>
    );
};

export default Toggle;