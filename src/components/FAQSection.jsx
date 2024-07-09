import React from "react";
import "../assets/styles/FAQSection.scss";

import { faq } from "../assets/util/faq.js";
import Question from "./Question.jsx";

export default function FAQSection() {
    return (
        <div id="faq-section">
            <h1 id="faq-h1">Вопросы и ответы</h1>
            <div id="faq-container">
                {faq.map((item, index) => (
                    <Question key={item.id} question={item.question} answer={item.answer} />
                ))}
            </div>
        </div>
    );
};