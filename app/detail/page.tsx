"use client"

import React from 'react'
import DetailCard from '../component/allCard/DetailCard'
import { useGame } from '../contexts/gameContext'
import LoadingIconBig from '../component/LoadingIconBig'

const Page = () => {
  const {isLoading} = useGame()

  return(
    <>
    {isLoading ? <LoadingIconBig /> : <DetailCard />}
    </>  
  )
   
}

export default Page