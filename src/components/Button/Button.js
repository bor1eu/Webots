import React from 'react';
import './button.css';
import './theme/button_theme_turquoise.css';
import './theme/button_theme_turquoise_inverted.css';
import './theme/button_theme_turquoiseLetter.css';
import './theme/button_theme_turquoise-blue.css';
import './theme/button_theme_cancel.css';

export default function Button (props){
    const {text, theme, action} = props;
    const button = <a className={"button"+" "+"button_theme_"+theme} onClick={action} href="#">{text}</a>;
    return(
        button
    )
}