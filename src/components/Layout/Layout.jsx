import React from 'react'
import {Outlet} from 'react-router-dom'
import LeftSide from '../Leftside/Leftside'
import RightSide from '../Rightside/RightSide'
import './layout.scss'

function Layout() {
  return (
    <div className='layout-container'>
        <div className="left-side">
        <LeftSide/>
        </div>
        <div className="main-area">
        <Outlet/>
        </div>
        <div className="right-side">
        <RightSide/>
        </div>
    </div>
  )
}

export default Layout