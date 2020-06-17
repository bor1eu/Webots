import React, {Component} from 'react';
import HeaderFormLogo from './form__logo/HeaderFormLogo';
import Form__login from './Form__login/Form__login';
import Form__registration from './Form__registration/Form__registration';
import './header__form.css';
import closeButtonPicture from './img/close-form-button.png';
import showPasswordButton from './img/show-password-button.png';
import hidePasswordButton from './img/hide-password-button.png'

export default class Form_Login_and_Registration extends Component{

    closeForm=(event)=>{
      event.preventDefault();
      document.querySelector('.header__form').style.display='none';
      document.querySelector('.decorate-fone-block').style.display='none';
    };

    onLogin=(props)=>{
        this.props.onLogin(props);
    };

    checkEmptyField=(field)=>{
      let result=false;
      if(field.value!=""){
         result=true;
      }
      return(result);
    };

    addErrorStyle=(errorMessage)=>{
        let errorStyle = {
            border: "1px solid #E03658",
            ":before":{
                content:{errorMessage}
            }
        };
      return(
          errorStyle
      )
    };

    render(){
    let typeFormHalf;
    if(this.props.headerFormType=="login"){
        typeFormHalf=<Form__login updateTransition={this.props.onChangeHeaderFormType} updateAccountData={this.props.updateAccountData} onLogin={this.onLogin} checkEmptyField={this.checkEmptyField} addErrorStyle={this.addErrorStyle}/>
    }else if(this.props.headerFormType=="registration"){
        typeFormHalf= <Form__registration updateTransition={this.props.onChangeHeaderFormType}/>
    }
        return(
            <div className="header__form">
                <a href=" " className="form__close-form-button" onClick={this.closeForm}>
                    <img src={closeButtonPicture} alt="Close"></img>
                </a>
                <HeaderFormLogo/>
                {typeFormHalf}
            </div>
            );
    }
}