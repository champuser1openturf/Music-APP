import React from 'react';
import './SongRow.css';


const SongRow = ({ track , playSong}) =>{
    console.log(track);
    return(
        <div className="songRow" onClick={() => playSong}>
            <div className="album-Image" >
            <img className="songRow-album" onClick={() => playSong} src={track.album.images[0].url} alt="" />


            </div>
            
            <div className="songRow-info">
            
                <h1>{track.name}</h1>
                <p>
                {track.artists.map((artist) => artist.name).join(",")} - {" "}
                </p>

            </div>

        </div>
    )
}

export default SongRow;