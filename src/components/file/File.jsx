import React from 'react'
import './file.scss'
import { Folder } from '@mui/icons-material'
import { Link } from 'react-router-dom'

function File() {
  const updateInfo = ()=>{
    alert('hello')
  }
  return (
    <div className='file_container'>
      <div className='file_system'>
        <button onClick={updateInfo}>
        <Folder/>
        </button>
      <Link to='/single'>
        <p>UI/UX</p>
      </Link>
      </div>
      <span>200mb</span>
    </div>
  )
}

export default File