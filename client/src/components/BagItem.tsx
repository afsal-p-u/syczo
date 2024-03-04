import { useDispatch } from "react-redux"
import { cartActions } from "../redux/CartRedux"

const BagItem = ({ items }: { items: any }) => {
  const dispatch = useDispatch()

  const handleRemove = (id: number) => {
    dispatch(cartActions.removeFromCart(id))
  }

  return (
    <>
      {items.map((item: any, i: number) => (
        <div className="flex gap-3 mt-5" key={i}>
          <div className="w-[100px] max-lg:w-[80px] h-[100px] max-lg:h-[80px]">
            <img src={item.image} className='w-full h-full object-contain' alt="" />
          </div>
          <div className="w-[calc(100%-100px)] flex flex-col justify-between">
            <div className="flex gap-[50px] ">
              <div className="">
                <h2 className='text-[19px] font-medium max-lg:text-[14px]'>{item.name}</h2>
                <h1 className='text-[20px] font-medium text-[var(--third-color)] max-lg:text-[22px]'>
                  ₹{item.price}
                </h1>
              </div>
            </div>

            <div className="flex gap-5 flex-wrap">
              <div className="flex  gap-1 items-center">
                <label htmlFor="" className='text-[14px] max-lg:text-[12px]'>Size:</label>
                  <p className="font-normal text-[14px]">{item.size.toUpperCase()}</p>
              </div>

              <div className="flex  gap-1 items-center">
                <label htmlFor="" className='text-[14px] max-lg:text-[12px]'>Qty:</label>
                <p className="text-[14px]">{item.quantity}</p>
              </div>

              <div className="flex  gap-1 items-center">
                <label htmlFor="" className='text-[14px] max-lg:text-[12px]'>Color:</label>
                <p className="text-[13px]">{item.color}</p>
              </div>
            </div>

            <div className="">
              <button 
                className='text-[13px] text-red-500 max-lg:text-[13px]'
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>

          </div>
        </div>
      ))}
    </>
  )
}

export default BagItem