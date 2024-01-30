import React from 'react';
import useUsers from "../useUsers.js";
import Loading from "../../../ui/Loading.jsx";
import Empty from "../../../ui/Empty.jsx";
import Table from "../../../ui/Table.jsx";
import UserRow from "./UserRow.jsx";

const UserTable = () => {
    const {users, isLoading} = useUsers()
    if (isLoading) return <Loading/>
    if (!users.length) return <Empty resourceName={`کاربری`}/>
    return (
        <Table>
            <Table.Header>
                <th>#</th>
                <th>نام کاربر</th>
                <th>ایمیل</th>
                <th>شماره موبایل</th>
                <th>نقش</th>
                <th>وضعیت</th>
                <th>عملیات</th>
            </Table.Header>
            <Table.Body>
                {
                    users.map((user, index) => (
                        <UserRow key={user._id} user={user} index={index}/>
                    ))
                }
            </Table.Body>
        </Table>
    );
};

export default UserTable;