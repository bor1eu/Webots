import React, {Component} from "react";
import './our-partners-block.css';
import DescriptionBlock from '../../DescriptionBlock/DescriptionBlock';
import coursera from "./img/coursera.svg";
import coinbase from "./img/coinbase.svg";
import google from "./img/google.svg";

export default class OurPartnersBlock extends Component {

    renderParners(arr){
        return(
            arr.map(item=>{
                return(
                    <li className="webots-partner">
                        <img src={item}></img>
                    </li>
                )
            })
        )
    }

    render(){

        const headline = "Профессиональный бизнес выбирает We Bots";
        const text = "Профессиональный бизнес выбирает We Bots Сокращайте издержки на ведение социальных сетей с нашей платформой. Начните использовать свои сети по полной, используя все инструменты для продвижения своего бренда.";
        const userClass = "our-partners-block__text-content";
        const partners = [coursera, coinbase, google];

        return(
            <section className="our-partners-block container">
                <DescriptionBlock headline={headline} text={text} needButton={false} userClass={userClass}/>
                <ul className="our-partners">
                    {this.renderParners(partners)}
                </ul>
            </section>
        )
    }
}