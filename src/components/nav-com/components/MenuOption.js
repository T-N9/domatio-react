import React, { useContext } from "react";
import { menuContext } from "..";

const MenuOption = () => {

    const { setMenuContent, setMenuToggle } = useContext(menuContext)

    const menuClick = (name) => {
        setMenuContent(name);
        setMenuToggle( prevToggle => !prevToggle);
    }
    return (
        <div className="menuOption">
            <button onClick={() => menuClick("about")} aria-label="about button">About Domatio</button>
            <button onClick={() => menuClick("credits")} aria-label="credits button">Credits</button>
            <button onClick={() => menuClick("contact")} aria-label="contact button">Contact</button>
        </div>
    )
}

export default MenuOption;