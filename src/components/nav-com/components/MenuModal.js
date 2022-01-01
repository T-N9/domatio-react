import React, { useContext } from "react";
import About from "./About";
import Credits from "./Credits";
import Contact from "./Contact";
import { menuContext } from "..";

const MenuModal = () => {
    const { menuContent , menuToggle } = useContext(menuContext)
    let modalContent;

    switch (menuContent) {
        case "about":
            modalContent = <About/>
            break;
        case "credits":
            modalContent = <Credits/>
            break;
        case "contact":
            modalContent = <Contact/>
            break;
        default:
            break;
    }

    return(
        <section className={menuToggle ? "menuModal--wrapper visible-visible" : "menuModal--wrapper visible-none"}>
            { modalContent }
        </section>
    )
}

export default MenuModal;