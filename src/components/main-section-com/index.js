import React, { useContext, useState , useEffect } from "react";
import { nanoid } from "nanoid";
import Card from "./components/Card";
import NoItem from "./components/NoItem";
import { DataContext } from "../../App";
import { CategoryTagContext } from "../../App";

const MainSection = () => {
    const data_list = useContext(DataContext);
    const [cardData, setCardData ] = useState("");
    const { categoryId, tagName } = useContext(CategoryTagContext);

    useEffect(() => {
        function withoutTagCall() {
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
            );
        }
    
        function tagFilterCall() {
            categoryId === 0 ?
            setCardData(
                Object.entries(data_list).filter(data => data[1].tags.includes(tagName)).map(data => {
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
                Object.entries(data_list).filter(data => data[1].category.includes(categoryId) && data[1].tags.includes(tagName)).map(data => {
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
            );
        }

        withoutTagCall();

        if(tagName !== "") {
            tagFilterCall();
        }
    },[categoryId, tagName, data_list]);

    // switch (categoryId) {
    //     case 0:
    //         headerText = "All items";
    //         break;
    //     case 10:
    //         headerText = "Dev guide";
    //         break;
    //     case 15:
    //         headerText = "Design tools";
    //         break;
    //     case 20:
    //         headerText = "Color tools";
    //         break;
    //     case 25:
    //         headerText = "Font sources";
    //         break;
    
    //     default:
    //         break;
    // }

    return (
        <section className="mainSection">
            <div className="mainSection--header">
            </div>
            <NoItem data={cardData.length}/>
            <div className="container card-grid">
                {cardData}
            </div>
        </section>
    )
}

export default MainSection;