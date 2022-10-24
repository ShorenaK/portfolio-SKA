import React from "react";
import Typical  from 'react-typical'

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          
          <div className="colz">
            <div className="colz-icon">
            <a href="https://www.linkedin.com/in/shorenaanzhilov/">
              <i className="fa fa-linkedin-square"> </i>
            </a>

            <a href="https://github.com/ShorenaK">
              <i className="fa fa-github-square"> </i>
            </a>
              
            </div>
          </div>

          <div className="profile-details-name">
            <span className="prime-text">
            {" "}
              Hello, I'M <span className="highlighted-text">Shorena</span>
            </span>
          </div>
         <div className="profile-details-role">
       <span className="prime-text">
       {" "}
       <h1>
        {" "}
        <Typical
        loop={Infinity}
        steps= {[
            "Software Engineer 🛑", 
            2000,
            "Full Stack Developer 💻", 
            2000,
            "MERN Stack Dev ✅", 
            2000,
            "React Native Dev 📲", 
            2000,
            "Django/Python 🖥🌐✅", 
            2000,
        ]}
        />
       </h1>
       <span className="profile-role-tagline"> 
       Software Engineering || Full Stack Developer || JavaScript, React, Python, Django , HTML, CSS || Growth Mindset || Problem solver.
       </span>
       </span>
         </div>
         <div className="profile-optons">
          <button className="btn primany-btn"> 
          {""}
          Hire Me{" "}
          </button>
          <a href="Resume.pdf" download='Shorena K. Anzhilov Resume.pdf'> 
            <button className="btn highlighted-btn"> Get Resume </button>
          </a>
         </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background">

          </div>
        </div>
      </div>
    </div>
  );
}
