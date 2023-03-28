import { NavBar } from "../utils/NavigationBar";
import "./About.css"
import portfolioMain from '../images/portfolioMain.jpg';
import MapCon from "./Map";
import React from "react";

export function AboutPage(){

  return(<div>
    <div>
      <NavBar></NavBar>
    </div>
    <section className="about">
      <div className="about-image">
        <img src={portfolioMain} alt="yuuu" />
      </div>

      <div className="about-content">
        <h2 className="heading">About <span>Me</span></h2>
        <h3>Fullstack Developer</h3>
        <p>Hello my name is omar and I work as a TA</p>
        <a href="#" className="btn-readmore"> Read More</a>
      </div>

    </section>
    <div className="map">
      <MapCon></MapCon>
    </div>
  </div>);

}