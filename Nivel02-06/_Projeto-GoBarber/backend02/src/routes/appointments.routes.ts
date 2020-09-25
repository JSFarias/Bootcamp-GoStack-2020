import {Router} from 'express'
import {parseISO} from 'date-fns'
import {getCustomRepository} from 'typeorm'

import AppointmentsRepository from '../repositories/AppointmentsRepository'
import CreateAppointmentService from '../services/CreateAppointmentService'
import ensureAuthenticated from '../middleware/ensureAuthenticated'


const appointmentsRoutes = Router()

appointmentsRoutes.use(ensureAuthenticated)

appointmentsRoutes.get('/', async (request, response)=>{

  console.log(request.user)
  
  const appointmentsRepository = getCustomRepository(AppointmentsRepository)
  const appointments = await appointmentsRepository.find()

  return response.json(appointments)
})

appointmentsRoutes.post('/', async (request, response)=>{

  const {provider_id, date} = request.body

  const parsedDate = parseISO(date)

  const createAppointment = new CreateAppointmentService()

  const newAppointment = await createAppointment.execute({provider_id, date: parsedDate})

  return response.json(newAppointment) 

})

export default appointmentsRoutes