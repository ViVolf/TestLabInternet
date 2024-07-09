import React from "react";
import "../assets/styles/IncomeSection.scss";

import frontImg from "../assets/images/income_front.png";
import frontBack from "../assets/images/income_back.png";

export default function IncomeSection() {
    return (
        <div id="income-section">
            <div id="income-container">
                <div id="income-text">
                    <h2 id="income-text-h2">Круто, ты дошел до третьего блока</h2>
                    <p id="income-text-p">63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы свыше 15 000 ₽.<br /><br />
                        Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах.</p>
                </div>
                <div id="income-img">
                    <img id="income-front-img" src={frontImg} />
                    <img id="income-back-img" src={frontBack} />
                </div>
            </div>
        </div>
    );
};