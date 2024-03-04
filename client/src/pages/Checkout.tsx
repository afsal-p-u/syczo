import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useSelector } from "react-redux";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const Checkout = () => {
  const { cart }: any = useSelector((state) => state);
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate()
  const location = useLocation()
  const { token } = useAuthContext()

  const ids = location?.state?.ids

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = () => {
    axios
      .post(`${import.meta.env.VITE_SERVER_URL}/payments/create`, {
        ...inputs,
        uid: JSON.parse(token || "").uid,
        amount: cart.totalPrice,

      })
      .then((res) => {
        navigate('/pay', {state: {session: res.data.data.payment_session_id, ids: ids, cid: res.data.checkout }})
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className="px-[100px] max-lg:px-[60px] py-[20px] min-h-[80vh] w-full flex gap-8 box-border mt-4 max-md:flex-col
      max-md:px-[50px] max-sm:px-[15px] max-md:mt-[30px]"
    >
      <div className="w-[65%] h-full pl-[10px] max-md:pl-0 max-lg:w-[50%] max-md:w-[100%]">
        <h3 className="text-[var(--third-color)] font-semibold text-[28px] max-sm:text-[24px] max-sm:text-center">
          Checkout
        </h3>
        <form>
          <div className="flex flex-col gap-3 mt-3">
            <label className="text-[15px]">Delivery Info</label>
            <div className="flex flex-row gap-5 w-full max-lg:flex-col max-md:flex-wrap">
              <input
                type="text"
                name="name"
                className="flex-1 px-[10px] py-[10px] border-[1px] border-gray-500 outline-[var(--third-color)] rounded-[2px] text-[15px]"
                placeholder="Name"
                onChange={handleChange}
              />
              <input
                type="number"
                name="number"
                className="flex-1 px-[10px] py-[10px] border-[1px] border-gray-500 outline-[var(--third-color)] rounded-[2px] text-[15px]"
                placeholder="Number"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-5">
            <label className="text-[15px]">Address</label>
            <div className="flex flex-row gap-5 w-full">
              <input
                type="text"
                name="address"
                className="flex-1 px-[10px] py-[13px] border-[1px] border-gray-500 outline-[var(--third-color)] rounded-[2px] text-[15px]"
                placeholder="Address"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-row gap-5 w-full max-lg:flex-col">
              <input
                type="number"
                name="pincode"
                className="flex-1 px-[10px] py-[10px] border-[1px] border-gray-500 outline-[var(--third-color)] rounded-[2px] text-[15px]"
                placeholder="Pincode"
                onChange={handleChange}
              />
              <input
                type="text"
                name="town"
                className="flex-1 px-[10px] py-[10px] border-[1px] border-gray-500 outline-[var(--third-color)] rounded-[2px] text-[15px]"
                placeholder="Locality/Town"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-row gap-5 w-full max-lg:flex-col">
              <input
                type="text"
                name="city"
                className="flex-1 px-[10px] py-[10px] border-[1px] border-gray-500 outline-[var(--third-color)] rounded-[2px] text-[15px]"
                placeholder="City"
                onChange={handleChange}
              />
              <input
                type="text"
                name="state"
                className="flex-1 px-[10px] py-[10px] border-[1px] border-gray-500 outline-[var(--third-color)] rounded-[2px] text-[15px]"
                placeholder="State"
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
      </div>

      <div className="w-[35%] h-full flex flex-col p-[10px] max-lg:w-[50%] max-md:w-[100%]">
        <div className="mt-14">
          <h3 className="text-[27px] text-medium text-gray-500 mb-3 max-sm:text-[24px]">
            Order Summary
          </h3>
          <div className="flex justify-between">
            <h5>MRP</h5>
            <h5>₹{cart.totalPrice}</h5>
          </div>
          <div className="flex justify-between mt-2">
            <h5>Delivery Fee</h5>
            <div className="flex gap-3">
              <h5 className="text-green-500">Free</h5>
              <h5 className="line-through">₹10</h5>
            </div>
          </div>

          <div className="h-[1px] w-full border-b-[1px] border-b-slate-300 mt-4" />

          <div className="flex justify-between mt-2">
            <h1 className="text-semibold text-[25px]">Total</h1>
            <h1 className="text-semibold text-[25px]">₹{cart.totalPrice}</h1>
          </div>

          <button
            className="w-full flex items-center justify-center mt-8 bg-[var(--third-color)] py-[13px] font-medium 
            text-white gap-1 text-[14px] max-sm:text-[12px]"
            onClick={handleSubmit}
          >
            PAY NOW
            <AiOutlineArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
