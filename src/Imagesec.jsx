import React from 'react';
import {useState, useEffect} from 'react';

const Imagesec = () => {
    const[planets, setPlanets] = useState([]);
    
      useEffect(()=>{
        fetch("https://anurella.github.io/json/planets.json")
        .then((response)=>response.json())
        .then((data)=>{
          console.log(data);
          setPlanets(data);
    })
    .catch((error)=>console.log(error));
      }, []);
return (
    <div className="image-box">
        <h2>Visualizing the Differences Between Planets</h2>
        <p>
            Each planet in our solar system has unique physical characteritics. Visual comparisms help
            highlight how <br /> vastly different terrestial planets are from gas giants and ice giants.
        </p>
        <div className="planet-images">
        {
          planets.length > 0 &&(
            <div className="planets-box">
                <div className="my-planet">
                    <img className="image-1"src={planets[0].image} alt="" />
                    <h3>{planets[0].planet}</h3>
                    <p>{planets[0].distanceFromSun}</p>
                </div>
                <div className="my-planet">
                    <img className="image-1"src={planets[1].image} alt="" />
                    <h3>{planets[1].planet}</h3>
                    <p>{planets[1].distanceFromSun}</p>
                </div>
                <div className="my-planet">
                    <img className="image-1"src={planets[2].image} alt="" />
                    <h3>{planets[2].planet}</h3>
                    <p>{planets[2].distanceFromSun}</p>
                </div>
                <div className="my-planet">
                    <img className="image-1"src={planets[3].image} alt="" />
                    <h3>{planets[3].planet}</h3>
                    <p>{planets[3].distanceFromSun}</p>
                </div>
                <div className="my-planet">
                    <img className="image-1"src={planets[4].image} alt="" />
                    <h3>{planets[4].planet}</h3>
                    <p>{planets[4].distanceFromSun}</p>
                </div>
                <div className="my-planet">
                    <img className="image-1"src={planets[5].image} alt="" />
                    <h3>{planets[5].planet}</h3>
                    <p>{planets[5].distanceFromSun}</p>
                </div>
                <div className="my-planet">
                    <img className="image-1"src={planets[6].image} alt="" />
                    <h3>{planets[6].planet}</h3>
                    <p>{planets[6].distanceFromSun}</p>
                </div>
                <div className="my-planet">
                    <img className="image-1"src={planets[7].image} alt="" />
                    <h3>{planets[7].planet}</h3>
                    <p>{planets[7].distanceFromSun}</p>
                </div>
                <div className="my-planet">
                    <img className="image-1"src={planets[8].image} alt="" />
                    <h3>{planets[8].planet}</h3>
                    <p>{planets[8].distanceFromSun}</p>
                </div>
            
            </div>
          )
        }
</div> 
    </div>
  );
}

export default Imagesec;