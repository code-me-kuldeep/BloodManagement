import React,{useState} from 'react'
import {BiPhoneCall} from 'react-icons/bi'
import {MdOutlineMailOutline} from 'react-icons/md'
import {RxPerson} from 'react-icons/rx'
import {VscBlank} from 'react-icons/vsc'
import Contact from '../assets/Contact.jpg'

export default function Login3() {
    const[open,setopen]=useState(false)
    //handle toggle
    const toggle=()=>{
        setopen(!open)
    } 
    //validation part
    const[username,setusername]=useState("");
    const[email,setemail]=useState("");
    const[usererror,setusererror]=useState("");
    const[emailerror,setemailerror]=useState("");
    const[phone,setphone]=useState("");
    const[phoneerror,setphoneerror]=useState("");
    const validate=()=>{
        const error={}
        if (username==="")
        error.username="Firstname is required";

        if(email==="")
        error.email="Email  is required";

        if(phone==="")
        error.phone="Phone-number is required";
        return Object.keys(error).length===0? null:error;
    }

     const handlesubmit=(e)=>{
        e.preventDefault();
        const error = validate();

        if(error){
           setusererror(error.username);
           setemailerror(error.email);
           setphoneerror(error.phone);
        }
        else{
            setusererror("");
            setemailerror("");
            setphoneerror("");
        }

    }
  return (
    <div className='w-full h-screen flex' id="Contact">
        <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
            <div className='w-full h-[550px] hidden md:block'>
                <img className='w-half itmes-end right-10 h-full' src={Contact} alt="/" />
            </div>
            <div className='p-4 flex flex-col justify-around'>
                <form onSubmit={handlesubmit} >
                    <h2 className='text-3xl font-bold text-left '>GET IN TOUCH</h2>
                    <p className='mb-6 text-sm'>24/7 we will answer your questions and problems</p>
                    <div className='flex justify-between py-2'>
                    <div class='flex flex-col relative'>
                        <input c className='border p-2 mr-1' type="text" value={username} id='name' placeholder='     Firstname' />
                        <div className='text-blood text-sm'>{usererror}</div>
                        <div className='text-2xl absolute top-3 left-1' >
                {
                    <RxPerson />

                }
                
            </div>
                       
                    </div>
                    <div class="w-full flex justify-end items-center relative">
                    <input   className='border p-2 w-full' type="text" placeholder='     Lastname' />
                    <div className='text-2xl absolute top-3 left-1' >
                {
                    <RxPerson />

                }
                
           </div>
                    </div>
                    </div>
                    <div class='flex flex-col relative'>
                    <input onChange={(e)=>{setemail(e.target.value)}} className='border p-2 w-full mb-2' type="email" value={email} id="Email" placeholder='       Email' />
                    <div className='text-blood text-sm'>{emailerror}</div>
                    <div className='text-2xl absolute top-3 left-1' >
                {
                    <MdOutlineMailOutline />

                }
                
            </div> 
                    </div>
                    <div class='flex flex-col relative'>
                   
                    <input  onChange={(e)=>{setphone(e.target.value)}} className='border p-3 w-full mb-2 right-3 ' type="number" value={phone} placeholder='      Phone' />
                    <div className='text-blood text-sm'>{phoneerror}</div>
                    <div className='text-2xl absolute top-3 left-1' >
                {
                    <BiPhoneCall />
                    

                }
                
            </div>
                   
                    

                    </div>
                    
                    <div className=" py-3  bg-white rounded-b-lg">
           
           <textarea id="editor" rows="5" className='text-slate-950 border-2 rounded-md resize-none	border-gray-100  p-2 w-full' placeholder="Describe your issue..." required></textarea>
       </div>
       <button className='w-full py-2 my-4 bg-[#131F42] hover:bg-[#F45050]'>Send</button>
                    
                </form>
               
            </div>
        </div>
    </div>
  )
}