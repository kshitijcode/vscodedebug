const express = require('express')
const app = express()
const port = 3001

app.get('/play', (req, res) => {
  res.send('Service B')
})

app.listen(port, () => {
  console.log(`Service B is listening at http://localhost:${port}`)
})
