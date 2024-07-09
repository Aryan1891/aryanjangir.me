'use client'
import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function Projects({}: Props) {
  const proyectos = ["1", "2", "3", "4", "5"];
    return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='relative h-screen flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0' >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Proyectos</h3>
        
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20' >
          {proyectos.map((proyecto, i) => (
            <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen ' >
            <motion.img
              initial={{
                y: -300,
                opacity: 0
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once:true }}
            src="https://private-user-images.githubusercontent.com/67959015/317983098-f09a8421-67d3-45ce-b9bc-a791cdc2774b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjA1NjM0MTYsIm5iZiI6MTcyMDU2MzExNiwicGF0aCI6Ii82Nzk1OTAxNS8zMTc5ODMwOTgtZjA5YTg0MjEtNjdkMy00NWNlLWI5YmMtYTc5MWNkYzI3NzRiLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzA5VDIyMTE1NlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTUyMzQ5NDc0NGI2MDFhMjA1YmY0ODI3MWE5Nzk1YmMzYzJlMmM4MjM5NzUwNjBlYjNmOWNmYmE1MGE0NzA1NmYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.YxZsCkou0gRC0L-PMb7Wl71FLZYFKo9M0ef1uZVadKU" 
            alt="none" 
            />
              <div className='space-y-10 px-0 md:px-10 max-w-6xl' >
                <h4 className='text-4xl font-semibold text-center' >
                  <span>
                    {i + 1} :
                  </span>{" "}
                  Netflix Clone
                </h4>

                <p className='text-lg text-center md:text-left' >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, veniam tempore eos tenetur, aliquam, totam architecto dolores facere accusamus neque ullam eaque doloremque voluptatum facilis voluptates error alias corporis harum!
                </p>
              </div>
            </div>
          ))}

        </div>

        <div className="w-full absolute top-[30%] bg-[#80D133]/10 left-0 h-[500px] -skew-y-12" />

    </motion.div>
  )
}

export default Projects