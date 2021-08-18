import React from 'react';
import './TopMenu.css';
import {ReactComponent as SearchIcon} from '../../assets/Search.svg';
import {ReactComponent as NotificationIcon} from '../../assets/Notification.svg';
import {ReactComponent as SettingsIcon} from '../../assets/Settings.svg';

const TopMenu =  () =>{
    return(
        <div className="topMenu">
            
            <div className="topMenu-left">
                <SearchIcon />
                <input
                className="input"
                 placeholder="Search for artists,songs and album...."
                 type="text"
                />

            </div>


            <div className="topMenu-right"> 

            <SettingsIcon className="headerIcon1" />
            <NotificationIcon className="headerIcon2"/>


            </div>






                
        </div>
       
    );
}


export  default TopMenu;