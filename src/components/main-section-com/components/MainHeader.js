import React from "react";
import LineIcon from 'react-lineicons'

/* Lend Hook */
import HookSidebar from "../../side-bar-com/hook.sidebar";

const MainHeader = (props) => {
  const { setTagName } = HookSidebar();

  return (
    <header className="mainSection--header">
      <div className="container">
        <h1 className="title">{props.title}</h1>
        <p className="description">{props.description}</p>
      </div>
      <div
       
        className={props.tagName ? "tagboard" : "tagboard d-none"}
      >
        <span  onClick={() => setTagName("")} className="close-tag">
            <LineIcon name="close"/>
        </span>
        <h2>{props.tagName}</h2>
      </div>
    </header>
  );
};

export default MainHeader;
