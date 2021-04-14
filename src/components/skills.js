import React from "react"
import data from "../data"

const Skills = () => {
  return (
    <div className="section">
      <div className="container">
          <h1>Skills</h1>
        <div className="skills-container">
          <div className="skills-grid">
            {data.skills.map(skill => (
              <div className="skill" key={skill.id}>
                <img src={skill.img} alt="css" className="skill-img"></img>
                <div class="bar">
                <div class="info">
                  <span>{skill.skill}</span>
                </div>
                <div class="progress-line html">
                  <span></span>
                </div>
                </div>              
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
