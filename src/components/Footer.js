import React from "react"
import Fade from "react-reveal/Fade"
import data from "../data"
import {Link} from 'react-scroll'

const Footer = () => {

  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <Fade bottom cascade>
            <h1>Contact</h1>
            <h2>{data.contactSubHeading}</h2>
          </Fade>
          <a className="email-link" href={`mailto:${data.contactEmail}`}>
            {data.contactEmail}
          </a>
          <div className="social-icons">
            {data.social.map(socialLink => (
              <a
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialLink.img} alt="icons"></img>
              </a>
            ))}
          </div>
          <a>
            <Link to="navbar-wrapper" spy={true} smooth={true} >Back to Top</Link>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
