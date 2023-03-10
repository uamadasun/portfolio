import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import LazyArtis from "../images/LazyArtis2.gif"
import Picturest from "../images/Picturest.gif"
import Strikify from "../images/Strikify.gif"



export const Projects = () => {
  return (
    <div className="projectMenu">
        <img
            src={LazyArtis}
            height={300}
            alt="lazyartis"
            placeholder="tracedSVG"
        />
        <img
            src={Picturest}
            height={300}
            alt="picturest"
            placeholder="tracedSVG"
        />
        <img
            src={Strikify}
            height={300}
            alt="strikify"
            placeholder="tracedSVG"
        />

    </div>
  )
}
