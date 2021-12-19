import React, { useContext } from "react";
import { CategoryIdContext } from "../../App";

const SideBar = () => {

    const { categoryId, setCategoryId} = useContext(CategoryIdContext);
    // console.log("Context " +categoryId);

    const categoryArray = [
        {
            id : 0,
            name : "All items",
            active: true
        },
        {
            id : 10,
            name : "Dev guide",
            active: false
        },
        {
            id : 15,
            name : "Design tools",
            active: false
        },
        {
            id : 20,
            name : "Color tools",
            active: false
        },
        {
            id : 25,
            name : "Font sources",
            active: false
        },
        {
            id : 30,
            name : "Icon sources",
            active: false
        },
        {
            id : 35,
            name : "Inspirations",
            active: false
        },
        {
            id : 40,
            name : "Image sources",
            active: false
        },
        {
            id : 45,
            name : "Games",
            active: false
        },
        {
            id : 50,
            name : "Social apps",
            active: false
        }
    ]

    const TagArray = [ "free", "myanmar", "background", "design", "svg", "generator", "premium", "frontend", "ui ux", "graphic design"]

    const [activeCate, setActiveCate ] = React.useState(categoryArray)

    function handleCateActive (name) {
        setActiveCate(cate => cate.map(item => {
            return item.name === name ? 
            { ...item, active: item.active ? true : !item.active} : { ...item, active: item.active && false};
        }))

        console.log(name);
    }


    function handleClick (name, id) {
        setCategoryId(id)
        handleCateActive(name);

        console.log(name, id)
    }

    const categoryList = activeCate.map( category => {
        return <li 
        key={category.name} 
        onClick={ () => handleClick(category.name, category.id) } 
        className={category.active ? "category-item active" : "category-item"}>{category.name}</li> 
    })

    const tagList = TagArray.map( tag => {
        return <li key={tag} className="tag-item"><a href="www.google.com">{tag}</a></li>
    })

    return (
        <aside className="sidebar hide-on-mobile">
            <div className="sidebar--wrapper">
                <section className="sidebar--category">
                    <small className="section-name">
                        Categories
                    </small>
                    <ul className="category-list">
                        {categoryList}
                    </ul>
                </section>
                <hr />
                <section className="sidebar--tag">
                    <small className="section-name">
                        Tags
                    </small>
                    <ul className="tag-list">
                        {tagList}
                    </ul>
                </section>
            </div>
        </aside>
    )
}

export default SideBar;