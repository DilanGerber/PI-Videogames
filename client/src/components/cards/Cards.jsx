import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import Card from '../card/Card'
import './Cards.css'
import Pagination from '../pagination/Pagination'

const Cards = () => {

  const allVideogames = useSelector(state => state.allVideogames)

  const [pagina, setPagina] = useState(1)
  const [porPagina, setPorPagina] = useState(15)

  const maximo = allVideogames.length / porPagina

  return (
    <div >
      <div className='cardsContainer'>
        {allVideogames.slice(
              (pagina - 1) * porPagina,
              (pagina - 1) * porPagina + porPagina
            ).map(game => <Card info={game}/>)}
      </div>
      <div className='paginationContainer'>
        <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo} />
      </div>
    </div>
  )
}

export default Cards