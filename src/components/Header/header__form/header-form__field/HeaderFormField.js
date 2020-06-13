import React, {Component} from 'react';
import './header-form__field.css'
import showPasswordButton from "../img/show-password-button.png";
import hidePasswordButton from "../img/hide-password-button.png";

export default class HeaderFormField extends Component{

    clearFieldStyles = (event) =>{
        if(event.target.parentElement.classList.contains('form__field-error')){
            event.target.parentElement.classList.remove('form__field-error');
            event.target.parentElement.querySelector('.form-field__errorText').textContent=""
        }
    };

    togglePassword = (event) =>{
        const showPassword = "url"+{showPasswordButton}+")";
        if(event.target.classList.contains('password-field__toggle-password-button')){
            event.preventDefault();
            if(document.querySelector('.form__password-field').getAttribute('type')=="password"){
                document.querySelector('.form__password-field').setAttribute('type','text');
                event.target.style.backgroundImage="url('"+showPasswordButton+"')";
            }else{
                document.querySelector('.form__password-field').setAttribute('type','password');
                event.target.style.backgroundImage="url('"+hidePasswordButton+"')";
            }
        }
    };

    render(){
        let headerFormField;
        if(this.props.type!="password"){
            headerFormField =
                <div className="form__field">
                    <input type={this.props.type} placeholder={this.props.placeholder} className={"form-field__input"+" "+this.props.fieldClass} onClick={this.clearFieldStyles}/>
                    <p className="form-field__errorText"></p>
                </div>
        }else{
            headerFormField =
                <div className="form__field">
                    <input type={this.props.type} placeholder={this.props.placeholder} className={"form-field__input"+" "+this.props.fieldClass} onClick={this.clearFieldStyles}/>
                    <input className="password-field__toggle-password-button" type="submit" value="" onClick={this.togglePassword}/>
                    <p className="form-field__errorText"></p>
                </div>
        }

        return(
            headerFormField
        )
    }
}