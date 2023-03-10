import React from 'react'
import email from "../images/email-black.png"
import emailGreen from "../images/email-green.png"
import github from "../images/github-black.png"
import githubGreen from "../images/github-green.png"
import linkedin from "../images/linkedin-black.png"
import linkedinGreen from "../images/linkedin-green.png"



export const Social = () => {
  return (
    <div className='social'>
      <div className='right'>
        <a href={'mailto:info@uchenna.io'} target='_blank'><img src={email} onMouseOver={e => e.currentTarget.src = emailGreen} onMouseOut={e => e.currentTarget.src = email}
          alt="email address" className='icon'
        /></a> 
      </div>
      <div className='left'>
      <a href="https://github.com/uamadasun"><img src={github} onMouseOver={e => e.currentTarget.src = githubGreen} onMouseOut={e => e.currentTarget.src = github}
          alt="github link" className='icon'
        /></a> 
      <a href="https://www.linkedin.com/in/uchenna-amadasun/"><img src={linkedin} onMouseOver={e => e.currentTarget.src = linkedinGreen} onMouseOut={e => e.currentTarget.src = linkedin}
          alt="linkedin link" className='icon'
        /></a> 

      </div>
        

    </div>
  )
}
