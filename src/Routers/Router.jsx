import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Cart from '../Components/Cart'
import PlaceOrder from '../Components/PlaceOrder'
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/placeOrder" element={<PlaceOrder />} />

      </Routes>
    </>
  )
}

export default Router
