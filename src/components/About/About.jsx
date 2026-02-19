import React from 'react'

const About = () => {
  return (
    <div className='flex justify-center items-center gap-20 py-20 px-10'>
            <div className='max-w-150 lg:w-1/2 lg:max-w-none md:w-1/2 '>
                <h1 className='text-black mb-8 text-6xl lg:text-5xl md:text-4xl'>Why Choose Moore MyoWorx for <span className='text-orange-500'>Concussion Care?</span></h1>
                <p className='text-black mb-6 text-lg lg:mb-4 lg:text-base md:text-sm '>With 35 years of experience treating concussion symptoms, Moore MyoWorx offers the knowledge 
                    and tools needed to recover from post-concussion symptoms long after a head injury.</p>
                <p className='text-black mb-6 text-lg lg:mb-4 lg:text-base md:text-sm'>We offer both standard treatments and our Accelerated Recovery Program (ARP), with standard 
                    being regular treatments over a longer period of time and the ARP being an intensive 2-week program to get you results faster.</p>
                <p className='text-black mb-6 text-lg lg:mb-4 lg:text-base md:text-sm'>If you chronically suffer from any of the following concussion symptoms: Headaches, dizziness, 
                    fatigue, brain fog, sensitivity to light and noise, irritability, vision problems, balance problems, difficulty concentrating don't 
                    hesitate, contact us. Your concussion recovery is our top priority.</p>
            </div>
            <div className='lg:w-1/2 md:w-1/2'><img src="src/assets/content/02.png" alt="patient" className='max-w-[100%]' /></div>
        </div>
  )
}

export default About