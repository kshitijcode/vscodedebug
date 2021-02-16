const express = require('express')
const app = express()
const request = require('request')
const port = 3000

app.get('/result', (req, res) => {
  var response = 'Service A '

  request('http://localhost:3001/play', { json: true }, (err, res, body) => {
    response = response + body
  })
  res.send(response)  
})

app.listen(port, () => {
  console.log(`Service A is listening at http://localhost:${port}`)
})
