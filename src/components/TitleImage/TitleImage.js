import React from 'react';

export default function TitleImage(props){

    const titleImageStyle = {
        background:"url("+props.img+")"+"no-repeat",
    };

    return(
        <div style={titleImageStyle} className={props.class}></div>
    )
}