import React from "react";

function Jumbotron({ children }) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">(React) Google Books Search</h1>
                <p className="lead">This is an app to search for Books.</p>
            </div>
        </div>
    );
}

export default Jumbotron;