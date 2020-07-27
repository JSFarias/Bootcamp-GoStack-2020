import {Router} from 'express'
import {parseISO} from 'date-fns'
import {getCustomRepository} from 'typeorm'

import AppointmentsRepository from '../repositories/AppointmentsRepository'

import CreateAppointmentService from '../services/CreateAppointmentService'


const appointmentsRoutes = Router()


appointmentsRoutes.get('/', async (request, response)=>{
  
  const appointmentsRepository = getCustomRepository(AppointmentsRepository)
  const appointments = await appointmentsRepository.find()

  return response.json(appointments)
})

appointmentsRoutes.post('/', async (request, response)=>{

  try{
    const {provider_id, date} = request.body

    const parsedDate = parseISO(date)

    const createAppointment = new CreateAppointmentService()

    const newAppointment = await createAppointment.execute({provider_id, date: parsedDate})

    return response.json(newAppointment)

  } catch(err){
    return response.status(400).json({error: err.message})
  }

})

export default appointmentsRoutes