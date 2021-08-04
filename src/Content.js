import React from 'react';
import './Content.css';
import FeaturedVideos from './FeaturedVideos';
import PopularArtist from './PopularArtist';
import { useStateProviderValue } from './StateProvider';
import TopMenu from './TopMenu';
import SongRow from './SongRow';

function Content({spotify}){

    const [{discover_weekly} ,dispatch] = useStateProviderValue();
    return (
        <div className="content">
            <TopMenu />
            <div className="title">
            <div className="featuredVideo-title">
                <FeaturedVideos />
                <div className="featured-songs">
                     {/* List of Songs */}

                {discover_weekly?.tracks.items.map(item => (
                    <SongRow  track={item.track}/>
                ))}

                </div>

                

            </div>


            <div className="artist-title">
                <PopularArtist />


            </div>
            
            
            </div>
            
        </div>
    );
}

export default Content;
