import React, {Component} from 'react';
import Header from "../../../Header/Header";
import demonstrationAvatar from './img/demonstration-avatar.png';
import "./about-webots__demonstration-window.css";

export default class DemonstrationWindow extends Component{

    accountData = {
        username:"Салтыков Никита",
        avatar: demonstrationAvatar
    };

    render(){
        return(
            <aside className="about-webots__demonstration-window">
                <Header loginCompleted="true" accountData={this.accountData}/>
                <div className="demonstration-window__body">
                    <div className="demonstration-window__sidebar"></div>
                    <div className="demonstration-window__main">
                        <div className="demonstration-window__headline-block"></div>
                        <div className="demonstration-window__decoration-block">
                            <div className="demonstration-avatar"></div>
                        </div>
                        <div className="demonstration-window__decoration-block"></div>
                        <div className="demonstration-window__decoration-block"></div>
                        <div className="demonstration-window__decoration-block"></div>
                    </div>
                </div>
            </aside>
        )
    }
}