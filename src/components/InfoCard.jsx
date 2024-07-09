import React from "react";
import "../assets/styles/InfoCard.scss";

export default function InfoCard({ header, text }) {
    return (
        <div className="info-card">
            <p className="info-card-header">{header}</p>
            <p className="info-card-text">{text}</p>
        </div>
    );
};