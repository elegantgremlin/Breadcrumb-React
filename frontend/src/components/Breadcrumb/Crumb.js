import React from 'react'
import Separator from './Separator'

const Crumb = (props) => {
  const { currPath, setCurrPath} = props

  return (
      <span key={currPath}>
        <a href="#" onClick={() => setCurrPath(currPath)}>{currPath}</a><Separator />
      </span>
    )
  }

  export default Crumb