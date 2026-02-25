import React from 'react'

const Meet = () => {
  return (
    <div className='flex flex-col gap-y-10 px-4 py-12.5'>
        <div>
            <div className='bg-navy-500 px-5 py-12.5'>
                <div className='text-2xl text-white text-center font-bold mb-5'>Contact Us To Book An Appointment Or To Learn More About Our Treatment</div>
                <button className="bg-coral-500 w-full text-white uppercase py-5 px-4 text-base cursor-pointer shadow-coralGlow">
                    BOOK YOUR FREE CONSULTATION
                </button>
            </div>
            <div className='bg-[url(../../assets/bg/meet-1.jpg)] h-86 bg-no-repeat bg-cover bg-center'></div>
        </div>
        <div>
            <div className='text-2xl text-center font-bold mb-4'>Meet Our Team</div>
            <div className='text-base text-center opacity-85'>At the core of Moore MyoWorx’s successful treatment plans is our team of devoted professionals. Our interdisciplinary team consists of neuromuscular therapy experts, physical therapists, and concussion specialists, all sharing the goal to provide exceptional care.</div>
        </div>
    </div>
  )
}

export default Meet