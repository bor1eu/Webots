import React, {Component} from 'react';
import ReviewCarousel from './ReviewsCarousel/ReviewCarousel';
import './review-block.css';

export default class ReviewBlock extends Component{
    render(){
        return(
            <section className="review-block container">
                <h3 className="review-block__headline">Что говорят о We Bots</h3>
                <ReviewCarousel/>
            </section>
        )
    }
}