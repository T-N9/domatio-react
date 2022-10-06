import React from "react";
import LineIcon from "react-lineicons";

/* Hook */
import HookSidebar from "./hook.sidebar";

const SideBar = () => {
  const {
    sideToggle,
    listToggle,
    sidebarToggle,
    listToggler,
    categoryList,
    tagList,
  } = HookSidebar();

  return (
    <>
      <div
        onClick={sidebarToggle}
        className={
          sideToggle
            ? "sidebar--overlay hide-on-desktop active"
            : "sidebar--overlay hide-on-desktop"
        }
      ></div>
      <button
        aria-label="sidebar toggle button"
        onClick={sidebarToggle}
        className={
          sideToggle
            ? "sidebar--toggle hide-on-desktop active"
            : "sidebar--toggle hide-on-desktop "
        }
      >
        <LineIcon name="radio-button" />
      </button>
      <aside
        className={
          sideToggle ? "sidebar active-mobile" : "sidebar hidden-mobile"
        }
      >
        <div className="sidebar--wrapper">
          <section className="sidebar--category">
            <div className="sidebar--header">
              <small className="section-name">Categories</small>

              <button
                onClick={() => listToggler("category")}
                className="toggle-sideContent"
                aria-label="toggle-content"
              >
                <LineIcon
                  name={listToggle.category ? "chevron-up" : "chevron-down"}
                />
              </button>
            </div>
            <ul
              className={
                listToggle.category ? "category-list" : "category-list d-none"
              }
            >
              {categoryList}
            </ul>
          </section>
          <hr />
          <section className="sidebar--tag">
            <div className="sidebar--header">
              <small className="section-name">Example Keywords</small>

              <button
                onClick={() => listToggler("tag")}
                className="toggle-sideContent"
                aria-label="toggle-content"
              >
                <LineIcon
                  name={listToggle.tag ? "chevron-up" : "chevron-down"}
                />
              </button>
            </div>
            <ul className={listToggle.tag ? "tag-list" : "tag-list d-none"}>
              {tagList}
            </ul>
          </section>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
