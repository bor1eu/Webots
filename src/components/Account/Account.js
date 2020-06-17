import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './account.css';
import Sidebar from './Sidebar/Sidebar';
import Profile from './Profile/Profile';

export default class Account extends Component{
    render(){
        return(
            <Router>
                <section className="account container">
                    <Sidebar/>
                    <Route path="/account" component={Profile} exact/>
                </section>
            </Router>
        )
    }
}