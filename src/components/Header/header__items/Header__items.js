import React, {Component} from 'react';
import './header__item.css';
import './header__items.css';

export default class Header__items extends Component{

    renderItems(arr){
       return arr.map(item =>{
                const {text, img} = item;
                return(
                    <li className="header__item">
                        <a href="#" className="header__item__link">
                            {img}
                            {text}
                        </a>
                    </li>
                )
            });
        };

    render() {
        const headerItems = this.renderItems(this.props.items);
        return (
            <ul className='header__items'>
                {headerItems}
            </ul>
        )
    }
}