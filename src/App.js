import React, {useState, useEffect, createContext } from "react";
import LineIcon from 'react-lineicons';
import { MainSection, NavBar, SideBar } from "./components";

const DataContext = createContext();
export const CategoryTagContext = createContext({
    categoryId : 0,
    setCategoryId : () => {},
    tagName : "",
    setTagName: () => {}
});

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

    const [ dodata, setDoData] = useState({});
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
            <DataContext.Provider value={dodata}>
                <div className={darkMode ? "dark" : ""}>
                    <main>
                        <span id="up"></span>
                        <ThemeContext.Provider value={themeValue}>
                            <NavBar />
                        </ThemeContext.Provider>
                            <CategoryTagContext.Provider value={categoryTagContextValue}>
                                <SideBar/>
                                <MainSection categoryId={categoryId}/>
                            </CategoryTagContext.Provider>
                    </main>
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