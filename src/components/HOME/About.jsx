import React from 'react'
import simg from '../assets/Service.png'
const About = () => {
  return (
    <div className='w-full h-full bg-[#131F42] flex flex-col justify-between my-16' id="About">
        <div className='w-full h-[80px] bg-[#F9D949]'>
            <h1 className='text-4xl font-bold text-center py-4 px-2'>OUR SERVICES</h1>
        </div>
        <div className='grid md:grid-cols-2 max-w-screen'>
            <div>
                <img className='w-[80%]' src={simg} alt="" />
            </div>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-6xl text-[#FFFFFF] md:text-6xl font-extrabold'>Lorem ipsum dolor</p>
                <h1 className='py-1 text-2xl md:text-2xl font-semibold text-[#F45050] '>Who are we ?</h1>
                <p className='text-2xl text-[#FFFFFF]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat nam veniam quod sit quos officiis dicta. Nihil at modi non labore officiis aut, sunt ipsum quisquam, laudantium explicabo fuga mollitia? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni tempore velit quos quasi excepturi reprehenderit vero at ex maiores odit placeat, distinctio, doloremque mollitia fuga. Reprehenderit consequuntur assumenda est iste?</p>
                <button className='bg-[#FFFFFF] border-0 hover:text-[#FFFFFF]  text-[#000000] py-3 px-6 sm:w-[60%] my-4'>Know More</button>
            </div>
            
        </div>
    </div>
  )
}

export default About
