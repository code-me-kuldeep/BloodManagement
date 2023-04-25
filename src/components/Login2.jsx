import React,{useState} from 'react'
import {FcGoogle} from 'react-icons/fc'
import {AiFillEye, AiFillFacebook,AiFillEyeInvisible} from 'react-icons/ai'
import logo from '../assets/blood-type-b.png'

import lgimg from '../assets/lgimg.jpg'
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
        <div className='relative flex flex-row justify-center items-center pl-4'>
            <img  className='h-[20px] w-[20px]' src={himg} />
        <div className='relative w-full py-2 top-10'>
            <ul>
                <li className='text-blood text-xl'>
                    <a href="/">Home</a> 
                </li>
            </ul>
        </div>
        </div>
        
    <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
    <div className='w-full h-[550px] hidden md:block'>
                <img className='w-full h-full' src={lgimg} alt="/" />
            </div>
            
    <div className='p-4 flex flex-col justify-around'>
    <form onSubmit={handlesubmit} className=' relative mx-auto h-half bg-white p-4 rounded-3xl' >
            <div className='flex justify-between py-6'><div>
            <h2 className='text-3xl font-bold text-left py-2'>Login</h2></div>
            <img  src={logo} alt="/"  height={50} width={60}/></div>
            <p className='text-[#000000]'>please enter your login details to sign in</p>
            <p><br></br></p>
            <div className='flex flex-col mb-2'>
                
                <input onChange={(e)=>{setusername(e.target.value)}} className='border relative bg-white p-3 rounded-md' type="email" value={username} id='username' placeholder='Email Address or phone number '/>
                <div className='text-blood text-sm'>{usererror}</div>
            </div>
            <div className='flex flex-col relative'>
            <div className='flex flex-col '> 
                
                <input onChange={(e)=>{setpassword(e.target.value)}} className='border relative bg-white p-3 rounded-md' type={(open === false)? 'password' :'text'} value={password} id='password' placeholder='Password'/>
                <div className='text-blood text-sm'>{passerror}</div>
            </div>
            <div className='text-2xl absolute top-3 right-2 ' >
                {
                    (open === false)? <AiFillEyeInvisible onClick={toggle}/>:
                    <AiFillEye onClick={toggle}/>

                }
                
            </div>
            </div>
            <div className='w-full flex items-center justify-between'>
             
                 <p className='flex items-center mt-3'>Forgot password?</p>
                 </div>
                <button className='w-full py-2 mt-3 bg-red-700 hover:bg-blood hover:shadow-lg relative text-white  rounded-xl bg-midnight hover:shadow-blood border-0'>Log In</button>
            
            <p className='text-center py-2 mt-3'>Don't have an account? <a href="//">Sign up now</a></p>
            
            
            <div className='w-full flex items-center justify-center relative py-2'>
               <div className='w-full h-[3px] bg-blood'></div>
               <p className='text-lg absolute text-black/90 bg-white px-2'> or continue with </p>
                

            </div>
            

            <div className='flex justify-center py-3'>
                
               <button className='rounded-xl bg-white shadow-md hover:shadow-2xl hover:bg-current hover:shadow-blood '> <p className='border-1 rounded-xl hover:shadow-xl px-6 py-2 relative flex items-center text-ivory shadow-sm'><FcGoogle className='mr-2' /> Google</p></button>
               <button className='rounded-xl bg hover:bg-current hover:shadow-blood bg-white hover:shadow-2xl'><p className='border-0 shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center text-ivory  rounded-xl'><AiFillFacebook className='mr-2' /> <p className=''>Facebook </p></p></button>
            </div>
        </form>
        </div>
    </div>
</div>
  )
}
