import React from 'react'
import Table from "../components/Table";
import Cards from "../components/Cards";
import About from "../components/About"
import Hero from "../components/Hero"
import Navbar from './Navbar';
import Contact from './Contact'


const HOME = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <About/>
        <Cards/>
        <Table/>
        <Contact/>
    </>
 
  )
}

export default HOME
