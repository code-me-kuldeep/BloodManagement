import React,{useState} from 'react'


import logo from '../assets/blood-type-b.png'

import loginImg from '../assets/login.jpg'

export default function Donate() {
    const[open,setopen]=useState(false)
    //handle toggle
    const toggle=()=>{
        setopen(!open)
    } 
     //validation part
     const[Fname,setFname]=useState("");
     const[Lname,setLname]=useState("");
     const[DOB,setDOB]=useState("");
     const[RH,setRH]=useState("");
     const[Bgroup,setBgroup]=useState("");
     const[phn,setphn]=useState("");
     const[gender,setgender]=useState("");


     const[Fnameerror,setFnameerror]=useState("");
     const[Lnameerror,setLnameerror]=useState("");
     const[DOBerror,setDOBerror]=useState("");
     const[RHerror,setRHerror]=useState("");
     const[Bgrouperror,setBgrouperror]=useState("");
     const[phnerror,setphnerror]=useState("");
     const[gendererror,setgendererror]=useState("");
     const validate=()=>{
         const error={}
         if (Fname==="")
         error.Fname="Firstname is required";
 
         if(Lname==="")
         error.Lname="Lastname is required";

         if(DOB==="")
         error.DOB="DOB is required";

         if(RH==="")
         error.RH="RH-factor is required";

         if(Bgroup==="")
         error.Bgroup="Bloodgroup is required";

         if(phn==="")
         error.phn="Phone no. is required";

         if(gender==="")
         error.gender="Gender is required";
         return Object.keys(error).length===0? null:error;
     }
 
      const handlesubmit=(e)=>{
         e.preventDefault();
         const error = validate();
 
         if(error){
            setFnameerror(error.Fname);
            setLnameerror(error.Lname);
            setDOBerror(error.DOB);
            setRHerror(error.RH);
            setBgrouperror(error.Bgroup);
            setphnerror(error.phn);
            setgendererror(error.gender);
            
         }
         else{
            setFnameerror("");
            setLnameerror("");
            setDOBerror("");
            setRHerror("");
            setBgrouperror("");
            setphnerror("");
            setgendererror("")
            
         }
 
     }

  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
        
       
    

    <div className='flex justify-center items-center h-full'>
        <form onSubmit={handlesubmit} className='max-w-full h-full w-full mx-auto bg-[#FFFFFF] p-4 ' >
            <div className='flex justify-between py-6'><div>
            <h2 className='text-4xl font-bold text-left py-2'>Blood-Donate-form</h2><p className='text-[#000000] text-40px'>please enter your details</p></div>
            
            <img  src={logo} alt="/"  height={60} width={60}/></div>
            <div className='w-full flex items-center justify-center relative py-2'>
               <div className='w-full h-[3px] bg-[#F45050]'></div>
               <p className='text-lg absolute text-black/90 bg-[#FFFFFF] px-2'> </p>
                

            </div>
            
            
            
            <p><br></br></p>
            <div className='flex justify-between py-3'>
            <div className='flex flex-col mb-4'>
                <label>First name</label>
                <input className='border relative rounded-md bg-[#FFFFFF] p-3' type="text" value={Fname} id='Fname'  placeholder=' '/>
                <div className='text-[#F45050] text-sm'>{Fnameerror}</div>
                <label>DOB</label>
                <input className='border relative rounded-md bg-[#FFFFFF] p-3' type="date" value={DOB} id='DOB' placeholder=''/>
                <div className='text-[#F45050] text-sm'>{DOBerror}</div>
                <label>Phone Number</label>
                <input className='border relative rounded-md bg-[#FFFFFF] p-3' type="number" value={phn} id='phn' placeholder='+91'/>
                <div className='text-[#F45050] text-sm'>{phnerror}</div>
              
                
            </div>
            
            <div className='flex flex-col  '> 
            <label>Middle name</label>
                <input className='border relative rounded-md bg-[#FFFFFF] p-3' type="text"  placeholder=''/>
                <label>Blood Group</label>
                <input className='border relative rounded-md bg-[#FFFFFF] p-3' type="text"  placeholder=''/>        
                <div className='text-[#F45050] text-sm'>{Bgrouperror}</div>
               
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
                <div className='text-[#F45050] text-sm'>{gendererror}</div>

            </div>
            <div className='flex flex-col mb-4'>
            <label>Last name</label>
                <input className='border relative rounded-md bg-[#FFFFFF] p-3' type="text"  placeholder=''/>
                <div className='text-[#F45050] text-sm'>{Lnameerror}</div>
                <label>Rh factor </label>
                <select id="Rh factor " class="border relative rounded-md bg-[#FFFFFF] p-3">
  <option selected>Choose a Rh factor </option>
  <option value="positive">+VE </option>
  <option value="negetive">-VE</option>
</select>
<div className='text-[#F45050] text-sm'>{RHerror}</div>
               
            </div>
            <div className='flex flex-col mb-4'>
                
               
            </div>
            </div>
           
            <div className=' flex flex-col items-center'>
                <button className='w-2/12 py-2 mt-5 bg-red-700 hover:bg-red-600  relative text-[#FFFFFF] rounded-md'>Proceeed</button>
                </div>
          
            
          
           
        </form>
    </div>
    </div>
  )
}
