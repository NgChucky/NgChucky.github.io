import React from "react";

var MainContent = () => {
    const style = {
        position: `absolute`,
        top: `${50}%`,
        left: `${50}%`,
        transform: `translate(${-50}%, ${-50}%)`,
        backgroundColor: `rgba(${220}, ${220}, ${220}, ${0.8})`,
        width: `${70}%`,
        height: `${100}%`,
        padding: `${0}px`,
    };
    return (
        <div className="main-content" style={style}>
            <div className="heading" style={{ textAlign: "center", borderBottom: "2px solid #000" }}>
                <h1>Math Practice</h1>
            </div>
            <div className="content">
                <p>
                    () \int_a^b f(x) \, dx = F(b) - F(a) ()
                    () ()
                </p>
            </div>
        </div>
    );
};

export default MainContent;