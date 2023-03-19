import { NavBar } from "../utils/NavigationBar";
import "./Home.css"
import portfolioMain from '../images/portfolioMain.jpg';
import 'boxicons/css/boxicons.min.css';
const Typical = require('react-typical').default;


export function HomePage(){

  return(<div>
    <div>
      <NavBar></NavBar>
    </div>
    <section className="main-info">
      <div className="info">
        <h3>Hello, It's Me</h3>
        <h1>Omar Sulaiman</h1>
        <h3>And I am a <span><Typical
          steps={['Software engineer', 1000, 'Fullstack Developer', 1000,'Student at Chalmers', 1000,'Youtuber ich :)', 1000]}
          loop={Infinity}
          wrapper="span"/></span>
      </h3>
        <div className="social-media">
          <a href="#"><i className='bx bxl-facebook'></i></a>
          <a href="#"><i className='bx bxl-instagram' ></i></a>
          <a href="#"><i className='bx bxl-youtube' ></i></a>
          <a href="#"><i className='bx bxl-linkedin' ></i></a>  
        </div>   
        <a href="#" className="btn-cv">Download CV</a>  
      </div> 

      <div className="my-image">
        <img src={portfolioMain} alt="yuuu" />
      </div>
    </section>

    
    

  </div>);

} 