import React from "react";
import star_logo from "../assets/images/star.jpg";

export default function Book(props){
    return(
        <div className="individual-book-container">
            <img src={Object.values(props.coverImg)[0]} />
            <p>{props.title}</p>
            <p>{props.description}</p>
            <p>From {props.price}</p>
            <div className="popularity-container">
                <img src={star_logo} className="star--class"/>
                <p>{props.stats.ratings}</p>
                <p> ({props.stats.reviewCount})</p>
            </div>
        </div>
    )
}