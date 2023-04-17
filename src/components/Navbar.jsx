import React, {useState} from 'react'
import{MenuIcon, XIcon} from '@heroicons/react/outline'
import logo from '../assets/blood-type-b.png'
import {useNavigate} from 'react-router-dom'



const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const navigate = useNavigate();
  return (
    <div className='w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                {/* <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>BRAND.</h1> */}
                <img className='h-12 w-12 mr-2' src={logo} alt="" />
                <ul className='hidden md:flex font-bold text-1xl'>
                   <li>Home</li>
                   <li>About</li>
                    <li>Donate</li>
                    <li>Blood Urgency</li>
                    <li>Contact</li>
                </ul>
                
            </div>
            <div className='hidden md:flex pr-4'>
                    <button onClick={()=> navigate('/Login')
                    } className='border-2 text-black px-8 py-3 mr-4'>Login</button>
                    <button className='px-8 py-3'>Register</button>
            </div>
            <div className='md:hidden' onClick={handleClick}>
                {!nav ? <MenuIcon className='w-5'/> : <XIcon className='w-5'/> } 
            </div>
        </div>

        <ul className={!nav ? 'hidden' : 'absolute bg-white w-full px-8'}>
                <li className='border-b-2 border-metal w-full'>Home</li>
                <li className='border-b-2 border-metal w-full'>About</li>
                <li className='border-b-2 border-metal w-full'>Donate</li>
                <li className='border-b-2 border-metal w-full'>Blood Urgency</li>
                <li className='border-b-2 border-metal w-full'>Contact</li>
                <div className='flex flex-col my-4'>
                    <button className='text-indigo-600 px-8 py-3 mb-4'>Login</button>
                    <button className='px-8 py-3'>Register</button>
                </div>
        </ul>
        

    </div>
    
  )
}

export default Navbar

