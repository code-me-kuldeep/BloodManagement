import React,{useState} from 'react'
import {FcGoogle} from 'react-icons/fc'
import {AiFillEye, AiFillFacebook,AiFillEyeInvisible} from 'react-icons/ai'
import logo from '../assets/blood-type-b.png'

import lgimg from '../assets/lrimg.jpg'
import himg from '../assets/home.png'
import trees from '../assets/trees.jpg'

export default function Login() {
    const[open,setopen]=useState(false)
    //handle toggle
    const toggle=()=>{
        setopen(!open)
    } 
    //validation part
    const[username,setusername]=useState("");
    const[password,setpassword]=useState("");
    const[usererror,setusererror]=useState("");
    const[passerror,setpasserror]=useState("");
    const validate=()=>{
        const error={}
        if (username==="")
        error.username="username is required";

        if(password==="")
        error.password="Passsword is required";
        return Object.keys(error).length===0? null:error;
    }

     const handlesubmit=(e)=>{
        e.preventDefault();
        const error = validate();

        if(error){
           setusererror(error.username);
           setpasserror(error.password);
        }
        else{
            setpasserror("");
            setusererror("");
        }

    }


  return (
    
    <div className='w-full h-screen flex'>
        {/* <div className='relative flex flex-row justify-center items-center pl-4'>
            <img  className='h-[20px] w-[20px]' src={himg} />
        <div className='relative w-full py-2 top-10'>
            <ul>
                <li className='text-blood text-xl'>
                    <a href="/">Home</a> 
                </li>
            </ul>
        </div>
        </div> */}
        
    <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
    <div className='w-full h-[550px] hidden md:block'>
                <img className='w-full h-full' src={lgimg} alt="/" />
            </div>
            
    <div className='p-4 flex flex-col justify-around'>
    <form onSubmit={handlesubmit}  className=' relative mx-auto h-half bg-white p-5 rounded-3xl' >
            <div className='flex justify-between py-3'><div>
            <h2 className='text-3xl font-bold text-center py-2 '>Reset Password</h2><p className='text-[#000000] text-sm'><br></br>Enter the registered phone number or email address associated with your account we'll send a code with instruction to reset your password.</p></div>
            <img className='w-17 h-14' src={logo} alt="/"  height={50} width={60}/></div>
            
            <p><br></br></p>
            <div className='flex flex-col mb-2'>
                
            <input onChange={(e)=>{setusername(e.target.value)}}  className='border relative bg-white p-2 rounded-md' type="email" value={username}  id='username' placeholder='Email or phone number '/>
                <div className='text-blood text-sm'>{usererror}</div>
            </div>
           
            
                <button className='w-full py-2 mt-3 bg-[#F45050] hover:bg-blood hover:shadow-lg relative text-white  rounded-xl bg-midnight hover:shadow-blood border-0'>Send</button>
            
           
            
            
          
               
            

          
        </form>
        </div>
    </div>
</div>
  )
}
