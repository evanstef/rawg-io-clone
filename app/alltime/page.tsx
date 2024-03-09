"use client"

import React from 'react'
import CardTopGames from '../component/allCard/CardTopGames'
import LoadingIconBig from '../component/LoadingIconBig'
import { useGame } from '../contexts/gameContext'


const page = () => {
  const {loading} = useGame()

  return (
    <div className='w-[85%]'>
      <h1 className='text-6xl font-bold pb-5 px-4'>All Time Top 50</h1>
      
      {/* Bagian kartu */}
      <div className='flex flex-wrap'>
        {loading ? <LoadingIconBig /> : <CardTopGames />}
      </div>
   </div>
  )
}

export default page