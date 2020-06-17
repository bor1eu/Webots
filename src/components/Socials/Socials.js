import React from 'react';
import Social from './Social/Social';

export default function Socials(props){
    const {images}=props;
    let socials = images.map((item)=>{
            return(
                <Social img={item}/>
            )
        }
    )
    return(
        <div className="socials">
            {socials}
        </div>
    )
}