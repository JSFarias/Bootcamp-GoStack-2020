import React, {useState, useEffect} from 'react'
import api from './services/api'

import Header from './components/Header'
import './App.css'

export default function App(){


  const [projects, setProjects] = useState([])

  useEffect(()=>{    

    api.get('projects').then(response =>{
      setProjects(response.data)
    })
    
  },[])

  async function handleAddProject(){
    
    const response = await api.post('projects', {
      name: "Jhonn",
      age: 24,
      carrier: "Artist"
    })

    const project = response.data
    setProjects([...projects, project])

  }

  /*function handleAddProject(){
    
    api.post('projects', {
      name: "Jhonn",
      age: 24,
      carrier: "Artist"
    }).then(response => setProjects([...projects, response.data]))
    
  }*/

  return(
    <>     
      <Header title="Projetos" />

      <ul>
        {projects.map(register => <li key={register.id}>{register.carrier}</li>)}
      </ul>
      <button type='button' onClick={handleAddProject}>Adicionar</button>
    </>
  )
}