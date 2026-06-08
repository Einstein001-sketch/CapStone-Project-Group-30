import React from 'react'

const Videosec = () => {
  return (
    <div className="vid-sec">
        
        <div className='my-vid'>
           <video
           autoPlay 
           muted 
           loop 
           playsInline
           className="vid"> 
           <source 
           src="https://raw.githubusercontent.com/DTechGeeks/Space-video-ts-acad/main/1992-153555258_small.mp4"
           type="video/mp4"
           />
           </video> 
        </div>

        <div className="vid-text">
          <h2>How Planetary Data Helps Us <br/> Understand Space </h2>
<p>Planetary science goes beyound images. Comparing <span>mass,</span> <span>diameter,</span> <br />
<span>gravity,</span> and <span>density,</span> we gain insight into how planets form, behave, <br /> and interact within the solar system. </p>
        </div>
        
    </div>
  );
}

export default Videosec;