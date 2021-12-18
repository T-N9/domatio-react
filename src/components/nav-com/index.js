import React from "react";
import logo from "../../images/domatio-logo.png";
import TextForm from "./components/TextForm";
import MenuTheme from "./components/Menu&Theme";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="container d-flex">
                <a href="www.google.com">
                    <img className="navbar--logo" src={logo} alt="domatio-logo" />
                </a>
                
                <div className="navbar--content d-flex">
                    <TextForm/>
                    <MenuTheme/>
                </div>

            </div>
        </nav>
    )
}

export default NavBar;