import {NavLink} from "react-router-dom";
import React from "react";

export default function CustomNavLink({children, to}) {
    const navLinkClass = "flex items-center gap-x-2 hover:bg-primary-100/50 hover:text-primary-900 px-2 py-1.5 rounded-xl  transition-all duration-300";
    return <li><NavLink to={to}
                        className={({isActive}) => isActive ? `${navLinkClass} bg-primary-100/50 text-primary-900` : `${navLinkClass} text-secondary-600`}>
        {children}
    </NavLink></li>
}

