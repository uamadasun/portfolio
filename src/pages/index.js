import * as React from "react"
import { Layout } from "../components/Layout"
import uche from "../../static/uche.png"

export default function Home() {
  return <div>
    <Layout>
    <main>
        <h1>Full-Stack Web Developer & Creator</h1>
        <p> I code and create beautiful, minimalist digital experiences.</p>
        <img src={uche} alt="pic of Uchenna"/>
      </main>


    </Layout>
    
    </div>
}
