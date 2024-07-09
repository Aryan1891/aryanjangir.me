/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";

module.exports = function Home() {
  return (
    <div 
    className="bg-[rgb(36,36,36)] text-white h-screen snap-y  snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Aryan's Portfolio</title>
      </Head>

      {/* Header */}
      <Header/>

      {/* Hero */}
      <section id="Hero" className=" snap-start">
        <Hero/>
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About/>
      </section>

      {/* skills */}
      <section id="skills" className="snap-start">
        <Skills/>
      </section>
     {/* projects */}
     <section id="projects" className="snap-start">
        <Projects/>
      </section>
      {/* contact */}
     <section id="contact" className="snap-end">
        <Contact/>
      </section> 
       
    </div>
  )
}
