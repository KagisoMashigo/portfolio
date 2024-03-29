import React from "react"
import Fade from "react-reveal/Fade"
import data from "../data"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h2 className="titleName">
              {data.fullName}{" "}
            </h2>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                {data.headerTagline[0]
                  ? data.headerTagline[0]
                  : "Human,"}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[1]
                  ? data.headerTagline[1]
                  : "Full-Stack Web Dev,"}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[2]
                  ? data.headerTagline[2]
                  : "and Playlist Maker"}
              </h1>
            </div>
          </Fade>
          <Fade bottom>
            <p>{data.headerParagraph}</p>
          </Fade>

        </div>
      </div>
    </div>
  )
}

export default Header
