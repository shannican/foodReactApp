import React, { useState } from 'react'
import Header from './Hearder/Header'
import Explore from './Hearder/Explore'
import Display from './Hearder/Display'


const Home = () => {
  
  const [category , setcategory] = useState("All")
  return (
    <div>
      <Header/>
      <Explore category={category} setcategory={setcategory}/>
      <Display category={category}/>
     
    </div>
  )
}

export default Home
