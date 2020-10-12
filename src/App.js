import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';
import Account from './components/Account/Account';
import UnderConstruction from './components/UnderConstruction/UnderConstruction';

class App extends Component{

    state={
        loginCompleted:false,
        headerFormType:"login",
        accountData:{
            username:"",
            avatar:"",
            social_links: []
        }
    };

    componentDidMount() {
        if(sessionStorage.getItem("user")!=null){
            let user = JSON.parse(sessionStorage.getItem("user"));
            this.updateAccountData(user)
        }
    }

    updateAccountData = (user)=>{
        let accountData = this.state.accountData;
        console.log(accountData);
        accountData.username = user.username;
        accountData.avatar = user.avatar;
        accountData.social_links = user.social_links;
        console.log(accountData);
        this.setState({accountData});
        this.onLogin(true);
    };

    onLogin = (props)=>{
      const {newLoginCompleted}=props;
      this.setState({
          loginCompleted:newLoginCompleted
      });
    };

    onLogout = ()=>{
        sessionStorage.removeItem("user");
        this.setState({
            loginCompleted:false
        });
    };

    toggleEntry = ()=>{
        if(window.getComputedStyle(document.querySelector('.header__form')).display=='none'){
            document.querySelector('.header__form').style.display='flex';
            document.querySelector('.decorate-fone-block').style.display='block';
        }
    };

    onChangeHeaderFormType = (newValue)=> {
        this.setState({
            headerFormType:newValue
        })
    };

    render(){

        return (
            <Router>
                <div className="App">
                    <div className="container decorate-fone-block"></div>
                    <Header loginCompleted={this.state.loginCompleted} updateAccountData={this.updateAccountData} accountData={this.state.accountData} onLogin={this.onLogin} toggleEntry={this.toggleEntry} headerFormType={this.state.headerFormType} onChangeHeaderFormType={this.onChangeHeaderFormType} onLogout={this.onLogout}/>
                    <Route path="/" render={(props)=>sessionStorage.getItem("user")!=null? (<Redirect to={"/account"}/>):<MainPage {...props} onChangeHeaderFormType={this.onChangeHeaderFormType} toggleEntry={this.toggleEntry}/>} exact/>
                    <Route path="/account" render={(props)=><Account/>}/>
                    <Route path="/uconst" render={(props)=><UnderConstruction/>}/>
                    <Route path="/" render={(props)=><Footer/>} exact/>
                </div>
            </Router>
        );
    }
}
export default App;
