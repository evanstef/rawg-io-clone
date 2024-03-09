"use client"

import React from 'react'
import DetailCard from '../component/allCard/DetailCard'
import { useGame } from '../contexts/gameContext'
import LoadingIconBig from '../component/LoadingIconBig'

const page = () => {
  const {isLoading} = useGame()

  return(
    <>
    {isLoading ? <LoadingIconBig /> : <DetailCard />}
    </>  
  )
   
}

export default page