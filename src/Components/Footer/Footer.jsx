import React from 'react'

import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer px-20 bg-zinc-800 text-white py-10 max-sm:p-4 '>
      <div className="fotter-content flex gap-10 max-sm:flex-col max-sm:gap-5">
        <div className="left">
          <img className='mb-5' src={assets.logo} alt="" />
          <p className='leading-[18px] my-3 text-sm' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et dolore ea maxime explicabo facere architecto iusto porro cumque, eius exercitationem quibusdam esse accusamus debitis accusantium adipisci commodi fugiat nam provident.</p>
          <div className="fottersocilaicon flex gap-3">
            <img className='w-[40px]' src={assets.facebook_icon} alt="" />
            <img className='w-[40px]' src={assets.twitter_icon} alt="" />
            <img className='w-[40px]' src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="center text-sm">
          <h2 className='text-xl font-semibold'>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privecy Policy</li>
          </ul>
        </div>
        <div className="right text-sm">
          <h2 className='text-xl font-semibold' >GET IN TOUCH</h2>
          <ul>
            <li>+91823473298</li>
            <li>tomato@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr className='my-10 max-sm:my-2' />
      <p className='text-center'>Copyright 2024 @ baby.com All Right Reseverd</p>

    </div>
  )
}

export default Footer
