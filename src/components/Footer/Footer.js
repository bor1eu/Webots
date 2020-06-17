import React, {Component} from 'react';
import MainFooterBlock from './MainFooterBlock/MainFooterBlock';
import FooterList from './footer__list/FooterList';
import './footer.css';

export default class Footer extends Component{
    render(){

        return(
            <footer className="footer container">
                <div className="footer__wrapper">
                    <MainFooterBlock/>
                    <FooterList styleSettings={{marginRight:'10.333333333333%'}} name="Компания" items={[{text:"We Bots", link:"#"},{text:"Наши цены", link:"#"},{text:"Расскажем о нас", link:"#"},{text:"Как создать", link:"#"}]}/>
                    <FooterList styleSettings={{marginRight:'10.333333333333%'}} name="Платформы" items={[{text:"Вконтакте", link:"#"},{text:"Одноклассники", link:"#"},{text:"Facebook", link:"#"},{text:"Telegram", link:"#"},{text:"Whats up", link:"#"},{text:"Viber", link:"#"}]}/>
                    <FooterList name="Документы" items={[{text:"Условия использования", link:"#"},{text:"Политика конфиденциальности", link:"#"},{text:"Поддержка", link:"#"},{text:"Оферта", link:"#"}]}/>
                    <div className="footer__decorate-line"></div>
                </div>
            </footer>
        )
    }
}