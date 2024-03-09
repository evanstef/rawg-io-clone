"use client"

import Image from 'next/image';
import bg from '../public/1212.jpg'
import CardGames from './component/allCard/CardGames';
import Dummy from './component/Dummy';
import { useEffect, useState } from 'react';
import { gameList } from './api/api';
import { Result } from 'postcss';
import { useGame } from './contexts/gameContext';
import LoadingIcon from './component/LoadingIcon';
import LoadingIconBig from './component/LoadingIconBig';
import { useRouter } from 'next/router';

export default function Home() {

  const {loading} = useGame()

  return (
   <div className='w-[85%]'>
      <h1 className='text-6xl font-bold pb-5 px-4'>All Games</h1>
      {/* Bagian kartu */}
      <div className='flex flex-wrap'>
        {loading ? <LoadingIconBig /> : <CardGames />}
      </div>
   </div>
  );
}
