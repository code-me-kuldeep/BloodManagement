import React from 'react'
import Table from "../HOME/Table";
import Cards from "../HOME/Cards";
import About from "../HOME/About"
import Hero from "../HOME/Hero";
import Navbar from '../HOME/Navbar';
import Contact from '../HOME/Contact';
// import DASHBOARD from '../DASHBOARD/DASHBOARD'



const HOME = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <About/>
        <Cards/>
        <Table/>
        <Contact/>
       
        {/* <DASHBOARD/> */}
        
    </>
 
  )
}

export default HOME
