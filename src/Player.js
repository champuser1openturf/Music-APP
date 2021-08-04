import React from 'react';
import './Player.css';

import Footer from './Footer';
import LeftComponent from './LeftComponent';
import Content from './Content';

function Player({spotify}){
    return (
        <div className="player">
            <div className="player-body">

            <LeftComponent />
                <Content spotify={spotify} />

            </div>
            
               

               <Footer />
               
            
        </div>

        
    )
}


export default Player;