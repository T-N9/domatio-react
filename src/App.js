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

const App = () => {

    const [ dodata, setDoData] = useState({});
    const [ categoryId, setCategoryId ] = useState(0);
    const [ tagName, setTagName ] = useState("");
    const categoryTagContextValue = { categoryId, setCategoryId, tagName, setTagName};

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
                <main>
                    <span id="up"></span>
                    <NavBar />
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
            </DataContext.Provider>
        </>
    )
}

export {App, DataContext};