import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import ResultsSlider from '../Results-Slider/Results-Slider'

const Results = () => {
  return (
    <div className='px-4 py-11'>
        <div>
            <div>
                <h2 className='text-xl font-semibold mb-4'>Patients say our 2-week intensive Accelerated Recovery Program is worth the travel to Guelph. After years of struggling with symptoms, they see improvement in days and go home with real changes.</h2>
                <p className='text-base mb-12'>Ready to reclaim your life from persistent concussion symptoms? Our Accelerated Recovery Program (ARP) at Moore MyoWorx could be the game-changer you need. <span className='font-bold'>This intensive 2-week program targets the root cause of your concussion symptoms and helps you regain control of your life.</span> Our pioneering neuromuscular treatment has restored hope to hundreds of post concussion patients who have travelled to our internationally renowed clinic in Guelph, Ontario, Canada.</p>
            </div>
            <div>
                <ResultsSlider/>
            </div>
        </div>
        <div className='flex flex-col gap-y-5'>
            <div className='bg-navy-500 py-15 px-12.5'>
                <img src="../../assets/icons/program-1.png" alt="content" className='mb-5'/>
                <div className='text-white text-2xl font-semibold mb-5'>Accelerated Recovery Program (ARP) at Moore MyoWorx</div>
                <div className='text-white text-base '>Discover how the ARP is transforming lives and guiding individuals back to enjoying life to the fullest. At the Moore MyoWorx Wellness Centre & Concussion Clinic, our experts create step-by-step, individualized treatment plans that provide more than temporary relief.</div>
            </div>
            <div className='bg-coral-500 py-15 px-12.5'>
                <img src="../../assets/icons/program-2.png" alt="content" className='mb-5'/>
                <div className='text-white text-2xl font-semibold mb-5'>The Leading International Clinic for Concussion Treatment & Chronic Conditions</div>
                <div className='text-white text-base '>Learn how to heal your body from persistent symptoms that have extended beyond the typical recovery period at Moore MyoWorx Wellness Centre & Concussion Clinic in Guelph, Ontario</div>
            </div>
        </div>
    </div>
  )
}

export default Results