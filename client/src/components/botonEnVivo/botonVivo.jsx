import React from 'react'
import { useDispatch } from "react-redux"
import { updateFilter } from "../../redux/actions";

const BotonVivo = () => {
    const dispatch = useDispatch()
    const handlerRating3 = () => {
        dispatch(updateFilter('boton3', 3));
    }   
  return (
      <div>
        {console.log()}
        <button className='btn' onClick={handlerRating3}>Rating por 3</button>
    </div>
  )
}

export default BotonVivo