import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#work")}>Projects</button>
            <button onClick={() => scrollTo("#about")}>About</button>
            <button onClick={() => scrollTo("#contact")}>Contact</button>
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
