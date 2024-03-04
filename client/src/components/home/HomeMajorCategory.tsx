import { Categories } from '..'

type HomeMajorCategory = {
  name: string,
  items: any
}

const HomeMajorCategory = ({ name, items }: HomeMajorCategory) => {
  return (
    <div className='mt-[30px] max-md:px-[50px] max-sm:px-[15px]'>
      <div className="flex justify-between mb-3">
        <h3 className='font-medium text-[20px] max-md:text-[16px]'>
          {name}
        </h3>
        <span 
          className='text-[13px] font-medium text-[var(--third-color)] cursor-pointer max-md:text-[11px]'
        >
          Show All
        </span>
      </div>
      <Categories items={items} />
    </div>
  )
}

export default HomeMajorCategory