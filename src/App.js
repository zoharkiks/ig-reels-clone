import React, { useEffect, useState } from "react";
import "./App.css";
import VideoCard from "./VideoCard";
import VideoFooter from "./VideoFooter";
import db from "./Firebase";

function App() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    db.collection("reels").onSnapshot((snapshot) =>
      setReels(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="app">
      <div className="app__top">
        <img
          src="https://www.freepnglogos.com/uploads/instagram-logos-png-images-free-download-2.png"
          alt=""
          className="app__logo"
        />
        <h1>Reels</h1>
      </div>

      <div className="app__videos">
        {reels.map(({ channel, avatarSrc, song, url, likes, shares }) => (
          <VideoCard
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
