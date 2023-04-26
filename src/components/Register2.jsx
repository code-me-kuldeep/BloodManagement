import React,{useState} from 'react'
import {FcGoogle} from 'react-icons/fc'
import {AiFillEye, AiFillFacebook,AiFillEyeInvisible} from 'react-icons/ai'
import logo from '../assets/blood-type-b.png'
import lgimg from '../assets/lrimg.jpg'

import loginImg from '../assets/bglogin.jpg'
import himg from '../assets/home.png'

export default function Register() {
    const[open,setopen]=useState(false)
    //handle toggle
    const toggle=()=>{
        setopen(!open)
    } 
    //validation part
    const[Ename,setEname]=useState("");
    const[username,setusername]=useState("");
    const[password,setpassword]=useState("");
    const[Eerror,setEerror]=useState("");
    const[usererror,setusererror]=useState("");
    const[passerror,setpasserror]=useState("");
    const validate=()=>{
        const error={}
        if(Ename==="")
        error.Ename="Name is required";

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
            setEerror(error.Ename);
           setusererror(error.username);
           setpasserror(error.password);
           
        }
        else{
            setpasserror("");
            setusererror("");
            setEerror("");
        }

    }


  return (
    <div className='w-full h-screen flex'>
    
    
<div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
<div className='w-full h-[550px] hidden md:block'>
            <img className='w-full h-full' src={lgimg} alt="/" />
        </div>
        
<div className='p-4 flex flex-col justify-around'>
<form onSubmit={handlesubmit} className=' relative max-w-[400px] h-half w-full mx-auto bg-[#FFFFFF] p-4 rounded-3xl' >
            <div className='flex justify-between py-4'><div>
            <h2 className='text-3xl font-bold text-left py-2'>Register</h2>
            <p className='text-[#000000] text-sm'>Welcome to BloodKart.com Let's get Started</p></div>
            <img className='w-17 h-14' src={logo} alt="/"  height={50} width={60}/></div>
            
            <p><br></br></p>
            <div className='flex flex-col mb-3'>
            <input onChange={(e)=>{setEname(e.target.value)}} className='border relative bg-[#FFFFFF] p-3 rounded-md' type="text" value={Ename} id='Ename'  placeholder='Enter your name '/>
            <div className='text-[#F45050] text-sm'>{Eerror}</div>  
                
            </div>
            
            
            <div className='flex flex-col mb-3'>
            <input onChange={(e)=>{setusername(e.target.value)}} className='border relative bg-[#FFFFFF] p-3 rounded-md' type="email"  placeholder='Email Address or phone number' value={username} id='username'/>
            <div className='text-[#F45050] text-sm'>{usererror}</div>
                
            </div>
            <div className='flex flex-col relative'>
            <div className='flex flex-col '> 
                
                <input onChange={(e)=>{setpassword(e.target.value)}} className='border relative bg-[#FFFFFF] p-2 rounded-md' type={(open === false)? 'password' :'text'}  placeholder='Password' value={password} id='password'/>
                <div className='text-[#F45050] text-sm'>{passerror}</div>
                
            </div>
            <div className='text-2xl absolute top-3 right-2 ' >
                {
                    (open === false)? <AiFillEyeInvisible onClick={toggle}/>:
                    <AiFillEye onClick={toggle}/>

                }
                
            </div>
            </div>
            <div className='w-full flex items-center justify-between'>
             
                 <p className='flex items-center mt-2'>Forgot password?</p>
                 </div>
                <button className='w-full py-2 mt-3 bg-[#F45050] hover:bg-[#F45050] hover:shadow-lg relative text-[#FFFFFF]  rounded-xl hover:shadow-[#F45050] border-0'>Register</button>
            
            <p className='text-center py-2 mt-3 text-gray-400'>Already have an account? <a href="/Login2" className='text-[#F45050]'>Login</a></p>
            
            
            <div className='w-full flex items-center justify-center relative py-1'>
               <div className='w-full h-[3px] bg-[#F45050]'></div>
               <p className='text-sm font-bold absolute text-black/90 bg-[#FFFFFF] px-2'> or continue with </p> 

            </div>

            <div className='flex justify-center py-3'>
                
               <button className='rounded-xl bg-[#FFFFFF] shadow-md hover:shadow-2xl hover:bg-current hover:shadow-[#F45050] '> <p className='border-1 rounded-xl hover:shadow-xl px-6 py-2 relative flex items-center text-[#000000] shadow-sm'><FcGoogle className='mr-2' /> Google</p></button>
               <button className='rounded-xl bg hover:bg-current hover:shadow-[#F45050] bg-[#FFFFFF] hover:shadow-2xl'><p className='border-0 shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center text-[#000000]  rounded-xl'><AiFillFacebook className='mr-2' /> <p className=''>Facebook </p></p></button>
            </div>
            
        </form>
    </div>
</div>
</div>
  )
}
