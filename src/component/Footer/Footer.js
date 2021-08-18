import React, { useState,useEffect } from 'react';
import './Footer.css';
import {ReactComponent as PreviousPlayIcon} from '../../assets/PreviousPlayIcon.svg';
import {ReactComponent as NextPlayIcon} from '../../assets/NextPlayIcon.svg';
import {ReactComponent as PlayIcon} from '../../assets/PlayIcon.svg';
import  {ReactComponent as SongImageIcon} from '../../assets/SongImage.svg';
import {ReactComponent as SeperatorIcon} from '../../assets/Seperator.svg';
import {ReactComponent as SliderIcon} from '../../assets/Slider.svg';
import {ReactComponent as AddToPlaylistIcon} from '../../assets/AddToPlaylist.svg';
import {ReactComponent as VolumeIcon} from '../../assets/Volume.svg';
import {ReactComponent as RepeatSongIcon} from '../../assets/RepeatSong.svg';
import { useStateProviderValue } from '../../StateProvider';




function Footer({spotify}){
    const [{token,item,playing}, dispatch] = useStateProviderValue();
    

    useEffect(() => {
        spotify.getMyCurrentPlaybackState().then((r) => {
            console.log(r);

            dispatch({
                type:'SET_PLAYING',
                playing:r.is_playing,
            });

            dispatch({
                type:'SET_ITEM',
                item:r.item,
            });
        });
    }, [spotify]);

    const handlePlayPause = () => {
        if(playing){
            dispatch({
                type:'SET_PLAYING',
                playing:false,
            });
        }else{
            spotify.play();
            dispatch({
                type:'SET_PLAYING',
                playing:true,
            });

        }
    };


    const skipNext = () => {
        spotify.skipToNext();

        spotify.getMyCurrentPlayingTrack().then((r) => {
            dispatch({
                type:'SET_ITEM',
                item: r.item,
            });

            dispatch({
                type:'SET_PLAYING',
                playing: true,
            });
        });
    };

    const skipPrevious = () => {
        spotify.skipToPrevious();
        spotify.getMyCurrentPlayingTrack().then((r) => {
            dispatch({
                type:'SET_ITEM',
                item: r.item
            });

            dispatch({
                type:'SET_PLAYING',
                playing:true,
            });
        });
    };
    return(
        <div className="footer">
           <div className="footer-left">
               <img 
                  className="footer-albumLogo"
                  src={item?.album.images[0].url} 
                  alt={item?.name}
               />


               {item? (
                   <div className="footer-songInfo">
                       <h4>{item.name}</h4>
                       <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
                   </div>
               ):
               (
                   <div className="footer-songInfo">
                       <h4>No song is playing</h4>
                       <p>...</p>

                   </div>
               )} 
               
               

              <SeperatorIcon className="footer-seperate" />
              <PreviousPlayIcon onClick={skipNext} className="footer-icon" />
              
              {playing ? (
                  <PlayIcon 
                    onClick={handlePlayPause}
                    fontSize="large"
                    className="footer-icon1"
                  />
              ):
              (
                <PlayIcon 
                 onClick={handlePlayPause}
                 fontSize="large"  
                 className="footer-icon1"
                />
              )}

              <NextPlayIcon
               onClick={skipPrevious}
               className="footer-icon" 
              />
             
              
           </div>

           <div className="footer-center">

               <div className="slider">
                  <SliderIcon  className="slider1" />    


               </div>
              
             

           </div>

           <div className="footer-right">
               <AddToPlaylistIcon  className="song-action"/>
               <RepeatSongIcon className="song-action"/>
               <VolumeIcon className="song-action"/>

              
            
               
          
           </div>


        </div>
    );
}

export default Footer;
