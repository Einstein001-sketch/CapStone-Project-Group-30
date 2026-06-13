import React from 'react';
import hero from "./assets/hero.png";
const Hero = () => {
  return (
    <div className="hero-box">
        <div className="my-hero-text">
         <h1>Explore Our Solar<br/> System Through Data</h1><br />
        <p>
            Understand the planet not by name but by measurable<br/>
            facts, from size and mass to gravity and density, this page<br/>
            breaks down the solar system in a clear, data driven way.
        </p>
        <button className='ex-btn'><a href="#Table.jsx">Explore the Data</a></button>
        <button className='cont-btn'><a href="#Form.jsx">Contact Us</a></button>
        </div>
        <div className="hero-img">
            <img src={hero} alt="my-hero-img" />
        </div>
        
    </div>
  )
}

export default Hero;
