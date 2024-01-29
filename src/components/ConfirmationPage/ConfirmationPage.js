import React from 'react';
import './ConfirmationPage.css';

const ConfirmationPage = () => {
    return (
        <div className="container">
            <div>
                <h1 className="header_text">Yeeyy! Finally</h1>
            </div>
            <div className="gif_container">
                <img
                    src="https://i.postimg.cc/wTDG30TB/yes.gif"
                    alt="Cute animated illustration"
                />
            </div>
            <button className="btn" id="yesButton" onClick={() => window.location.href = "/"}>Let's Fix a Date</button>
        </div>
    );
};

export default ConfirmationPage;
