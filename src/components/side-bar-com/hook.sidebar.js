import React, { useContext, useState } from "react";
import { CategoryTagContext } from "../../hook.app";

const HookSidebar = () => {
  // State for Toggle sidebar in small devices
  const [sideToggle, setSideToggle] = useState(false);
  // const [categoryToggle, setCategoryToggle] = useState(true);
  // const [tagToggle, setTagToggle] = useState(true);

  const [listToggle, setListToggle] = useState({
    category: true,
    tag: true,
  });

  // Set category id and tag name on user interaction
  const { setCategoryId, setTagName } = useContext(CategoryTagContext);

  // Category List array
  const categoryArray = [
    {
      id: 0,
      name: "All items",
      active: true,
    },
    {
      id: 10,
      name: "Dev guide",
      active: false,
    },
    {
      id: 15,
      name: "Design tools",
      active: false,
    },
    {
      id: 20,
      name: "Color tools",
      active: false,
    },
    {
      id: 25,
      name: "Font sources",
      active: false,
    },
    {
      id: 30,
      name: "Icon sources",
      active: false,
    },
    {
      id: 35,
      name: "Inspirations",
      active: false,
    },
    {
      id: 40,
      name: "Illustrations",
      active: false,
    },
    {
      id: 45,
      name: "Image Sources",
      active: false,
    },
    {
      id: 50,
      name: "Games",
      active: false,
    },
    {
      id: 55,
      name: "Communities",
      active: false,
    },
  ];

  // Example Keywords
  const TagArray = [
    "free",
    "myanmar",
    "background",
    "design",
    "SVG",
    "generator",
    "premium",
    "frontend",
    "UI",
    "graphic design",
    "books",
    "CSS",
    "javascript",
    "documentation",
  ];

  // Active current user chosen category
  const [activeCate, setActiveCate] = useState(categoryArray);

  function handleCateActive(name) {
    setActiveCate((cate) =>
      cate.map((item) => {
        return item.name === name
          ? { ...item, active: item.active ? true : !item.active }
          : { ...item, active: item.active && false };
      })
    );
  }

  function handleClick(name = "All items", id = 0) {
    setCategoryId(id);
    handleCateActive(name);
    setTagName("");
  }

  function changeTagName(name) {
    setTagName(name);
    sidebarToggle();
  }

  function sidebarToggle() {
    setSideToggle((prevToggle) => !prevToggle);
  }

  // Category list initialize from array
  const categoryList = activeCate.map((category) => {
    return (
      <li
        key={category.id}
        onClick={() => {
          sidebarToggle();
          handleClick(category.name, category.id);
        }}
        className={category.active ? "category-item active" : "category-item"}
      >
        <a href="#up">{category.name}</a>
      </li>
    );
  });

  function listToggler(e) {
    setListToggle((prev) => ({
      ...prev,
      [e]: !prev[e],
    }));
  }

  // Tag name list initialize form array
  const tagList = TagArray.map((tag) => {
    return (
      <li key={tag} onClick={() => changeTagName(tag)} className="tag-item">
        <a href="#up">{tag}</a>
      </li>
    );
  });

  return {
    sideToggle,
    listToggle,
    sidebarToggle,
    listToggler,
    categoryList,
    tagList,
    activeCate,

    /* action */
    handleClick,
    setTagName
  };
};

export default HookSidebar;
