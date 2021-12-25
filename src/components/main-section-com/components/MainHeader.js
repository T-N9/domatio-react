import React from "react";

const MainHeader = (props) => {
    return (
        <header className="mainSection--header">
            <div className="container">
                <h1 className="title">{props.title}</h1>
                <p className="description">
                    {props.description}
                </p>
            </div>
            <div className={props.tagName ? "tagboard" : "tagboard d-none"}>
                <h2>{props.tagName}</h2>
            </div>
        </header>
    )
}

export default MainHeader;