import React from "react";
import "../assets/styles/MainPage.scss";

import HeadSection from "./HeadSection.jsx";
import ShortFacts from "./ShortFacts.jsx";
import IncomeSection from "./IncomeSection.jsx";
import ReviewsSection from "./ReviewsSection.jsx";
import FAQSection from "./FAQSection.jsx";
import AdditionalInfo from "./AdditionalInfo.jsx";
import FormSection from "./FormSection.jsx";
import Footer from "./Footer.jsx";


export default function MainPage() {
    return (
        <div id="main-page">
            <HeadSection />
            <ShortFacts />
            <IncomeSection />
            <ReviewsSection />
            <FAQSection />
            <AdditionalInfo />
            <FormSection />
            <Footer />
        </div>
    );
};