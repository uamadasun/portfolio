import * as React from "react"
import { Layout } from "../components/Layout"
import robotGif from "../../static/robotGif.gif"
import { Button } from "../components/Button"
import { Link } from "gatsby"


const Success = () => {

  
  return <div>
    <div className="robotCard card w-96 bg-base-100 relative">
    
        <div className="card-body">
          <h2>Success!</h2>
          <figure><img src={robotGif} alt="robot waving hello" /></figure>
          <p>Thank you for reaching out! I will get back to you in less than 24 hours.</p>
          <Link to="/"><button className="btn" >Home</button></Link>
        </div>
        
        
      </div>
      
    <footer>
      <p>
        Built with &#x2661; by Uchenna
      </p>
</footer>

    
    </div>
}

export default Success;
