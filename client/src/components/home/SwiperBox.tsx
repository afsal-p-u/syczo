import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper1, Swiper2, Swiper3 } from '../../assets';

const SwiperBox = () => {
  return (
    <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={'100px'}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000 }}
        // loop={true}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        className='w-full h-[80vh] max-md:h-[50vh] max-lg:h-[60vh] max-sm:h-[30vh] px-[100px] max-md:px-[50px] max-sm:px-[15px] 
        mt-5 bg-gray-50 max-sm:mt-[20px]'
    >
        <SwiperSlide className='flex justify-center'>
          <img src={Swiper1} alt="" className='w-[full] h-full object-contain' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Swiper2} alt="" className='w-[full] h-full object-contain' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Swiper3} alt="" className='w-[full] h-full object-contain' />
        </SwiperSlide>
    </Swiper>
  )
}

export default SwiperBox