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
            headerText = "Powerful websites for learning development.";
            bodyText = "Here are some courses and tools for learning and some may guide you during your development process."
            break;
        case 15:
            headerText = "Are you in love with web designs?";
            bodyText = "This is a right place to browse visual resources and ready made design code for development. Web applications for design are included."
            break;
        case 20:
            headerText = "Spend less time finding a good color palette.";
            bodyText = "Websites and generators to give you beautiful color combinations in your UI designs, logos and visual environment."
            break;
        case 25:
            headerText = "Typography is salt to your design.";
            bodyText = "To make sure your design work has a proper and matching typography, the followings are to help you to find them and some can be directly imported."
            break;
        case 30:
            headerText = "Play some fancy and ionic icons in your project.";
            bodyText = "Using same icon resources for different design projects is boring. So, spend a minute to find some and use them appropriately."
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