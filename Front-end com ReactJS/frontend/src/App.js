import React, {useState} from 'react'

import Header from './components/Header'
import './App.css'
import bgImage from './assets/imgs/photo.jpg'

export default function App(){


  const [projects, setProjects] = useState(['projeto01', 'projeto02'])

  function handleAddProject(){

    setProjects([...projects, `new ${Date.now()}`])
  }

  return(
    <>     
      <Header title="Projetos" />

      <img width="100px" src={bgImage} alt="photo"/>

      <ul>
        {projects.map(proj => <li key={proj}>{proj}</li>)}
      </ul>
      <button type='button' onClick={handleAddProject}>Adicionar</button>
    </>
  )
}