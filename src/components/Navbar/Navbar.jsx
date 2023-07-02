import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="top-home">
        <Link to='/'><h3>Dropbox</h3></Link>
        <h5>Hello Musa</h5>
      </div>
  )
}

export default Navbar