import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import leftArrow from '../../assets/icons/arrow-left.png'
import rightArrow from '../../assets/icons/arrow-right.png'

import { Navigation, Pagination } from 'swiper/modules'

export default function Slider() {
  return (
    <div className="relative w-full max-w-6xl mx-auto py-10">

        {/* Кастомная кнопка назад */}
      <button className="custom-prev absolute left-1/3 bottom-0 -translate-y-1/2 z-10">
        <img src={leftArrow} alt="Previous" className="w-14 h-3" />
      </button>

      {/* Кастомная кнопка вперёд */}
      <button className="custom-next absolute right-1/3 bottom-0 -translate-y-1/2 z-10">
        <img src={rightArrow} alt="Next" className="w-14 h-3" />
      </button>

      <Swiper
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl = '.custom-prev'
        swiper.params.navigation.nextEl = '.custom-next'
        }}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        spaceBetween={30}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="flex flex-col justify-start items-center bg-white/10 py-5 px-6 h-[100%]">
            <div className='text-white text-center text-base font-bold mb-3'>How is the Moore MyoWorx ARP concussion treatment different? </div>
            <img src="../../assets/icons/slider.png" alt="content" className='mb-4' />
            <p className='text-white text-center text-base mb-6'>I was able to change my entire life with Moore Myoworx! I was scared because I tried so many things and almost lost hope, but thanks to Moore Myoworx, I can enjoy life again. If you have tried several programs and haven’t received the results that you want, come to Moore Myoworx – the staff and the program will advance your recovery and life in ways you never would have dreamt of.</p>
            <img src="../../assets/icons/cory.png" alt="content" className='mb-4' />
            <div className='text-white text-sm font-semibold opacity-50'>Cory, Sudbury, ON</div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col justify-start items-center bg-white/10 py-5 px-6 h-[100%]">
            <div className='text-white text-center text-base font-bold mb-3'>Why choose the ARP for Post concussion syndrome?</div>
            <img src="../../assets/icons/slider.png" alt="content" className='mb-4' />
            <p className='text-white text-center text-base mb-6'>I went and tried a bunch of different outlets. I tried a whole bunch of doctors. I tried physical therapy. I tried chiropractic. I tried acupuncture. I tried everything. It’s totally different here, it’s a very scientific approach. I think it’s really worth it. You can get back to how you were. I would really recommend doing this.</p>
            <img src="../../assets/icons/cory.png" alt="content" className='mb-4' />
            <div className='text-white text-sm font-semibold opacity-50'>Brian, New York City, NY</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}