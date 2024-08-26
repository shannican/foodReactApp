import React, { useContext, useState } from "react";
import { addtocartContext } from "../Context/Context";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const PlaceOrder = () => {
  const { getitemtotal } = useContext(addtocartContext);

  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [street, setstreet] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [pincode, setpincode] = useState("");
  const [country, setcountry] = useState("");
  const [phone, setphone] = useState("");

  const cheakkar = () => {
    if (
      (firstname,
      lastname,
      email.street,
      email,
      city,
      state,
      country,
      phone === "")
    ) {
      toast.error("Please fill all the fields");
    }
    else if (getitemtotal() ===0){
      toast.error("Please add items to cart");
    }else{
      toast.success("Your order has been placed");
      setfirstname("");
      setlastname("");
      setemail("");
      setstreet("");
      setcity("");
      setstate("");
      setcountry("");
      setphone("");
      setpincode("");
    }
  };

  return (
    <div>
      <form className="place order px-20 my-10 flex gap-10 max-sm:px-4 max-sm:flex-col">
        <div className="placeoider-left w-1/2 max-sm:w-full">
          <p className="text-xl font-semibold">Delivery Information</p>
          <div className="multifield flex gap-2 my-1 ">
            <input
              onChange={(e) => setfirstname(e.target.value)}
              className="bg-zinc-50 px-3 py-1 rounded w-full border"
              type="text"
              placeholder="First Name "
              value={firstname}
            />
            <input
              onChange={(e) => setlastname(e.target.value)}
              className="bg-zinc-50 px-3 py-1 rounded w-full border"
              type="text"
              placeholder="Last Name"
              value={lastname}
            />
          </div>
          <div className="multifield flex gap-2 my-2">
            <input
              onChange={(e) => setemail(e.target.value)}
              className="bg-zinc-50 px-3 py-1 rounded w-full border"
              type="text"
              placeholder="Email address"
              value={email}
            />
            <input
              onChange={(e) => setstreet(e.target.value)}
              className="bg-zinc-50 px-3 py-1 rounded w-full border"
              type="text"
              placeholder="city"
              value={street}
            />
          </div>
          <div className="multifield flex gap-2 my-2">
            <input
              onChange={(e) => setcity(e.target.value)}
              className="bg-zinc-50 px-3 py-1 rounded w-full border"
              type="text"
              placeholder="city"
              value={city}
            />
            <input
              onChange={(e) => setstate(e.target.value)}
              className="bg-zinc-50 px-3 py-1 rounded w-full border"
              type="text"
              placeholder="State"
              value={state}
            />
          </div>
          <div className="multifield flex gap-2 my-2">
            <input
              onChange={(e) => setpincode(e.target.value)}
              className="bg-zinc-50 px-3 py-1 rounded w-full border"
              type="text"
              placeholder="Pincode"
              value={pincode}
            />
            <input
              onChange={(e) => setcountry(e.target.value)}
              className="bg-zinc-50 px-3 py-1 rounded w-full border"
              type="text"
              placeholder="Country"
              value={country}
            />
          </div>
          <input
            onChange={(e) => setphone(e.target.value)}
            className="bg-zinc-50 px-3 py-1 rounded w-full border "
            type="text"
            placeholder=" phone"
            value={phone}
          />
        </div>

        <div className="placeoider-right w-1/2 max-sm:w-full">
          <div className="cart-tatal">
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
                <p>₹{getitemtotal() > 0 ? 20 : 0}</p>
              </div>
              <hr />
              <div className="total-detals  flex justify-between py-1">
                <p>Total </p>
                <p>
                  ₹{" "}
                  {getitemtotal() === 0 ? getitemtotal() : getitemtotal() + 20}
                </p>
              </div>
              <hr />
              <Link
                onClick={() => cheakkar()}
                className="bg-green-600 px-4 py-1 mt-3 rounded-md text-white"
              >
                Check Out
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
