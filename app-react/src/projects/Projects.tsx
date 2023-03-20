import { NavBar } from "../utils/NavigationBar";
import "./Projects.css"
import reTwitterImg from '../images/reTwitter.jpg';
import imat from '../images/imat.jpg';
import leefoAll from '../images/leefoAll.jpg';
import figmaMap from '../images/figmaMap.jpg';

export function ProjectsPage(){

  return( 
    <div>
      <div>
        <NavBar></NavBar>
      </div>
      {/* <div className="text">
        Welcome to projects
      </div> */}
      {/* <iframe frameBorder="0" src="https://itch.io/embed/1976848" width="552" height="167"><a href="https://omarsu.itch.io/godamongus">GodAmongUs by omarsu</a></iframe> */}
      <section className="portfolio" >
        <h2 className="heading">Latest <span>Projects</span></h2>
        
        <div className="portfolio-container">
          <div className="portfolio-box">
            <img src={reTwitterImg} alt=""></img>
            <div className="portfolio-layer">
              <h4>ReTwitter</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ratione.</p>
              <a href="#"><i className='bx bx-link-external'></i></a>
            </div>
          </div>

          <div className="portfolio-box">
            <img src={figmaMap} alt=""></img>
            <div className="portfolio-layer">
              <h4>SoldierE4</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ratione.</p>
              <a href="#"><i className='bx bx-link-external'></i></a>
            </div>
          </div>

          <div className="portfolio-box">
            <img src={leefoAll} alt=""></img>
            <div className="portfolio-layer">
              <h4>Leefo</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ratione.</p>
              <a href="#"><i className='bx bx-link-external'></i></a>
            </div>
          </div>

          <div className="portfolio-box">
            <img src={imat} alt=""></img>
            <div className="portfolio-layer">
              <h4>IMat</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ratione.</p>
              <a href="#"><i className='bx bx-link-external'></i></a>
            </div>
          </div>
          
        </div>


        
      </section>

    </div>
  );

}