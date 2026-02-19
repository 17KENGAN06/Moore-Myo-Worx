import React from 'react'

const Hero = () => {
const bg = new URL('../../assets/bg/01.jpg', import.meta.url).href;
  return (
    
    <div style={{ backgroundImage: `url(${bg})` }} className='h-200 bg-blue-950 flex justify-center items-center gap-20 bg-cover bg-right lg:px-10 md:px-10 sm:flex-col sm:py-10 sm:h-[100vh] sm:bg-blue-950 '>
            <div className='max-w-150 lg:w-1/2 md:w-1/2'>
                <div className='text-orange-500 mb-4 text-2xl lg:text-xl md:text-base sm:text-sm'>Effective Concussion Treatment in Guelph</div>
                <h1 className='text-white mb-5 text-6xl lg:text-5xl md:text-4xl sm:text-xl'>Relieve Symptoms & <span className='text-orange-500'>Regain</span> Your Life</h1>
                <p className='text-white mb-6 text-2xl lg:text-xl md:text-base'>35 years of successfully treating Post Concussion Syndrome
                    Do you want to get rid of your concussion symptoms now?</p>
                <button className='bg-orange-500 text-sm p-5 text-white cursor-pointer'>BOOK A FREE CONSULTATION</button>
            </div>
            <div className='lg:w-1/2 md:w-1/2 flex justify-end'><img src="src/assets/content/01.png" alt="doctor" className=''/></div>
    </div>
  )
}

export default Hero