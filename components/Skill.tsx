'use client'
import React from "react";
import { motion } from "framer-motion";

type Props = {

};

function Skill() {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: 100,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        viewport={{
          once: true,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        className="rounded-full border border-gray-500 object-cover h-20 w-20 md:w-24 md:h-24 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
        src="https://www.strivemindz.com/images/JavaScript-developersa.png"

      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-24 md:h-24 xl:w-24 xl:h-24 rounded-full z-0 text-black" >
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold5">99%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;