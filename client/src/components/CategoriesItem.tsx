import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const CategoriesItem = ({ item }: any) => {
 
  return (
    <Link to="/product" state={{item}}>
      <div
        className="w-[210px] min-h-[270px] cursor-pointer rounded-lg shadow-md 
        border-[1px]"
      >
        <div className="w-full h-[160px]">
          <img
            src={item.baseData[0].images[0]}
            className="w-full h-full object-contain"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-1 py-3 px-3">
          <h2 className="text-[13px] font-medium break-word">
            {item.shortName}
          </h2>

          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <h3 className="font-semibold text-xl">
                ₹ {item.baseData[0].offerPrice}
              </h3>
              <p className="text-[13px] line-through font-medium">
                ₹ {item.baseData[0].offerPrice}
              </p>
            </div>
            <p className="text-sm font-medium text-red-500">-66% off</p>
          </div>

          <div className="flex gap-1">
            {/* {starArray} */}
            <AiFillStar className="text-yellow-500 text-[15px]" />
            <AiFillStar className="text-yellow-500 text-[15px]" />
            <AiFillStar className="text-yellow-500 text-[15px]" />
            <AiFillStar className="text-yellow-500 text-[15px]" />
            <AiOutlineStar className="text-yellow-500 text-[15px]" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoriesItem;
