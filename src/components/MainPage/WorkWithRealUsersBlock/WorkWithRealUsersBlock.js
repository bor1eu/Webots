import React, {Component} from "react";
import TitleImage from "../../TitleImage/TitleImage";
import "./work-with-real-users-block.css";
import WorkWithRealUsersImg from "./img/work-with-real-users-img.svg";
import DescriptionBlock from "../../DescriptionBlock/DescriptionBlock";

export default class WorkWithRealUsersBlock extends Component{
    render(){

        const headline = "Работайте только с реальными пользователями";
        const text = "Перестаньте платить за ботов в ваших социальных сетях! Оставляйте в своих сообществах реальных пользователей, ведь только они станут вашими клиентами. Проводите мониторинг, чтобы быть в курсе, кто ваши клиенты. Определяйте победителей в ваших розыгрышах вместе с We Bots.";
        const buttonText = "Регистрация";
        const userClass = "work-with-real-users-block__text-content";

        return(
            <section className="work-with-real-users-block container">
                <TitleImage img={WorkWithRealUsersImg} class="work-with-real-users-block__title-image"/>
                <DescriptionBlock headline={headline} text={text} needButton={true} buttonText={buttonText} userClass={userClass} action={this.props.showRegistrationForm}/>
            </section>
        )
    }
}