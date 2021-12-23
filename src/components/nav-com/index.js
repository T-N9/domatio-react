import React, {createContext, useState} from "react";
import logo from "../../images/domatio-logo.png";
import TextForm from "./components/TextForm";
import MenuTheme from "./components/Menu&Theme";

export const searchContext = createContext({
    searchToggle : false,
    setSearchToggle : () => {}
})

const NavBar = () => {

    const [ searchToggle, setSearchToggle ] = useState(false);
    const value = { searchToggle, setSearchToggle };

    return (
        <nav className="navbar">
            <div className="container d-flex">
                <a href="/">
                    <img className="navbar--logo" src={logo} alt="domatio-logo" />
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