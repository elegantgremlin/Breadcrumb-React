import React from 'react'

const FolderItem = (props) => {
  const { item, changePath } = props

  return (
    <li key={item}>
      <a href="#" onClick={() => changePath(item)}>{item}</a>
    </li>
  )
}

export default FolderItem