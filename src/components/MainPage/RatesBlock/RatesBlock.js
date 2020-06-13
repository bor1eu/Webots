import React, {Component} from 'react';
import './rates-block.css';
import Button from "../../Button/Button";
import Rate from './Rate/Rate';

export default class RatesBlock extends Component{
    render(){

        let rates = [
            {
                id: "0",
                rateName: "Стартовый план",
                ratePrice: "00.00",
                subscriptionTerm: "Forever",
                rateDescription: "Попробуйте наш сервис бесплатно"
            },
            {
                id: "1",
                rateName: "Бизнес",
                ratePrice: "00.00",
                subscriptionTerm: "Month",
                rateDescription: "Доступ ко всем инструментам"
            },
            {
                id: "2",
                rateName: "Всё включено",
                ratePrice: "00.00",
                subscriptionTerm: "Month",
                rateDescription: "Доступ ко всем инструментам"
            }
        ];

        const renderRates = (rates)=>{
          return rates.map(item=>{
              return <Rate key={item.id} rateName={item.rateName} ratePrice={item.ratePrice} subscriptionTerm={item.subscriptionTerm} rateDescription={item.rateDescription}/>
          })
        };

        return(
            <section className="rates-block container">
                <svg className="rates-block__decorate-element1" width="265" height="636" viewBox="0 0 265 636" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.1" d="M-239.883 476.436C-198.268 533.874 65.1333 653.981 85.8357 598.934C116.611 517.104 -34.272 336.363 192.985 224.001C340.642 150.996 183.606 81.4999 14.9994 75.3904C-153.608 69.2809 -172.751 159.353 -154.627 249.743C-131.973 362.731 -291.903 404.638 -239.883 476.436Z" fill="#5EC8D9"/>
                </svg>
                <h3 className="rates-block__headline">Тариф</h3>
                <p className="rates-block__description">Выберите свой тарифный план<br/> и начните улучшать свой бизнес уже сегодня</p>
                <Button text="Конструктор подписки" theme="turquoise-letter"/>
                <div className="rate-block__rates">
                    {renderRates(rates)}
                </div>
                <Button text="Конструктор подписки" theme="turquoise-letter"/>
                <svg className="rates-block__decorate-element2" width="193" height="493" viewBox="0 0 193 493" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.1" d="M353.998 82.7625C313.488 42.0139 89.2987 -17.0722 80.2108 30.9525C66.701 102.344 209.934 227.616 45.0863 353.043C-62.021 434.537 71.3581 468.039 205.501 448.058C339.644 428.077 342.865 351.677 316.572 280.536C283.707 191.61 404.635 133.698 353.998 82.7625Z" fill="#5EC8D9"/>
                </svg>
            </section>
        )
    }
}