import React from 'react';
import './PopularArtist.css';
import { useStateProviderValue } from './StateProvider';
import { Avatar } from '@material-ui/core';
import popularArtistUser from './popularArtistUser';


const PopularArtist =  () => {
    const [{ discover_weekly} , dispatch] = useStateProviderValue();
    return(
        <div className="popularArtist">
            <div className="popularArtist-title">
            <h1>Popular Artist</h1>
            <p>Show More</p>

               

               </div>

            <div className="popularArtist-users">

            {discover_weekly?.tracks.items.map(item => (
                    <popularArtistUser  track={item.track}/>
                ))}
                


                
            </div>

        </div>
    )
}

export default PopularArtist;