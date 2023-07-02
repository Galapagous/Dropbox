import React from 'react'
import './rightSide.scss'
import { Delete, Edit, PictureAsPdfSharp, Share } from '@mui/icons-material'
import Icon from '../Icons/Icon'

function RightSide() {
  return (
    <div className='right-container'>
      <div className="right-nav">
        <h3>File Preview</h3>
      </div>
      <div className="right-top">
        <PictureAsPdfSharp/>
      </div>
      <div className="right-center">
        <h3>File name here</h3>
        <p>200Mb</p>
        <h3>file description</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, odit?</p>
      </div>
      <div className="right-bottom">
        <Icon MyIcon={<Share/>} Title='Share'/>
        <Icon MyIcon={<Edit/>} Title='Edit'/>
        <Icon MyIcon={<Delete/>} Title='Delete'/>
      </div>
    </div>
  )
}

export default RightSide