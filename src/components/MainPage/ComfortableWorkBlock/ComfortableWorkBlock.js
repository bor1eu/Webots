import React,{Component} from 'react';
import './comfortable-work.css';
import TitleImage from '../../TitleImage/TitleImage';
import DescriptionBlock from '../../DescriptionBlock/DescriptionBlock';
import comfortableWorkImg from "./img/comfortable-work-img.svg";

export default class ComfortableWorkBlock extends Component{
    render(){

        const headline = "Комфортная работа вашего бизнеса";
        const text = "Добавляйте подписчиков в ваши сообщества с помощью We Bots. Сокращайте ссылки и делайте посты во все свои соцсети одновременно. Все нужные инструменты для ведения своего бизнеса в социальных сетях на платформе We Bots.";
        const buttonText = "Регистрация";
        const userClass = "comfortable-work__description";

        return(
            <section className="comfortable-work container">
                <DescriptionBlock headline={headline} text={text} needButton={true} buttonText={buttonText} userClass={userClass} action={this.props.showRegistrationForm}/>
                <TitleImage img={comfortableWorkImg} class={"comfortable-work__title-image"}/>
            </section>
        )
    }
}