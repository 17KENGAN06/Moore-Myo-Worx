import React from 'react'

const About = () => {
  return (
    <div className='flex justify-center items-center gap-20'>
            <div className='max-w-150 py-20'>
                <h1 className='text-black mb-5 text-6xl'>Why Choose Moore MyoWorx for <span className='text-orange-500'>Concussion Care?</span></h1>
                <p className='text-black mb-6 text-lg'>With 35 years of experience treating concussion symptoms, Moore MyoWorx offers the knowledge 
                    and tools needed to recover from post-concussion symptoms long after a head injury.</p>
                <p className='text-black mb-6 text-lg'>We offer both standard treatments and our Accelerated Recovery Program (ARP), with standard 
                    being regular treatments over a longer period of time and the ARP being an intensive 2-week program to get you results faster.</p>
                <p className='text-black mb-6 text-lg'>If you chronically suffer from any of the following concussion symptoms: Headaches, dizziness, 
                    fatigue, brain fog, sensitivity to light and noise, irritability, vision problems, balance problems, difficulty concentrating don't 
                    hesitate, contact us. Your concussion recovery is our top priority.</p>
            </div>
            <div><img src="src/assets/content/02.png" alt="patient" /></div>
        </div>
  )
}

export default About