import React from "react";
import "../assets/styles/ShortFacts.scss";

import Fact from "../components/Fact.jsx"
import { facts } from "../assets/util/facts.js";

export default function ShortFacts() {
    return (
        <div id="short-facts">
            <h1 id="short-facts-h1">Как это работает</h1>
            <div id="facts-container">
                <div id="facts">
                    {facts.map((item, index) => (
                        <Fact key={item.id} svg={item.svg} factH4={item.h4} factP={item.p} />
                    ))}
                </div>
            </div>
        </div>
    );
};