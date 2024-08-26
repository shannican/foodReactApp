import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { addtocartContext } from '../../Context/Context'


const Fooditem = ({id, name , image, price, description, index}) => {

    const {cartitem,
        addtocart,
        removefromCart} = useContext(addtocartContext)
  return (
    <div key={index} id='foodcarddis' className='food-card w-[250px] h-[300px] bg-zinc-50 p-2 rounded-md hover:bg-zinc-100 hover:scale-105 transition max-sm:w-[170px] max-sm:h-[200px]' >
        <div className="imagediv relative">
            <img src={image} alt="" />
            {
                !cartitem[id] ? <img onClick={()=>addtocart(id)} className='w-[35px] absolute right-2 bottom-2' src={assets.add_icon_white} alt="" /> : <div className='absolute bottom-2 right-2 flex bg-slate-100 items-center rounded-[50px] '>
                    <img onClick={()=>removefromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p  className='px-2 '>{cartitem[id]}</p>
                    <img onClick={()=>addtocart(id)} src={assets.add_icon_green} alt="" />
                </div>  
            }
        </div>
        <div className="food-item-info">
            <div className="name-rating flex justify-between items-center my-1">
                <h1 className='font-medium max-sm:text-sm'>{name}</h1>
                <img className='w- h-[15px] object-contain max-sm:w-[50px] max-sm:object-contain' src={assets.rating_starts} alt="" />
            </div>
            <p className='text-xs mt-1 max-sm:hidden '>{description}</p>
            <p className='my-2 bg-red-500 w-fit px-3 py-1 rounded text-white max-sm:px-2 max-sm:py-0'>₹ {price}</p>
        </div>
 
    </div>
  )
}

export default Fooditem
