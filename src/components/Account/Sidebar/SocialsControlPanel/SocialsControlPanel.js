import React, {Component} from 'react';
import './account__socials-control-panel.css';
import WebotsService from '../../../../services/webotsService';

export default class SocialsControlPanel extends Component{

    WebotsService = new WebotsService();

    onVk=()=>{
        this.WebotsService.getVK("https://webots.ru/vk/callback/")
            .then(this.onReturn)
    };

    onReturn = (value)=>{
        console.log(value);
    };


    render(){
        return(
            <div className="account__socials-control-panel">
                <button onClick={this.onVk}>VK</button>
                <a href="https://webots.ru/vk/callback/">VK2</a>
            </div>
        )
    }
}