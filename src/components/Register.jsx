import React,{useState} from 'react'
import {FcGoogle} from 'react-icons/fc'
import {AiFillEye, AiFillFacebook,AiFillEyeInvisible} from 'react-icons/ai'
import logo from '../assets/blood-type-b.png'

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
    <div className='relative w-full h-screen bg-zinc-900/90'>
        <img className='absolute w-full h-auto object-cover ' src={loginImg} alt="/" />
        <div className='relative flex flex-row justify-center items-center pl-4'>
            <img  className='h-[20px] w-[20px]' src={himg} />
        <div className='relative w-full py-2'>
            <ul>
                <li className='text-white text-xl'>
                    <a href="/">Home</a> 
                </li>
            </ul>
        </div>
        </div>

    <div className='flex justify-center items-center h-full'>
        <form onSubmit={handlesubmit} className=' relative max-w-[400px] h-fit w-full mx-auto bg-white p-4 rounded-3xl' >
            <div className='flex justify-between py-6'><div>
            <h2 className='text-4xl font-bold text-left py-2'>Register</h2>
            <p className='text-[#000000] text-sm'>please enter your login details to sign in</p></div>
            <img  src={logo} alt="/"  height={50} width={80}/></div>
            
            <p><br></br></p>
            <div className='flex flex-col mb-5'>
            <input onChange={(e)=>{setEname(e.target.value)}} className='border relative bg-white p-3 rounded-md' type="text" value={Ename} id='Ename'  placeholder='Enter your name '/>
            <div className='text-blood text-sm'>{Eerror}</div>  
                
            </div>
            
            
            <div className='flex flex-col mb-5'>
            <input onChange={(e)=>{setusername(e.target.value)}} className='border relative bg-white p-3 rounded-md' type="email"  placeholder='Email Address or phone number' value={username} id='username'/>
            <div className='text-blood text-sm'>{usererror}</div>
                
            </div>
            <div className='flex flex-col relative'>
            <div className='flex flex-col '> 
                
                <input onChange={(e)=>{setpassword(e.target.value)}} className='border relative bg-white p-3 rounded-md' type={(open === false)? 'password' :'text'}  placeholder='Password' value={password} id='password'/>
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
                <button className='w-full py-2 mt-5 bg-red-700 hover:bg-blood hover:shadow-lg relative text-white  rounded-xl bg-midnight hover:shadow-blood border-0'>Register</button>
            
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
  )
}
