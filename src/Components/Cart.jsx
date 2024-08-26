import React, { useContext, useState } from "react";
import { addtocartContext } from "../Context/Context";
import { food_list } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartitem, removefromCart ,getitemtotal } =
    useContext(addtocartContext);

    const navigate = useNavigate()

  return (
    <div className="px-20 my-28  max-sm:px-4 max-sm:my-10">
      <div className="carditems">
        <div className="cart-item-title grid grid-flow-col gap-1">
          <p className="max-sm:text-sm  max-sm:text-center"> Items</p>
          <p className="max-sm:text-sm max-sm:text-center"> Title</p>
          <p className="max-sm:text-sm max-sm:text-center text-center pr-14 max-sm:pr-0 max-sm:text- "> Price</p>
          <p className="max-sm:text-sm max-sm:text-center "> Quntity</p>
          <p className="max-sm:text-sm  max-sm:text-center max-sm:hidden"> Total</p>
          <p className="max-sm:text-sm  max-sm:text-center"> Remove</p>
        </div>
        <br />
        <hr />

        {Object.keys(cartitem).length > 0 ? (
          food_list.map((items, index) => {
            if (cartitem[items._id] > 0) {
              return (
                <div className=" max-sm:text-sm">
                  <div className="py-2 cartitems-title grid grid-flow-col ">
                    <img
                      className="max-w-10 "
                      src={items.image}
                      alt=""
                    />
                    <p className= "titile-p col-start-2 row-start-1  -ml-20 max-sm:ml-0 max-sm:text-start">{items.name}</p>
                    <p className=" ">₹ {items.price}</p>
                    <p className=""> {cartitem[items._id]}</p>
                    <p className="max-sm:hidden">₹ {items.price * cartitem[items._id]}</p>
                    <p
                      onClick={() => removefromCart(items._id)}
                      className=""
                    >
                      X
                    </p>
                  </div>
                  <hr />
                </div>
              );
            }
          })
        ) : (
          <div className="text-center my-10"> Nothing in cart</div>
        )}
      </div>
      <div className="cartbottom mt-10 w-[75%] max-sm:w-full   rounded-md overflow-hidden ">
        <div className="cart-tatal w-full max-sm:w-full p-4 max-sm:p-0 ">
          <h2 className="text-xl font-semibold mb-3">Cart Total</h2>
          <div className="div">
            <hr />
            <div className="taotal-details flex justify-between py-1 ">
              <p>Sub-Total</p>
              <p>₹ {getitemtotal()}</p>
            </div>
            <hr />
            <div className="total-detals  flex justify-between py-1">
              <p>delivery Fee</p>
              <p>₹{getitemtotal() >0 ?20:0}</p>
            </div>
            <hr />
            <div className="total-detals  flex justify-between py-1">
              <p>Total </p>
              <p>₹ {getitemtotal()===0? getitemtotal() : getitemtotal()+20}</p>
            </div>
            <hr />
           <button onClick={()=> navigate("/placeOrder")} className="bg-green-600 px-4 py-1 mt-3 rounded-md text-white">Check Out</button> 

          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
