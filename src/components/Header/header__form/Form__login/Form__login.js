import React, {Component} from 'react';
import Button from '../../../Button/Button';
import HeaderFormField from '../header-form__field/HeaderFormField';
import './form__login.css'
import WebotsService from '../../../../services/webotsService';

export default class Form__login extends Component{

    WebotsService = new WebotsService();

    onTtransitionToReg=(event)=>{
        event.preventDefault();
        this.props.updateTransition("registration");
    };

    onLogin=(event)=>{
        event.preventDefault();
        let login = document.querySelector('.form__login-field');
        let password = document.querySelector('.form__password-field');
        let formFields = [login, password];
        let emptyFields = [];
        for(let i=0; i<formFields.length;i++){
            if(this.props.checkEmptyField(formFields[i])==false){
                emptyFields.push(formFields[i]);
            }
        }
        if(emptyFields.length==0){
            this.WebotsService.onLogin(login.value, password.value)
                .then(this.onReturn);
        }else{
            for(let i=0; i<emptyFields.length; i++){
                emptyFields[i].parentElement.classList.add('form__field-error');
                emptyFields[i].parentElement.querySelector('.form-field__errorText').textContent="Это поле обязательно для заполнения"
            }
        }
    };

    onReturn=(value)=>{
        if(value.user!=undefined){
            let user = {
                username: value.user.profile.lastname==null?(value.user.profile.firstname):(value.user.profile.lastname+" " +  value.user.profile.firstname),
                avatar: value.user.profile.photo,
                social_links: value.user.profile.social_links
            };
            sessionStorage.setItem('user', JSON.stringify(user));
            this.props.updateAccountData(user);
            document.querySelector('.decorate-fone-block').style.display='none';
        }else if(value=="not correct password"){
            document.querySelector('.form__password-field').parentElement.classList.add('form__field-error');
            document.querySelector('.form__password-field').parentElement.querySelector('.form-field__errorText').textContent="Неверный пароль";
        }else if(value=="not correct email"){
            document.querySelector('.form__login-field').parentElement.classList.add('form__field-error');
            document.querySelector('.form__login-field').parentElement.querySelector('.form-field__errorText').textContent="Указанный адрес электронной почты не зарегистрирован";
        }
    };

    render(){
        return(
            <div className="form__main-half form__login">
                <h1 className="form__headline">Вход</h1>
                <HeaderFormField fieldClass="form__login-field" type="text" placeholder="Почта"/>
                <HeaderFormField fieldClass="form__password-field" type="password" placeholder="Пароль"/>
                <a href="#" className="form__transition-link" onClick={this.onTtransitionToReg}>У вас нет аккаунта? Регистрация</a>
                <Button text="Войти" theme="turquoise" action={this.onLogin}/>
            </div>
        )
    }
}