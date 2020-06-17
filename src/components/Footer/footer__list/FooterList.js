import React, {Component} from 'react';
import './footer__list.css';

export default class FooterList extends Component{
    render(){
        let listName = this.props.name;
        let listBody = this.props.items.map(item=>{
            const {text, link} = item;
            return(
                <li className="footer__list-item">
                    <a className="footer__list-link" href={link}>{text}</a>
                </li>
            )
        });

        return(
            <ul className="footer__list" style={this.props.styleSettings}>
                <li className="footer__list-name">{listName}</li>
                {listBody}
            </ul>
        )
    }

}