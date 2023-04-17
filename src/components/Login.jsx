import React,{useState} from 'react'
import {FcGoogle} from 'react-icons/fc'
import {AiFillEye, AiFillFacebook,AiFillEyeInvisible} from 'react-icons/ai'
import logo from '../assets/blood-type-b.png'

import loginImg from '../assets/login.jpg'

export default function Login() {
    const[open,setopen]=useState(false)
    //handle toggle
    const toggle=()=>{
        setopen(!open)
    } 

  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
        <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImg} alt="/" />
       
    

    <div className='flex justify-center items-center h-full'>
        <form  className='max-w-[400px] h-5/6 w-full mx-auto bg-white p-4 rounded-3xl' >
            <div className='flex justify-between py-6'><div>
            <h2 className='text-4xl font-bold text-left py-2'>Login</h2></div>
            <img  src={logo} alt="/"  height={50} width={80}/></div>
            <p>please enter your login details to sign in</p>
            <p><br></br></p>
            <div className='flex flex-col mb-4'>
                
                <input className='border relative bg-gray-100 p-3' type="email"   placeholder='Email Address or phone number '/>
            </div>
            <div className='flex flex-col  relative'>
            <div className='flex flex-col  '> 
                
                <input className='border relative bg-gray-100 p-3' type={(open === false)? 'password' :'text'}  placeholder='Password'/>
            </div>
            <div className='text-2xl absolute top-3 right-2 ' >
                {
                    (open === false)? <AiFillEye onClick={toggle}/>:
                    <AiFillEyeInvisible onClick={toggle}/>

                }
                
            </div>
            </div>
            <div className='w-full flex items-center justify-between'>
             
                 <p className='flex items-center mt-3'>Forgot password?</p>
                 </div>
                <button className='w-full py-2 mt-5 bg-red-700 hover:bg-red-600 relative text-white'>Log In</button>
            
            <p className='text-center py-2 mt-3'>Don't have an account? Sign up now</p>
            
            
            <div className='w-full flex items-center justify-center relative py-2'>
               <div className='w-full h-[3px] bg-blood'></div>
               <p className='text-lg absolute text-black/90 bg-[#ece8e8]'> or continue with </p> 

            </div>

            <div className='flex justify-between py-3'>
                
               <button className='rounded-md'> <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><FcGoogle className='mr-2' /> Google</p></button>
               <button className='rounded-md'><p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><AiFillFacebook className='mr-2' /> Facebook</p></button>
            </div>
        </form>
    </div>
    </div>
  )
}
