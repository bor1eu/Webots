import React, {Component} from "react";
import UseVariantsCarousel from "./UseVariantsCarousel/UseVariantsCarousel";
import './use-variants.css';
import decorateImage from "./img/usevariants-decorate-element.svg";

export default class UseVariants extends Component{

    render(){
        return(
                <section className="use-variants container">
                    <div className="use-variants__text-content">
                        <h3 className="use-variants__headline">Знайте о своем бизнесе все</h3>
                        <p className="use-variants__description">Используйте инструменты сервиса для развития вашего бизнеса. Контролируйте, автоматизируйте, следите за прогрессом</p>
                    </div>
                    <UseVariantsCarousel/>
                </section>
            )
    }
}