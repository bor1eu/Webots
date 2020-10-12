import React from 'react';
import RequestForm from './RequestForm/RequestForm';
import Logo from '../Logo/Logo';
import './UnderConstruction.css';

export default function UnderConstruction(props) {
    return(
        <section className="under-construction">
            <div className="under-construction__block">
                <div className="under-construction__img"></div>
                <h2 className="under-construction__headline">Приносим извинения!</h2>
                <p className="under-construction__description">Данный раздел находится в разработке</p>
                <RequestForm />
            </div>
            <Logo otherClasses="under-construction__logo logo2"/>
        </section>
    )
}