import React from 'react'
import NavBar from './NavBar'
import "../styles/global.css"

export const Layout = ({children}) => {
  return (
    <div className="layout">
        <NavBar/>
        <div className='content'>
           {children}
        </div>

    </div>
  )
}
