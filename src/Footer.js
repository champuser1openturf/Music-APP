import React from 'react';
import './Footer.css';
import {ReactComponent as PreviousPlayIcon} from './assets/PreviousPlayIcon.svg';
import {ReactComponent as NextPlayIcon} from './assets/NextPlayIcon.svg';
import {ReactComponent as PlayIcon} from './assets/PlayIcon.svg';
import  {ReactComponent as SongImageIcon} from './assets/SongImage.svg';
import {ReactComponent as SeperatorIcon} from './assets/Seperator.svg';
import {ReactComponent as SliderIcon} from './assets/Slider.svg';
import {ReactComponent as AddToPlaylistIcon} from './assets/AddToPlaylist.svg';
import {ReactComponent as VolumeIcon} from './assets/Volume.svg';
import {ReactComponent as RepeatSongIcon} from './assets/RepeatSong.svg';




function Footer(){
    return(
        <div className="footer">
           <div className="footer-left">
               <img className="footer-albumLogo" src="https://i.ibb.co/R70vBrQ/men.png"alt=" " />
               <div className="footer-songInfo">
                  <h4>Girls Like You</h4>
                  <p>Melina Lange,2019</p>

              </div>

              <SeperatorIcon className="footer-seperate" />
              <PreviousPlayIcon className="footer-icon" />
              <PlayIcon fontSize="large"  className="footer-icon" />
              <NextPlayIcon className="footer-icon" />
             
              
           </div>

           <div className="footer-center">
               <SliderIcon className="slider" />
          
          

            

               
             

           </div>

           <div className="footer-right">
           <AddToPlaylistIcon />
               <RepeatSongIcon />
               <VolumeIcon />
               
          
           </div>


        </div>
    );
}

export default Footer;
