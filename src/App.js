import React, { useState, useEffect, createContext } from "react";
import { MainSection, NavBar, SideBar } from "./components";

/* data */
import { domatio } from "./data/domatio-data";

/* ==========================================
Context to deliver category id and tag name 
to main-section/index.js 
============================================== */
const DataContext = createContext();
export const CategoryTagContext = createContext({
  categoryId: 0,
  setCategoryId: () => {},
  tagName: "",
  setTagName: () => {},
});

/* ==========================================
LocalStorage initialization for dark theme
to memorize theme user theme setting in browser
============================================== */
let dark_theme = localStorage.getItem("theme");
if (dark_theme === null) {
  localStorage.setItem("theme", false);
  dark_theme = localStorage.getItem("theme") && false;
} else if (dark_theme === "true") {
  dark_theme = true;
} else if (dark_theme === "false") {
  dark_theme = false;
}
export const ThemeContext = createContext({
  darkMode: dark_theme,
  setDarkMode: () => {},
});

const App = () => {
  // State to store data from API
  const [dodata, setDoData] = useState([]);

  // States and value to maintain and export context data
  const [categoryId, setCategoryId] = useState(0);
  const [tagName, setTagName] = useState("");
  const [darkMode, setDarkMode] = useState(dark_theme);
  const categoryTagContextValue = {
    categoryId,
    setCategoryId,
    tagName,
    setTagName,
  };
  const themeValue = { darkMode, setDarkMode };

  useEffect(() => {
    // fetch(domatio)
    //     .then(response => response.json())
    //     .then(data => {
    //         setDoData(data);
    //         console.log({data})
    //         // document.querySelector('.loading-content').classList.add('visible-none');
    //     });
    setDoData(domatio.domatio);
  }, []);

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
              <SideBar />
              <MainSection categoryId={categoryId} />
            </CategoryTagContext.Provider>
          </main>
          {/* Loading Content before main content */}
          <div className="loading-content">
            <div className="loadingio-spinner-spin-zvuwi6ogw3s">
              <div className="ldio-svfroiph48k">
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DataContext.Provider>
    </>
  );
};

export { App, DataContext };
