import React, {Component} from 'react';
import SocialsControlPanel from './SocialsControlPanel/SocialsControlPanel';
import SidebarNav from './SidebarNav/SidebarNav';
import './account__sidebar.css';

export default class Sidebar extends Component{
    render(){
        return(
            <div className="account__sidebar">
                <SocialsControlPanel/>
                <SidebarNav/>
            </div>
        )
    }
}
