import React from 'react'
import NavBar from './NavBar'

export const Layout = ({children}) => {
  return (
    <div className="layout">
        <NavBar/>
        <div className='content'>
           {children}
        </div>
        <footer>
            <p>Made with love by me.</p>
        </footer>
    </div>
  )
}
