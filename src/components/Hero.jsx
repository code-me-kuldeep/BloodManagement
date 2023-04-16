import React from 'react'
// import blur from '../assets/blurry 1.png'
import bgimg from '../assets/bgimg.png'
const Hero = () => {
  return (
    <div className='w-full h-full bg-white flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-screen'>
        <div>
                <img className='w-full' src={bgimg} alt="" />
            </div>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-4xl  md:text-4xl font-extrabold'>BLOODKART.com</p>
                <h1 className='py-1 text-2xl md:text-2xl font-semibold text-blood animate-typing overflow-hidden whitespace-nowrap '>Saving Lives, One Click at a Time</h1>
                <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat nam veniam quod sit quos officiis dicta. Nihil at modi non labore officiis aut, sunt ipsum quisquam, laudantium explicabo fuga mollitia?</p>
                <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
            </div>

        </div>
        
    </div>
  )
}

export default Hero
