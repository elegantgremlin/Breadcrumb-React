const express = require('express')
const path = require('path')

const folderPath =  path.join(__dirname, 'frontend', 'dist')

const structure = require('./structure.json')

const app = express()
const port = 3000
app.use(express.static(folderPath))

app.get('/api/path/:path', (req, res) => {
  const dir = req.params.path

  const result = findNode(structure, [], dir)

  res.send(result)
})

function findNode(currentNode, path, name) {
  let result = {}
  Object.keys(currentNode).some((k) => {
    const node = currentNode[k]
    const children = node.children
    
    if(k === name) {
      result = {
        name,
        type: node.type,
        path,
        children: children ? Object.keys(children) : undefined
      }
      return true
    } else if(children) {
      path.push(k)
      childResult = findNode(children, path, name)

      if (childResult) {
        result = childResult
        return true
      }
    }

    return false
  })

  return result
}

app.get('*', (req, res) => {
  res.sendFile(path.join(folderPath, 'index.html'));
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})