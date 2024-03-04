import { useEffect, useState } from "react"

const ItemView = ({ images }: { images: any }) => {
  
  const [selectedImage, setSelectedImage] = useState(images?.image0)

  useEffect(() => {
    setSelectedImage(images?.image0)
  }, [images])

  return (
    <div 
      className='flex-1 flex h-[70vh] max-sm:h-[30vh] max-lg:h-[60vh] max-md:mb-[20px] 
      max-md:w-[500px] max-sm:w-[100%]'
    >
        <div 
          className="w-[100px] max-lg:w-[80px] max-md:w-[70px] max-sm:w-[50px] flex flex-col 
          gap-2 p-[5px] box-border"
        >
          {images?.image0 && (
            <div
              onClick={() => setSelectedImage(images?.image0)} 
              className="w-full h-[100px] max-lg:h-[80px] max-sm:h-[50px] max-md:h-[70px] cursor-pointer"
            >
              <img src={images.image0} alt="" className='w-full h-full object-contain' />
            </div>
          )}
          {images?.image1 && (
            <div
              onClick={() => setSelectedImage(images?.image1)} 
              className="w-full h-[100px] max-lg:h-[80px] max-sm:h-[50px] max-md:h-[70px] cursor-pointer"
            >
              <img src={images.image1} alt="" className='w-full h-full object-contain' />
            </div>
          )}
          {images?.image2 && (
            <div
              onClick={() => setSelectedImage(images?.image2)} 
              className="w-full h-[100px] max-lg:h-[80px] max-sm:h-[50px] max-md:h-[70px] cursor-pointer"
            >
              <img src={images.image2} alt="" className='w-full h-full object-contain' />
            </div>
          )}
          {images?.image3 && (
            <div
              onClick={() => setSelectedImage(images?.image3)} 
              className="w-full h-[100px] max-lg:h-[80px] max-sm:h-[50px] max-md:h-[70px] cursor-pointer"
            >
              <img src={images.image3} alt="" className='w-full h-full object-contain' />
            </div>
          )}
        </div>
        <div className="w-[80%] h-full">
          <img src={selectedImage} alt="" className='w-full h-full object-contain' />
        </div>
    </div>
  )
}

export default ItemView