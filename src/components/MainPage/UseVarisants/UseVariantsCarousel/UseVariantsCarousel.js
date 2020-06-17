import React, {Component} from 'react';
import UseVariant from './UseVariant/UseVariant';
import analyticsImg from './img/analytics.jpg';
import notificationsImg from './img/notifications.jpg';
import chatBotImage from './img/chat-bot.jpg';
import socialsMonitoringImg from './img/socials-monitoring.jpg';
import './use-variants__carousel.css';

export default class UseVariantsCarousel extends Component{

    renderUseVariants(arr){
        return arr.map(item=>{
            const {img, headline, description}=item;
            return(
                <UseVariant img={img} headline={headline} description={description}/>
            )
        });
    }

    renderCarouselPoints(arr){
        return arr.map(item=>{
            return(
                <div className="use-variants__carousel-point"></div>
            )
        })
    }

    componentDidMount() {
        let carousel = document.querySelector(".use-variants__carousel");
        let carouselPoints = document.querySelector(".use-variants__carousel__points");
        carouselPoints.children[0].classList.add("use-variants__carousel-active-point");
        carousel.children[0].classList.add("active-use-variant");
    }

    render(){

        let analytics = {
            img: analyticsImg,
            headline:"Аналитика",
            description:"Поможет проследить развитие бизнеса и улучшить результаты"
        };

        let notifications = {
            img: notificationsImg,
            headline:"Уведомления",
            description:"Получайте уведомления и контролируйте свой бизнес"
        };

        let chatBot = {
            img: chatBotImage,
            headline:"Чат-бот",
            description:"Создавайте чат-бота и автоматизируйте процессы бизнеса"
        };

        let socialsMonitoring = {
            img: socialsMonitoringImg,
            headline:"Мониторинг подписчиков",
            description:"Отслеживайте и узнавайте свою аудиторию"
        };

        const useVariants=[analytics, notifications, chatBot, socialsMonitoring];

        let touchStart;
        let lastMove;
        let position = 0;
        let step = 250;

        const rememberTouch =(event)=>{
            let touch = event.changedTouches[0];
            touchStart = touch.pageX;
            console.log(touchStart);
        };

        const onSliderMove = (event)=>{
            let carousel = document.querySelector(".use-variants__carousel");
            let touch = event.changedTouches[0];
            lastMove=touch.pageX;
            console.log(touch.pageX);
            if((touchStart<touch.pageX)&&(position>500)){
                carousel.style.transition="transform 1s";
                carousel.style.transform= "translateX(" +(position+touch.pageX)+ "px)";
            }else if((touch.pageX<touchStart) && (position<(-750))){
                carousel.style.transition="transform 1s";
                carousel.style.transform= "translateX(" +(position - touch.pageX)+ "px)";
            }
        };

        const onSwipe = (event)=>{
            let carousel = document.querySelector(".use-variants__carousel");
            let carouselPoints = document.querySelector(".use-variants__carousel__points");
            console.log("position is"+(position+step));
            if((lastMove>touchStart)&& position<500){
                carousel.style.transition="transform 0.5s";
                carousel.style.transform= "translateX(" +(position=position+step)+ "px)"; //слайдер вправо
                console.log(position);
            }else if((touchStart>lastMove)&&position>(-750)){
                carousel.style.transition="transform 0.5s";
                carousel.style.transform= "translateX(" +(position=position-step)+ "px)";//слайдер влево
                console.log(position);
            }
            for(let i=0; i<carouselPoints.children.length; i++){
                carouselPoints.children[i].classList.remove("use-variants__carousel-active-point");
            }
            if(position==0){
                setTimeout(()=>carousel.children[1].classList.remove("active-use-variant"), 500);
                carousel.children[0].classList.add("active-use-variant");
                carouselPoints.children[0].classList.add("use-variants__carousel-active-point");
            }else if(position==0-step){
                setTimeout(()=>carousel.children[0].classList.remove("active-use-variant"), 500);
                setTimeout(()=>carousel.children[2].classList.remove("active-use-variant"), 500);
                carousel.children[1].classList.add("active-use-variant");
                carouselPoints.children[1].classList.add("use-variants__carousel-active-point");
            }else if(position==0-step*2){
                setTimeout(()=>carousel.children[1].classList.remove("active-use-variant"), 500);
                setTimeout(()=>carousel.children[3].classList.remove("active-use-variant"), 500);
                carousel.children[2].classList.add("active-use-variant");
                carouselPoints.children[2].classList.add("use-variants__carousel-active-point");
            }else if(position==0-step*3){
                setTimeout(()=>carousel.children[2].classList.remove("active-use-variant"), 500);
                carousel.children[3].classList.add("active-use-variant");
                carouselPoints.children[3].classList.add("use-variants__carousel-active-point");
            }
        };

        return(
            <div className="use-variants__carousel-wrapper" onTouchStart={rememberTouch} onTouchEnd={onSwipe} onTouchMove={onSliderMove}>
                <ul className="use-variants__carousel">
                    {this.renderUseVariants(useVariants)}
                </ul>
                <div className="use-variants__carousel__points">
                    {this.renderCarouselPoints(useVariants)}
                </div>
            </div>
        )
    }
}