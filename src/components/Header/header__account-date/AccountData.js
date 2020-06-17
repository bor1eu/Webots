import React, {Component} from 'react';
import emptyAvatar from './img/avatar.svg';
import './header__account-data.css';

export default class AccountData extends Component {

    onToggleAutorizedMenu = (event) =>{
      event.preventDefault();
      let autorizedMenu = document.querySelector('.header__autrized-menu');
      autorizedMenu.style.display=="none"?autorizedMenu.style.display="block":autorizedMenu.style.display="none";
    };

    render() {
        let name = this.props.accountData.username;
        let avatar = this.props.accountData.avatar;
        if(avatar!=null){
            return(
                <a href="#" className="account-data" onClick={this.onToggleAutorizedMenu}>
                    <img className="account-data__avatar" src={avatar} alt="avatar"></img>
                    <p className="account-data__user-name">{name}</p>
                </a>
            )
        }else{
            return(
                    <a href="#" className="account-data" onClick={this.onToggleAutorizedMenu}>
                        <img className="account-data__avatar" src={emptyAvatar} alt="avatar"/>
                        <p className="account-data__user-name">{name}</p>
                    </a>
                )
        }
    }
}