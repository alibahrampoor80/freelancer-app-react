import React from 'react';
import AppLayout from "../../ui/AppLayout.jsx";
import SideBar from "../../ui/SideBar.jsx";
import CustomNavLink from "../../ui/CustomNavLink.jsx";
import {HiCollection, HiUser, HiHome,HiOutlineViewGrid} from "react-icons/hi";

const AdminLayout = () => {
    return (
        <AppLayout>
            <SideBar>
                <li>
                    <CustomNavLink to={`dashboard`}>
                        <HiHome className={`w-4 h-4`}/>
                        <span>خانه</span>
                    </CustomNavLink>
                </li>
                <li>
                    <CustomNavLink to={`users`}>
                        <HiUser/>
                        <span>کاربران</span>
                    </CustomNavLink>
                </li>
                <li>
                    <CustomNavLink to={`projects`}>
                        <HiOutlineViewGrid/>
                        <span>پروژه ها</span>
                    </CustomNavLink>
                </li>
                <li>
                    <CustomNavLink to={`proposal`}>
                        <HiCollection/>
                        <span>درخواست ها</span>
                    </CustomNavLink>
                </li>
            </SideBar>
        </AppLayout>
    );
};

export default AdminLayout;