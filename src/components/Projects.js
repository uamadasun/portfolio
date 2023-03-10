import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import LazyArtis from "../images/LazyArtis2.gif"
import Picturest from "../images/Picturest.gif"
import Strikify from "../images/Strikify.gif"



export const Projects = () => {
  return (
    <div>

    
        <div className="carousel w-1/2 projectMenu">
            <div id="lazyArtis" className="carousel-item w-full">
                <img src={LazyArtis}
                    // height={300}
                    alt="lazyartis" 
                    className="w-full" 
                />
            </div> 
            <div id="picturest" className="carousel-item w-full">
                <img src={Picturest}
                    // height={300}
                    alt="picturest"
                    className="w-full" 
                />
            </div> 
            <div id="strikify" className="carousel-item w-full">
                <img src={Strikify}
                    // height={300}
                    alt="strikify" 
                    className="w-full" 
                />
            </div> 
        </div> 
            <div className="flex justify-center w-full py-2 gap-2">
            <a href="#lazyArtis" className="btn btn-xs">1</a> 
            <a href="#picturest" className="btn btn-xs">2</a> 
            <a href="#strikify" className="btn btn-xs">3</a> 
        </div>
    </div>






  )
}
