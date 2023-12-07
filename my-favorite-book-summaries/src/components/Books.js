import React from "react";

export default function Book(props){
    return(
        <div className="individual-book-container">
            <img src={props.img} />
            <p>{props.title}</p>
        </div>
    )
}