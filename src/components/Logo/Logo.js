import React from 'react';
import './logo.css';

export default function Logo(props){
    const {otherClasses} = props;
    return(
        <a className={"logo"+" "+otherClasses} href="#"></a>
    )
}