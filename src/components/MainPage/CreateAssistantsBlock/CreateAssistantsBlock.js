import React, {Component} from 'react';
import DescriptionBlock from '../../DescriptionBlock/DescriptionBlock';
import './create-assistants-block.css';

export default class CreateAssistantsBlock extends Component{
    render(){

        const headline = "Создавайте помощников для своего бизнеса";
        const text = "Удобный конструктор позволит создавать чат ботов быстро и эффективно. Не знаете, как постоить диалог со своими клиентами, пользуйтесь готовыми скриптами продаж для вашего бизнеса.";
        const buttonText = "Создать чат - бота";
        const userClass = "create-assistants__text-content";

        return(
            <section className="create-assistants-block container">
                <div className="create-assistants__decorate-phone-element"></div>
                <DescriptionBlock headline={headline} text={text} needButton={true} buttonText={buttonText} userClass={userClass} action={this.props.showRegistrationForm}/>
            </section>
        )
    }
}