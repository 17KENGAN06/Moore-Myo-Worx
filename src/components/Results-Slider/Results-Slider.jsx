import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function ResultsSlider() {
  return (
    <div className="relative w-full max-w-6xl mx-auto py-10">

      <Swiper
        slidesPerView={1.3}
      >
        <SwiperSlide>
          <div className='flex flex-col justify-between border-b-2 border-b-coral-500 px-5 h-[288px]'>
            <div>
                <div className='text-base font-semibold mb-3'>Proven Effectiveness</div>
                <div className='text-base opacity-85 mb-3'>Our patients experience rapid improvement of concussion symptoms through consistency with our treatment protocols, and sustain those results in nearly 90% of cases.</div>
            </div>
            <div className='text-3xl text-coral-500 uppercase mb-2.5'>01</div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='flex flex-col justify-between border-b-2 border-b-black/35 px-5 h-[288px]'>
            <div>
                <div className='text-base font-semibold mb-3'>Personalized Care</div>
                <div className='text-base opacity-85 mb-3'>Our treatment program is comprehensive, hands-on, and tailored to each individual patient. We address the root cause of chronic post concussion symptoms, giving you precise tools to target each symptom at its origin.</div>
            </div>
            <div className='text-3xl text-black/35 uppercase mb-2.5'>02</div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='flex flex-col justify-between border-b-2 border-b-black/35 px-5 h-[288px]'>
            <div>
                <div className='text-base font-semibold mb-3'>Empowerment</div>
                <div className='text-base opacity-85 mb-3'>Our centre’s expertise in treating concussion symptoms gives you the knowledge, confidence, and skills to independently reduce and eliminate your symptoms.</div>
            </div>
            <div className='text-3xl text-black/35 uppercase mb-2.5'>03</div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='flex flex-col justify-between border-b-2 border-b-black/35 px-5 h-[288px]'>
            <div>
                <div className='text-base font-semibold mb-3'>Accessible Expertise</div>
                <div className='text-base opacity-85 mb-3'>Our close-knit team of therapists supports you through your treatment and recovery.</div>
            </div>
            <div className='text-3xl text-black/35 uppercase mb-2.5'>04</div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='flex flex-col justify-between border-b-2 border-b-black/35 px-5 h-[288px]'>
            <div>
                <div className='text-base font-semibold mb-3'>International Acclaim</div>
                 <div className='text-base opacity-85 mb-3'>Our concussion clinic is globally renowned, with proven success in treating post-concussion symptoms.</div>
            </div>
            <div className='text-3xl text-black/35 uppercase mb-2.5'>05</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}