import React, {Component} from 'react';
import DescriptionBlock from "../../DescriptionBlock/DescriptionBlock";
import './create-uniform-style-block.css';

export default class CreateUniformStyleBlock extends Component{
    render(){

        const headline = "Создавайте единый стиль для ваших социальных сетей";
        const text = "Динамические обложки, аватарки, подбор всех размеров для ваших социальных сетей сделают ваш бренд узнаваемым с первого взгляда";
        const buttonText = "Создать оформление";
        const userClass = "create-uniform-style-block__description";

        return(
            <section className="create-uniform-style-block container">
                <div className="create-uniform-style-block__mobile-fone-image"></div>
                <div className="create-uniform-style-block__decorate-line"></div>
                <DescriptionBlock headline={headline} text={text} needButton={true} buttonText={buttonText} userClass={userClass} action={this.props.showRegistrationForm}/>
                <div className="create-uniform-style-block__decorate-line"></div>
            </section>
        )
    }
}