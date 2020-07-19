import {Request, Response} from 'express'
import createUser from './services/CreateUser'

export default function helloWorld (request: Request, response: Response){

  const user = createUser({
    email: 'jhon@gmail.com', 
    password: '123545',
    techs:[
      'ReactJS', 
      'NodeJS', 
      'React Native',
      {title: 'ReactJS', experience: 100},
    ]
  })

  console.log(user)

  return response.json({message: 'Hello World'})
}