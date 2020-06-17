import React from 'react';
import Button from "../../../Button/Button";
import './about-webots__title.css';

export default function AboutWebotsTitle(props){

    const {showRegistrationForm} = props;

    return(
        <div className="about-webots__title">
            <h1 className="about-webots-title__headline">We Bots</h1>
            <p className="about-webots-title__short-description">Лучший помощник для вашего бизнеса</p>
            <p className="about-webots-title__description">Самый простой способ держать свои социальные сети и мессенджеры под контролем.</p>
            <Button text="Регистрация" theme="turquoise" action={showRegistrationForm}/>
            <Button text="Регистрация" theme="turquoise-blue" action={showRegistrationForm}/>
        </div>
    )
}