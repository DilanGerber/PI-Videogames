import React from 'react'
import Search from '../search/Search'
import {  useNavigate } from 'react-router-dom';
import FilterSource from '../filterSource/FilterSource';
import FilterGenres from '../filterGenres/FilterGenres';
import Order from '../order/Order';
import Reset from '../reset/Reset';
import './Nav.css'

const Nav = () => {

  const navigate = useNavigate()

  return (
    <div className='containerNav'>
      <Search />
      <FilterSource />
      <FilterGenres />
      <Order />
      <Reset />
      <button className='btn' onClick={() => navigate('/create')}>Crear Juego</button>
    </div>
  )
}

export default Nav