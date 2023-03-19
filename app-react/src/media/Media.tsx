import { NavBar } from "../utils/NavigationBar";
import "./Media.css"

export function MediaPage(){

  return(<div>
    <div>
      <NavBar></NavBar>
    </div>
    <div className="text">
      Welcome to Media
    </div>
    <iframe className="video-player" width="560" height="315" src="https://www.youtube.com/embed/1HWPRu7tea4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

  </div>);

}