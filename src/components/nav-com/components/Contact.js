import React, { useContext } from "react";
import LineIcon from 'react-lineicons';
import { menuContext } from "..";


const Contact = () => {
    const { setMenuToggle } = useContext(menuContext);

    const closeModal = () => {
        setMenuToggle(prevToggle => !prevToggle)
    }
    return(
        <div className="modal">
            <div className="modal--header">
                <h1>Contact</h1>

                <button onClick={closeModal} aria-label="close modal button">
                    <LineIcon name="close" />
                </button>
            </div>
            <div className="modal--desc container">
                <div>
                    <h1>Developer</h1>
                    <div className="sub-informer">
                        <a href="https://www.linkedin.com/in/te-nyain-moe-lwin-80b4a11a4/" target="_blank" rel="noreferrer">
                            <code>
                                Te Nyain Moe Lwin
                            </code>
                        </a>
                    </div>

                    <h1>GitHub</h1>
                    <div className="sub-informer">
                        <a href="https://github.com/T-N9/domatio-react" target="_blank" rel="noreferrer">
                            <code>
                                Domatio React
                            </code>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;