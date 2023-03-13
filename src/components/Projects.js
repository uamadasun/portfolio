import { Link } from 'gatsby'
import React, { useState } from 'react'
import LazyArtis from "../images/LazyArtis2.gif"
import Picturest from "../images/Picturest.gif"
import Strikify from "../images/Strikify.gif"



export const Projects = () => {
    
  return (
    <div>
        {/* <div className="carousel w-3/4 projectMenu">
            <div id="lazyArtis" className="carousel-item">
                
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={LazyArtis} alt="LazyArtis project" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">LazyArtis</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                        <Link to="https://github.com/uamadasun/LazyArtis" target="_blank"><button className="btn btn-primary">Github</button></Link>
                        </div>
                    </div>
                </div>
            </div> 
            <div id="picturest" className="carousel-item">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={Picturest} alt="Picturest project" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Picturest</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                        <Link to="https://github.com/uamadasun/picturest" target="_blank"><button className="btn btn-primary">Github</button></Link>
                        </div>
                    </div>
                </div>
            </div> 
            <div id="strikify" className="carousel-item w-full">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={Strikify} alt="Strikify project" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Picturest</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                        <Link to="https://github.com/uamadasun/strikify" target="_blank"><button className="btn btn-primary">Github</button></Link>
                        </div>
                    </div>
                </div>
                
            </div> 
        </div>  */}


        <div className="carousel carousel-start justify-between rounded-box w-3/4 ml-40">
            <div className="carousel-item">
                <div className="card  w-80  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={LazyArtis} alt="LazyArtis project" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">LazyArtis</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                        <Link to="https://github.com/uamadasun/LazyArtis" target="_blank"><button className="btn btn-primary">Github</button></Link>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="carousel-item">
                <div className="card  w-80  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={Picturest} alt="Picturest project" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Picturest</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                        <Link to="https://github.com/uamadasun/picturest" target="_blank"><button className="btn btn-primary">Github</button></Link>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="carousel-item">
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={Strikify} alt="Strikify project" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Strikify</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                        <Link to="https://github.com/uamadasun/strikify" target="_blank"><button className="btn btn-primary">Github</button></Link>
                        </div>
                    </div>
                </div>
            </div> 
        </div>


        

    </div>






  )
}
