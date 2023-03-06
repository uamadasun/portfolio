import React from 'react'
import logo from "../../static/logoPink.png"
// import { AnchorLink } from "gatsby-plugin-anchor-links";
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Button } from "../components/Button";
import { MenuButton } from './MenuButton';
// import { graphql, useStaticQuery } from 'gatsby';
// import {Img} from 'gatsby-plugin-image';



function NavBar(){


return (
    <div className='z-40'>
        <nav className='navOne '>
            <button><img src={logo} alt="Uchenna logo" onClick={()=>scrollTo('#home')}/></button>
            {/* <Img fluid={data.file.childImageSharp.fluid}/> */}
            <ul>
                <li><Button sectionName="Home"/></li>
                <li><Button sectionName="About"/></li>
                <li><Button sectionName="Projects"/></li>
                <li><Button sectionName ="Contact"/></li>
            </ul>
        </nav>

        <nav className="navbar bg-base-500 z-40" id="navTwo">
            <button><img src={logo} alt="Uchenna.io logo" onClick={()=>scrollTo('#home')}/></button>
            <div className="navbar-end">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost btn-circle relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 20 20" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p- shadow bg-base-100 rounded-box w-52 absolute right-10">
                <li><MenuButton sectionName="About"/></li>
                <li><MenuButton sectionName="Projects"/></li>
                <li><MenuButton sectionName="Contact"/></li>
                </ul>
                </div>
            </div>
        </nav>

    </div>
  )
}

export default NavBar;
