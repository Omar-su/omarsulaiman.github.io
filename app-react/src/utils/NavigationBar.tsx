import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import './Navigation.css'


export function NavBar(){

  const navigate = useNavigate();

  const navigatePage = (link: string) => {
    navigate(link);
  }


  return(
        <nav className="navbar nav-bar">
          <div className='portfolio-name'onClick={() => navigatePage("/home")}>Omar Sulaiman</div>
          <div className='nav-right-elements'>
            <span onClick={() => navigatePage("/home")}>Home</span>
            <span onClick={() => navigatePage("/media")}>Media</span>
            <span onClick={() => navigatePage("/projects")}>Projects</span>
            <span onClick={() => navigatePage("/contact")}>Contact</span>
            <span onClick={() => navigatePage("/about-me")}>About</span>
          </div>
        </nav>);
}