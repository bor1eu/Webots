import React, {Component} from 'react';
import AboutWebotsBlock from './AboutWebotsBlock/AboutWebotsBlock';
import AboutWebotsFunctionsBlock from './AboutWebotsFunctionsBlock/AboutWebotsFunctionsBlock';
import ComfortableWorkBlock from './ComfortableWorkBlock/ComfortableWorkBlock';
import UseVariants from './UseVarisants/UseVariants';
import CreateAssistantsBlock from './CreateAssistantsBlock/CreateAssistantsBlock';
import OurPartnersBlock from './OurPartnersBlock/OurPartnersBlock';
import WorkWithRealUsersBlock from './WorkWithRealUsersBlock/WorkWithRealUsersBlock';
import CreateUniformStyleBlock from './CreateUniformStyleBlock/CreateUniformStyleBlock';
import ReviewBlock from './ReviewsBlock/ReviewBlock';
import RatesBlock from './RatesBlock/RatesBlock';

export default class MainPage extends Component{

    toggleEntry = (event)=>{
        event.preventDefault();
        if(window.getComputedStyle(document.querySelector('.header__form')).display=='none'){
            document.querySelector('.header__form').style.display='flex';
            document.querySelector('.decorate-fone-block').style.display='block';
        }
    };

    showRegistrationForm =(event)=>{
        event.preventDefault();
        this.props.onChangeHeaderFormType("registration");
        this.props.toggleEntry();
    };

    render(){
        return(
            [
                <AboutWebotsBlock showRegistrationForm={this.showRegistrationForm}/> ,
                <AboutWebotsFunctionsBlock/>,
                <ComfortableWorkBlock showRegistrationForm={this.showRegistrationForm}/>,
                <UseVariants/>,
                <CreateAssistantsBlock showRegistrationForm={this.showRegistrationForm}/>,
                <OurPartnersBlock/>,
                <WorkWithRealUsersBlock showRegistrationForm={this.showRegistrationForm}/>,
                <CreateUniformStyleBlock showRegistrationForm={this.showRegistrationForm}/>,
                <ReviewBlock/>,
                <RatesBlock/>
            ]
        )
    }
}