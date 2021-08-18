
import React from 'react';
import './LeftComponent.css';
import {ReactComponent as Logo } from '../../assets/Logo.svg';
import LeftMenu from '../LeftMenu/LeftMenu';
import {ReactComponent as PodcastIcon} from '../../assets/Podcast.svg';
import {ReactComponent as VideoSvgIcon} from '../../assets/Video.svg';
import {ReactComponent as TopListIcon} from '../../assets/TopLists.svg';
import {ReactComponent as FavoriteIcon} from '../../assets/Favourite.svg';
import {ReactComponent as DiscoverIcon} from '../../assets/Discover.svg';
import {ReactComponent as MessageIcon}  from '../../assets/Messages.svg';
import {ReactComponent as PlayListIcon} from '../../assets/Playlists.svg';
import {ReactComponent as LogoIcon} from '../../assets/LogoIcon.svg';
import {ReactComponent as AddNewIcon} from '../../assets/AddNew.svg';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import { useStateProviderValue } from '../../StateProvider';




function LeftComponent(){

    const [{playlists} , dispatch] = useStateProviderValue();
    return(
       <div className="leftComponent">
         <div className="logo">
           
             <LogoIcon  className="logoIcon"/>

             <div className="logoHeader">
                  <h3 className="logoHeader1">inMusic</h3>
                  <p className="logoHeader2">App UI KIT</p>


              </div>

        </div>
           <div className="leftMenu-Item">
               <div className="podcast">
               <LeftMenu  Icon={PodcastIcon} title="Podcasts"  />
               </div>
           
         
         <LeftMenu className="music" Icon={MusicVideoIcon} title="Videos"/>
        
           
           <LeftMenu Icon={TopListIcon } title="Top Lists"/>
           <LeftMenu Icon={DiscoverIcon} title="Discover" />
           <LeftMenu Icon={FavoriteIcon} title="Favourite" />
           <LeftMenu Icon={MessageIcon}  title="Messages" />
           <div className="playlistIcon">
           <LeftMenu Icon={PlayListIcon } title="PlayLists" />
           <div className="addIcon">
           <LeftMenu className="addIcon" Icon={AddNewIcon} />

           </div>

           

           </div>

           <div className="leftPlaylist">
                {/** getting an item from the playlist as an object and map throgh them for every single playslist */}
           <div className="spotify-playlist">
                {playlists?.items?.map(playlist => (
             <LeftMenu title={playlist.name} />
               )
               )}
           </div>
           

           <div className="playlist-left">
           <LeftMenu title="Summer Vibes" />
           <LeftMenu title="Chill Out" />
           <LeftMenu title="Classic Rock" />
           <LeftMenu title="Kids Music" />

           </div>

        


           </div>
          
           

           </div>

           
         

          
          

       </div>

    );
}

export default LeftComponent;
