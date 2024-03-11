"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import tropi from '../../asset/icons8-trophy-60.png'
import stats from '../../asset/icons8-combo-chart-50.png'
import crown from '../../asset/icons8-crown-50.png'
import pc from '../../asset/icons8-monitor-30.png'
import nintendo from '../../asset/icons8-nintendo-switch-48.png'
import android from '../../asset/icons8-android-50.png'
import apple from '../../asset/icons8-apple-50.png'
import action from '../../asset/icons8-action-50.png'
import strategy from '../../asset/icons8-startegy-32.png'
import puzzle from '../../asset/icons8-puzzle-30.png'
import adventure from '../../asset/icons8-adventure-50.png'
import shooter from '../../asset/icons8-sniper-rifle-50.png'
import racing from '../../asset/icons8-racing-50.png'
import sport from '../../asset/icons8-run-50.png'
import rpg from '../../asset/icons8-sword-50.png'
import { usePathname } from 'next/navigation'
import { useGame } from '../contexts/gameContext'
import Genres from './Genres'
import LoadingIcon from './LoadingIcon'

const Sidebar = () => {

  const {loading} = useGame()
  const linkActive = usePathname()

  function getIdGenre (e : number) {
    console.log(e);
  }


  return (
    <div className='sticky top-0 lg:w-[25%] w-[35%] lg:text-2xl'>
      <div className='mb-1 lg:mb-4 font-bold'>
        <Link className={linkActive === "/" ? "text-black font-bold" : ""} href='/'>Home</Link>
      </div>
      <div className='mb-1 lg:mb-4'>
        <h1 className='font-bold'>Top</h1>
          <ul className='text-[7px] lg:text-[16px]'>
            <li>
              <Link className='flex gap-1 items-center hover:text-black' href="/best">
              <Image className='w-3 h-3 lg:w-[25px] lg:h-[25px]' src={tropi} alt='' />
              <p className={linkActive === "/best" ? "font-bold text-black" : ""}>Best Of The Year</p>
              </Link>
            </li>
            <li>
              <Link className='flex items-center gap-1 hover:text-black' href="/alltime">
                <Image className='w-3 h-3 lg:w-6 lg:h-6' src={crown} alt='' />
                <p className={linkActive === "/alltime" ? "font-bold text-black" : ""}>All Time Top 50</p>
              </Link>
              </li>
          </ul>
      </div>

      {/* Genres */}

      {loading ? <LoadingIcon /> : <Genres />}
     
    </div>
  )
}

export default Sidebar