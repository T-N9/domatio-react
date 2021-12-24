import React from "react";
import illustration  from '../../../images/no-item.svg';

const NoItem = (props) => {

    return(
        <>
            <div className={props.data === 0 ? "no-item-page d-block":"no-item-page d-none"}>
                <h1>No Item Found !</h1>
                <img src={illustration} alt="No item found" />
            </div>
        </>
    )
}

export default NoItem;