import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { CiLogin } from 'react-icons/ci'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { useAuthContext } from "../context/AuthContext";
import { CartState } from "../redux/CartRedux";
import { Search } from ".";

const Navbar = () => {
  const [search, setSearch] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const resetSearchValue = () => {
    setSearchValue('')
  }

  useEffect(() => {
    searchValue.length > 0 ? setSearch(true) : setSearch(false)
  }, [searchValue])

  const { token } = useAuthContext()
  const cart = useSelector((state: CartState | any) => state.cart)

  return (
    <div 
      className="px-[100px] center-between h-[12vh] border-y-[1px] bg-gray-50 sticky top-0 z-[999] gap-5
      max-md:px-[50px] max-sm:px-[15px] max-lg:px-[60px]"
    >
      <div className="">
        <Link to="/">
          <h1 className="font-bold text-[30px]">SyCzo<span className="text-[var(--third-color)]">.</span></h1>
        </Link>
      </div>

      <div 
        className="w-[600px] max-md:w-[350px] max-sm:absolute max-sm:top-[11vh] max-sm:w-full max-sm:left-0
        max-sm:bg-gray-50 max-sm:border-y-[1px] relative"
      >
        <div 
          className="flex items-center w-full px-[20px] py-[8px] rounded-[10px] justify-between
          border-[1px] max-sm:border-none"
        >
          <input
            type="text"
            placeholder="Search here..."
            value={searchValue}
            className="w-[80%] text-[16px] font-normal border-0 outline-0 bg-transparent"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <AiOutlineSearch size={23} className='cursor-pointer text-[var(--third-color)]' onClick={resetSearchValue} />
        </div>

        {search && (
          <Search value={searchValue} resetValue={resetSearchValue} />
        )}
      </div>

      <div className="center-end gap-7 relative">
        {/* <AiOutlineHeart size={30} className='cursor-pointer hover:text-[var(--third-color)]' /> */}
        {token ? '': (
          <CiLogin size={28} className='cursor-pointer hover:text-[var(--third-color)]' />
          
        )}
        <Link to="/bag">
          <div className="relative">
            <BsBag size={27} className='cursor-pointer text-[var(--third-color)] hover:text-[var(--secondary-color)]' />
            <div 
              className="absolute right-[-8px] top-[-2px] flex justify-center items-center w-[20px] h-[20px]
              rounded-full text-[10px] text-white bg-[var(--third-color)]"
            >
              {cart.totalQuantity || 0}
            </div>
          </div>
        </Link>
        <div className="w-[33px] h-[33px] bg-blue-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default Navbar;
