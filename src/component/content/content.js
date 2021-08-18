import React from 'react';
import './content.css';
import FeaturedVideos from '../FeaturedVideos/FeaturedVideos';
import PopularArtist from '../PopularArtist/PopularArtist';
import { useStateProviderValue } from '../../StateProvider';
import TopMenu from '../TopMenu/TopMenu';
import SongRow from '../SongRow/SongRow';

function Content({spotify}){

    const [{discover_weekly} ,dispatch] = useStateProviderValue();


    const playPlaylist = (id) => {
        spotify.play({
            context_uri: `spotify:playlist:0cwfYAYYOl1FNONmTAVJDf`,
        })
        .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r)=>{
                dispatch({
                    type:'SET_ITEM',
                    item: r.item,
                });

                dispatch({
                    type:'SET_PLAYING',
                    playing:true,
                });
            });
        });
    };

    const playSong = (id) => {
        spotify.play({
            uris: [`spotify:track:${id}`],
        })
        .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
                dispatch({
                    type:'SET_ITEM',
                    item: r.item,
                });
                dispatch({
                    type: 'SET_PLAYING',
                    playing: true,
                });
            });
        });
    };
    
    return (
        <div className="content">
            <div className="content-top">
               <TopMenu style={{"padding":"20px"}} />

            </div>

            <div className="contentItem">
                <div className="featuredMusic">
                    <FeaturedVideos />

                    <div className="featuredSong">

                    {discover_weekly?.tracks.items.map(item => (
                    <SongRow onClick={ playPlaylist} playSong={playSong} track={item.track}/>
                ))}


                    </div>

                </div>
                <div className="popularArtist-item">
                    
                   <PopularArtist />

                </div>

            </div>
            
          {/**
           * <div className="title">
            <div className="featuredVideo-title">
                <FeaturedVideos />
                <div className="featured-songs">
                     {/* List of Songs */}

{/**{discover_weekly?.tracks.items.map(item => (
                    <SongRow  track={item.track}/>
                ))}

                </div>

                

            </div>


           * 
           * 
           * 
           * 
           * \\
           * 
           * 
           * 
           * 
           * 
           * 
           * 
           * 
           * 
           * 
           * 
           * 
           * 
           * 
           * 
           * 
           * 
           * 
           * 
           * 
           */}  
            
            
            
            
        </div>
    );
}

export default Content;
