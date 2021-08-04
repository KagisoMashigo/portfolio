import React from "react"
import data from "../data"

const Skills = () => {
  return (
    <div className="section">
      <div className="container">
          <h1 className="skill-heading">Skills</h1>
        <div className="skills-container">
          <div className="skills-grid">
            {data.skills.map(skill => (
              <div className="skill-group">
                <img src={skill.img} alt="css" className="skill-img"></img>
                <div class="bar">
                  <div class="info">
                    <span className="skill-title">{skill.title}</span>
                  </div>
                  <div class={skill.skill}>
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
