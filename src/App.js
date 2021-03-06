import React, { useState, useEffect, createContext } from "react";
import LineIcon from 'react-lineicons';
import { MainSection, NavBar, SideBar } from "./components";

/* ==========================================
Context to deliver category id and tag name 
to main-section/index.js 
============================================== */
const DataContext = createContext();
export const CategoryTagContext = createContext({
    categoryId : 0,
    setCategoryId : () => {},
    tagName : "",
    setTagName: () => {}
});

/* ==========================================
LocalStorage initialization for dark theme
to memorize theme user theme setting in browser
============================================== */
let dark_theme = localStorage.getItem("theme");
if(dark_theme === null) {
    localStorage.setItem("theme", false);
    dark_theme = localStorage.getItem("theme") && false;
}else if(dark_theme === 'true') {
    dark_theme = true
}else if (dark_theme === 'false'){
    dark_theme = false
}
export const ThemeContext = createContext({
    darkMode : dark_theme,
    setDarkMode : () => {}
});

const App = () => {
    // State to store data from API
    const [ dodata, setDoData] = useState({});

    // States and value to maintain and export context data
    const [ categoryId, setCategoryId ] = useState(0);
    const [ tagName, setTagName ] = useState("");
    const [ darkMode, setDarkMode ] = useState(dark_theme);
    const categoryTagContextValue = { categoryId, setCategoryId, tagName, setTagName};
    const themeValue = { darkMode, setDarkMode};

    useEffect(() => {
        fetch('https://t-n9.github.io/domatio-api/domatio-data.json')
            .then(response => response.json())
            .then(data => {
                setDoData(data.domatio);
                // document.querySelector('.loading-content').classList.add('visible-none');
            });
    },[])

    return (
        <>
            {/* Data from API context */}
            <DataContext.Provider value={dodata}>
                {/* Theme setting layer or wrapper */}
                <div className={darkMode ? "dark" : ""}>
                    {/* Main Content */}
                    <main>
                        {/* div for scroll to top */}
                        <span id="up"></span>
                        <ThemeContext.Provider value={themeValue}>
                            <NavBar />
                        </ThemeContext.Provider>
                            <CategoryTagContext.Provider value={categoryTagContextValue}>
                                <SideBar/>
                                <MainSection categoryId={categoryId}/>
                            </CategoryTagContext.Provider>
                    </main>
                    {/* Loading Content before main content */}
                    <div className="loading-content">
                        <span className="loading-icon">
                            <LineIcon name="spinner" />
                        </span>
                    </div>
                </div>
            </DataContext.Provider>
        </>
    )
}

export {App, DataContext};