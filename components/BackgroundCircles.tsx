import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <div className="mt-100">
    <motion.div 
    initial={{
        opacity:0,
      }} 
      animate={{
        scale:[1,2,2,3,1],
        opacity:1,
        borderRadius:["20%","20%","50%","80%","20%"],
  
      }}
      transition={{
        duration:2.5,
        ease:"easeInOut",
        loop:Infinity,
      
      }}
      className='relative flex justify-center items-center '>
        <div className=' absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
        <div className=' border border-[#333333] rounded-full h-[250px] w-[250px] absolute  mt-52'/>
        <div className=' border border-[#333333] rounded-full h-[400px] w-[400px] absolute mt-52'/>
        <div className=' border border-[#f7ab0a] rounded-full opacity-20 h-[500px] w-[500px] absolute mt-52 animate-pulse'/>
        <div className=' border border-[#333333] rounded-full h-[600px] w-[600px] absolute mt-52'/>

    </motion.div>
    </div>
    
  )
}