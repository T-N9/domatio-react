import React, {useState, useEffect, createContext } from "react";
import { MainSection, NavBar, SideBar } from "./components";

const DataContext = createContext();
export const CategoryIdContext = createContext({
    categoryId : 0,
    setCategoryId : () => {}
});

const App = () => {

    const [ dodata, setDoData] = useState({});
    const [ categoryId, setCategoryId ] = useState(0);
    const categoryContextValue = { categoryId, setCategoryId}

    useEffect(() => {
        fetch('https://t-n9.github.io/domatio-api/domatio-data.json')
            .then(response => response.json())
            .then(data => {
                setDoData(data.domatio);
            });
    },[])

    return (
        <DataContext.Provider value={dodata}>
            <main>
                <NavBar />
                <CategoryIdContext.Provider value={categoryContextValue}>
                    <SideBar/>
                    <MainSection categoryId={categoryId}/>
                </CategoryIdContext.Provider>
            </main>
        </DataContext.Provider>
    )
}

export {App, DataContext};