import React, { useState } from 'react'
import {menu_list, food_list} from "../../assets/assets"

const Explore = ({category , setcategory}) => {
  // console.log(category);


  
  return (
    <div id='explore' className='explore menu my-5 w-full px-20 max-sm:px-4 max-sm:my-3'>
      <h1 className='text-4xl font-semibold max-sm:text-2xl'>Explore Our Menu</h1>
      <p className='text-slate-400 my-4 max-sm:hidden max-sm:my-0'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, quaerat eius impedit, veritatis quos voluptatum ad vel nihil vero, dolore ipsum minima autem eos modi corrupti totam ducimus dolor distinctio? adipisicing elit. Provident, perferendis?</p>


      <div className="explore-menu-list w-full flex items-center overflow-y-auto  gap-7 my-10 max-sm:gap-2 max-sm:my-3 max-sm:" >
       
        {
          menu_list.map((item, index) => {
            return (
              <div onClick={()=>setcategory(prev=>prev===item.menu_name? "All" : item.menu_name)} key={index} className="explore-menu-item    max-sm:shrink-0 ">
                <img className={category===item.menu_name ? "active w-[110px] h-[110px] border-4 rounded-full border-red-500 " :'w-[110px] h-[110px] rounded-full' } src={item.menu_image} alt={item.name} />
                <h3 className={category===item.menu_name?"active text-white rounded text-center my-2 bg-red-500 py-1" : "my-2 text-center text-zinc-700 "}>{item.menu_name}</h3>
              </div>
            )
          })
        }
      </div>
      <hr />
      
    
    </div>
  )
}

export default Explore
