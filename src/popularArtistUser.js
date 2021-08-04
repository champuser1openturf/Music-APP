import React from 'react';
import './popularArtistUser.css';

const popularArtistUser = ({track}) =>{
    return(
        <div className="popularArtist-user">
            <div className="popularArtist-album">
            <img className="songRow-album" src={track.album.images[0].url} alt="" />

            <div className="popularArtistInfo">
                <h1>
                {track.artists.map((artist) => artist.name).join(",")} - {" "}
                </h1>
                <p>
                   
                    {track.album.name}
                </p>
                
                </div>

            </div>

           

        </div>


    )
}


export default popularArtistUser;