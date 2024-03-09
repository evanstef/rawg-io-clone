"use client"

import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import ps from '../../../asset/icons8-playstation-50.png'
import xbox from '../../../asset/icons8-xbox-50.png'
import windows from '../../../asset/icons8-windows-50.png'
import nintendo from '../../../asset/icons8-nintendo-switch-48.png'
import android from '../../../asset/icons8-android-50.png'
import linux from '../../../asset/icons8-linux-52.png'
import apple from '../../../asset/icons8-apple-50.png'
import { useGame } from '../../contexts/gameContext'

const CardGamesGenresAndPlat = () => {
    const {gamesGenresAndPlat, handleGetDetailGames} = useGame()
    const [values, setValues] = useState(-1)


  const handleHover = (index : number) => {
    setValues(index)
  };

  const dataBaru = gamesGenresAndPlat.sort((a,b) => b.ratings_count - a.ratings_count)

    
    return dataBaru.map((item:any, i:any) => {
        return (
          <div key={i} className='p-[7px]'>
          <div  className={`card-games w-[380px] h-[265px] pb-4 bg-slate-800 duration-300 rounded-xl ease-in-out ${values === i ? "scale-[1.03] rounded-b-none" : ""}`}onMouseEnter={() => handleHover(i)} onMouseLeave={() => handleHover(-1)}>
          <img className='w-full h-48 mb-1 rounded-t-xl' src={item.background_image} alt='' />
          <div className='mx-3 text-slate-300 '>
          <div className='flex items-center'>
            <div className='flex gap-3'>
              {Array.isArray(item.parent_platforms) && item.parent_platforms.slice(0,4).map((list:any) => (
               <Image
               className='invert w-[16px] h-[16px]'
               key={list.platform.id}
               src={list.platform.slug ? (list.platform.slug === "playstation" ? ps : list.platform.slug === "pc" ? windows : list.platform.slug === "android" ? android : list.platform.slug === "linux" ? linux : list.platform.slug === "xbox" ? xbox : list.platform.slug === "nintendo" ? nintendo : list.platform.slug === "mac" ? apple : "") : ""}
               alt=''
                />
              ))}
            </div>
          </div>
          <h1 className='text-2xl line-clamp-1'>{item.name}</h1>
          </div>  
          </div>
          <div className={`detail absolute w-[380px] text-slate-300 bg-slate-800  text-xs px-3 py-1 rounded-b-lg ${values === i ? 'opacity-100 scale-[1.03] z-10' : "-z-10 hidden"}`} onMouseEnter={() => handleHover(i)} onMouseLeave={() => handleHover(-1)}>
              <div className='flex justify-between border-b-[1px] border-slate-300 mb-3'>
              <p>Release Date :</p>
              <p>{item.released}</p>
              </div>
              <div className='flex justify-between border-b-[1px] border-slate-300 mb-3'>
              <p>Genres :</p>
              {Array.isArray(item.genres) && (
                <p>{item.genres.slice(0,4).map((list: any) => list.name).join(',')}</p>
              )}
              </div>
              <div className='flex justify-between border-b-[1px] border-slate-300 mb-3'>
              <p>Reviews :</p>
              <p>{item.reviews_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
              </div>
              <Link onClick={() => handleGetDetailGames(item.id)} className='text-[18px] border-b border-slate-300 hover:text-blue-500' href="/detail">Show More</Link>
              <div className='mb-3'></div>
          </div> 
        </div> 
      )
      })   
}

export default CardGamesGenresAndPlat