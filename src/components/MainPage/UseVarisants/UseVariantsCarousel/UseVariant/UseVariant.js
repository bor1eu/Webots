import React, {Component} from 'react';
import './use-variant.css';

export default class UseVariant extends Component{
    render(){
        return(
            <li className="use-variant">
                <img className="use-variant__img" src={this.props.img} alt=""></img>
                <h3 className="use-variant__headline">{this.props.headline}</h3>
                <p className="use-variant__description">{this.props.description}</p>
            </li>
        )
    }
}