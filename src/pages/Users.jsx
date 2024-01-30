import React from 'react';
import UserTable from "../features/admin/users/UserTable.jsx";

const Users = () => {
    return (
        <div>
            <h1 className={`font-black text-secondary-700 text-xl mb-8`}>کاربران</h1>
            <UserTable/>
        </div>
    );
};

export default Users;