import React, { useState } from 'react'
import Navbar from './Components/Navbar'

import Footer from './Components/Footer/Footer'
import Router from './Routers/Router'
import Loginpopup from './Components/Login/Loginpopup'


const App = () => {
  const [showlogin, setshowlogin] = useState(false)
  return (

    <>

    {
      showlogin? <Loginpopup setshowlogin={setshowlogin}  showlogin={showlogin}/> : null
    }
      <Navbar setshowlogin={setshowlogin}  showlogin={showlogin} />
      <Router/>
      <Footer/>
    </>
  )
}

export default App
