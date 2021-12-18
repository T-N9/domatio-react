import React from "react";
import LineIcon from 'react-lineicons';

const MenuTheme = () => {
    return (
        <>
            <button className="nav-btn">
                <LineIcon name="sun"/>
            </button>
            <button className="nav-btn">
                <LineIcon name="menu"/>
            </button>
        </>
    )
}

export default MenuTheme;