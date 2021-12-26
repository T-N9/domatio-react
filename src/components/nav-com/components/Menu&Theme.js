import React, {useContext} from "react";
import LineIcon from 'react-lineicons';
import { searchContext } from "..";
import { ThemeContext } from "../../../App";

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
            <button onClick={searchToggle} className="nav-btn only-on-small">
                <LineIcon name="search-alt"/>
            </button>
            <button onClick={darkToggle} className="nav-btn">
                <LineIcon name={darkMode ? "night" : "sun"}/>
            </button>
            <button className="nav-btn mr-0">
                <LineIcon name="menu"/>
            </button>
        </div>
    )
}

export default MenuTheme;