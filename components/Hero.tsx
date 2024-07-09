'use client'
import React from 'react'
import { Cursor,useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import Link from 'next/link'
type Props = {}

export default function Hero({}: Props) {
    const[text,count]=useTypewriter({
        words:["Hi, The Name's Aryan Jangir",'Guy-who-loves-Coffee.tsx',"<ButLovesToCodeMore />"],
        loop:true,
        delaySpeed:2000,

    })
  return (
    <div className='h-screen flex flex-col py-10 space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <Image className='relative rounded-full h-32 w-32 mx-auto object-cover' src='/me.jpeg' height={200} width={200} alt="my image" 
            />

        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>software engineer</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10 z-10000'>
            <span className='mr-5'>{text}</span>
            <Cursor cursorColor='#F7AB0A' />
            
        </h1>
        <div className='pt-5'>
                
            <Link href="#about" passHref>
                <button className="heroButton">about</button>
            </Link>
            {/* <Link href="#experience" passHref>
                <button className="heroButton">experience</button>
            </Link> */}
            <Link href="#skills" passHref>
                <button className="heroButton">skills</button>
            </Link>
            <Link href="#projects" passHref>
                <button className="heroButton">projects</button>
            </Link>
            
        </div>
    </div>

</div>
  )
}