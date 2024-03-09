"use client"

import React from 'react'
import CardGames from '../component/allCard/CardGames'
import CardBestGames from '../component/allCard/CardBestGames'
import { useGame } from '../contexts/gameContext'
import LoadingIconBig from '../component/LoadingIconBig'



const Page = () => {
  const{loading} = useGame()


  return (
    <div className='w-[85%]'>
      <h1 className='text-6xl font-bold pb-5 px-4'>Best Of The Year</h1>
      {/* Bagian kartu */}
      <div className='flex flex-wrap'>
        {loading ? <LoadingIconBig/> : <CardBestGames />}
      </div>
   </div>
  )
}

export default Page