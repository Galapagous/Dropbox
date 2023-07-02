import React from 'react'
import './icon.scss'

function Icon({MyIcon, Title}) {
  return (
    <div className='icon-container'>
        {MyIcon}
        <p>{Title}</p>
    </div>
  )
}

export default Icon