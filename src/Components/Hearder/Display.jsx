import React, { useContext } from 'react'
import { usercontext } from '../../Context/Context'
import Fooditem from './Fooditem';

const Display = ({category}) => {

  const [foodlist , setfoodlist] = useContext(usercontext)

  
  return (
    <div>
      <h1 className='text-4xl font-semibold my-10 px-20 max-sm:px-4 max-sm:text-2xl max-sm:my-2'>Top Dishes Near You😊</h1>
      <div className=" w-full  food-dispaly-lists flex flex-wrap gap-4 mx-auto justify-center mb-16 " >
       {
        foodlist.map((items, index)=> {

          if(category==="All" || category===items.category){

            return (<Fooditem id={items._id} name={items.name} image={items.image} price={items.price} description={items.description} index={index}/>)
          }
        })
       }
       
      </div>
    </div>
  )
}

export default Display
