import React from 'react'
import {  useNavigate } from 'react-router-dom';

const Landing = () => {

  const navigate = useNavigate()

  return (
      <div>
          <button onClick={() => navigate('/home')}>Inicio</button>
          
          <img src="https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg" alt="" />
          <img src="https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg" alt="" />
          <img src="https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg" alt="" />
          <img src="https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg" alt="" />
          <img src="https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg" alt="" />
          
      </div>
  )
}

export default Landing