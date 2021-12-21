import React, {useState, useEffect, createContext } from "react";
import { MainSection, NavBar, SideBar } from "./components";

const DataContext = createContext();
export const CategoryTagContext = createContext({
    categoryId : 0,
    setCategoryId : () => {},
    tagName : "",
    setTagName: () => {}
});

// export const TagNameContext = createContext({
//     tagName : "",
//     setTagName : () => {}
// })

const App = () => {

    const [ dodata, setDoData] = useState({});
    const [ categoryId, setCategoryId ] = useState(0);
    const [ tagName, setTagName ] = useState("");
    const categoryTagContextValue = { categoryId, setCategoryId, tagName, setTagName};
    // const tagContextValue = { tagName, setTagName };

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
                <span id="up"></span>
                <NavBar />
                {/* <TagNameContext.Provider value={tagContextValue}> */}
                    <CategoryTagContext.Provider value={categoryTagContextValue}>
                        <SideBar/>
                        <MainSection categoryId={categoryId}/>
                    </CategoryTagContext.Provider>
                {/* </TagNameContext.Provider> */}
            </main>
        </DataContext.Provider>
    )
}

export {App, DataContext};