"use client"

import React from 'react'
import CardGames from '@/app/component/allCard/CardGames'
import CardGamesGenresAndPlat from '@/app/component/allCard/CardGamesGenresAndPlat'
import { useGame } from '@/app/contexts/gameContext'
import LoadingIconBig from '@/app/component/LoadingIconBig'

const Page = () => {
  const {isLoading} = useGame()

  return (
    <div className='w-[85%]'>
      <h1 className='text-6xl font-bold pb-5 px-4'>Racing</h1>
      {/* Bagian kartu */}
      <div className='flex flex-wrap'>
      {isLoading ? <LoadingIconBig /> :<CardGamesGenresAndPlat />}
      </div>
   </div>
  )
}

export default Page