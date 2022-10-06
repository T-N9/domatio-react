import React, {useContext} from "react";
import LineIcon from 'react-lineicons';
import { searchContext } from "..";
import { ThemeContext } from "../../../hook.app";
import MenuOption from "./MenuOption";

/* ==========================================
Component for Search, Theme and Menu buttons
============================================== */
const MenuTheme = () => {
    const { setSearchToggle } = useContext(searchContext);
    const { darkMode, setDarkMode } = useContext(ThemeContext);
    localStorage.setItem("theme", darkMode)

    function searchToggle () {
        setSearchToggle( prevToggle => !prevToggle);
    }

    function darkToggle() {
        setDarkMode( prevMode => !prevMode )
    }

    return (
        <div className="button-wrapper">
            <button onClick={searchToggle} className="nav-btn only-on-small" aria-label="search icon for mobile">
                <LineIcon name="search-alt"/>
            </button>
            <button onClick={darkToggle} className="nav-btn" aria-label="theme toggle button">
                <LineIcon name={darkMode ? "night" : "sun"}/>
            </button>
            <button className="nav-btn nav-menu-btn mr-0" aria-label="menu toggle button">
                <LineIcon name="menu"/>
            </button>
            <MenuOption/>
        </div>
    )
}

export default MenuTheme;