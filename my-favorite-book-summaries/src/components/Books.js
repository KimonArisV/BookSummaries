import React from "react";
import star_logo from "../assets/images/star.jpg";

export default function Book(props){
    return(
        <div id="individual-book-container">
            <img src={Object.values(props.coverImg)[0]} />
            <div id="book--info">
                <div id="title-and-stats">
                    <h3>{props.title}</h3>
                    <div id="popularity-container">
                        <img src={star_logo} id="star--class"/>
                        <p>{props.stats.ratings}</p>
                        <p> ({props.stats.reviewCount})</p>
                    </div>
                </div>
                <p>Summary:</p>
                <p>{props.description}</p>
                <p id="book-price">From ${props.price}</p>
            </div>
        </div>
    )
}