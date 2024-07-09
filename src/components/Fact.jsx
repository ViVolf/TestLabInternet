import React from "react";
import "../assets/styles/Fact.scss";

export default function Fact( {svg, factH4, factP} ) {
    return (
        <div className="fact">
            <img className="fact-img" src={svg} />
            <div className="fact-text">
                <h4 className="fact-text-h4">{factH4}</h4>
                <p className="fact-text-p">{factP}</p>
            </div>
        </div>
    );
};