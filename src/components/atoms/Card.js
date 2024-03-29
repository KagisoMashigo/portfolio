import React from "react"

const Card = ({ heading, paragraph, imgUrl, projectLink, stackImg }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")",
      }}
    >
      <div className="content">
        <div className="content-text">
          <h1 className="header">{heading}</h1>
          <p className="text">{paragraph}</p>
        </div>
        <div className="pictures">
          <a
            href={projectLink ? projectLink : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            
          >
            Explore
          </a>
          <img src={stackImg} alt="project logo" width="60" height="60"></img>
        </div>
      </div>
    </div>
  )
}

export default Card
