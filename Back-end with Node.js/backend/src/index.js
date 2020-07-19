const express = require('express')
const cors = require('cors')
const { uuid , isUuid } = require('uuidv4')

const app = express()

app.use(cors({
  origin: 'http://localhost:8080'
}))
app.use(express.json())


//routes
const projects = []

function logRequest(req, res, next){
  
  const { method, url} = req

  const logLabel = `[${method.toUpperCase()}] ${url}`

  console.log(logLabel)
  console.time(logLabel)
  next()
  console.timeEnd(logLabel)
}

function validateProjectId(req, res, next){
  const {id} = req.params

  if(!isUuid(id)){
    return res.status(400).json({error:"Invalid Project ID"})
  }
  return next()
}

app.use(logRequest)
app.use('/projects/:id', validateProjectId)

app.get('/projects', (req, res)=>{

  const {techs} = req.query

  const result = techs
  ? projects.filter(project => project.techs.includes(techs))
  : projects

  console.log(projects)
  return res.send(result)
})

app.post('/projects', (req, res)=>{

  const {id, title, techs} =  req.body
  const likes = 0

  const project = { id:uuid(), title, techs, likes}

  
  projects.push(project)
  console.log(projects, 'aqui')

  return res.json(project)
})

app.put('/projects/:id', (req, res)=>{

  const {id} = req.params  
  const projectIndex = projects.findIndex(project => project.id == id)

  if(projectIndex < 0){
    return res.status(400).json({error: 'project not found!'})
  }

  const {likes} =  req.body
  const project = {
    id,
    title: projects[projectIndex].title,
    techs: projects[projectIndex].techs,
    likes
  }

  projects[projectIndex] = project;

  return res.json(project)

})

app.delete('/projects/:id', (req, res)=>{

  const {id} = req.params
  const projectIndex = projects.findIndex(project => project.id == id)

  if(projectIndex < 0){
    return res.status(400).json({error: "Project not found!"})
  }

  projects.splice(projectIndex, 1)

  return res.status(204).send()
})

app.listen(3333, ()=>{
  console.log('😎 Back-end started!')
})