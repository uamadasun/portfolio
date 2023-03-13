import { Link } from 'gatsby'
import React, { useState } from 'react'
import LazyArtis from "../images/LazyArtis2.gif"
import Picturest from "../images/Picturest.gif"
import Strikify from "../images/Strikify.gif"



export const Projects = () => {
    
  return (

        <div className="md:carousel carousel-end justify-between rounded-box w-1/2 mx-auto ">
            <div className="carousel-item">
                <div className="card  w-80  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={LazyArtis} alt="LazyArtis project" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">LazyArtis</h2>
                        <h4>Full Stack Developer</h4>
                        <div className = "eachProject">
                            <h3>AI Art generator</h3>
                            <p> This web application uses the Dall-e 2 AI system from OpenAI to generate images from text descriptions.</p>
                        </div>
                        
                        <h4>Node.js | OpenAI API | React | MongoDB</h4>
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
                        <h4>Back-End Developer</h4>
                        <div className = "eachProject">
                            <h3>Photo-based social media web application</h3>
                            <p> This website is inspired by Pinterest and allows users to share photos and connect with other users.</p>
                        </div>
                        
                        <h4>Java | Spring Boot | MySQL</h4>
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
                        <h4>Full-Stack Developer</h4>

                        <div className = "eachProject">
                            <h3>Lightning network point of sale</h3>
                            <p> This web app utilizes the Strike API to facilitate lightning payments so merchants can get paid in their local currency.</p>
                        </div>

                        <h4>Python | Strike API | MySQL</h4>
                        <div className="card-actions">
                        <Link to="https://github.com/uamadasun/strikify" target="_blank"><button className="btn btn-primary">Github</button></Link>
                        </div>
                    </div>
                </div>
            </div> 
        </div>


        








  )
}

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
