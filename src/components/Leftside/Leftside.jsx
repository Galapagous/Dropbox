import React from 'react'
import './leftside.scss'
import { Folder, Pets, PowerSettingsNewSharp } from '@mui/icons-material'
import Icon from '../Icons/Icon'

function LeftSide() {
  return (
    <div className='left-container'>
      <div className="left-top">
        <Pets/>
      </div>
      <div className="left-main">
        <Icon MyIcon={<Folder/>} Title = 'Cloud'/>
      </div>
      <div className="left-bottom">
        <Icon MyIcon={<PowerSettingsNewSharp/>} Title = 'Logout'/>
      </div>
    </div>
  )
}

export default LeftSide