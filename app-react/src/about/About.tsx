import { NavBar } from "../utils/NavigationBar";
import "./About.css"

export function AboutPage(){

  return(<div>
    <div>
      <NavBar></NavBar>
    </div>
    <div className="text">
      Welcome to about me
    </div>
  </div>);

}