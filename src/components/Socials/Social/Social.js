import React from 'react';

export default function Social(props){
    const {img} = props;
    return(
        <a href="#" className="social">{img}</a>
    );
}