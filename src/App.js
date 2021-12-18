import React, {useState, useEffect, createContext } from "react";
import { nanoid } from "nanoid";
import { MainSection, NavBar, SideBar } from "./components";
import Card from "./components/main-section-com/components/Card";


const DataContext = createContext();
export const CategoryIdContext = createContext({
    categoryId : 0,
    setCategoryId : () => {}
});

const App = () => {

    let iniData = 1;

    const [ dodata, setDoData] = useState({});
    const [ cardData, setCardData] = useState("");
    const [ categoryId, setCategoryId ] = useState(0);
    const categoryContextValue = { categoryId, setCategoryId}

    useEffect(() => {
        fetch('https://t-n9.github.io/domatio-api/domatio-data.json')
            .then(response => response.json())
            .then(data => {
                setDoData(data.domatio);

                setCardData(
                    Object.entries(data.domatio).map(data => {
                        return (
                            <Card 
                                key = {nanoid()}
                                name = {data[1].name}
                                title = {data[1].title}
                                image = {data[1].image}
                                desc = {data[1].desc}
                                link = {data[1].link}
                                tags = {data[1].tags}
                            />
                        )
                    })
                )
            });
    },[iniData])

    function filterCategory (acceptCategoryId){
        console.log("App main " +categoryId);

        acceptCategoryId === 0 ?
        setCardData(
            Object.entries(dodata).map(data => {
                return (
                    <Card 
                        key = {nanoid()}
                        name = {data[1].name}
                        title = {data[1].title}
                        image = {data[1].image}
                        desc = {data[1].desc}
                        link = {data[1].link}
                        tags = {data[1].tags}
                    />
                )
            })
        )
        :
        setCardData(
            Object.entries(dodata).filter(data => data[1].category.includes(acceptCategoryId)).map(data => {
                return (
                    <Card 
                        key = {nanoid()}
                        name = {data[1].name}
                        title = {data[1].title}
                        image = {data[1].image}
                        desc = {data[1].desc}
                        link = {data[1].link}
                        tags = {data[1].tags}
                    />
                )
            })
        )
        
    }  

    return (
        <DataContext.Provider value={dodata}>
            <main>
                <NavBar />
                <CategoryIdContext.Provider value={categoryContextValue}>
                    <SideBar filterData={() => {
                        filterCategory(categoryId)
                    }}/>
                </CategoryIdContext.Provider>
                
                <MainSection filterData={cardData}/>
            </main>
        </DataContext.Provider>
    )
}

export {App, DataContext};