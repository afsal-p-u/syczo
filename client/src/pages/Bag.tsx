import { BiSolidOffer } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

import { BagItem } from "../components";
import { useAuthContext } from "../context/AuthContext";

const Bag = () => {
  const { cart }: any = useSelector((state) => state);
  const { token } = useAuthContext();
  const navigate = useNavigate()

  const handleOrder = () => {
    axios
      .post(`${import.meta.env.VITE_SERVER_URL}/order`, {
        ...cart,
        uid: JSON.parse(token || "").uid,
      })
      .then((res) => {
        console.log(res.data);
        navigate('/checkout', {state: {ids: res.data}})
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <div
      className="px-[100px] py-[20px] min-h-[80vh] mt-7 w-full flex gap-8 box-border max-lg:px-[60px] max-md:flex-col 
      max-lg:mb-[50px] max-md:items-center max-md:px-[50px] max-sm:px-[15px]"
    >
      <div className="flex-1 h-full px-[10px] max-lg:w-[50%] max-md:w-[100%]">
        <h3
          className="text-[var(--third-color)] font-semibold text-[28px] max-lg:text-[23px] max-md:text-[18px]
          max-md:text-center"
        >
          Shopping Bag
        </h3>
        <div className="flex flex-wrap gap-5 max-md:justify-center">
          <BagItem items={cart.itemList} />
        </div>
      </div>

      <div
        className="flex-2 h-full flex flex-col p-[10px] max-lg:w-[50%] mt-[50px] max-md:w-[100%] max-md:justify-center
        max-md:items-center"
      >
        <div
          className="px-[10px] py-[10px] flex items-center justify-between gap-4 border-[1px] border-gray-500
          max-lg:px-[6px] max-lg:py-[6px]"
        >
          <BiSolidOffer className="text-[var(--third-color)] text-[25px] max-sm:text-[20px]" />
          <input
            type="text"
            name=""
            placeholder="Coupon Code"
            className="border-none outline-none bg-transparent text-[15px] max-sm:text-[11px] max-lg:text-[12px]"
          />
          <button
            className="px-[10px] max-sm:px-[5px] py-[5px] text-[13px] max-lg:tex-[12px] rounded-md bg-[var(--third-color)] 
            text-white max-sm:py-[3px] max-sm:text-[10px]"
          >
            Apply
          </button>
        </div>

        <div className="mt-14 max-md:w-[400px] max-sm:w-[100%]">
          <h3 className="text-[27px] text-medium text-gray-500 mb-3 max-lg:text-[24px]">
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
              text-white gap-1  text-[16px] max-sm:text-[13px]"
            onClick={handleOrder}
          >
            PLACE ORDER
            <AiOutlineArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bag;
