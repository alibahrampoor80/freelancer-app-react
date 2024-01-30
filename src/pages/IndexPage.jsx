import React from 'react';
import NavTitle from "../ui/NavTitle.jsx";

const IndexPage = () => {
    return (
        <div className={`container`}>
            <div className="space-y-4">
                <li>
                    <NavTitle>ali</NavTitle>
                    <ul className={`nav__list space-y-4`}>
                        <li>mohammad</li>
                        <li>reza</li>
                        <li>ali</li>
                    </ul>
                </li>
                <li><NavTitle>reza </NavTitle>

                    <ul className={`nav__list space-y-4`}>
                        <li>mohammad</li>
                        <li>reza</li>
                        <li>ali</li>
                    </ul>
                </li>
                <li><NavTitle>reza </NavTitle></li>
                <li><NavTitle>reza </NavTitle></li>
            </div>
        </div>
    );
};

export default IndexPage;