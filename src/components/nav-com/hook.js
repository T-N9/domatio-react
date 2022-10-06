import React, { useState, useContext} from 'react';
import { ThemeContext } from "../../hook.app";

const Hook = () => {

    const [ searchToggle, setSearchToggle ] = useState(false);
    const [ menuToggle , setMenuToggle ] = useState(false);
    const [ menuContent , setMenuContent ] = useState("");
    const { darkMode } = useContext(ThemeContext);
    const value = { searchToggle, setSearchToggle };
    const menuValue = { menuContent, setMenuContent, menuToggle, setMenuToggle };
    return {
        darkMode,
        value,
        menuValue
    }
}

export default Hook;
