import React, { useContext } from "react";
import LineIcon from 'react-lineicons';
import { menuContext } from "..";


const Credits = () => {
    const { setMenuToggle } = useContext(menuContext);

    const closeModal = () => {
        setMenuToggle(prevToggle => !prevToggle)
    }
    return(
        <div className="modal">
            <div className="modal--header">
                <h1>Credits</h1>

                <button onClick={closeModal} aria-label="close modal button">
                    <LineIcon name="close" />
                </button>
            </div>
        </div>
    )
}

export default Credits;