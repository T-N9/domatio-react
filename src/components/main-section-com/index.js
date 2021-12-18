import React, { useContext } from "react";
// import { nanoid } from "nanoid";
// import Card from "./components/Card";
import { DataContext } from "../../App";

const MainSection = (props) => {
    const data_list = useContext(DataContext);
    // let card_list = Object.entries(data_list).map(data => {
    //     return (
    //         <Card 
    //             key = {nanoid()}
    //             name = {data[1].name}
    //             title = {data[1].title}
    //             image = {data[1].image}
    //             desc = {data[1].desc}
    //             link = {data[1].link}
    //             tags = {data[1].tags}
    //         />
    //     )
    // });

    // function filterCategory (categoryId){
    //     card_list = Object.entries(data_list).filter(data => data[1].category.includes(categoryId)).map(data => {
    //         return (
    //             <Card 
    //                 key = {nanoid()}
    //                 name = {data[1].name}
    //                 title = {data[1].title}
    //                 image = {data[1].image}
    //                 desc = {data[1].desc}
    //                 link = {data[1].link}
    //                 tags = {data[1].tags}
    //             />
    //         )
    //     })
    // }

    // filterCategory(30)



    return (
        <section className="mainSection">
            <div className="container card-grid">
                {props.filterData}
            </div>
        </section>
    )
}

export default MainSection;