import React from 'react';

const ConfirmDelete = ({resourceName, onClose, disabled, onConfirm}) => {
    return (
        <div>
            <h2 className={`font-bold text-base mb-8`}> آیا از {resourceName} حذف مطمئن هستین؟ </h2>
            <div className="flex justify-between items-center gap-x-16">
                <button className={`btn btn--primary flex-1`} onClick={onClose} disabled={disabled}>لغو</button>
                <button className={`btn btn--danger flex-1 py-3`} onClick={onConfirm} disabled={disabled}>تایید</button>
            </div>
        </div>
    );
};

export default ConfirmDelete;