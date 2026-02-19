import React from 'react'

const Works = () => {
  return (
    <div className='flex gap-20 py-20 px-30'>
        <div className='flex flex-col w-1/2 justify-center'>
            <h2 className='text-left font-semibold text-5xl mb-4 lg:text-4xl'>How Moore MyoWorx<br></br> concussion treatment works</h2>
            <div className='text-left text-2xl opacity-50 lg:text-xl'>For 35+ years, we have helped to alleviate a variety of symptoms including fatigue, headaches, limb pain, nerve issues, brain fog, sensitivity to light, TMJ dysfunction, sleep problems, eye pain and more.</div>
        </div>
        <div className='grid grid-cols-1 gap-6 w-1/2'>
            <div className=''>
                <img src="src/assets/icons/04.png" alt="logo" className='h-12 w-12 mb-4'/>
                <h3 className='text-2xl mb-4 lg:text-xl'>Innovative neuromuscular approach</h3>
                <div className='text-lg opacity-50 lg:text-xl'>Moore MyoWorx distinguishes itself not merely by our success rate but by our innovative neuromuscular approach that targets the heart of persistent post-concussion symptoms.</div>
            </div>
            <div className=''>
                <img src="src/assets/icons/05.png" alt="logo" className='h-12 w-12 mb-4'/>
                <h3 className='text-2xl mb-4 lg:text-xl'>Deep Dive into Our Neuromuscular Approach</h3>
                <div className='text-lg opacity-50 lg:text-xl'>Our treatment includes thorough evaluations, tailored therapy sessions, and a series of precise exercises designed to retrain and rejuvenate muscle function.</div>
            </div>
            <div className=''>
                <img src="src/assets/icons/06.png" alt="logo" className='h-12 w-12 mb-4'/>
                <h3 className='text-2xl mb-4 lg:text-xl'>Personalized approach to Concussions and Traumatic Brain Injuries</h3>
                <div className='text-lg opacity-50 lg:text-xl'>Our approach is rooted in evidence and deeply personalized, having enabled 89% of our clients to step out from the concussion’s shadow and into the light of recovery.</div>
            </div>
            <div className=''>
                <img src="src/assets/icons/07.png" alt="logo" className='h-12 w-12 mb-4'/>
                <h3 className='text-2xl mb-4 lg:text-xl'>Effectively heal the root cause of injury</h3>
                <div className='text-lg opacity-50 lg:text-xl'>Approved by Health Canada and the FDA, the patented TM20 device uses electrical signals to restore proper blood flow to the paraspinal muscles. TM20, along with the exercise protocols, effectively heal the root cause of injury, rather than simply managing symptoms.</div>
            </div>
        </div>
    </div>
  )
}

export default Works