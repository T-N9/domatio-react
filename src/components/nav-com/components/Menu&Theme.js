import React, {useContext} from "react";
import LineIcon from 'react-lineicons';
import { searchContext } from "..";

const MenuTheme = () => {
    const { setSearchToggle } = useContext(searchContext);

    function searchToggle () {
        setSearchToggle( prevToggle => !prevToggle);
    }

    return (
        <div className="button-wrapper">
            <button onClick={searchToggle} className="nav-btn only-on-small">
                <LineIcon name="search-alt"/>
            </button>
            <button className="nav-btn">
                <LineIcon name="sun"/>
            </button>
            <button className="nav-btn mr-0">
                <LineIcon name="menu"/>
            </button>
        </div>
    )
}

export default MenuTheme;