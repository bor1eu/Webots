import React from 'react';
import Button from '../Button/Button';
import './description-block.css';

export default function DescriprionBlock(props){

    let button;
    if(props.needButton==true){
        button = <Button text={props.buttonText} theme="turquoise" action={props.action}/>
    }

    return(
        <div className={"description-block"+" "+props.userClass}>
            <h3 className="description-block__headline">{props.headline}</h3>
            <p className="description-block__text">{props.text}</p>
            {button}
        </div>
    )
}