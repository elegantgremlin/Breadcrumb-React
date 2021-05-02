import React from 'react'

const FileContent = (props) => {
  const { content } = props

  return (
    `This is file : ${content}`
  )
}

export default FileContent