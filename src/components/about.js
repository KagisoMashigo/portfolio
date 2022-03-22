import React from "react"
import Fade from "react-reveal/Fade"
import data from "../data"
import me from "../images/me.jpg"

const About = () => {

  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <p>
              {data.aboutParaOne}
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree}
              <br></br>
              <br></br>
              {data.aboutParaFour}
              <p><a href="https://www.meetup.com/fr-FR/stack-days-montreal-ca/events/280671671/" target="_blank" rel="noopener noreferrer">Check it out here.</a></p>
            </p>
          </div>
          <div className="image-wrapper">
            <img src={me} alt="Img Not Found"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
