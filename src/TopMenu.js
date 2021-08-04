import React from 'react';
import './TopMenu.css';
import {ReactComponent as SearchIcon} from './assets/Search.svg';
import {ReactComponent as NotificationIcon} from './assets/Notification.svg';
import {ReactComponent as SettingsIcon} from './assets/Settings.svg';

const TopMenu =  () =>{
    return(
        <div className="topMenu">
            
            <div className="topMenu-left">
                <SearchIcon />
                <input
                 placeholder="Search for artists,songs and album...."
                 type="text"
                />

            </div>


            <div className="topMenu-right"> 

            <SettingsIcon  className="header1"/>
            <NotificationIcon />


            </div>






                
        </div>
       
    );
}


export  default TopMenu;