import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css'


export function NavBar(){

  return(
        <nav className="navbar navbar-dark bg-light nav-bar">
          <div className='portfolio-name'>Omar Sulaiman</div>
          <div className='nav-right-elements'>
            <span>Home</span>
            <span>About</span>
            <span>Contact</span>
          </div>
        </nav>);
}