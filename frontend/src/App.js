import React, { useState, useEffect} from 'react';
import Breadcrumb from './components/Breadcrumb/Breadcrumb'
import FileView from './components/FolderList/FileView';

const App = () => {
  const [currPath, setCurrPath] = useState({})

  useEffect(() => {
    changePath('root')  
  }, [])

  function changePath(newNode) {
    fetch(`http://localhost:3000/api/path/${newNode}`)
        .then(response => response.json())
        .then(data => setCurrPath(data))
  }

  return (
    <>
      <Breadcrumb currPath={currPath} setCurrPath={changePath} />
      <FileView currPath={currPath} changePath={changePath} />
    </>
  )
}

export default App
