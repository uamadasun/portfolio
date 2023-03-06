import React, { useEffect } from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll';
import { useState } from 'react';


export const Button = (props) => {
    const {sectionName} = props;
    
  return (
        <div>
            <button onClick={() => scrollTo(`#${sectionName.toLowerCase()}`)} className="transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-300 ..." title={`${sectionName}`}> {sectionName === "About" ? "01." : (sectionName==="Projects" ? "02." : (sectionName==="Contact" ? "03." : "00."))} <span>{sectionName}</span></button>
        </div>
    )
}