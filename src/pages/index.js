import * as React from "react"
import { useState } from "react"
import { Layout } from "../components/Layout"
import uche from "../../static/uche.png"
import uchebw from "../../static/uchebw.png"
import uchecolor from "../../static/uchecolor.png"
// import divider, { Divider } from "../components/Divider"
// import { Button } from "../components/Button";
import { graphql } from "gatsby"
// import images from "../images/"

export default function Home(data) {
  console.log(data.data.allFile.nodes)
  // const {technologies} = data.data.allFile.nodes;

  const [currentAboutTab, setCurrentAboutTab] = useState(true);

  
  return <div>
    <Layout>

      <div className="w-5/6 mx-auto md:h-screen mb-60 align-center place-items-center mainGrid"  id="home">
        <h1 id="home">Full-Stack Web Developer</h1>
        <p> Hi, I'm <span>Uchenna</span>. I code and create usable, minimalist digital experiences.</p>
        <img src={uche} alt="pic of Uchenna"/>
      </div>
      
        <section className="aboutMe" id="about">
          {
            currentAboutTab ?

              <div className="aboutBox card w-96 bg-primary text-primary-content">
                <div class="card-body">
                  <h2 class="card-title">About Me </h2>
                  <p>
                    Hi! My name is Uchenna and I am a web developer open for work. 
                    With web development, I find that what Confucius said is true: <span>"Choose a job you love and you'll never have to work a day in your life."</span> Web development is my passion, and I look forward to sharing it with the world and helping you build an accessible and scalable web application you will love.
                  </p>
                {/* {technologies} */}
                <div className="card-actions justify-end">
                  <button className="btn" onClick={()=>setCurrentAboutTab(!currentAboutTab)}>{currentAboutTab ? "Languages/Technologies" : "About Me"}</button>
                </div>
              </div>
            </div>
          :
            <div className="aboutBox card w-96 bg-primary text-primary-content">
                <div className="card-body ">
                  <h2 className="card-title">Languages/Technologies</h2>
                  <div className="technologies">
                    {data.data.allFile.nodes.map((technology) => (
                      <img src={`${technology.relativePath}`} alt={`${technology.relativePath.substring(0,technology.relativePath.indexOf("."))}`}/>
                    ))}
                  </div>
                <div class="card-actions justify-end">
                  <button className="btn" onClick={()=>setCurrentAboutTab(!currentAboutTab)}>{currentAboutTab ? "Technologies I Use" : "About Me"}</button>
                </div>
              </div>
            </div>
        }
          <img src={uchebw} alt="Uche at kerry Park, seattle in black and white" className="uche-bw" onMouseOver={e => e.currentTarget.src = uchecolor} onMouseOut={e => e.currentTarget.src = uchebw}/>
          {/* <img className="hoverImage" src={uchecolor} alt="Uche at kerry Park, seattle in color"/> */}
      </section>




      {/* <div id="projects">

      </div>

      <div id="contact">


      </div> */}
    </Layout>
    <footer>
      <p className="copy">
        Built with &#x2661; by Uchenna
      </p>
</footer>

    
    </div>
}

// example page query
export const query = graphql`
query Technologies {
  allFile {
    nodes {
      relativePath
    }
  }
}
`
