import React from 'react';
import './Player.css';

import Footer from '../Footer/Footer';
import LeftComponent from '../LeftComponent/LeftComponent';
import Content from '../content/content';

function Player({spotify}){
    return (
        <div className="player">
            <div className="player-body">

            <LeftComponent />
                <Content spotify={spotify} />

            </div>
            
               

               <Footer spotify={spotify} />
               
            
        </div>

        
    )
}


export default Player;