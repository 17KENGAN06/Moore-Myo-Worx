import React from 'react'

const Hero = () => {
const bg = new URL('../../assets/bg/01.jpg', import.meta.url).href;
  return (
    
    <div style={{ backgroundImage: `url(${bg})` }} className='h-200 bg-blue-950 flex justify-center items-center gap-20 bg-cover bg-right '>
            <div className='max-w-150 ju'>
                <div className='text-orange-500 mb-4 text-2xl'>Effective Concussion Treatment in Guelph</div>
                <h1 className='text-white mb-5 text-6xl'>Relieve Symptoms & <span className='text-orange-500'>Regain</span> Your Life</h1>
                <p className='text-white mb-6 text-2xl'>35 years of successfully treating Post Concussion Syndrome
                    Do you want to get rid of your concussion symptoms now?</p>
                <button className='bg-orange-500 text-sm p-5 text-white cursor-pointer'>BOOK A FREE CONSULTATION</button>
            </div>
            <div><img src="src/assets/content/01.png" alt="doctor"/></div>
    </div>
  )
}

export default Hero