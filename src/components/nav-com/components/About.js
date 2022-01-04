import React, { useContext } from "react";
import LineIcon from 'react-lineicons';
import { menuContext } from "..";


const About = () => {
    const { setMenuToggle } = useContext(menuContext);

    const closeModal = () => {
        setMenuToggle(prevToggle => !prevToggle)
    }
    return(
        <div className="modal">
            <div className="modal--header">
                <h1>About Domatio</h1>

                <button onClick={closeModal} aria-label="close modal button">
                    <LineIcon name="close" />
                </button>
            </div>
            <div className="modal--desc container">
                <div>
                    <p>
                    Domatio is a website that helps a user find resources for web design, graphic design, UI/UX, and web development projects in one place. It provides a live search and tag feature to find the closest product that a user wants. Our goal is to showcase useful development resources, websites, and communities along with their brief descriptions.
                    </p>

                    <code>Version - 1.0</code><br />
                    <code>Domatio &copy; 2022 All Rights Reserved.</code>
                </div>
                <img className="image" src="https://domatio.netlify.app/meta-domatio.png" alt="about domatio" />
            </div>
        </div>
    )
}

export default About;