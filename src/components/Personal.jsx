import React,{useState} from 'react'


import logo from '../assets/blood-type-b.png'

import loginImg from '../assets/login.jpg'

export default function Personal() {
    const[open,setopen]=useState(false)
    //handle toggle
    const toggle=()=>{
        setopen(!open)
    } 

  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
        <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImg} alt="/" />
       
    

    <div className='flex justify-center items-center h-full'>
        <form  className='max-w-full h-full w-full mx-auto bg-white p-4 ' >
            <div className='flex justify-between py-6'><div>
            <h2 className='text-4xl font-bold text-left py-2'>Personal Information</h2></div>
            
            <img  src={logo} alt="/"  height={60} width={60}/></div>
            <div className='w-full flex items-center justify-center relative py-2'>
               <div className='w-full h-[3px] bg-blood'></div>
               <p className='text-lg absolute text-black/90 bg-white px-2'> </p>
                

            </div>
            
            
            
            <p><br></br></p>
            <div className='flex justify-between py-3'>
            <div className='flex flex-col mb-4'>
                <label>First name</label>
                <input className='border relative rounded-md bg-white p-3' type="text"   placeholder=' '/>
                <label>DOB</label>
                <input className='border relative rounded-md bg-white p-3' type="date"  placeholder=''/>
                <label>Phone Number</label>
                <input className='border relative rounded-md bg-white p-3' type="number"  placeholder='+91'/>
                <label>Address</label>
                <input className='border relative rounded-md bg-white p-3 h-half' type="text"   placeholder=' '/>
            </div>
            
            <div className='flex flex-col  '> 
            <label>Middle name</label>
                <input className='border relative rounded-md bg-white p-3' type="text"  placeholder=''/>
                <label>Adhar Number</label>
                <input className='border relative rounded-md bg-white p-3' type="text"  placeholder=''/>
                <br></br>
                <div>
                <label>Gender </label><br></br>
                <input  type="radio" name='gender' value="male"/>
                <label > Male </label>
                <input type="radio" name='gender' value="female"  />
                 <label > Female </label>
                 <input type="radio" name='gender' value="others" />
                <label > Others</label>
                </div>

            </div>
            <div className='flex flex-col mb-4'>
            <label>Last name</label>
                <input className='border relative rounded-md bg-white p-3' type="text"  placeholder=''/>
                <label>Blood Group</label>
                <input className='border relative rounded-md bg-white p-3' type="text"  placeholder=''/>
               
            </div>
            <div className='flex flex-col mb-4'>
                
               
            </div>
            </div>
           
            <div className=' flex flex-col items-center'>
                <button className='w-2/12 py-2 mt-5 bg-red-700 hover:bg-red-600  relative text-white rounded-md'>Proceeed</button>
                </div>
          
            
          
           
        </form>
    </div>
    </div>
  )
}
