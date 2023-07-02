import React, { useState } from 'react'
import './home.scss'
import File from '../../components/file/File'
import Navbar from '../../components/Navbar/Navbar'
import Icon from '../../components/Icons/Icon'
import { Add, Cancel } from '@mui/icons-material'

function Home() {
  const [addFolder, setAddFolder] = useState(false)
  const [preview, setPreview] = useState(false)
  const [currFile, setCurrFile] = useState({})
  
  const handleUpload = ()=>{
    //grab the file
    // const file = URL.createObjectURL(currFile)
    //upload file to s3 bucket

    setCurrFile({})
    setPreview(!preview)
  }

  const handlePreview = (e)=>{
    setPreview(!preview)
    setCurrFile(e.target.files[0])
  }
  return (
    <div className = 'home-container'>
      <Navbar/>
        <div className="home-add">
        <form onSubmit={handlePreview}>
          <label htmlFor='fileInput'>
          <Icon MyIcon={<Add/>} Title='File'/>
          </label>
          <input type='file' id='fileInput' onChange={handlePreview}/>
        </form>
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
        <div className="add-folder">
          <button onClick={()=>{setAddFolder(!addFolder)}}><Icon MyIcon={<Add/>} Title='Folder'/></button>
          {addFolder && <div className="folder-info">
            <form>
            <input type='text' placeholder='Folder Name'/>
            <div className="action">
            <button onClick={()=>{setAddFolder(!addFolder)}}>add</button>
            <button onClick={()=>{setAddFolder(!addFolder)}}><Cancel/></button>
            </div>
            </form>
          </div>}
        </div>
        </div>
      <div className="home-main">
      {[1,2,3,4,5,6,7,8,9,10].map(each_element=>{
            return(<File key={each_element}/>)
          })}
      </div>
    </div>
  )
}

export default Home