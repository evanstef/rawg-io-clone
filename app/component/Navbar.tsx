'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import steam from '../../asset/icons8-steam-144.png'
import epic from '../../asset/icons8-epic-games-150.png'
import battle from '../../asset/icons8-battle-net-144.png'
import ubisoft from '../../asset/icons8-uplay-app-144.png'
import { useGame } from '../contexts/gameContext'
import { usePathname } from 'next/navigation'
import { searchGames } from '../api/api'


const Navbar = () => {

    const linkActive = usePathname()
 
    const {count, searchGamesAll}:any = useGame()
    const [searchValue, setSearchValue] = useState("")

    function handleSearch (e : any) {
        e.preventDefault()
        searchGamesAll(searchValue)
        setSearchValue("")
    } 
    
  return (
    <div className={`flex ${linkActive === "/detail" ? "" : "absolute"} z-10 w-full justify-evenly items-center pt-10`}>
        <div className='bg-slate-200 text-slate-800 font-bold px-4 rounded-xl border-[5px] border-slate-800 text-4xl py-2 hidden md:block'>RAWG</div>
        <div>
            <form onSubmit={handleSearch} className='relative' action="">
                <input className='w-[250px] md:w-[650px] focus:text-slate-950 opacity-75 bg-slate-300 px-12 py-2 rounded-full focus:outline-none text-sm md:text-[16px] focus:bg-slate-200 focus:opacity-100' type="text" placeholder={`Search ${count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} games`} value={searchValue} onChange={(e) => setSearchValue(e.target.value)}>
                </input>
                <svg className='fill-current text-slate-950 absolute left-2 top-1' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                </svg>
            </form>
        </div>
        <div className='flex justify-between w-[30%] items-center'>
            <h1 className='ml-16 text-xl font-bold text-slate-200 stroke-black hidden md:block'>See Platform</h1>
            <div className='flex gap-3 md:gap-6'>
                <a href='https://store.steampowered.com/' target='_blank'><Image  className=" md:w-14 md:h-14 shadow-2xl" src={steam} alt='' /></a>
                <a href='https://store.epicgames.com/en-US/' target='_blank'><Image className=' md:w-14 md:h-14 shadow-2xl' src={epic} alt='' /></a>
                <a href='https://us.shop.battle.net/en-us' target='_blank'><Image className='md:w-14 md:h-14 shadow-2xl' src={battle} alt='' /></a>
                <a href='https://www.ubisoft.com/en-us/' target='_blank'><Image className='md:w-14 md:h-14 shadow-2xl' src={ubisoft} alt='' /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar