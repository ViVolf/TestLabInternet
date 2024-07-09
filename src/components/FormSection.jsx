import React, { useState } from "react";
import "../assets/styles/FormSection.scss";

export default function FormSection() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        agree: ""
    });

    const handleInputChange = (event) => {
        setFormData((formData) => ({ ...formData, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('https://example.com/api/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Серверный ответ:', data);
            })
            .catch(error => {
                console.error('Произошла ошибка:', error);
            });
    };

    return (
        <div id="form-section">
            <h1 id="form-h1">Отправить форму</h1>
            <form id="form-container" onSubmit={handleSubmit}>
                <div className="form-input-wrapper">
                    <input className="form-input-text" type="text" id="form-input-text-name" name="name" required placeholder="" pattern="[a-zA-Z]{2,15}" onChange={handleInputChange} />
                    <label className="form-input-text-label" htmlFor="form-input-text-name">Имя</label>
                    <p className="form-input-text-helper-idle">Заполните поле</p>
                    <p className="form-input-text-helper-invalid">Недопустимый формат</p>
                    <svg className="form-input-text-img-check" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="#25CD82" />
                    </svg>
                    <svg className="form-input-text-img-cancel" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z" fill="#F13636" />
                    </svg>
                </div>
                <div className="form-input-wrapper">
                    <input className="form-input-text" type="tel" id="form-input-text-phone" name="phone" required placeholder="" pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$" onChange={handleInputChange} />
                    <label className="form-input-text-label" htmlFor="form-input-text-phone">Телефон</label>
                    <p className="form-input-text-helper-idle">Заполните поле</p>
                    <p className="form-input-text-helper-invalid">Недопустимый формат</p>
                    <svg className="form-input-text-img-check" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="#25CD82" />
                    </svg>
                    <svg className="form-input-text-img-cancel" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z" fill="#F13636" />
                    </svg>
                </div>
                <div className="form-input-wrapper">
                    <input className="form-input-checkbox" type="checkbox" id="form-input-checkbox-agree" name="agree" onChange={handleInputChange} />
                    <label className="form-input-checkbox-label" htmlFor="form-input-checkbox-agree">
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 6.51041L5.4791 12L16 1.48947L14.4896 -9.53674e-05L5.4791 8.9999L1.48953 5.01036L0 6.51041Z" fill="white" />
                        </svg>
                    </label>
                    <p className="form-input-checkbox-text">Согласен, отказываюсь</p>
                </div>
                <input className="form-input-submit" type="submit"></input>
            </form>
        </div>
    );
};