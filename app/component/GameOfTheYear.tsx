"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import gamesOfTheYear from './GameOfTheYearData'
import Slider from 'react-slick'
import data from './DummyData'
import CardGOTY from './allCard/CardGOTY'

const GameOfTheYear = () => {
  const linkActive = usePathname()

    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      waitForAnimate: false
    }

  return (
    <>
      {linkActive === "/detail" ? "" : 
        <div className="slider-container">
          <CardGOTY />
        </div>
      }
    </>    
  )
}
export default GameOfTheYear;