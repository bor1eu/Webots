import React, {Component} from 'react';
import './header__mobile-burger.css';

export default class Burger extends Component{

    toggleMobileMenu=(event)=>{
        if(event.target.classList.contains('header__mobile-burger')||event.target.classList.contains('mobile-burger__decorate-element')){
            event.preventDefault();
            if(window.getComputedStyle(document.querySelector('.header__mobile-menu')).display=='none'){
                document.querySelector('.header__mobile-menu').style.display="block";
                document.querySelector('.decorate-fone-block').style.display='block';
                document.querySelector('.decorate-fone-block').style.top='50px';
            }else{
                document.querySelector('.header__mobile-menu').style.display="none";
                document.querySelector('.decorate-fone-block').style.display='none';
                document.querySelector('.decorate-fone-block').style.top='0';
            }
        }else{
            console.log(event.target);
        }
    };

    render(){
        return(
            <a href="#" className="header__mobile-burger" onClick={this.toggleMobileMenu}>
                <div className="mobile-burger__decorate-element"></div>
                <div className="mobile-burger__decorate-element"></div>
                <div className="mobile-burger__decorate-element"></div>
            </a>
        )
    }
}