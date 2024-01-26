import React from 'react';
import AppLayout from "../../ui/AppLayout.jsx";
import SideBar from "../../ui/SideBar.jsx";
import CustomNavLink from "../../ui/CustomNavLink.jsx";
import {HiHome} from "react-icons/hi2";
import {HiCollection} from "react-icons/hi";

const FreelancerLayout = () => {
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
                    <CustomNavLink to={`projects`}>
                        <HiCollection/>
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

export default FreelancerLayout;