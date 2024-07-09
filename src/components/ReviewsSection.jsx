import React from "react";
import "../assets/styles/ReviewsSection.scss";
import { useEffect, useRef } from "react";
import { register } from 'swiper/element/bundle';

import Review from "./Review.jsx";
import { reviews } from "../assets/util/reviews.js";

export default function ReviewsSection() {

    const swiperRef = useRef(null);

    useEffect(() => {
        register();

        const params = {
            loop: "true",
            slidesPerView: "1",
            pagination: "true",
            pagination: {
                clickable: true,
                el: '.reviews-pagination',
            },
            navigation: {
                nextEl: '.reviews-button-next',
                prevEl: '.reviews-button-prev',
            },
            breakpoints: {
                820: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                500: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                },
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
            },
        }

        Object.assign(swiperRef.current, params);

        swiperRef.current.initialize();
    }, []);

    return (
        <div id="reviews-section">
            <div id="reviews-container">
                <h1 id="reviews-h1">Отзывы</h1>
                <div id="reviews-wrapper">
                    <div className="reviews-button-prev">{"⟨"}</div>
                    <swiper-container init='false' ref={swiperRef} id="reviews-slider">
                        {reviews.map((item, index) => (
                            <swiper-slide key={index}><Review key={item.id} avatar={item.avatar} name={item.name} city={item.city} text={item.text} /></swiper-slide>
                        ))}
                    </swiper-container>
                    <div className="reviews-button-next">{"⟩"}</div>
                    <div className="reviews-pagination"></div>
                </div>
            </div>
        </div >
    );
};