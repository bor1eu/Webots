import React, {Component} from 'react';
import './form__registration.css';
import Button from '../../../Button/Button';
import HeaderFormField from '../header-form__field/HeaderFormField';
import WebotsService from '../../../../services/webotsService';

export default class From__registration extends Component{

    WebotsService = new WebotsService();

    onTtransitionToLogin=(event)=>{
        event.preventDefault();
        this.props.updateTransition("login");
    };

    onCheckName = (name)=>{
        let result;
        let checkNameRules1 = /(^[0-9a-zA-Zа-яА-Я!@#$%^&*]{2,50}$)/g;
        checkNameRules1.test(name)?result="ok":result="Имя пользователя должно быть не менее 2 символов и не более 50";
        let checkNameRules2 = /[0-9]/g;
        if(result=="ok"){
            checkNameRules2.test(name)?result="Имя не должно содержать символов '0-9'":result="ok";
        }
        return result
    };

    onCheckEmail = (email)=>{
        let result;
        let checkEmailRules = /(?=.*[@])(^[0-9a-zA-Z!@#$%^&*\.]{6,32}$)/g;
        checkEmailRules.test(email)?result="ok":result="Неверный формат электронной почты";
        return result;
    };

    onCheckPassword = (password)=>{
        let result;
        let checkPasswordRules = /(^[0-9a-zA-Zа-яА-Я!@#$%^&*]{8,32}$)/g;
        checkPasswordRules.test(password)?result="ok":result="Пароль должен быть быть не менее 8 символов и не более 32";
        return result;
    };

    onRegistration=(event)=>{
        event.preventDefault();
        let name = document.querySelector('.form__name-field').value;
        let checkName = this.onCheckName(name);
        let email = document.querySelector('.form__login-field').value;
        let checkEmail = this.onCheckEmail(email);
        let password = document.querySelector('.form__password-field').value;
        let checkPassword = this.onCheckPassword(password);
        if(checkName=="ok"&&checkEmail=="ok"&&checkPassword=="ok"){
            this.WebotsService.onRegistration(name, email, password)
                .then(this.onReturn);
        }else{
            if(checkName!="ok"){
                document.querySelector('.form__name-field').parentElement.classList.add('form__field-error');
                document.querySelector('.form__name-field').parentElement.querySelector('.form-field__errorText').textContent=checkName;
            }
            if(checkEmail!="ok"){
                document.querySelector('.form__login-field').parentElement.classList.add('form__field-error');
                document.querySelector('.form__login-field').parentElement.querySelector('.form-field__errorText').textContent=checkEmail;
            }
            if(checkPassword!="ok"){
                document.querySelector('.form__password-field').parentElement.classList.add('form__field-error');
                document.querySelector('.form__password-field').parentElement.querySelector('.form-field__errorText').textContent=checkPassword;
            }
        }
    };

    onReturn=(value)=>{
        if(value=="the specified email is already in use"){
            document.querySelector('.form__login-field').parentElement.classList.add('form__field-error');
            document.querySelector('.form__login-field').parentElement.querySelector('.form-field__errorText').textContent="Указанный адрес электронной почты уже используется";
        }else{
            document.querySelector('.header__form').style.display='none';
            document.querySelector('.decorate-fone-block').style.display='none';;
        }
    };

    render(){
        return(
            <div className="form__main-half form__registration">
                <h1 className="form__headline">Регистрация</h1>
                <HeaderFormField fieldClass="form__name-field" type="text" placeholder="Имя"/>
                <HeaderFormField fieldClass="form__login-field" type="text" placeholder="Почта"/>
                <HeaderFormField fieldClass="form__password-field" type="password" placeholder="Пароль"/>
                <label className="form-registration__privacy-terms-radio-button">
                    <input type="radio"></input>
                    <div className="form-registration__privacy-terms-radio-text">Принимаю условия конфиденциальности</div>
                </label>
                <a href="#" className="form__transition-link" onClick={this.onTtransitionToLogin}>У вас есть аккаунт? Войти</a>
                <Button text="Регистрация" theme="turquoise" action={this.onRegistration}/>
            </div>
        )
    }
}