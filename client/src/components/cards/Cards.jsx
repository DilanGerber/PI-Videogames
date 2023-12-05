import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../card/Card'
import './Cards.css'

const Cards = () => {

  const allVideogames = useSelector(state => state.allVideogames)
  // console.log(allVideogames)
  return (
    <div className='cardsContainer'>
      {allVideogames.map(game => <Card info={game}/>)}
    </div>
  )
}

export default Cards