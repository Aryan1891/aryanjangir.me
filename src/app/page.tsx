/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div 
    className="bg-[rgb(36,36,36)] text-white h-screen snap-y  snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Aryan's Portfolio</title>
      </Head>

      {/* Header */}
      <Header/>

      {/* Hero */}
      <section id="Hero" className=" snap-center mt-10">
        <Hero/>
      </section>

      
    </div>
  )
}
