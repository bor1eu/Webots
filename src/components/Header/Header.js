import React, {Component} from 'react';
import Logo from '../Logo/Logo';
import Header__items from './header__items/Header__items.js';
import Button from '../Button/Button';
import Form_Login_and_Registration from './header__form/Form_Login_and_Registration';
import Burger from './header__mobile-burger/Burger';
import MobileMenu from './header__mobile-menu/HeaderMobileMenu';
import HeaderNotification from './header__notification-img/HeaderNotification';
import AccountData from './header__account-date/AccountData';
import HeaderAutorizedMenu from './header__autorized-menu/HeaderAutorizedMenu';
import './header.css';
import './header__logo/header__logo.css';
import WebotsService from '../../services/webotsService';

export default class Header extends Component{

    onLogin=(props)=>{
        this.props.onLogin(props);
    };

    showLoginForm =(event)=>{
        event.preventDefault();
        this.props.onChangeHeaderFormType("login");
        this.props.toggleEntry();
    };

    render(){

        // const constructorImg = <svg style={{display:"none"}} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        //     <g clipPath="url(#clip0)">
        //         <path d="M26.8762 11.8749C25.3661 11.8749 24.1048 12.95 23.8148 14.375H22.2635L19.7222 9.29361C18.9771 7.80106 17.4758 6.87478 15.8083 6.87478H15.0008V4.99973C15.0008 4.65472 14.7207 4.37469 14.3757 4.37469H9.37559C9.03057 4.37469 8.75055 4.65472 8.75055 4.99973V9.99986C8.75055 10.3449 9.03057 10.6249 9.37559 10.6249H14.3757C14.7207 10.6249 15.0008 10.3449 15.0008 9.99986V8.1248H15.8083C17.0008 8.1248 18.0721 8.78606 18.6033 9.85238L20.8647 14.375H2.13411L4.81667 11.6925C5.06043 11.4487 5.06043 11.0524 4.81667 10.8087C4.57292 10.5649 4.17663 10.5649 3.93288 10.8087L0.184049 14.5575C0.126566 14.615 0.0802759 14.685 0.047814 14.7612C-0.015938 14.9137 -0.015938 15.0863 0.047814 15.2387C0.0790454 15.3162 0.125336 15.385 0.184049 15.4425L3.93294 19.1913C4.05546 19.3139 4.21542 19.3751 4.37545 19.3751C4.53547 19.3751 4.69544 19.3139 4.81796 19.1926C5.06172 18.9488 5.06172 18.5525 4.81796 18.3088L2.13411 15.6249H22.1147L19.8534 20.1476C19.3209 21.2138 18.2509 21.8751 17.0583 21.8751H16.1883C15.8983 20.4501 14.6358 19.375 13.127 19.375C11.4019 19.375 10.0006 20.7764 10.0006 22.5001C10.0006 24.2239 11.4019 25.6252 13.1257 25.6252C14.6358 25.6252 15.897 24.5501 16.187 23.1251H17.0571C18.7259 23.1251 20.2259 22.1988 20.9709 20.7063L23.5123 15.6249H23.8135C24.1035 17.0499 25.3661 18.125 26.8749 18.125C28.5987 18.125 29.9999 16.7236 29.9999 14.9999C30 13.2762 28.6 11.8749 26.8762 11.8749Z" fill="#4F4F4F"/>
        //     </g>
        //     <defs>
        //         <clipPath id="clip0">
        //             <rect width="30" height="30" fill="white"/>
        //         </clipPath>
        //     </defs>
        // </svg>; // непонятный костыль, нужен для того чтоб корректно отображались svg в блоке AboutWebotsFunctionsBlock

        const webotsImage = <svg className="header__item__image" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16.7364 5.66162H16.2434V11.0804C16.2434 11.9241 15.7522 12.687 14.7674 12.687H5.11896V12.9446C5.11896 13.6906 5.96735 14.4435 6.83857 14.4435H14.2153L17.0374 16.1028L16.6281 14.4435H16.7364C17.6071 14.4435 17.9999 13.6923 17.9999 12.9446V6.94796C17.9999 6.20204 17.6071 5.66162 16.7364 5.66162Z"
                fill="#C4C4C4"/>
            <path
                d="M13.3271 1.89697H2.12068C1.1347 1.89697 0 2.77288 0 3.61717V10.409C0 11.1865 0.961389 11.748 1.88355 11.8347L1.28341 14.1128L5.12897 11.8505H13.3271C14.3131 11.8505 15.223 11.2527 15.223 10.409V4.91405V3.61717C15.223 2.77288 14.3125 1.89697 13.3271 1.89697ZM3.83034 7.63018C3.27118 7.63018 2.81801 7.177 2.81801 6.61785C2.81801 6.0587 3.27118 5.60552 3.83034 5.60552C4.3889 5.60552 4.84266 6.0587 4.84266 6.61785C4.84266 7.177 4.3889 7.63018 3.83034 7.63018ZM7.61149 7.63018C7.05234 7.63018 6.59916 7.177 6.59916 6.61785C6.59916 6.0587 7.05234 5.60552 7.61149 5.60552C8.17064 5.60552 8.62382 6.0587 8.62382 6.61785C8.62382 7.177 8.17064 7.63018 7.61149 7.63018ZM11.3932 7.63018C10.8341 7.63018 10.3803 7.177 10.3803 6.61785C10.3803 6.0587 10.8341 5.60552 11.3932 5.60552C11.9512 5.60552 12.4056 6.0587 12.4056 6.61785C12.4056 7.177 11.9512 7.63018 11.3932 7.63018Z"
                fill="#C4C4C4"/>
        </svg>;

        const howUseImage = <svg className="header__item__image" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
                <path
                    d="M17.9714 5.10703C17.9527 5.06052 17.9249 5.01929 17.8897 4.9848L15.6405 2.73566C15.4943 2.58942 15.2565 2.58942 15.1103 2.73566C14.964 2.8819 14.964 3.11965 15.1103 3.26589L16.7189 4.8753H16.4992C13.5691 4.8753 11.548 5.68149 9.94604 7.4904C9.8088 7.64564 9.82303 7.88261 9.97828 8.01986C10.0495 8.08285 10.1388 8.11361 10.2273 8.11361C10.3308 8.11361 10.4335 8.07087 10.5085 7.98762C11.482 6.88817 13.0434 5.62524 16.4992 5.62524H16.7189L15.1095 7.23465C14.9633 7.38089 14.9633 7.61864 15.1095 7.76488C15.1831 7.83839 15.279 7.87439 15.375 7.87439C15.471 7.87439 15.567 7.83765 15.6405 7.76488L17.8897 5.51574C17.9241 5.48125 17.9519 5.43924 17.9714 5.39351C18.0096 5.30204 18.0096 5.19854 17.9714 5.10703Z"
                    fill="#C4C4C4"/>
                <path
                    d="M8.58931 10.043C8.41533 9.93274 8.18208 9.98375 8.07184 10.1585L7.9631 10.3302C7.9631 10.3302 7.9631 10.3302 7.9631 10.3309C6.46619 12.6798 4.86203 14.6245 0.374992 14.6245C0.168003 14.6245 0 14.7925 0 14.9995C0 15.2065 0.168003 15.3745 0.374992 15.3745C5.23625 15.3745 7.03763 13.1793 8.59532 10.7337L8.70405 10.5612C8.81577 10.3857 8.76403 10.154 8.58931 10.043Z"
                    fill="#C4C4C4"/>
                <path
                    d="M17.9705 12.6067C17.9518 12.5602 17.924 12.519 17.8888 12.4845L15.6397 10.2353C15.4934 10.0891 15.2557 10.0891 15.1094 10.2353C14.9632 10.3816 14.9632 10.6193 15.1094 10.7656L16.7188 12.375H16.4991C11.8096 12.375 10.3891 10.1161 8.88475 7.72372C7.30835 5.21735 5.67796 2.62549 0.374992 2.62549C0.168003 2.62549 0 2.79349 0 3.00048C0 3.20747 0.168003 3.37547 0.374992 3.37547C5.26398 3.37547 6.71442 5.6816 8.24958 8.12346C9.79598 10.5826 11.3949 13.1249 16.4992 13.1249H16.7189L15.1095 14.7344C14.9633 14.8806 14.9633 15.1183 15.1095 15.2646C15.183 15.3381 15.279 15.3741 15.375 15.3741C15.471 15.3741 15.567 15.3374 15.6405 15.2646L17.8896 13.0154C17.9241 12.981 17.9519 12.9389 17.9713 12.8932C18.0081 12.8017 18.0081 12.6982 17.9705 12.6067Z"
                    fill="#C4C4C4"/>
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="18" height="18" fill="white"/>
                </clipPath>
            </defs>
        </svg>;

        const platformsImage = <svg className="header__item__image" width="18" height="18" viewBox="0 0 18 18"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15 12C13.9612 12 13.0463 12.5303 12.507 13.3342L5.8185 9.99C5.92875 9.67876 6.00001 9.34875 6.00001 9C6.00001 8.65125 5.92875 8.32124 5.8185 8.01L12.507 4.66576C13.0463 5.46975 13.9612 6.00001 15 6.00001C16.6545 6.00001 18 4.65451 18 3.00002C18 1.3455 16.6545 0 15 0C13.3455 0 12 1.3455 12 2.99999C12 3.34874 12.0713 3.67875 12.1815 3.98999L5.49302 7.33423C4.95376 6.53024 4.03878 5.99998 3.00002 5.99998C1.3455 6.00001 0 7.34551 0 9C0 10.6545 1.3455 12 2.99999 12C4.03875 12 4.95373 11.4697 5.49299 10.6657L12.1815 14.01C12.0712 14.3212 12 14.6512 12 15C12 16.6545 13.3455 18 15 18C16.6545 18 18 16.6545 18 15C18 13.3455 16.6545 12 15 12Z"
                fill="#C4C4C4"/>
        </svg>;

        const pricesImage = <svg className="header__item__image" width="10" height="18" viewBox="0 0 10 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
            <path
                d="M7.50362 8.17664C6.79728 7.7863 6.04632 7.48889 5.3028 7.18033C4.87156 7.00188 4.45891 6.7937 4.09459 6.50373C3.37709 5.93122 3.51464 5.00182 4.35482 4.63378C4.59274 4.52968 4.84182 4.49622 5.09462 4.48135C6.06863 4.42931 6.99431 4.60775 7.87538 5.03156C8.31405 5.24346 8.45904 5.17655 8.60775 4.71928C8.76388 4.23599 8.894 3.74527 9.03899 3.25827C9.13564 2.93112 9.01668 2.7155 8.70812 2.57795C8.14305 2.32887 7.5631 2.15042 6.95342 2.05377C6.15785 1.93108 6.15785 1.92737 6.15413 1.12808C6.15041 0.00165229 6.15042 0.00165226 5.02027 0.00165226C4.85669 0.00165226 4.69312 -0.00206533 4.52954 0.00165226C4.00165 0.0165226 3.91242 0.109462 3.89755 0.641079C3.89012 0.879005 3.89755 1.11693 3.89384 1.35857C3.89012 2.06492 3.8864 2.05377 3.2098 2.29913C1.57406 2.89394 0.56287 4.00922 0.45506 5.79367C0.358402 7.37364 1.18371 8.44059 2.48115 9.21757C3.28043 9.69714 4.16522 9.97968 5.01283 10.3552C5.3437 10.5001 5.65969 10.6674 5.93479 10.8979C6.74895 11.5708 6.60024 12.6898 5.63367 13.1136C5.11692 13.3404 4.57044 13.3961 4.00908 13.3255C3.14288 13.2177 2.31386 12.9909 1.53316 12.5857C1.0759 12.3478 0.942065 12.411 0.785926 12.9054C0.652092 13.3329 0.533129 13.7642 0.414166 14.1954C0.25431 14.7754 0.313791 14.9129 0.867712 15.1843C1.57406 15.5263 2.32873 15.7011 3.09827 15.8237C3.70052 15.9204 3.71911 15.9464 3.72654 16.571C3.73026 16.8535 3.73026 17.1398 3.73398 17.4223C3.7377 17.7792 3.90871 17.9874 4.27675 17.9948C4.69312 18.0022 5.11321 18.0022 5.52958 17.9911C5.87159 17.9837 6.04632 17.7978 6.04632 17.452C6.04632 17.0654 6.06491 16.6751 6.05004 16.2884C6.03145 15.8944 6.20246 15.6936 6.58166 15.5895C7.45529 15.3516 8.19881 14.8832 8.77132 14.1843C10.3624 12.2511 9.75648 9.42204 7.50362 8.17664Z"
                fill="#C4C4C4"/>
        </svg>;

        const aboutUsImage = <svg className="header__item__image" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                  xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10.8622 4.02571C11.6945 4.54753 12.2781 5.43057 12.3844 6.45558C12.7238 6.61418 13.1005 6.70538 13.4999 6.70538C14.958 6.70538 16.1398 5.52357 16.1398 4.06569C16.1398 2.60759 14.958 1.42578 13.4999 1.42578C12.0557 1.42623 10.8842 2.58692 10.8622 4.02571ZM9.13276 9.43087C10.5909 9.43087 11.7727 8.24884 11.7727 6.79096C11.7727 5.33308 10.5906 4.15128 9.13276 4.15128C7.67488 4.15128 6.4924 5.33331 6.4924 6.79119C6.4924 8.24907 7.67488 9.43087 9.13276 9.43087ZM10.2526 9.61081H8.0125C6.14871 9.61081 4.63242 11.1273 4.63242 12.9911V15.7305L4.63939 15.7734L4.82808 15.8325C6.60674 16.3883 8.152 16.5736 9.42389 16.5736C11.9081 16.5736 13.348 15.8653 13.4368 15.8202L13.6131 15.731H13.632V12.9911C13.6326 11.1273 12.1164 9.61081 10.2526 9.61081ZM14.6201 6.88553H12.3974C12.3733 7.77486 11.9937 8.57569 11.3933 9.15165C13.0499 9.64428 14.2621 11.1806 14.2621 12.9952V13.8393C16.4568 13.7589 17.7215 13.1369 17.8048 13.0951L17.9811 13.0057H18V10.2654C18 8.40182 16.4837 6.88553 14.6201 6.88553ZM4.50056 6.70583C5.017 6.70583 5.49749 6.5551 5.90453 6.29834C6.03392 5.45438 6.48634 4.71691 7.13261 4.21462C7.13531 4.1652 7.14002 4.11623 7.14002 4.06637C7.14002 2.60826 5.95799 1.42646 4.50056 1.42646C3.04223 1.42646 1.86065 2.60826 1.86065 4.06637C1.86065 5.5238 3.04223 6.70583 4.50056 6.70583ZM6.87136 9.15165C6.27383 8.57861 5.89555 7.78205 5.86791 6.89811C5.78547 6.89205 5.70393 6.88553 5.61992 6.88553H3.38008C1.51629 6.88553 0 8.40182 0 10.2654V13.0053L0.00696368 13.0475L0.195657 13.107C1.62254 13.5525 2.89599 13.7578 4.0021 13.8225V12.9952C4.00255 11.1806 5.21423 9.64473 6.87136 9.15165Z"
                fill="#C4C4C4"/>
        </svg>;

        if(this.props.loginCompleted==false){
            return(
                <header className="header container">
                    {/* {constructorImg} */}
                    <Logo otherClasses="header__logo"/>
                    <Header__items items={[{text:"We Bots", img:webotsImage}, {text:"Как пользоваться", img:howUseImage}, {text:"Платформы", img:platformsImage}, {text:"Цены", img:pricesImage}, {text:"О нас", img:aboutUsImage}]}/>
                    <Button text="Регистрация / Войти" theme="turquoise-letter" action={this.showLoginForm}/>
                    <Burger/>
                    <Form_Login_and_Registration onLogin={this.onLogin} headerFormType={this.props.headerFormType} onChangeHeaderFormType={this.props.onChangeHeaderFormType} updateAccountData={this.props.updateAccountData}/>
                    <MobileMenu loginCompleted={this.props.loginCompleted}/>
                </header>
            )
        }else{
            return(
                <header className="header container">
                    <Logo otherClasses="header__logo"/>
                    <div className="header-menu">
                        <HeaderNotification/>
                        <AccountData accountData={this.props.accountData}/>
                        <HeaderAutorizedMenu onLogout={this.props.onLogout}/>
                    </div>
                </header>
            )
        }
    }
}