"use client"

import React, { useState,useEffect, useRef } from 'react'
import bg from '../../public/1212.jpg'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import image from './ImageSlice'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {easeInOut, motion} from 'framer-motion'
import Typewriter from 'typewriter-effect'


const Background = () => {
  const linkActive = usePathname()

  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay : true,
    autoplaySpeed : 3000,
    arrows: false,
  };
  
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImage((currentImage + 1) % image.length)
  //   }, 3000)

  //   return () => clearInterval(interval)
  // }, [currentImage, image.length])
  


  return (
    <>
       {linkActive === "/detail" ? 
       ""  : 
       <div className='relative'>
        <Slider {...settings}>
          {image.map((img:any,i:any) => (
            <div key={i}>
            <img className="w-full h-[800px]" src={img} alt="" />
              <div className='absolute w-full h-[800px] top-0 bg-black opacity-50'></div>
              <div className='absolute w-full h-[800px] flex items-end top-0'>
                <div className='mx-44 text-6xl font-bold mb-28'>
                  <motion.h1 className='mb-3' initial={{y : 30, opacity : 0}} animate={{y : 0, opacity : 1}} transition={{delay : 0.4, duration : 0.8}}>Now Today,</motion.h1>
                  <Typewriter
                    options={{
                      strings : [
                        "What Do You Want To Play",
                        "What Do You Want To Look For",
                        "What Do You Want To Know",
                        "Enjoy The Website"
                      ],

                      autoStart : true,
                      loop : true
                    }}
                  />
                  <motion.div initial={{x : -100, opacity : 0}} animate={{x:0, opacity:1}} transition={{delay : 0.6, duration : 0.8}} className='text-xl font-thin my-4'>
                  <h3>In here,you can search for any games you want, so I built this website,</h3>
                  <h3>but note that this website is only for searching for games and to know the description of the game,</h3> 
                  <h3>not for downloading or playing the game. So enjoy this website.</h3>
               </motion.div>
              <motion.div initial={{x : -70, opacity : 0}} animate={{x:0, opacity:1}} transition={{delay : 0.8, duration : 0.8, ease : easeInOut}}  className='text-3xl cursor-pointer text-slate-800 hover:text-slate-200 bg-teal-500 duration-300 hover:bg-teal-700 px-4 py-2 rounded-2xl w-[150px]'>JOIN US</motion.div>
              </div>
            </div>
        </div>
          ))}
          
        </Slider>
        
      </div>}
    </>
  )
}

export default Background