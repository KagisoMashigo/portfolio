import React from "react"
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div className="links-wrapper">
            <a> <Link to="work" spy={true} smooth={true} >Projects</Link></a>
            <a> <Link to="about" spy={true} smooth={true} >About</Link></a>
            <a> <Link to="contact" spy={true} smooth={true} >Contact</Link></a>
            <a href='https://www.canva.com/design/DAESRUKDf4U/aAH4Grs2zDo4jl5FLZWhCg/view?utm_content=DAESRUKDf4U&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink'
            target="_blank" download
            rel="noreferrer"
            >Résumé
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
