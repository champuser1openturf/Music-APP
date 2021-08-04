// setting end point for user authentication

export const authEndPoints = "https://accounts.spotify.com/authorize";

const redirectURI = "http://localhost:3000/";
// 1. click login button
// 2. redirect to spotify login page
// 3. redirect to home page once logged in
const clientId = "55d5559361e243e6a64a22615b6e1ff2";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
]


export const getTokenFromURL = () => {
    return window.location.hash
           .substring(1)
           .split('&')
           .reduce((initial,item) => {
               var parts = item.split('=');
               initial[parts[0] ] = decodeURIComponent(parts[1]);

               return initial;

           }, {});
}

export const loginURL = `${authEndPoints}?client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`