import React from 'react'
import {  useNavigate } from 'react-router-dom';
import './ErrorPage.css'

const ErrorPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className='contBtnError'>
        <button className='btnn' onClick={() => navigate('/home')}>Volver a Inicio</button>
      </div>
      <div className='contError'>
        <img className='error' src={require('../../imagenes/PAGINA NO ENCONTRADA.png')} alt="" />
      </div>
    </div>
  )
}

export default ErrorPage