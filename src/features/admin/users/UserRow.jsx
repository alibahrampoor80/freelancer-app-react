import React, {useState} from 'react';
import Table from "../../../ui/Table.jsx";
import Modal from "../../../ui/Modal.jsx";
import ChangeUserStatus from "./ChangeUserStatus.jsx";

const UserRow = ({user, index}) => {
    const [open, setOpen] = useState(false)

    const userStatus = [
        {label: "رد شده", className: "badge--danger"},
        {label: "درتایید انتظار", className: "badge--secondary"},
        {label: "تایید شده", className: "badge--success"},
    ]

    const {status} = user
    return (
        <Table.Row>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phoneNumber}</td>
            <td>{user.role}</td>
            <td>
                <span className={`badge ${userStatus[status].className}`}>{userStatus[status].label}</span>
            </td>
            <td>
                <Modal open={open} onClose={() => setOpen(false)} title={` تغییر وضعیت کاربر`}>
                    <ChangeUserStatus userId={user._id} onClose={() => setOpen(false)}/>
                </Modal>
                <button onClick={() => setOpen(true)}>dd</button>
            </td>
        </Table.Row>
    );
};

export default UserRow;