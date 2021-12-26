import React, {createContext, useState, useContext} from "react";
import { ThemeContext } from "../../App";
import logo from "../../images/domatio-logo.png";
import darkLogo from "../../images/domatio-logo-dark.png";
import TextForm from "./components/TextForm";
import MenuTheme from "./components/Menu&Theme";

export const searchContext = createContext({
    searchToggle : false,
    setSearchToggle : () => {}
})

const NavBar = () => {

    const [ searchToggle, setSearchToggle ] = useState(false);
    const { darkMode } = useContext(ThemeContext);
    const value = { searchToggle, setSearchToggle };

    return (
        <nav className="navbar">
            <div className="container d-flex">
                <a href="/">
                    <img className={ darkMode ? "navbar--logo d-none" : "navbar--logo"} src={logo} alt="domatio-logo" />
                    <img className={ darkMode ? "navbar--logo" : "navbar--logo d-none"} src={darkLogo} alt="domatio-logo" />
                </a>
                
                <searchContext.Provider value={value}>
                    <div className="navbar--content d-flex">
                        <TextForm/>
                        <MenuTheme/>
                    </div>
                </searchContext.Provider>

            </div>
        </nav>
    )
}

export default NavBar;