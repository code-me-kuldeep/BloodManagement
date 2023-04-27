import React from 'react'
import bgimg from '../assets/Service.png'
import A0 from '../assets/0A.jpg';
import A1 from '../assets/1 (2).jpg';
import A2 from '../assets/2A.jpg';
import A3 from '../assets/3A.jpg';
import A4 from '../assets/4A.jpg';


const Cards = () => {
  return (
  
    <div className='max-w-screen py-16 px-4 text-center bg-white'>
    <h1 className='text-3xl md:text-4xl font-bold'>Saving Lives, One Click at a time</h1>
    <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
        <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={A0} alt="/" />
        <img className='w-full h-full object-cover' src={A1} alt="/" />
        <img className='w-full h-full object-cover' src={A2} alt="/" />
        <img className='w-full h-full object-cover' src={A3} alt="/" />
        <img className='w-full h-full object-cover' src={A4} alt="/" />
    </div>
    {/* <h1 className='text-3xl md:text-4xl font-bold'>Saving Lives, One Click at a time</h1>
    <p className='py-4'>Blood donation is a crucial act of kindness that can save lives. It involves voluntarily giving blood, which is then used to help patients in need, such as those undergoing surgeries, suffering from trauma, or battling illnesses like cancer. Donated blood is a vital resource that cannot be artificially manufactured, making it essential for healthcare facilities to have an adequate supply. Blood donations are safe and well-regulated, with strict screening processes to ensure the safety of both donors and recipients. By donating blood, individuals can make a meaningful contribution to their community and help those in need, making it a selfless act that has a lasting impact on the lives of others.</p> */}

</div>

  )
}

export default Cards

