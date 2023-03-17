import { NavBar } from "../utils/NavigationBar";
import "./Home.css"
import portfolioMain from '../images/portfolioMain.jpg';

export function HomePage(){

  return(<div>
    <div>
      <NavBar></NavBar>
    </div>
    <div className="main-info">
      <div>
        <h1>BRIEF BIO</h1>
        <p>Software engineer at Chalmers </p> 
      </div>     
      <img src={portfolioMain} alt="yuuu" />
    </div>
  </div>);

} 