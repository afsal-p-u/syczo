import React from 'react'

type HomeCategoryItemProps = {
  name: string,
  image: string,
}

const HomeCategoryItem = ({ name, image }: HomeCategoryItemProps) => {
  return (
    <div className='cursor-pointer flex flex-col justify-center items-center w-[50px]'>
      <div className="w-[50px] h-[50px] rounded-full overflow-hidden border-[1px] border-slate-400 shadow-sm">
        <img src={image} alt="" className='w-full h-full object-contain' />
      </div>
      <p className='font-medium text-xs mt-1'>
        {name}
      </p>
    </div>
  )
}

export default HomeCategoryItem
