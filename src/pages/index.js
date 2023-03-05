import * as React from "react"
import { useState } from "react"
import { Layout } from "../components/Layout"
import uche from "../../static/uche.png"
import uchebw from "../../static/uchebw.png"
import uchecolor from "../../static/uchecolor.png"
import divider, { Divider } from "../components/Divider"
import { Button } from "../components/Button";
import { graphql } from "gatsby"

export default function Home({ data }) {
  console.log(data)
  // const { technologies } = data.technologies.nodes[0];
  // const { metadata } = data.metadata.siteMetadata;

  const [currentAboutTab, setCurrentAboutTab] = useState();

  return <div>
    <Layout>

      <div className="w-5/6 mx-auto md:h-screen mb-60 align-center place-items-center mainGrid"  id="home">
        <h1 id="home">Full-Stack Web Developer</h1>
        <p> Hi, I'm <span>Uchenna</span>. I code and create beautiful, minimalist digital experiences.</p>
        <img src={uche} alt="pic of Uchenna"/>
      </div>
      
        {/* <Divider headerName = "About Me" > */}
        <section className="aboutMe" id="about">
            <img src={uchebw} alt="Uche at kerry Park, seattle in black and white" className="uche-bw"/>
            <img className="hoverImage" src={uchecolor} alt="Uche at kerry Park, seattle in color"/>
            <div className="aboutBox">
              <p>
                Hi! My name is Uchenna and I am a junior web developer. 
              With web development, I find that what Confucius said is true: "Choose a job you love and you'll never have to work a day in your life."              
              This is my passion, and I look forward to sharing it with the world and helping you build an accessible and scalable web application you will love.</p>
              {/* {technologies} */}
            </div>
            {/* <button>Click me</button> */}

      </section>
      {/* </Divider> */}

      {/* <div id="projects">

      </div>

      <div id="contact">


      </div> */}
    </Layout>
    <footer>
            <p>Made with love by me.</p>
        </footer>

    
    </div>
}

// example page query
export const query = graphql`
query MyTechnologies {
  technologies: allMarkdownRemark {
    nodes {
      html
    }
  }
  metadata: site {
    siteMetadata {
      contact
      copyright
      description
      title
    }
  }
}
`
