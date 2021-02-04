import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import Card from "./atoms/Card"


const Promotion = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="promotion-container">
          <Fade bottom cascade>
            <h1>{data.promotionHeading}</h1>
          </Fade>
          <div className="grid">
            <Fade bottom cascade>
              {data.playlists.map(playlist => (
                <Card
                  key={playlist.id}
                  heading={playlist.title}
                  paragraph={playlist.para}
                  imgUrl={playlist.imageSrc}
                  projectLink={playlist.url}
                ></Card>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Promotion
