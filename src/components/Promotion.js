import React from "react"
import Fade from "react-reveal/Fade"
import data from "../data"
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
                <span className="playlists">
                  <div className="card">
                  <Card
                    key={playlist.id}
                    heading={playlist.title}
                    paragraph={playlist.para}
                    imgUrl={playlist.imageSrc}
                    projectLink={playlist.url}
                  ></Card>
                  </div>
                  <iframe src={playlist.embededUrl}
                  width="300" height="250" frameborder="0" allowtransparency="true" allow="encrypted-media"
                  // key={playlist.id}

                  >
                  </iframe>
                </span>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Promotion
