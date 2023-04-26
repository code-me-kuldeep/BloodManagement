import React from 'react'
import {BiPhoneCall} from 'react-icons/bi'
import {MdOutlineMailOutline} from 'react-icons/md'
import {RxPerson} from 'react-icons/rx'
import {VscBlank} from 'react-icons/vsc'
import Contact from '../assets/Contact.jpg'

export default function Login3() {
  return (
    <div className='w-full h-screen flex' id="Contact">
        <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
            <div className='w-full h-[550px] hidden md:block'>
                <img className='w-half itmes-end right-10 h-full' src={Contact} alt="/" />
            </div>
            <div className='p-4 flex flex-col justify-around'>
                <form>
                    <h2 className='text-3xl font-bold text-left '>GET IN TOUCH</h2>
                    <p className='mb-6 text-sm'>24/7 we will answer your questions and problems</p>
                    <div className='flex justify-between py-2'>
                    <div class="w-full flex justify-end items-center relative">
                        <input className='border p-2 mr-1' type="text" placeholder='     Username' />
                        <div className='text-2xl absolute top-3 left-1' >
                {
                    <RxPerson />

                }
                
            </div>
                       
                    </div>
                    <div class="w-full flex justify-end items-center relative">
                    <input className='border p-2 w-full' type="text" placeholder='     Lastname' />
                    <div className='text-2xl absolute top-3 left-1' >
                {
                    <RxPerson />

                }
                
            </div>
                    </div>
                    </div>
                    <div class="w-full flex justify-end items-center relative">
                    <input className='border p-2 w-full mb-2' type="email" placeholder='       Email' />
                    <div className='text-2xl absolute top-3 left-1' >
                {
                    <MdOutlineMailOutline />

                }
                
            </div>
                    </div>
                    <div class="w-full flex justify-end items-center relative">
                   
                    <input className='border p-3 w-full mb-2 right-3 ' type="number" placeholder='      Phone' />
                    <div className='text-2xl absolute top-3 left-1' >
                {
                    <BiPhoneCall />
                    

                }
                
            </div>
                   
                    

                    </div>
                    
                    <div className=" py-3  bg-white rounded-b-lg dark:bg-gray-800">
           
           <textarea id="editor" rows="7" className='text-slate-950 border-2 rounded-md resize-none	border-gray-100  p-2 w-full' placeholder="Describe your issue..." required></textarea>
       </div>
       <button className='w-full py-2 my-4 bg-[#131F42] hover:bg-[#F45050]'>Send</button>
                    
                </form>
               
            </div>
        </div>
    </div>
  )
}