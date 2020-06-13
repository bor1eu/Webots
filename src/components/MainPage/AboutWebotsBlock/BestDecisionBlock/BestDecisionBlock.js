import React from 'react';
import './best-decision-block.css';

export default function BestDecisionBlock(){
    return(
        <div className="about-webots__best-decision-block">
            <div className="decorate-trinagle">
                <svg viewBox="0 0 406 406">
                    <path d="M0,0 406,0 406,253 Q300,40 0,0" fill="rgba(0, 0, 0, 0.8)"></path>
                </svg>
            </div>
            <div className="best-decision__text-content">
                <h3 className="best-decision__headline">We Bots</h3>
                <p className="best-decision__text">Лучшее решение для вашего бизнеса</p>
            </div>
        </div>
    )
}
