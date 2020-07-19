import {Router} from 'express'

const appointmentsRoutes = Router()

const appointments = []

appointmentsRoutes.post('/', (request, response)=>{

  const {provider, date} = request.body
  
  const appointment = {
    provider,
    date,
  }


  return response.json({message:'hello'})
})

export default appointmentsRoutes