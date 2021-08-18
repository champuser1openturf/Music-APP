import React from 'react';
import './PopularArtist.css';
import { useStateProviderValue } from '../../StateProvider';
import _popularArtistData from '../../PopularArtistData/popularArtistData.json';
import {ReactComponent as MoreIcon} from '../../assets/More.svg';

const PopularArtist = () => {

    return(
        <div className="popularArtist">
        <div className="popularArtist-title">
            <h4>Popular Artists</h4>
            <p>Show More</p>
         </div>
         <div className="popularArtist-content">
             
             {_popularArtistData.PopularArtists.map((_popularArtist) => {
                 return(

                    <div className="popularArtist-item">

                        <div  className="popularArtist-item1">
                        <img  clasName="artist-image"  src={_popularArtist.imageUrl} />
                        <div className="artist-name">
                            <h4>{_popularArtist.Name}</h4>
                            <p >{_popularArtist.Followers}</p>
                        </div>


                        </div>
                
                    
                    <MoreIcon className="more-icon" />
                    

                        </div>
                      
                    
                   


                 )
             })}
             

             
            
             
             

         </div>
         



           

        </div>
    )




}
   


export default PopularArtist;