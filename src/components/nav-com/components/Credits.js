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
            <div className="modal--desc container">
                <div>
                    <h1>User Interface</h1>
                    <div className="sub-informer">
                        <a href="https://storyset.com/illustration/404-error-with-a-cute-animal/pana" target="_blank" rel="noreferrer">
                        <code>Story Set Illustrations</code>   
                        </a>
                        
                        <a href="https://lineicons.com/" target="_blank" rel="noreferrer">
                            <code>
                                Line Icons
                            </code>
                        </a>

                        <a href="https://www.gradientmagic.com/" target="_blank" rel="noreferrer">
                            <code>
                                Gradient Magic
                            </code>
                        </a>
                    </div>

                    <h1>Developer and Designer</h1>
                    <div className="sub-informer">
                        <a href="https://www.linkedin.com/in/te-nyain-moe-lwin-80b4a11a4/" target="_blank" rel="noreferrer">
                            <code>
                                Te Nyain Moe Lwin
                            </code>
                        </a>
                    </div>

                    <h1>References</h1>
                    <div className="sub-informer">
                        <a href="https://github.com/bradtraversy/design-resources-for-developers" target="_blank" rel="noreferrer">
                            <code>
                                Brad Traversy
                            </code>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Credits;