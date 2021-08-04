
import React from 'react';
import './LeftComponent.css';
import {ReactComponent as Logo } from './assets/Logo.svg';
import LeftMenu from './LeftMenu';
import PodCastsIcon from '@material-ui/icons/MicNone';
import {ReactComponent as VideoSvgIcon} from './assets/Video.svg';
import {ReactComponent as TopListIcon} from './assets/TopLists.svg';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import {ReactComponent as DiscoverIcon} from './assets/Discover.svg';
import {ReactComponent as MessageIcon}  from './assets/Messages.svg';
import {ReactComponent as PlayListIcon} from './assets/Playlists.svg';
import {ReactComponent as LogoIcon} from './assets/LogoIcon.svg';
import { useStateProviderValue} from './StateProvider';




function LeftComponent(){

    const [{playlists} , dispatch] = useStateProviderValue();
    return(
       <div className="leftComponent">
          <Logo className="logo" />
           <LeftMenu Icon={PodCastsIcon} title="Podcasts" />
           <LeftMenu Icon={VideoSvgIcon} title="Videos"  className="video-logo"/>
           <LeftMenu Icon={TopListIcon } title="Top Lists" />
           <LeftMenu Icon={DiscoverIcon} title="Discover" />
           <LeftMenu Icon={FavoriteIcon}title="Favourite" />
           <LeftMenu Icon={MessageIcon} title="Messages" />
           <LeftMenu Icon={PlayListIcon}title="PlayLists" />
           {/** getting an item from the playlist as an object and map throgh them for every single playslist */}
           {playlists?.items?.map(playlist => (
                <LeftMenu title={playlist.name} />
            )
            )}

           <LeftMenu title="Summer Vibes" />
           <LeftMenu title="Chill Out" />
           <LeftMenu title="Classic Rock" />
           <LeftMenu title="Kids Music" />


          
          

       </div>

    );
}

export default LeftComponent;
