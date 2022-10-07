import React, { useState, useEffect, createContext } from "react";
import { reverse } from "lodash";

/* data */
import { domatio } from "./data/domatio-data";

/* ==========================================
Context to deliver category id and tag name 
to main-section/index.js 
============================================== */
export const DataContext = createContext();
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

const HookApp = () => {
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

  return {

    dodata,
    categoryId,
    tagName,
    themeValue,
    darkMode,
    categoryTagContextValue,
    DataContext,
    CategoryTagContext,
    ThemeContext

  };
};

export default HookApp;
