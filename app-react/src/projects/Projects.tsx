import { NavBar } from "../utils/NavigationBar";
import "./Projects.css"
import { projectsData } from "./ProjectsData";

export function ProjectsPage(){

  return( 
    <div>
      <div>
        <NavBar></NavBar>
      </div>
      <section className="portfolio" >
        <h2 className="heading">Latest <span>Projects</span></h2>
        
        <div className="portfolio-container">

            {projectsData.map((project) => (
              <ProjectCard src={project.image} name={project.name} desc={project.desc} link={project.link}></ProjectCard>
            ))}
          
        </div>
        
      </section>

    </div>
  );

}

interface ProjectProps {
  src : string,
  name : string,
  desc : string,
  link : string
}

function ProjectCard({src, name, desc, link} : ProjectProps ) {

  return(
    <div className="portfolio-box">
    <img src={src} alt=""></img>
    <div className="portfolio-layer">
      <h4>{name}</h4>
      <p>{desc}</p>
      <a href={link} target="_blank"><i className='bx bx-link-external'></i></a>
    </div>
  </div>
  );
}