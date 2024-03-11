"use client"

import React, { useRef, useState, useEffect } from 'react'
import play from '../../../asset/icons8-circled-play-100.png'
import Image from 'next/image'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import YouTube from 'react-youtube'
import { useInView, motion } from 'framer-motion'

interface Trailer {
  id: number
  name: string
  trailer: string
  image: string
}

const trailers: Trailer[] = [
  {
    id: 1,
    name: 'Senua\'s Saga: Hellblade II',
    trailer: 'https://www.youtube.com/watch?v=3VYGOkMnGCE',
    image: 'https://media.rawg.io/media/games/b5c/b5ced2e44396160e62ff8d70e3adda71.jpg',
  },
  {
    id: 2,
    name: 'Grand Theft Auto VI',
    trailer: 'https://www.youtube.com/watch?v=QdBZY2fkU-0',
    image: 'https://media.rawg.io/media/games/734/7342a1cd82c8997ec620084ae4c2e7e4.jpg',
  },
  {
    id: 3,
    name: 'God of War: Ragnarök',
    trailer: 'https://www.youtube.com/watch?v=EE-4GvjKcfs',
    image: 'https://media.rawg.io/media/games/1c3/1c305096502c475c00276c827f0fd697.jpg',
  },

  {
    id: 4,
    name: 'The Last Of Us Part 1',
    trailer: 'https://www.youtube.com/watch?v=R2Ebc_OFeug',
    image: 'https://media.rawg.io/media/games/71d/71df9e759b2246f9769126c98ac997fc.jpg',
  },

  {
    id: 5,
    name: 'Marvel\'s Spider-Man 2',
    trailer: 'https://www.youtube.com/watch?v=9fVYKsEmuRo',
    image: 'https://media.rawg.io/media/games/7ae/7ae5a14cdb4ab222a134c15f4629e430.jpg',
  },

  {
    id: 6,
    name: 'Black Myth: Wu kong',
    trailer: 'https://www.youtube.com/watch?v=Cr5rQ1NZ0Tw',
    image: 'https://media.rawg.io/media/games/779/77988e89f7862afeede524420aa251b0.jpg',
  }
 
]

const CardTrailer = () => {
  const [showModal, setShowModal] = useState(false)
  const [currentTrailer, setCurrentTrailer] = useState<string | undefined>(undefined)
  const page: any = useRef()
  const view = useInView(page,{margin: "-300px"})


  const handleClick = (trailer: string) => {
    setCurrentTrailer(trailer)
    setShowModal(true)
  }
  
  const handleClose = () => {
    setShowModal(false)
  }

  const opst = {
    width :"100%",
    height : "400",
    playerVars: {
      controls: 1,
      rel: 0,
    }
  }

  return (
    <div ref={page} className='flex flex-wrap justify-center lg:justify-between mb-14'>
      {trailers.map((item, index) => (
        <motion.div initial={{y:200, opacity:0}} animate={view ? {y:0, opacity:1, transition:{delay : 0.4 * index, duration : 0.5}} : {}} key={index}>
          <div className='relative w-[250px] h-[150px] lg:w-[400px] lg:h-56 mb-1 lg:mb-2'>
            <img className='w-full h-full lg:h-56 lg:w-[400px]' src={item.image} alt={item.name} />
            <div className='flex w-full h-full items-center justify-center absolute top-0 left-0'>
              <Image src={play} alt='Play' className='absolute w-[50px] lg:w-[70px] top-13 lg:top-20' />
            </div>
            <div className='w-full h-full lg:w-[400px] lg:h-56 duration-500 ease absolute bottom-0 bg-slate-200 opacity-0 hover:opacity-30'></div>
          </div>
          <div onClick={() => handleClick(item.trailer)} className='underline duration-300 hover:text-blue-600 cursor-pointer text-xs lg:text-[16px] mb-5 lg:mb-10'>{item.name}</div>
        </motion.div>
      ))}
       <Modal isOpen={showModal} className='fixed inset-0' toggle={handleClose}>
        <div className='flex items-center justify-center min-h-screen pt-4 pb-20 text-[0px]'>
        <div className='fixed inset-0 bg-black opacity-40 lg:opacity-90' aria-hidden='true' onClick={handleClose}></div>
        <span className='inline-block h-screen align-middle' aria-hidden='true' onClick={handleClose}></span>
        <div className='inline-block align-middle rounded-lg overflow-hidden shadow-xl transform transition-all'>
      <ModalHeader toggle={handleClose}>{currentTrailer && currentTrailer.split('v=')[1]}</ModalHeader>
      <ModalBody>
        <div className='w-[380px] lg:w-[800px]'>
          <YouTube videoId={currentTrailer && currentTrailer.split('v=')[1]} opts={opst} />
        </div>
            
      </ModalBody>
        </div>
      </div>
      </Modal>
    </div>
  )
}

export default CardTrailer