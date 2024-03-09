"use client"

import React, { useRef } from 'react'
import gamesOfTheYear from '../GameOfTheYearData'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {motion, useInView} from 'framer-motion'



const CardGOTY = () => {

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true,
        autoplaySpeed : 5000,
        arrows: false
      };

      const halaman:any = useRef()
      const view = useInView(halaman,{margin:"-350px", once: true})


  return (
    <Slider {...settings}>
        {gamesOfTheYear.map((item:any,i:any) => (
            <div key={i} className='relative w-full'>
                <img className='w-full relative h-[800px] bg-fixed bg-center bg-cover' src={item.background} alt="" />
                <div className='absolute w-full left-0 bottom-0 bg-black opacity-80 h-[800px]'></div>

            <div className='absolute w-full z-10 bottom-0 top-0 mt-9'>
            <h1 className='text-6xl pb-11 font-bold text-center'>Game Of The Year</h1>

            <h3 className='text-5xl font-bold text-center mb-5'>{item.year}</h3>
            <div  className='flex items-center gap-14 mx-44'>

            <div ref={halaman}>
              <motion.div initial={{x:-200, opacity:0}} animate={view ? {opacity:1,x:0,transition:{duration : 1.5}} : {}} className='relative'>
                <img className='w-full h-[530px] rounded-xl' src={item.background_image} alt="" />
                <div className='bg-slate-400 opacity-0 duration-500 ease-in-out hover:opacity-20 left-0 bottom-0 absolute w-full rounded-xl h-[530px]'></div>
              </motion.div>
            </div>
               
            <div ref={halaman} className='w-[40%]'>
                <motion.div initial={{x:200, opacity:0}} animate={view ? {opacity:1,x:0,transition:{duration : 1.5}} : {}}>
                    <h1 className='text-5xl font-bold mb-6'>{item.name_original}</h1>
                    <p className='text-[13px] mb-4'>{item.description}</p>
                    <p className='text-xl'>MetaCritic : <span className='bg-green-500 px-2 py-[5px] rounded-full text-black font-bold'>{item.metacritic}</span></p>
                </motion.div>
            </div>
        </div>
        </div>
    </div>
       ))}
        
    </Slider> 
  )
}

export default CardGOTY