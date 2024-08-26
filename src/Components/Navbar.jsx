import React, { useContext } from 'react'
import {assets} from '../assets/assets'
import { Link } from 'react-router-dom'
import { addtocartContext } from '../Context/Context'

const Navbar = ({setshowlogin, showlogin}) => {
  const {getitemtotal } = useContext(addtocartContext)
  
  return (
    <div className='navbar flex items-center justify-between px-20 py-4 max-[600px]:px-2 '>
      <Link to="/">  <img className='max-[600px]:w-[100px]' src={assets.logo} alt="" /></Link>
        <ul className=' navbarmenu flex gap-5 font-medium max-[600px]:hidden items-center'>
            <Link>Home</Link>
            <Link>Menu</Link>
            <Link>Mobile-App</Link>
            <Link>Contact-Us</Link>
        </ul>
        <div className="navrright flex gap-5 items-center justify-center">
            <img className='w-[20px] h-[20px]' src={assets.search_icon} alt="" />
            <Link to='/cart'>
            <div className="navbarserch-icon relative">
                <img  className='w-[20px] h-[20px]' src={assets.basket_icon} alt="" />
                <div className={getitemtotal()===0?"":'dot absolute w-[10px] h-[10px] bg-red-500 rounded-full -top-2 -right-2'}>
                </div>
            </div></Link>
            <button onClick={()=> setshowlogin(!showlogin)}  className=' px-4 py-1 rounded-[50px] border border-black' >Sign In</button>

        </div>
    </div>
  ) 
}

export default Navbar
