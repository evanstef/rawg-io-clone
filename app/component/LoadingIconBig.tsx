import React from 'react'
import {motion}  from 'framer-motion'

const LoadingIconBig = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
       <motion.div
    initial={{ rotate: 0 }}
    animate={{ rotate: 360 }}
    transition={{ duration: 1, repeat: Infinity }}
    className="w-20 h-20 border-t-8 border-white border-solid rounded-full animate-spin"
        /> 
    </div>

  )
}

export default LoadingIconBig