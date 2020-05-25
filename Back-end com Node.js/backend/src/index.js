const express = require('express')

const app = express()

app.get('/', (req, res)=>{
  return res.json({
    message: "root"
  })
})

app.get('/jhon', (req, res)=>{
  return res.json({
    message:"hello jhon"
  })
})

app.get('/proj', (req, res)=>{
  return res.json({
    message: "proj"
  })
})

app.listen(3333)