import React from 'react';

const NavTitle = ({children}) => {
    function handleClick(e) {
        e.target.classList.toggle("nav__title--active");
    }

    return (
        <span onClick={handleClick}
            className={`nav__title cursor-pointer`}>
            {children}
        </span>
    );
};

export default NavTitle;