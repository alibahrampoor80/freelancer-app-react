import React from 'react';
import AppLayout from "../../ui/AppLayout.jsx";
import SideBar from "../../ui/SideBar.jsx";
import CustomNavLink from "../../ui/CustomNavLink.jsx";
import {HiCollection} from "react-icons/hi";
import {HiHome} from "react-icons/hi2";

const OwnerLayout = () => {
    return (

        <AppLayout>
            <SideBar>
                <li>
                    <CustomNavLink to={`/owner/dashboard`}>
                        <HiHome className={`w-4 h-4`}/>
                        <span>خانه</span>
                    </CustomNavLink>
                </li>
                <li>
                    <CustomNavLink to={`/owner/projects`}>
                        <HiCollection/>
                        <span>پروژه ها</span>
                    </CustomNavLink>
                </li>
            </SideBar>
        </AppLayout>

    );
};

export default OwnerLayout;