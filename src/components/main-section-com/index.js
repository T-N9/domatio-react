import React, { useContext, useState , useEffect } from "react";
import { nanoid } from "nanoid";
import Card from "./components/Card";
import { DataContext } from "../../App";
import { CategoryIdContext } from "../../App";

const MainSection = () => {
    const data_list = useContext(DataContext);
    const [cardData, setCardData ] = useState("");
    const { categoryId } = useContext(CategoryIdContext);

    useEffect(() => {
        categoryId === 0 ?
        setCardData(
            Object.entries(data_list).map(data => {
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
            Object.entries(data_list).filter(data => data[1].category.includes(categoryId)).map(data => {
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

        // console.log(cardData);
    },[categoryId, data_list])

    return (
        <section className="mainSection">
            <div className="container card-grid">
                {cardData}
            </div>
        </section>
    )
}

export default MainSection;