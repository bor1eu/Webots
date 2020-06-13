import React, {Component} from 'react';
import './account__sidebar-nav.css';
import {Link} from 'react-router-dom';

export default class SidebarNav extends Component{

    render(){

        class SidebarItem {
            constructor(img, text, link){
                this.img = img;
                this.text = text;
                this.link = link;
            }
        }

        const autopostingImg = <svg className="account__sidebar-nav-item-image" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 0C4.0375 0 0 4.0375 0 9C0 13.9625 4.0375 18 9 18C13.9625 18 18 13.9625 18 9C18 4.0375 13.9625 0 9 0ZM12.7988 12.7988C12.7221 12.8747 12.6219 12.9131 12.5217 12.9131C12.4216 12.9131 12.3214 12.8747 12.2447 12.7988L8.72296 9.27704C8.65017 9.20349 8.60868 9.10407 8.60868 9V2.73915C8.60868 2.52315 8.784 2.34783 9 2.34783C9.216 2.34783 9.39132 2.52315 9.39132 2.73915V8.83804L12.7988 12.2455C12.9514 12.3981 12.9514 12.6454 12.7988 12.7988Z" fill="white"/>
        </svg>;

        const dinamicCovers = <svg className="account__sidebar-nav-item-image" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
                <path d="M17.625 0H0.375012C0.168012 0 0 0.168012 0 0.375012V17.625C0 17.832 0.168012 18 0.375012 18H17.625C17.832 18 18 17.832 18 17.625V0.375012C18 0.168012 17.832 0 17.625 0ZM17.25 12.4913L12.6653 6.88725C12.5948 6.80101 12.4882 6.75 12.3765 6.75C12.3765 6.75 12.3758 6.75 12.375 6.75C12.264 6.75 12.1583 6.7995 12.087 6.885L10.5885 8.68275L6.66524 3.888C6.52275 3.71401 6.22723 3.71401 6.08474 3.888L0.749988 10.4078V0.749988H17.25V12.4913H17.25Z" fill="white"/>
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="18" height="18" fill="white"/>
                </clipPath>
            </defs>
        </svg>;

        const analytics = <svg className="account__sidebar-nav-item-image" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.625 17.25H17.25V6.37498C17.25 6.16798 17.082 5.99997 16.875 5.99997H14.625C14.418 5.99997 14.25 6.16798 14.25 6.37498V17.25H12.7499V10.875C12.7499 10.668 12.5819 10.5 12.3749 10.5H10.1249C9.91793 10.5 9.74992 10.668 9.74992 10.875V17.25H8.24991V9.37497C8.24991 9.16797 8.08189 8.99996 7.87489 8.99996H5.62489C5.41789 8.99996 5.24988 9.16797 5.24988 9.37497V17.25H3.74987V13.125C3.74987 12.918 3.58186 12.75 3.37486 12.75H1.125C0.918 12.75 0.749988 12.918 0.749988 13.125V17.25H0.375012C0.168012 17.25 0 17.418 0 17.625C0 17.832 0.168012 18 0.375012 18H1.125H3.375H5.625H7.875H10.125H12.375H14.625H16.875H17.625C17.832 18 18 17.832 18 17.625C18 17.418 17.832 17.25 17.625 17.25Z" fill="white"/>
            <path d="M15.75 0C14.9227 0 14.25 0.67275 14.25 1.50001C14.25 1.7775 14.331 2.034 14.4622 2.25752L12.0075 4.71227C11.784 4.581 11.5275 4.5 11.25 4.5C10.7798 4.5 10.3643 4.72201 10.089 5.06176L8.24626 4.536C8.24626 4.52401 8.25002 4.51276 8.25002 4.5C8.25002 3.67274 7.57727 2.99999 6.75001 2.99999C5.92275 2.99999 5.25 3.67274 5.25 4.5C5.25 4.71825 5.29876 4.92374 5.38275 5.11049L3.03899 6.98024C2.80952 6.83624 2.54026 6.75 2.25001 6.75C1.42275 6.75 0.75 7.42275 0.75 8.25001C0.75 9.07727 1.42275 9.75002 2.25001 9.75002C3.07727 9.75002 3.75002 9.07727 3.75002 8.25001C3.75002 7.98676 3.67577 7.74225 3.55579 7.52702L5.85303 5.69479C6.1043 5.88379 6.41255 6.00005 6.75005 6.00005C7.29979 6.00005 7.77678 5.69929 8.03779 5.25681L9.77552 5.75255C9.76128 5.83355 9.75004 5.91529 9.75004 6.00005C9.75004 6.82731 10.4228 7.50006 11.25 7.50006C12.0773 7.50006 12.7501 6.82731 12.7501 6.00005C12.7501 5.72256 12.6691 5.46606 12.5378 5.24254L14.9933 2.78705C15.2161 2.91906 15.4726 3.00006 15.75 3.00006C16.5773 3.00006 17.2501 2.32731 17.2501 1.50005C17.25 0.67275 16.5773 0 15.75 0Z" fill="white"/>
        </svg>;

        const winnerDetermination = <svg className="account__sidebar-nav-item-image" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
                <path d="M11.2234 11.6867C11.5606 11.1232 12.0563 10.8345 12.7138 10.8268C13.3712 10.8191 13.703 10.4842 13.7138 9.82526C13.723 9.16937 14.0086 8.6736 14.5721 8.33796C15.1372 8.00078 15.2596 7.54735 14.9378 6.97306C14.6175 6.40031 14.6175 5.82757 14.9378 5.25328C15.2596 4.68053 15.1379 4.22787 14.5721 3.89069C14.0086 3.55274 13.7222 3.05774 13.7138 2.39877C13.703 1.74288 13.3712 1.40801 12.7138 1.40031C12.0563 1.39108 11.5606 1.10393 11.2234 0.540422C10.8862 -0.0246283 10.4328 -0.14703 9.86004 0.174756C9.28729 0.495002 8.713 0.495002 8.14025 0.174756C7.56673 -0.14626 7.11331 -0.0246283 6.77613 0.540422C6.43971 1.1047 5.94318 1.39185 5.28652 1.40031C4.63063 1.40801 4.2973 1.74288 4.28806 2.39877C4.27728 3.05774 3.99168 3.55197 3.42817 3.89069C2.86312 4.22787 2.73918 4.67976 3.0625 5.25328C3.38429 5.82757 3.38429 6.40031 3.0625 6.97306C2.73918 7.54735 2.86235 8.00154 3.42817 8.33796C3.99168 8.6736 4.27805 9.16937 4.28806 9.82526C4.2973 10.4835 4.63063 10.8191 5.28652 10.8268C5.94395 10.8345 6.43971 11.1232 6.7769 11.6867C7.11408 12.2517 7.5675 12.3741 8.14025 12.0508C8.713 11.7336 9.28729 11.7336 9.86004 12.0508C10.4328 12.3734 10.887 12.2517 11.2234 11.6867ZM9.00169 9.71055C7.014 9.71055 5.40353 8.10008 5.40353 6.1124C5.40353 4.12626 7.014 2.51579 9.00169 2.51579C10.9878 2.51579 12.5983 4.12626 12.5983 6.1124C12.5983 8.10008 10.9878 9.71055 9.00169 9.71055Z" fill="white"/>
                <path d="M5.22954 11.3541C4.53824 11.3541 4.44586 11.0323 4.44586 11.0323L1.74609 16.3387L3.91084 16.0954L5.10791 17.8968C5.10791 17.8968 7.60214 12.6928 7.60214 12.7274C6.3096 12.6951 6.82385 11.3887 5.22954 11.3541Z" fill="white"/>
                <path d="M13.5214 11.2402C11.5491 11.4465 11.9502 11.9362 11.4991 12.3164C10.9802 12.8699 10.332 12.7614 10.332 12.7614L13.3767 18.0001L14.1257 16.0601L16.2551 16.338L13.5214 11.2402Z" fill="white"/>
                <path d="M9.75419 5.31874L9.0013 3.79449L8.24764 5.31874L6.5625 5.56509L7.78036 6.75292L7.49322 8.43268L9.0013 7.64053L10.5094 8.43268L10.2222 6.75292L11.4401 5.56509L9.75419 5.31874Z" fill="white"/>
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="18" height="18" fill="white"/>
                </clipPath>
            </defs>
        </svg>;

        const chatBotsConstructor = <svg className="account__sidebar-nav-item-image" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.7608 12.5238L18.0008 10.284L15.7608 8.04401L16.1217 7.68311C16.7462 7.05867 16.7462 6.04271 16.1219 5.41827C15.8193 5.11588 15.4171 4.9493 14.9893 4.9493C14.5617 4.9493 14.1594 5.11588 13.857 5.41827L13.4961 5.77918L11.2562 3.5392L10.5952 4.2003V5.2451C11.7644 5.52374 12.6366 6.57719 12.6366 7.83046C12.6366 9.08386 11.7644 10.1373 10.5952 10.4158V13.6555H8.65611L8.26953 14.0421L11.2562 17.0286L13.4961 14.7887L13.8072 15.0998C14.4316 15.7243 15.4476 15.7243 16.072 15.0998C16.6965 14.4754 16.6965 13.4594 16.072 12.835L15.7608 12.5238Z" fill="white"/>
            <path d="M9.53847 12.5999V9.43208H9.97833C10.8615 9.43208 11.5799 8.71371 11.5799 7.83055C11.5799 6.94753 10.8615 6.22916 9.97833 6.22916H9.53847V3.06139H6.3707V2.55107C6.3707 1.66791 5.65233 0.949539 4.76917 0.949539C3.88614 0.949539 3.16777 1.66791 3.16777 2.55107V3.06139H0V6.22916H0.440002C1.21481 6.22916 1.86273 6.78218 2.00995 7.51428C2.07381 7.60355 2.11185 7.71259 2.11185 7.83055C2.11185 7.94852 2.07381 8.05756 2.00995 8.14696C1.86273 8.87892 1.21481 9.43208 0.440002 9.43208H0V12.5999H3.16777V12.0894C3.16777 11.2064 3.88614 10.488 4.76917 10.488C5.65233 10.488 6.3707 11.2064 6.3707 12.0894V12.5999H9.53847Z" fill="white"/>
        </svg>;

        const communityContent = <svg className="account__sidebar-nav-item-image" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
                <path d="M16.125 0H1.87499C0.8415 0 0 0.8415 0 1.87499V2.99999H18V1.87499C18 0.8415 17.1592 0 16.125 0ZM1.87499 2.25C1.66799 2.25 1.49998 2.08199 1.49998 1.87499C1.49998 1.66799 1.66799 1.49998 1.87499 1.49998C2.08199 1.49998 2.25 1.66799 2.25 1.87499C2.25 2.08199 2.08199 2.25 1.87499 2.25ZM3.375 2.25C3.168 2.25 2.99999 2.08199 2.99999 1.87499C2.99999 1.66799 3.168 1.50001 3.375 1.50001C3.582 1.50001 3.75001 1.66802 3.75001 1.87502C3.75001 2.08202 3.582 2.25 3.375 2.25ZM4.87501 2.25C4.66801 2.25 4.5 2.08199 4.5 1.87499C4.5 1.66799 4.66801 1.49998 4.87501 1.49998C5.08201 1.49998 5.25002 1.66799 5.25002 1.87499C5.25002 2.08199 5.08201 2.25 4.87501 2.25Z" fill="white"/>
                <path d="M0 3.75002V16.125C0 17.1592 0.8415 18 1.87499 18H16.125C17.1592 18 18 17.1592 18 16.125V3.75002H0ZM14.625 13.5H3.375C3.168 13.5 2.99999 13.332 2.99999 13.125C2.99999 12.918 3.168 12.75 3.375 12.75H14.625C14.832 12.75 15 12.918 15 13.125C15 13.332 14.832 13.5 14.625 13.5ZM14.625 10.5H3.375C3.168 10.5 2.99999 10.332 2.99999 10.125C2.99999 9.918 3.168 9.74999 3.375 9.74999H14.625C14.832 9.74999 15 9.918 15 10.125C15 10.332 14.832 10.5 14.625 10.5ZM14.625 7.49999H3.375C3.168 7.49999 2.99999 7.33198 2.99999 7.12498C2.99999 6.91798 3.168 6.75 3.375 6.75H14.625C14.832 6.75 15 6.91802 15 7.12502C15 7.33202 14.832 7.49999 14.625 7.49999Z" fill="white"/>
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="18" height="18" fill="white"/>
                </clipPath>
            </defs>
        </svg>;

        const clearBots = <svg className="account__sidebar-nav-item-image" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.1688 1.95804C11.5435 1.95804 10.0233 1.23586 8.99844 0C7.97441 1.23504 6.45417 1.95804 4.82886 1.95804C3.78646 1.95804 2.77662 1.65951 1.91016 1.10577V9.30896C1.91016 13.5803 7.82094 17.3012 8.9984 18C10.175 17.3012 16.0866 13.5761 16.0866 9.30896V1.10659C15.2203 1.65947 14.2104 1.95804 13.1688 1.95804ZM11.7962 7.10243L8.45806 10.4381C8.37969 10.5156 8.27376 10.5598 8.16368 10.5598C8.0536 10.5598 7.94685 10.5156 7.86847 10.4381L6.20314 8.77023C6.04052 8.6068 6.04052 8.34326 6.20314 8.17982C6.36575 8.01803 6.63011 8.01721 6.79355 8.17982L8.1645 9.55245L11.2074 6.51202C11.37 6.34941 11.6344 6.34941 11.797 6.51202C11.9597 6.67463 11.9597 6.93982 11.7962 7.10243Z" fill="white"/>
        </svg>;

        const createQrCode = <svg className="account__sidebar-nav-item-image" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
                <path d="M15.375 9.74999H8.25001V2.62501C8.25001 2.41801 8.082 2.25 7.875 2.25C3.5325 2.25 0 5.7825 0 10.125C0 14.4675 3.5325 18 7.875 18C12.2175 18 15.75 14.4675 15.75 10.125C15.75 9.918 15.582 9.74999 15.375 9.74999Z" fill="white"/>
                <path d="M10.125 0C9.91801 0 9.75 0.168012 9.75 0.375012V7.875C9.75 8.082 9.91801 8.25001 10.125 8.25001H17.625C17.832 8.25001 18 8.082 18 7.875C18 3.5325 14.4675 0 10.125 0Z" fill="white"/>
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="18" height="18" fill="white"/>
                </clipPath>
            </defs>
        </svg>;

        const subscribersMonitoring = <svg className="account__sidebar-nav-item-image" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
                <path d="M9.00085 8.6087C10.5136 8.6087 11.74 7.38235 11.74 5.86956C11.74 4.35678 10.5136 3.13042 9.00085 3.13042C7.48807 3.13042 6.26172 4.35678 6.26172 5.86956C6.26172 7.38235 7.48807 8.6087 9.00085 8.6087Z" fill="white"/>
                <path d="M14.4799 10.1739C15.5605 10.1739 16.4365 9.29795 16.4365 8.2174C16.4365 7.13685 15.5605 6.26089 14.4799 6.26089C13.3994 6.26089 12.5234 7.13685 12.5234 8.2174C12.5234 9.29795 13.3994 10.1739 14.4799 10.1739Z" fill="white"/>
                <path d="M3.5776 10.1739C4.65816 10.1739 5.53412 9.29795 5.53412 8.2174C5.53412 7.13685 4.65816 6.26089 3.5776 6.26089C2.49705 6.26089 1.62109 7.13685 1.62109 8.2174C1.62109 9.29795 2.49705 10.1739 3.5776 10.1739Z" fill="white"/>
                <path d="M9.00103 9.39132C6.19615 9.39132 3.91406 11.6734 3.91406 14.4783C3.91406 14.6943 4.08938 14.8696 4.30538 14.8696H13.6967C13.9127 14.8696 14.088 14.6943 14.088 14.4783C14.088 11.6734 11.8059 9.39132 9.00103 9.39132Z" fill="white"/>
                <path d="M4.25191 11.041C4.01243 10.9902 3.76903 10.9565 3.52174 10.9565C1.58009 10.9565 0 12.5366 0 14.4783C0 14.6943 0.175316 14.8696 0.391316 14.8696H3.20243C3.15859 14.7467 3.13042 14.616 3.13042 14.4783C3.13042 13.194 3.54991 12.0083 4.25191 11.041Z" fill="white"/>
                <path d="M14.4802 10.9565C14.2329 10.9565 13.9895 10.9902 13.75 11.041C14.452 12.0083 14.8715 13.194 14.8715 14.4783C14.8715 14.616 14.8433 14.7467 14.7995 14.8696H17.6106C17.8266 14.8696 18.0019 14.6943 18.0019 14.4783C18.0019 12.5366 16.4218 10.9565 14.4802 10.9565Z" fill="white"/>
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="18" height="18" fill="white"/>
                </clipPath>
            </defs>
        </svg>;

        let sidebarItems = [
            new SidebarItem(autopostingImg, "Автопостинг", "/account/autoposting"),
            new SidebarItem(dinamicCovers, "Динамические обложки", "/account/dinamiccovers"),
            new SidebarItem(analytics, "Аналитика", "/account/analytics"),
            new SidebarItem(winnerDetermination, "Определение победителя", "/account/winnerdetermination"),
            new SidebarItem(chatBotsConstructor, "Конструктор чат ботов", "/account/chatbotsconstructor"),
            new SidebarItem(communityContent, "Наполнение сообщества", "/account/communitycontent"),
            new SidebarItem(clearBots, "Очистка от ботов", "/account/clearbots"),
            new SidebarItem(createQrCode, "Создать QR-код", "/account/createqrcode"),
            new SidebarItem(subscribersMonitoring, "Мониторинг подписчиков", "/account/subscribersmonitoring")
        ];

        const renderSidebarItems = (arr)=>{
            return arr.map(item=>{
                const {img, text, link} = item;
                return(
                    <li className="account__sidebar-nav-item">
                        <Link to={link} className="account__sidebar-nav-item-link">
                            {img}
                            {text}
                        </Link>
                    </li>
                )
            });
        };

        const sidebarItemsArr = renderSidebarItems(sidebarItems);

        return(
            <nav className="account__sidebar-nav">
                <ul className="account__sidebar-nav-items">
                    {sidebarItemsArr}
                </ul>
            </nav>
        )
    }
}