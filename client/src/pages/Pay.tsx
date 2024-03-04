import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios'

const Pay = () => {
  const [selected, setSelected] = useState("");
  const [id, setId] = useState(null);
  const location = useLocation();
  const navigate = useNavigate()
  const session = location?.state?.session;
  const ids = location?.state?.ids;
  const cid = location?.state?.cid;


  useEffect(() => {
    !session && navigate('/checkout')
  }, [])

  const handleClick = (e: any) => {
    setSelected(e.target.id);
  };

  const handlePay = () => {
    console.log({ upiId: id, payment_session: session, ids: ids, cid: cid})
    axios
      .post(`${import.meta.env.VITE_SERVER_URL}/payments/upi`, {
        upiId: id,
        payment_session: session,
        ids: ids,
        cid: cid
      })
      .then((res) => {
        navigate('/')
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
        navigate('/checkout')
      });
  };

  return (
    <div className="w-[100%] min-h-[300px] flex items-center justify-center mt-[100px]">
      <div className="w-[400px] p-[15px] shadow-xl rounded-md border-[1px] border-[var(--third-color)]">
        <div className="">
          <h3 className="text-center font-semibold text-[20px] mb-3">
            CzSx<span className="text-[--third-color]">.</span>
          </h3>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="method"
                id="upi"
                onClick={handleClick}
              />
              <label htmlFor="upi" className="text-[14px] font-normal">
                UPI
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="method"
                id="card"
                onClick={handleClick}
              />
              <label htmlFor="upi" className="text-[14px] font-normal">
                CARD
              </label>
            </div>
          </div>

          {selected === "upi" && (
            <div className="mt-3">
              <input
                type="text"
                name="upi"
                placeholder="UPI ID"
                className="border-[1px] w-full outline-none px-[15px] py-[7px] text-[13px]"
                onChange={(e: any) => setId(e.target.value)}
              />
            </div>
          )}
          {selected === "card" && <p>Not available</p>}
          {selected !== "" && (
            <div className="mt-4 flex justify-end">
              <button
                className="bg-[var(--third-color)] px-[15px] py-[4px] text-[13px] text-white rounded-md"
                onClick={handlePay}
              >
                Pay
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pay;
