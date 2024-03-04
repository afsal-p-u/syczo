import { useLocation } from 'react-router-dom'
import { ItemInfo, ItemView } from '../components'

const Product = () => {
  const location = useLocation()
  const item = location?.state?.item

  return (
    <div 
      className="px-[100px] flex my-[25px] max-md:flex-col max-md:px-[50px] max-sm:px-[15px] max-sm:mt-[60px]
      max-lg:px-[60px] max-md:items-center"
    >
        <ItemView images={item.images} />
        <ItemInfo item={item} />
    </div>
    )
}

export default Product