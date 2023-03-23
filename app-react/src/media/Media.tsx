import { useRef, useState } from "react";
import { NavBar } from "../utils/NavigationBar";
import "./Media.css";
const dragonIntro = require("../assets/dragonIntro.wav");

export function MediaPage(){


  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function playSound () {
    if (!isPlaying) {
      new Audio(dragonIntro).play();      
      setIsPlaying(true);
    }
  };

  return(<div>
    <div>
      <NavBar></NavBar>
    </div>
    <div className="text">
      Welcome to Media
    </div>
    <iframe className="video-player" width="560" height="315" src="https://www.youtube.com/embed/1HWPRu7tea4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    <button onClick={playSound}>{isPlaying ? 'Pause Music' : 'Play Music'}</button>

  </div>);

}