import React from "react";
import "../assets/styles/Review.scss";

export default function Review({ avatar, name, city, text }) {
    return (
        <div className="review">
            <div className="review-head">
                <img className="review-avatar" src={avatar} />
                <div className="review-head-info">
                    <p className="review-head-name">{name}</p>
                    <p className="review-head-city">{city}</p>
                </div>
            </div>
            <p className="review-text-p">{text}</p>
        </div>
    );
};