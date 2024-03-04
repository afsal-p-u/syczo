import { useState } from 'react'

import { CategoriesNavItems, NavbarMenuItems } from '../constants'

const NavbarItems = () => {
  const [hoverItems, setHoverItems] = useState<any>(null)

  const hoverItemsCheck = (name: string) => {
    if (name === "HOME" || name === "HOT OFFERS" || name === 'PERFUMES') {
      setHoverItems(null)
      return
    } 
    const item: any = CategoriesNavItems?.filter((item) => item.name === name)
    setHoverItems(item[0].items)
  }

  return (
    <div className='w-full h-[7vh] center-center py-3 gap-8 font-medium'>
        {NavbarMenuItems.map((item: any, i: number) => (
          <li 
            key={i} 
            className='group hover:text-[#ff8f9c] cursor-pointer relative transition duration-300 ease-out'
            onMouseEnter={() => hoverItemsCheck(item.name)}
          >
            {item.name}
            <div className="w-full h-[2px] left-0 bg-[#ff8f9c] hidden group-hover:block"></div>

            {hoverItems && (
              <div 
                className="absolute px-[18px] py-[20px] hidden group-hover:block left-0 w-[200px] rounded-md bottom-[-170px]
                font-normal text-[15px] mb-5 shadow-md z-10 bg-white"
              >
                <ul className='text-gray-500 flex flex-col gap-1'>
                  {hoverItems.map((item: any, i:number) => {
                    return (
                      <li className='hover:text-[#ff8f9c]' key={i}>{item.name}</li>
                    )
                  })}
                </ul>
              </div>
            )}
          </li>
        ))}
    </div>
  )
}

export default NavbarItems