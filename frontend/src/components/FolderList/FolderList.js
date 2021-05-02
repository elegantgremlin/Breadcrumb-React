import React from 'react'
import FolderItem from './FolderItem'

const FolderList = (props) => {
  const { currPath, changePath} = props

  return (
    <ul>
      {currPath.children.map((p) => {
        return <FolderItem key={p} item={p} changePath={changePath} />
      })}
    </ul>
  )
}

export default FolderList