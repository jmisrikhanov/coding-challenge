import { createContext, useState, useEffect } from "react";
import { userObserver } from "../authorisation/firebase";

export const AuthContext = createContext();

const FEATURED_API =
  "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&key=AIzaSyAca6dTmDXBkr6xkMtPTpahE9l_BQ1568E";

const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos(FEATURED_API);
  }, []);

  const getVideos = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => setVideos(res.items));
  };

  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, videos }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
