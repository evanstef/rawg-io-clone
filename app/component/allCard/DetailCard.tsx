"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import { useGame } from '@/app/contexts/gameContext'
import {motion}  from 'framer-motion'

const DetailCard = () => {

  const { details } = useGame()
  const linkActive = usePathname()

  
   
    return (    
    <motion.div initial={{opacity:0, y:200}} animate={{opacity:1,y:0,transition :{delay : 0.8, duration : 0.5}}} className="w-[65%] lg:w-[85%]">
        <div className='flex flex-col lg:flex-row gap-4 lg:gap-10 mb-5 lg:mb-12 items-center'>
            <img className='w-[300px] lg:w-[500px] lg:h-[300px]' src={details.background_image} alt='' />
            <div className='desc w-full'>
              <h1 className='lg:text-6xl font-bold pb-1 lg:pb-3'>{details.name_original}</h1>
              <p className='text-[7px] lg:text-[15px]'>{details.description_raw}</p>
            </div>
        </div>

      
      <div className='flex w-full justify-between text-xs lg:justify-evenly lg:text-xl mb-6'>
        <div className='left-side'>
          <div className='mb-6'>
            <p className='text-slate-800'>Platform</p>
            {Array.isArray(details.parent_platforms) && (
               <p className='text-[7.5px] lg:text-[16px]'>{details.parent_platforms.map((list: any) => list.platform.name).join(",")}</p>
             )} 
          </div>
          <div className='mb-6'>
            <p className='text-slate-800'>Release Date</p>
            <p className='text-[7.5px] lg:text-[16px]'>{details.released}</p>
          </div>
          <div>
            <p className='text-slate-800'>Rating</p>
            <p className='text-[7.5px] lg:text-[16px]'>{details.rating} / 5</p>
          </div>
        </div>
        <div className='right-side'>

          <div className='mb-6'>
            <p className='text-slate-800'>Genres</p>
            {Array.isArray(details.genres) && (
               <p className='text-[7.5px] lg:text-[16px]'>{details.genres.map((list: any) => list.name).join(",")}</p>
             )}
          </div>

          <div className='mb-6'>
            <p className='text-slate-800'>Publisher</p>
            {Array.isArray(details.publishers) && (
               <p className='text-[7.5px] lg:text-[16px]'>{details.publishers.map((list: any) => list.name).join(",")}</p>
             )}
          </div>

          <div>
            <p className='text-slate-800'>Developers</p>
            {Array.isArray(details.developers) && (
               <p className='text-[7.5px] lg:text-[16px]'>{details.developers.map((list: any) => list.name).join(",")}</p>
             )}
          </div>
        </div>
      </div>

      <div className='flex w-full justify-center'>
          <a href={details.website === "" ? "/" : details.website} target='_blank' className='hover:text-blue-500 lg:text-4xl underline'>
                {details.name_original}
          </a>
      </div>
      
      </motion.div>     
    )
  
}

export default DetailCard