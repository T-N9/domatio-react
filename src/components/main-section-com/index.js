import React, { useContext, useState , useEffect } from "react";
import { nanoid } from "nanoid";
import Card from "./components/Card";
import NoItem from "./components/NoItem";
import MainHeader from "./components/MainHeader";
import { DataContext } from "../../App";
import { CategoryTagContext } from "../../App";

const MainSection = () => {
    const data_list = useContext(DataContext);
    const [cardData, setCardData ] = useState("");
    const { categoryId, tagName } = useContext(CategoryTagContext);
    let headerText, bodyText;

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

        if(cardData !== []){
            setTimeout(() => {
                document.querySelector('.loading-content').classList.add('visible-none');
                console.log('Hello');
            }, 2000);
        }

    },[categoryId, tagName, data_list]);

    switch (categoryId) {
        case 0:
            headerText = "Browse useful websites and resources.";
            bodyText = "Are you a developer or an UI designer? Domatio is providing a collection of various resources for your upcoming or working projects."
            break;
        case 10:
            headerText = "Dev guide";
            break;
        case 15:
            headerText = "Design tools";
            break;
        case 20:
            headerText = "Color tools";
            break;
        case 25:
            headerText = "Font sources";
            break;
    
        default:
            break;
    }

    return (
        <section className="mainSection">
            <MainHeader title={headerText} description={bodyText}  tagName={tagName}/>
            <NoItem data={cardData.length}/>
            <div className="container card-grid">
                {cardData}
            </div>
        </section>
    )
}

export default MainSection;