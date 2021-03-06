import React from "react";

const user = props => (
    <div>
        <h1>{props.name}</h1>
        <p>Age: {props.age}</p>
        <style jsx>{`
            div {
                border: 1 px solid #eee;
                box-shadow: 0 2px 3px #ccc;
                padding: 30px;
                text-align: center;
            }
        `}</style>
    </div>
);

export default user;
