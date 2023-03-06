import * as React from "react"
import { Layout } from "../components/Layout"


const Success = () => {

  
  return <div>
    <Layout>
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>Success! I will get back to you within 24 hours.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
    </Layout>
    <footer>
      <p className="copy">
        Built with &#x2661; by Uchenna
      </p>
</footer>

    
    </div>
}

export default Success;
