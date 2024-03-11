"use client"

import React from 'react'
import CardGames from '@/app/component/allCard/CardGames'
import CardGamesGenresAndPlat from '@/app/component/allCard/CardGamesGenresAndPlat'
import { useGame } from '@/app/contexts/gameContext'
import LoadingIconBig from '@/app/component/LoadingIconBig'

const Page = () => {
  const {isLoading} = useGame()

  return (
    <div className='w-[65%] lg:w-[85%]'>
      <h1 className='lg:text-6xl font-bold lg:pb-5 px-4'>Simulation</h1>
      {/* Bagian kartu */}
      <div className='flex flex-wrap'>
      {isLoading ? <LoadingIconBig /> :<CardGamesGenresAndPlat />}
      </div>
   </div>
  )
}

export default Page