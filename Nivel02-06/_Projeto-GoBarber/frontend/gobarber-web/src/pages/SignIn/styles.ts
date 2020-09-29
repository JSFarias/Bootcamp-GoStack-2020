import styled from 'styled-components'
import {shade} from 'polished'

import signInBackgroundImg from '../../assets/sign-in-background.png'

export const Container = styled.div`
  height:100vh;

  display:flex;
  align-items:stretch;
`;
export const Content = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;   
  align-items:center;   

  width:100%;
  max-width:700px;

  form{
    margin: 80px 0;
    max-width:340px;

    text-align:center;

    h1{
      margin-bottom:24px;
    }    

    div{
        
      height:50px;

      border-radius: 5px;

      background:#232129;    

      display:flex;      

      input{
        background:transparent;
        border:0px;

        color:#F4EDE8;

        flex:1;

        &::placeholder{
          color:#666360;
        }
      }  

      & + div{
        margin-top:10px;  
      }
    }

    button{
      width:300px;
      height:50px;
      margin-top:20px;

      background:#FF9000;
      border-radius:5px;      
      border:0px;
      font-weight:bold;

      transition: background-color 0.2s;

      &:hover{
        background: ${shade(0.2, '#FF9000')}
      }
    }

    a{
      display:block;
      margin-top:50px;    
      color: #F4EDE8;

      &:hover{
        color: ${shade(0.2, '#F4EDE8')}
      }
    }
  }  

  a{
    text-decoration:none;    
  }

  svg{
    color:#666360;
    margin: 0 10px;
    size:30px;
    height:inherit;
  }

  > a{
    display:flex;
    color:#FF9000;

    svg{
      color:#FF9000;
    }

    &:hover{
      color: ${shade(0.2, '#FF9000')}
    }
  } 

`;
export const Background = styled.div`
  flex:1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size:cover;
`;