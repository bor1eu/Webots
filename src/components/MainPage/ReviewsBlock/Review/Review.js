import React, {Component} from 'react';
import './review.css';

export default class Review extends Component{

    render(){

        const authorImageStyle= {
            reviewAuthorPhoto:{
                backgroundImage:this.props.image
            }
        };

        return(
            <div className="review-block__review" key={this.props.id}>
                <div className="review-block__review-author-photo" style={authorImageStyle.reviewAuthorPhoto}></div>
                <p className="review-block__review-author-name">{this.props.authorName}</p>
                <p className="review-block__review-author-status">{this.props.authorStatus}</p>
                <p className="review-block__review-text">{this.props.reviewText}</p>
            </div>
        )
    }
}