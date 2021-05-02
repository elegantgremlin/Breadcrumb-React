import React from 'react'
import FolderList from './FolderList'
import FileContent from './FileContent'

const FileView = (props) => {
  const { currPath, changePath } = props

  return (
    <>
      {currPath.type === 'dir' && currPath.children && 
        <FolderList currPath={currPath} changePath={changePath} />}
      {currPath.type === 'file' && <FileContent content={currPath.name} />}
    </>
  )
}

export default FileView