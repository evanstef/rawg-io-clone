"use client"

import React from 'react'
import { useGame } from '../contexts/gameContext'
import { usePathname } from 'next/navigation'
import Link from 'next/link'


const Genres = () => {

const {genres,handleGetIdGenres} = useGame()
const linkActive = usePathname()

const newGenres = genres.slice(0,15)

  return (
 <div className='mb-4'> 
    <h1 className='font-bold'>Genre</h1> 
      <ul className='text-[16px]'> 
      {newGenres.map((genre) => 
      ( 
      <li key={genre.id}> 
        <Link onClick={() => handleGetIdGenres(genre.id)} className={`flex gap-2 items-center hover:text-black ${ linkActive === `/genres/${genre.slug}` ? 'text-black' : '' }`} href={`/genres/${genre.slug}`} > 
          <img className='rounded-[4px] w-11 h-7 mb-2' src={genre.image_background} /> 
          <p className={linkActive === `/genre/${genre.slug}` ? 'text-black font-bold' : ''}>{genre.name}</p> 
        </Link> 
      </li> 
      ))} 
      </ul> 
  </div>
  )
}

export default Genres