import React from 'react'

const Service = () => {
    const bgOne = new URL('../../assets/bg/03.jpg', import.meta.url).href;
    const bgTwo = new URL('../../assets/bg/04.jpg', import.meta.url).href;
  return (
    <div className='flex gap-5 mb-22'>
        <div style={{ backgroundImage: `url(${bgTwo})` }} className='bg-blue-950 flex h-150 w-1/3 p-10 pr-20 flex-col'>
            <img src="src/assets/icons/01.png" alt="logo" className='h-12 w-12 mb-4'/>
            <div className='text-white font-medium text-3xl mb-4'>1990</div>
            <div className='text-white text-2xl mb-4'>More than 35 Years of Successfully Treating Concussions, Chronic & Complex Conditions</div>
            <div className='text-white opacity-50 text-lg'>Founder of Moore MyoWorx, Terry Moore is a world-renowned Neuromuscular & Cardiovascular Physiologist.</div>
        </div>
        <div style={{ backgroundImage: `url(${bgOne})` }} className='bg-blue-950 flex h-150 w-1/3 p-10 p-20 flex-col'>
            <img src="src/assets/icons/02.png" alt="logo" className='h-12 w-12 mb-4'/>
            <div className='text-white font-medium text-3xl mb-4'>7+</div>
            <div className='text-white text-2xl mb-4'>We specialize in treating:</div>
            <div className=''>
                <ul>
                    <li className='text-white text-lg'>Post-Concussion Syndrome</li>
                    <li className='text-white text-lg'>Headaches & Migraines</li>
                    <li className='text-white text-lg'>Dizziness & Nausea</li>
                    <li className='text-white text-lg'>Chronic Pain</li>
                    <li className='text-white text-lg'>Tinnitus & Ear Issues</li>
                    <li className='text-white text-lg'>Vision Problems</li>
                    <li className='text-white text-lg'>Jaw Pain & TMJ Dysfunction</li>
                    <li className='text-white text-lg'>And More!</li>
                </ul>
            </div>
        </div>
        <div className='bg-blue-950 flex h-150 w-1/3 p-10 pr-20 flex-col'>
            <img src="src/assets/icons/03.png" alt="logo" className='h-12 w-12 mb-10'/>
            <div className='text-white text-2xl mb-10'>Find out if you are a good candidate for our Accelerated Recovery Program (ARP).</div>
            <button className='bg-orange-500 text-sm p-5 text-white cursor-pointer'>BOOK A FREE CONSULTATION</button>
        </div>
    </div> 
  )
}

export default Service