import {getRepository} from 'typeorm'
import {compare} from 'bcryptjs'
import {sign} from 'jsonwebtoken'

import User from '../models/User'


interface RequestDOT{
  email:string,
  password:string
}

interface ResponseDTO{
 user:User,
 token:string
}

class AuthenticateUserService {
  public async execute({email, password}: RequestDOT): Promise<ResponseDTO>{

    const usersRepository = getRepository(User)

    const user = await usersRepository.findOne({ where: {email} })

    if(!user){
      throw new Error('Incorrect email/password combination')
    } 

    const passwordMatched = await compare(password, user.password)

    if(!passwordMatched){
      throw new Error('Incorrect email/password combination')
    }

    const token = sign({}, 'af5d38955cd8b13aeb2dba69466bf732', {
      subject: user.id,
      expiresIn: '1d',
    })

    return {user, token}

  }
}

export default AuthenticateUserService