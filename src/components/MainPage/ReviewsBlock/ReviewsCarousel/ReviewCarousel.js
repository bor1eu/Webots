import React, {Component} from 'react';
import Review from '../Review/Review';
import './review-carousel.css';

export default class ReviewCarousel extends Component{

    state={
      reviews: [
          {
              id:1,
              image:"",
              authorName: "Роберт Ивансковский",
              authorStatus: "Licensed Embalmer",
              text: "Самый любимый сервис. Он значительно сокращает время моей работы и позволяет добиться еще больших результатов."
          },
          {
              id:2,
              image:"",
              authorName: "София Любимова",
              authorStatus: "Licensed Embalmer",
              text: "Самый любимый сервис. Он значительно сокращает время моей работы и позволяет добиться еще больших результатов."
          },
          {
              id:3,
              image:"",
              authorName: "Петр Молотов",
              authorStatus: "Licensed Embalmer",
              text: "Самый любимый сервис. Он значительно сокращает время моей работы и позволяет добиться еще больших результатов."
          },
          {
              id:4,
              image:"",
              authorName: "Лариса Крушинина",
              authorStatus: "Licensed Embalmer",
              text: "Самый любимый сервис. Он значительно сокращает время моей работы и позволяет добиться еще больших результатов."
          }
      ]
    };

    componentDidMount() {
        let offset=0;
        let reviewsArr = document.querySelectorAll('.review-block__review');
        for(let i=0; i<reviewsArr.length; i++){
            reviewsArr[i].style.left = -10.416666666666+offset+"%";
            offset+=5.2083333333333;
        }
        reviewsArr[reviewsArr.length-1].style.opacity="0.3";
    }

    renderReviews = (reviews)=>{
        return reviews.map(item=>{
            return(
                <Review id={item.id} image={item.image} authorName={item.authorName} authorStatus={item.authorStatus} reviewText={item.text}/>
            )
        })
    };

    render(){

        let index = 0;
        let sliderReady=true;

        const mooveCarouselRight=(event)=>{
          let containerWidth = parseInt(getComputedStyle(document.querySelector(".review-block")).width);
          if(sliderReady===true) {
              sliderReady=false;
              let reviewsArr = document.querySelectorAll('.review-block__review');
              for (let i = 0; i < reviewsArr.length; i++) {
                  let left = parseInt(getComputedStyle(reviewsArr[i]).left);
                  let reviewWidth = parseInt(getComputedStyle(reviewsArr[i]).width);
                  reviewsArr[i].style.left = (left*100/containerWidth) - (reviewWidth*100/containerWidth+5.2083333333333) + "%";
                  reviewsArr[i].style.opacity = "1";
              }
              let updateCarousel = () => {
                  let left = parseInt(getComputedStyle(reviewsArr[index]).left);
                  let reviewWidth = parseInt(getComputedStyle(reviewsArr[index]).width);
                  reviewsArr[index].style.left = (left*100/containerWidth) + (reviewWidth*100/containerWidth+5.2083333333333) * reviewsArr.length + 2.6041666666666+"%";
                  reviewsArr[index].style.opacity = "0";
                  setTimeout(
                      function () {
                          reviewsArr[index].style.opacity = "0.3";
                          reviewsArr[index].style.left= (parseInt(getComputedStyle(reviewsArr[index]).left)*100/containerWidth) - 2.6041666666666+"%";
                          index == reviewsArr.length - 1 ? index = 0 : index++;
                          setTimeout(()=>{sliderReady=true;},1000);
                      },
                      800
                  );
              };
              setTimeout(
                  updateCarousel,
                  800
              );
          }
        };

        const mooveCarouselLeft=(event)=>{
            let containerWidth = parseInt(getComputedStyle(document.querySelector(".review-block")).width);
            if(sliderReady===true) {
                sliderReady=false;
                let reviewsArr = document.querySelectorAll('.review-block__review');
                for (let i = 0; i < reviewsArr.length; i++) {
                    let left = parseInt(getComputedStyle(reviewsArr[i]).left);
                    let reviewWidth = parseInt(getComputedStyle(reviewsArr[i]).width);
                    reviewsArr[i].style.left = (left*100/containerWidth) + (reviewWidth*100/containerWidth+5.2083333333333) + "%";
                    reviewsArr[i].style.opacity = "1";
                }
                let updateCarousel = () => {
                    index === 0 ? index = reviewsArr.length - 1 : index--;
                    let left = parseInt(getComputedStyle(reviewsArr[index]).left);
                    let reviewWidth = parseInt(getComputedStyle(reviewsArr[index]).width);
                    reviewsArr[index].style.left = (left*100/containerWidth) - ((reviewWidth*100/containerWidth+5.2083333333333) * reviewsArr.length + 2.6041666666666)+"%";
                    reviewsArr[index].style.opacity = "0";
                    setTimeout(
                        function () {
                            reviewsArr[index].style.opacity = "1";
                            reviewsArr[index].style.left= (parseInt(getComputedStyle(reviewsArr[index]).left)*100/containerWidth) + 2.6041666666666+"%";
                            setTimeout(()=>{sliderReady=true;},1000);
                        },
                        800
                    );
                };
                setTimeout(
                    updateCarousel,
                    800
                );
            }
        };

        const clickToArrow=(event)=>{
            event.preventDefault();
            mooveCarouselRight();
        };

        let touchStart;

        const rememberTouch =(event)=>{
            let touch = event.changedTouches[0];
            touchStart = touch.pageX;
            console.log(touchStart);
        };

        const onSwipe=(event)=>{
            let touch = event.changedTouches[0];
            if(touchStart<touch.pageX){
                mooveCarouselLeft();
            }else if(touchStart>touch.pageX){
                mooveCarouselRight();
            }
        };

        return(
            <div className="review-block__review-carousel" onTouchStart={rememberTouch} onTouchEnd={onSwipe}>
                <a href="" className="review-block__carousel-manage-arrow" onClick={clickToArrow}></a>
                {this.renderReviews(this.state.reviews)}
            </div>
        )
    }
}

