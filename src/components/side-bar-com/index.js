import React, { useContext, useState } from "react";
import LineIcon from 'react-lineicons';
import { CategoryTagContext } from "../../App";

const SideBar = () => {

    // State for Toggle sidebar in small devices
    const [ sideToggle, setSideToggle ] = useState(false);

    // Set category id and tag name on user interaction
    const { setCategoryId, setTagName } = useContext(CategoryTagContext);

    // Category List array
    const categoryArray = [
        {
            id: 0,
            name: "All items",
            active: true
        },
        {
            id: 10,
            name: "Dev guide",
            active: false
        },
        {
            id: 15,
            name: "Design tools",
            active: false
        },
        {
            id: 20,
            name: "Color tools",
            active: false
        },
        {
            id: 25,
            name: "Font sources",
            active: false
        },
        {
            id: 30,
            name: "Icon sources",
            active: false
        },
        {
            id: 35,
            name: "Inspirations",
            active: false
        },
        {
            id: 40,
            name: "Illustrations",
            active: false
        },
        {
            id: 45,
            name: "Image Sources",
            active: false
        },
        {
            id: 50,
            name: "Games",
            active: false
        },
        {
            id: 55,
            name: "Social Apps",
            active: false
        }
    ]

    // Tag name List array
    const TagArray = ["free", "myanmar", "background", "design", "SVG", "generator", "premium", "frontend", "UI", "graphic design", "books", "CSS", "javascript", "documentation"];

    // Active current user chosen category
    const [activeCate, setActiveCate] = useState(categoryArray)

    function handleCateActive(name) {
        setActiveCate(cate => cate.map(item => {
            return item.name === name ?
                { ...item, active: item.active ? true : !item.active } : { ...item, active: item.active && false };
        }))
    }

    function handleClick(name, id) {
        setCategoryId(id);
        handleCateActive(name);
        setTagName("");
    }

    function changeTagName(name) {
        setTagName(name)
        sidebarToggle();
    }

    function sidebarToggle () {
        setSideToggle( prevToggle => !prevToggle);
    }

    // Category list initialize from array
    const categoryList = activeCate.map(category => {
        return (
            <li
                key={category.id}
                onClick={() => handleClick(category.name, category.id)}
                className={category.active ? "category-item active" : "category-item"}>
                <a href="#up">
                    {category.name}
                </a>
            </li>
        )
    })

    // Tag name list initialize form array
    const tagList = TagArray.map(tag => {
        return <li key={tag} onClick={() => changeTagName(tag)} className="tag-item"><a href="#up">{tag}</a></li>
    })

    return (
        <>
            <div onClick={sidebarToggle} className={ sideToggle ? "sidebar--overlay hide-on-desktop active" : "sidebar--overlay hide-on-desktop"}></div>
            <button aria-label="sidebar toggle button" onClick={sidebarToggle} className={ sideToggle ? "sidebar--toggle hide-on-desktop active" : "sidebar--toggle hide-on-desktop "}>
                <LineIcon name="radio-button" />
            </button>
            <aside className={ sideToggle ? "sidebar active-mobile" : "sidebar hidden-mobile"}>
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
        </>
    )
}

export default SideBar;