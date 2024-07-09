import React from "react";
import "../assets/styles/AdditionalInfo.scss";

import InfoCard from "./InfoCard.jsx";
import { info_cards } from "../assets/util/info_cards.js";

export default function AdditionalInfo() {
    return (
        <div id="additional-info">
            <div id="additional-info-container">
                {info_cards.map((item, index) => (
                    <InfoCard key={item.id} header={item.header} text={item.text} />
                ))}
            </div>
        </div>
    );
};