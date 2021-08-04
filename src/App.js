import React , { useState,useEffect} from 'react';
import './App.css';
import Player from './Player';
import { getTokenFromURL } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useStateProviderValue } from './StateProvider';
import PageNotFound from './PageNotFound';
import Login from './Login';



const spotify = new SpotifyWebApi();

function App() {


  const [{ user , token } , dispatch] = useStateProviderValue();

  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token){
      dispatch({
        type: "SET_TOKEN",
        token: _token
      })
      

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) =>{
       
        dispatch({
          type: "SET_USER",
          user:user
        });
      });


      // it will get userPlaylists and return promise
      spotify.getUserPlaylists().then((playlists) => {

        // dispatch an action for getting the playsist
        // dispatch playlists into the datalayer or basically stateProvider
        dispatch({
          type:"SET_PLAYLISTS",
          playlists:playlists
        });
      })


      spotify.getPlaylist('0cwfYAYYOl1FNONmTAVJDf').then((response) => {
        dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly:response
        })
      }
       
        )
    }

    console.log(_token);
    


  },[]);

  console.log("person is" ,user);

  return (
    <div className="app">
    {
      token? <Player spotify={spotify} />
      : <Login/>
    }
    </div>
  );
}

export default App;
