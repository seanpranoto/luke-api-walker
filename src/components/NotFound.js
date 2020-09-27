import React from "react";

const NotFound = () => {
    return (
        <div className="container">
            <p>These aren't the droids you're looking for</p>
            <img src={require("./obiwan.jpeg")} alt="Obiwan" />
        </div>
    );
}

export default NotFound;