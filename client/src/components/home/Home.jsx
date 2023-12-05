import React, { useEffect } from 'react'
import Nav from '../navbar/Nav'
import Cards from '../cards/Cards'
import { useDispatch } from 'react-redux'
import { allVideogames } from '../../redux/actions'

const Home = () => {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(allVideogames())
  }, [])

  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <Cards />
      </div>
    </div>
  )
}

export default Home