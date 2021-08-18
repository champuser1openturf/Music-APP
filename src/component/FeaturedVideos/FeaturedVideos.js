import React from 'react';
import './FeaturedVideos.css';
import {ReactComponent as MoreIcon} from '../../assets/More.svg';

const FeaturedVideos = () => {
    return(
        <div className="featuredVideos">
            <div className="title-left">
                <h2 >Featured Videos</h2>
                
            </div>
            <div className="title-right">
                <MoreIcon></MoreIcon>

            </div>

        </div>
    )
}

export default FeaturedVideos;