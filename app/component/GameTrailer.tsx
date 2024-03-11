import React from 'react'
import CardTrailer from './allCard/CardTrailer'

const GameTrailer = () => {
  return (
    <div className='w-full mt-14 lg:mt-32'>
        <h1 className='text-lg lg:text-6xl font-bold text-center mb-5 lg:mb-10'>Game Trailer</h1>
        <div className='mx-5 lg:mx-44'>
           <CardTrailer /> 
        </div>
    </div>
  )
}

export default GameTrailer