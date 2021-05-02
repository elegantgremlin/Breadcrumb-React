import React from 'react'
import Crumb from './Crumb';

const Breadcrumb = (props) => {
  const {currPath, setCurrPath} = props;

  return (
    <p key={currPath}>
      {currPath.path && currPath.path.map((p) => {
        return <Crumb key={p} currPath={p} setCurrPath={setCurrPath} />
      })}
      <span id="currPage">{currPath.name}</span>
    </p>
  )
}

export default Breadcrumb