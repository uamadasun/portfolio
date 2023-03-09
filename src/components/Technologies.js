import React from 'react'



export const Technologies = () => {
    const importAll = r => {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    const allImages = importAll(require.context('../images', true, /\.(png|jpe?g|svg)$/));
    console.log("all images", allImages)
      
      
  return (
    <div className='technologies'>
        <img src={allImages['javascript.png']} alt="javascript"/>
      <img src={allImages['python.png']} alt="python"/>
      <img src={allImages['java.png']} alt="java"/>
      <img src={allImages['html.png']} alt="html"/>
      <img src={allImages['css.png']} alt="css"/>
      <img src={allImages['bootstrap.png']} alt="bootstrap"/>
      <img src={allImages['react.png']} alt="react"/>
      <img src={allImages['gatsby.png']} alt="gatsby"/>
      <img src={allImages['express.png']} alt="express"/>
      <img src={allImages['flask.png']} alt="flask"/>
      <img src={allImages['nginx.png']} alt="nginx"/>
      <img src={allImages['spring.png']} alt="spring"/>
      <img src={allImages['mysql.png']} alt="mysql"/>
      <img src={allImages['mongodb.png']} alt="mongodb"/>
      <img src={allImages['graphql.png']} alt="graphql"/>
      <img src={allImages['aws.png']} alt="aws"/>
      <img src={allImages['vscode.png']} alt="vscode"/>
      <img src={allImages['postman.png']} alt="postman"/>
    </div>
  )
}
