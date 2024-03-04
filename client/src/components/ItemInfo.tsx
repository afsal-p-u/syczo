import { useDispatch } from "react-redux/es/exports";
import { useState } from "react";
import { BsBag } from "react-icons/bs";
import { LiaShippingFastSolid } from "react-icons/lia";
import { cartActions } from "../redux/CartRedux";
import { colorsCollection } from "../constants";

const ItemInfo = ({ item }: { item: any }) => {
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  const addToCart = () => {
    if (!size || !color) {
      return 
    }

    dispatch(
      cartActions.addToCart({
        id: item._id,
        name: item.name,
        price: item.price,
        color: color,
        size: size,
        image: item.images.image0,
        description: item.description,
      })
    );
  };

  return (
    <div className="flex-1 ml-[30px] max-sm:ml-0 max-md:w-[500px] max-md:ml-0 max-sm:w-[100%]">
      <h6 className="font-medium text-[23px] max-lg:text-[16px] break-words">
        {item.name}
      </h6>
      <p className="font-normal text-[16px] max-lg:text-[13px]">
        {item.description}
      </p>
      <h1 className="mt-3 font-medium text-[30px] text-[var(--third-color)] flex gap-3 items-center">
        ₹{item.price}
        <p className="line-through text-gray-500 text-[20px]">
        ₹{item.offerPrice}
        </p>
      </h1>

      <div className="flex justify-between mt-[30px]">
        <h5 className="text-[16px] max-lg:text-[13px]">Size:</h5>
        <h5 className="text-[16px] max-lg:text-[13px]">Size Chart</h5>
      </div>

      <div className="flex flex-row gap-3 items-center mt-2">
        {item.sizes?.map((itemSize: string, i: number) => (
          <div
            key={i}
            className={`w-[35px] h-[35px] bg-slate-200 p-[5px] flex items-center justify-center rounded-sm cursor-pointer
            uppercase
            ${itemSize === size && "border-[1px] border-[var(--third-color)]"}`}
            onClick={() => setSize(itemSize)}
          >
            {itemSize}
          </div>
        ))}
      </div>

      <h6 className="mt-4">Color: {item?.colors[0]}</h6>
      <div className="mt-2 flex gap-2">
        {item.colors?.map((itemColor: string, i: number) => {
          const value = colorsCollection.find((item) => item.name === itemColor)

          return (
            <div
              key={i}
              className={`w-[40px] h-[40px] bg-transparent p-[2px]
              ${itemColor === color && "border-[1px] border-[var(--third-color)]"} 
              rounded-full cursor-pointer`}
              onClick={() => setColor(itemColor)}
            >
              <div 
                className={`w-full h-full rounded-full ${value && `${value.value}`}`}
              ></div>
            </div>
          );
        })}
      </div>

      <div className="flex mt-7 max-md:justify-center">
        <button
          className="flex items-center gap-3 justify-center bg-[var(--third-color)] px-[100px] py-[13px]
          max-lg:px-[80px] rounded-sm"
          onClick={addToCart}
        >
          <BsBag className="text-white text[20px] max-lg:text-[14px]" />
          <h3 className="font-medium text-white text-[14px] max-lg:text-[11px] max-sm:text-[10px]">
            ADD TO BAG
          </h3>
        </button>
      </div>

      <div className="flex gap-3 items-center mt-5 max-md:justify-center">
        <LiaShippingFastSolid size={23} className="text-[var(--third-color)]" />
        <h6 className="font-medium text-[15px] max-lg:text-[13px] text-gray-500">
          Free shippinganywhere in india in 7-9 days
        </h6>
      </div>
    </div>
  );
};

export default ItemInfo;
