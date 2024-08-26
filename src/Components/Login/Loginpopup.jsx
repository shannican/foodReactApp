import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const Loginpopup = ({setshowlogin,showlogin}) => {
    const [currstate,  setcurrstate] = useState("Login")
  return (
    <div className='w-full h-[100vh] bg-zinc-600 bg-opacity-50 absolute z-50 flex items-center justify-center'>
      <form className=' w-[350px]  h-fit bg-white p-6 rounded-md' >
        <div className="div flex items-center justify-between">
        {
            currstate
        }
        <img onClick={()=> setshowlogin(!showlogin)} src={assets.cross_icon} alt="" />
        </div>
        <div className="popup-inputs flex flex-col gap-2 my-3">
            {
                currstate==="Login"?<></>: <input className='outline-none px-2 py-[5px] border border-zinc-900 text-sm' type="text" placeholder="Your Name" required/>
            }
            
            <input className='outline-none px-2 py-[5px] border border-zinc-900 text-sm'  type="eamil" placeholder="Your Email" required/>
            <input className='outline-none px-2 py-[5px] border border-zinc-900 text-sm' type="password" placeholder="Password" required/>
        </div>
        <button className='w-full bg-orange-600 rounded-sm py-1 text-white'>{currstate==="Sign Up" ?  "Create Account":"Login"}</button>
        <div className="loginpopupcno flex items-start mt-2 gap-2 ">
            <input type="checkbox"  required/>
            <p className='text-xs leading-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, eius.</p>
        </div>
        {
            currstate==="Login" ? 
            <p className='text-xs mt-4'>Create a New Account <span className='text-orange-500 font-semibold' onClick={()=>setcurrstate("Sign Up")}>Click Here</span></p>:
            <p className='text-xs mt-4'>Already have an Account <span className='text-orange-500 font-semibold' onClick={()=>setcurrstate("Login")}>Login Here</span></p>

        }
      </form>
    </div>
  )
}

export default Loginpopup
