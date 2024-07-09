import React from "react";
import { useState } from "react";
import "../assets/styles/HeadSection.scss";

export default function HeadSection() {
    const [isNavMenuOpen, setNavMenuOpen] = useState(false);

    function scrollToSection(divId) {
        document.getElementById(divId).scrollIntoView({ behavior: "smooth" });
        setNavMenuOpen(false);
    }

    return (
        <div id="head-section">
            <header id="header">
                <div id="logo">
                    <div id="logo-pic">
                        <svg className="logo-svg" id="logo-svg-above"><circle cx="12" cy="12" r="12" fill="#2A6CEA" /></svg>
                        <svg className="logo-svg" id="logo-svg-below"><circle cx="12" cy="12" r="12" fill="#ECEFF2" /></svg>
                    </div>
                    <div id="logo-text-container">
                        {!isNavMenuOpen && <p id="logo-text">testLab</p>}
                        {isNavMenuOpen && <p id="logo-text" className="logo-text-white">testLab</p>}
                    </div>
                </div>
                <nav id="header-navigation">
                    <a className="header-navigation-link" href="#short-facts">Как это работает?</a>
                    <a className="header-navigation-link" href="#income-section">3-й блок</a>
                    <a className="header-navigation-link" href="#faq-section">Вопросы и ответы</a>
                    <a className="header-navigation-link" href="#form-section">Форма</a>
                </nav>
                <button id="header-navigation-menu-button" onClick={() => setNavMenuOpen((isNavMenuOpen) => !isNavMenuOpen)} >
                    {!isNavMenuOpen &&
                        (<svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="22" height="2" fill="white" />
                            <rect y="10" width="22" height="2" fill="white" />
                        </svg>)}
                    {isNavMenuOpen &&
                        (<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1.92969" y="0.514771" width="22" height="2" transform="rotate(45 1.92969 0.514771)" fill="#191C1F" />
                            <rect x="0.515625" y="16.071" width="22" height="2" transform="rotate(-45 0.515625 16.071)" fill="#191C1F" />
                        </svg>)}
                </button>
            </header>
            {isNavMenuOpen &&
                (<div id="header-navigation-menu">
                    <div className="header-menu-link header-menu-link-top" onClick={() => scrollToSection("short-facts")}>
                        Как это работает?
                        <svg className="header-menu-img" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.40012 17.293C9.21262 17.4807 9.10733 17.7351 9.10742 18.0004C9.10752 18.2657 9.21298 18.52 9.40062 18.7075C9.58826 18.895 9.84271 19.0003 10.108 19.0002C10.3732 19.0001 10.6276 18.8947 10.8151 18.707L15.4001 14.121C15.9625 13.5585 16.2785 12.7955 16.2785 12C16.2785 11.2045 15.9625 10.4416 15.4001 9.87904L10.8111 5.29304C10.6207 5.12088 10.3714 5.02853 10.1148 5.03512C9.85817 5.04171 9.61391 5.14673 9.43259 5.32844C9.25127 5.51014 9.14677 5.75462 9.14073 6.01124C9.13468 6.26787 9.22756 6.517 9.40012 6.70704L13.9861 11.293C14.1736 11.4806 14.2789 11.7349 14.2789 12C14.2789 12.2652 14.1736 12.5195 13.9861 12.707L9.40012 17.293Z" fill="#83898F" />
                        </svg>
                    </div>
                    <div className="header-menu-link" onClick={() => scrollToSection("income-section")}>
                        3-й блок
                        <svg className="header-menu-img" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.40012 17.293C9.21262 17.4807 9.10733 17.7351 9.10742 18.0004C9.10752 18.2657 9.21298 18.52 9.40062 18.7075C9.58826 18.895 9.84271 19.0003 10.108 19.0002C10.3732 19.0001 10.6276 18.8947 10.8151 18.707L15.4001 14.121C15.9625 13.5585 16.2785 12.7955 16.2785 12C16.2785 11.2045 15.9625 10.4416 15.4001 9.87904L10.8111 5.29304C10.6207 5.12088 10.3714 5.02853 10.1148 5.03512C9.85817 5.04171 9.61391 5.14673 9.43259 5.32844C9.25127 5.51014 9.14677 5.75462 9.14073 6.01124C9.13468 6.26787 9.22756 6.517 9.40012 6.70704L13.9861 11.293C14.1736 11.4806 14.2789 11.7349 14.2789 12C14.2789 12.2652 14.1736 12.5195 13.9861 12.707L9.40012 17.293Z" fill="#83898F" />
                        </svg>
                    </div>
                    <div className="header-menu-link" onClick={() => scrollToSection("faq-section")}>
                        Вопросы и ответы
                        <svg className="header-menu-img" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.40012 17.293C9.21262 17.4807 9.10733 17.7351 9.10742 18.0004C9.10752 18.2657 9.21298 18.52 9.40062 18.7075C9.58826 18.895 9.84271 19.0003 10.108 19.0002C10.3732 19.0001 10.6276 18.8947 10.8151 18.707L15.4001 14.121C15.9625 13.5585 16.2785 12.7955 16.2785 12C16.2785 11.2045 15.9625 10.4416 15.4001 9.87904L10.8111 5.29304C10.6207 5.12088 10.3714 5.02853 10.1148 5.03512C9.85817 5.04171 9.61391 5.14673 9.43259 5.32844C9.25127 5.51014 9.14677 5.75462 9.14073 6.01124C9.13468 6.26787 9.22756 6.517 9.40012 6.70704L13.9861 11.293C14.1736 11.4806 14.2789 11.7349 14.2789 12C14.2789 12.2652 14.1736 12.5195 13.9861 12.707L9.40012 17.293Z" fill="#83898F" />
                        </svg>
                    </div>
                    <div className="header-menu-link" onClick={() => scrollToSection("form-section")}>
                        Форма
                        <svg className="header-menu-img" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.40012 17.293C9.21262 17.4807 9.10733 17.7351 9.10742 18.0004C9.10752 18.2657 9.21298 18.52 9.40062 18.7075C9.58826 18.895 9.84271 19.0003 10.108 19.0002C10.3732 19.0001 10.6276 18.8947 10.8151 18.707L15.4001 14.121C15.9625 13.5585 16.2785 12.7955 16.2785 12C16.2785 11.2045 15.9625 10.4416 15.4001 9.87904L10.8111 5.29304C10.6207 5.12088 10.3714 5.02853 10.1148 5.03512C9.85817 5.04171 9.61391 5.14673 9.43259 5.32844C9.25127 5.51014 9.14677 5.75462 9.14073 6.01124C9.13468 6.26787 9.22756 6.517 9.40012 6.70704L13.9861 11.293C14.1736 11.4806 14.2789 11.7349 14.2789 12C14.2789 12.2652 14.1736 12.5195 13.9861 12.707L9.40012 17.293Z" fill="#83898F" />
                        </svg>
                    </div>
                </div>)}
            <div id="head-info">
                <div id="head-info-text">
                    <h1 id="head-info-text-h1">Говорят, никогда не поздно сменить профессию</h1>
                    <p id="head-info-text-p">Сделай круто тестовое задание и у тебя получится</p>
                </div>
                <button id="head-info-button">Проще простого!</button>
            </div>
        </div>
    );
};