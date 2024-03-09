"use client"

import React from 'react'
import bg from '../../public/1212.jpg'
import Image from 'next/image'
import Link from 'next/link'

const Dummy = () => {
  return (
        <div className='w-[380px] h-auto relative bg-slate-700 rounded-xl'>
        <Image className='w-full h-48' src={bg} alt='' />
        <div className='mx-3 text-slate-300 '>
            <div className='flex gap-3'>
            <p>ps</p>
            <p>xbox</p>
            <p>pc</p>
            </div>
            <h1 className='text-2xl line-clamp-2 mb-1'>Marvel Spiderman : Miles Morales</h1>
            <div className='text-xs py-1 hidden'>
                <div className='flex justify-between border-b-[1px] border-slate-300 mb-3'>
                    <p>Release Date :</p>
                    <p>10-10-2022</p>
                </div>
                <div className='flex justify-between border-b-[1px] border-slate-300 mb-3'>
                    <p>Genres :</p>
                    <p>Action,Adventure</p>
                </div>
                <div className='flex justify-between border-b-[1px] border-slate-300 mb-3'>
                    <p>Chart :</p>
                    <p>#13 Top 2020</p>
                </div>
                <Link className='text-[18px] border-b border-slate-300 hover:text-blue-500' href="/detail">Show More</Link>
                <div className='mb-3'></div>
            </div>
        </div>
    </div>
  )
}

export default Dummy