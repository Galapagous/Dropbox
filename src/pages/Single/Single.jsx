import React, { useState } from 'react'
import './single.scss'
import Navbar from '../../components/Navbar/Navbar'
import Icon from '../../components/Icons/Icon'
import { Add, Cancel } from '@mui/icons-material'
import Jimmy from '../../components/Assets/profileml.jpg'


function Single() {
  const [preview, setPreview] = useState(false)
  const [currFile, setCurrFile] = useState({})
  const handleUpload = ()=>{
    //upload to s3 bucket
    alert('upload successfull')
    setPreview(!preview)
    setCurrFile({})
  }

  const handlePreview = (e)=>{
    let file = e.target.files[0]
    setCurrFile(file)
    setPreview(!preview)
  }

  return (
    <div className='single-container'>
      <Navbar/>
      {preview &&
          <div className="file-preview">
            <h3>File Preview</h3>
            <div className="top-preview">
              <img src={URL.createObjectURL(currFile)} alt="sample"/>
            </div>
              <p>{currFile.name}</p>
            <div className="bottom-preview">
              <button onClick={handleUpload}><Add/></button>
              <button onClick={()=>{setPreview(!preview)}}><Cancel/></button>
            </div>
          </div>
        }
        <form>
          <label htmlFor='fileInput'>
          <Icon MyIcon={<Add/>} Title='Add'/>
          </label>
          <input type='file' id='fileInput' onChange={handlePreview}/>
        </form>
      <div className="single-item">
        {[1,2,3,4,5,6,7,8,9,12].map(each_file=>{
          return(
            <div key={each_file} className="file-container">
              <img src={Jimmy} alt='file demo'/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Single