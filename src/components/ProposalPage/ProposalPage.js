import React from 'react';
import './ProposalPage.css';

const ProposalPage = () => {
    const handleMoveButton = () => {
        const noButton = document.getElementById("noButton");
        const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    };

    return (
        <div className="container">
            <div>
                <h1 className="header_text">Do you wanna go out with me?</h1>
            </div>
            <p>
                <a href="https://www.instagram.com/untoldcoding/">@untoldcoding</a>
            </p>
            <div className="gif_container">
                <img
                    src="https://i.postimg.cc/pdNqPxx1/milk-and-mocha-cute.gif"
                    alt="Cute animated illustration"
                />
            </div>
            <div className="buttons">
                <button className="btn" id="yesButton" onClick={() => window.location.href = "/confirmation"}>Yes</button>
                <button className="btn" id="noButton" onMouseOver={handleMoveButton} onClick={handleMoveButton}>No</button>
            </div>
        </div>
    );
};

export default ProposalPage;
