import React, {Component} from 'react';
import Button from '../../../Button/Button';
import "./rate.css";


export default class Rate extends Component{
    render(){
        return(
            <div className="rates-block__rate">
                <h3 className="rates-block__rate-name">{this.props.rateName}</h3>
                <p className="rates-block__rate-price">Р {this.props.ratePrice}</p>
                <p className="rate-block__rate-subscription-term">{this.props.subscriptionTerm}</p>
                <p className="rate-block__rate-description">{this.props.rateDescription}</p>
                <Button text="Начать сейчас" theme="turquoise"/>
            </div>
        )
    }
}