import React from 'react'
import {FiMail, FiLock, FiLogIn} from 'react-icons/fi'

import {Container, Content, Background} from './styles'

import logoImg from '../../assets/logo.svg'

const SignIn:React.FC = ()=>(
    <Container>
      <Content>
        <img src={logoImg} alt="Gobarber Logo"/>

        <form >
          <h1>Faça seu logon</h1>
          
          <div>
            <FiMail/>
            <input placeholder='E-mail'/>
          </div>

          <div>
            <FiLock/>
            <input type='password' placeholder='Senha'/>
          </div>

          <button type='submit'>Entrar</button>

          <a href="forgot">Esqueci minha senha</a>
        </form>
        
        <a href="#">
          <FiLogIn/>
          Criar conta
        </a>
      </Content>

      <Background/>
    </Container>
  )


export default SignIn