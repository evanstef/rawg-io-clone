"use client"

import React from 'react'
import CardTopGames from '../component/allCard/CardTopGames'
import LoadingIconBig from '../component/LoadingIconBig'
import { useGame } from '../contexts/gameContext'


const Page = () => {
  const {loading} = useGame()

  return (
    <div className='w-[65%] lg:w-[85%]'>
      <h1 className='lg:text-6xl font-bold lg:pb-5 px-4'>All Time Top 50</h1>
      
      {/* Bagian kartu */}
      <div className='flex flex-wrap'>
        {loading ? <LoadingIconBig /> : <CardTopGames />}
      </div>
   </div>
  )
}

export default Page