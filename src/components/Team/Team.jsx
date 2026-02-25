import React from 'react'

const Team = () => {
  return (
    <div className='flex flex-col gap-y-2.5'>
        <div className='bg-navy-500 pt-10 px-4 h-[582px] relative'>
            <div className='text-white text-2xl font-semibold mb-1'>Bert Oucharek</div>
            <div className='text-white text-base font-bold mb-3'>Registered Kinesiologist</div>
            <p className='text-white text-base'>Bert joined the Moore MyoWorx Clinic team in 2004. He is a professional member of the Ontario Kinesiology Association and registered with the College of Kinesiologists of Ontario. Having graduated from the University of Guelph with an Honours degree in Human Kinetics and minor in Nutritional Science in 1995, Bert has a multi-faceted background in rehabilitation.</p>
            <img src="../../assets/team/01.png" alt="content" className='absolute bottom-0 right-0'/>
        </div>
        <div className='bg-coral-500 pt-10 px-4 h-[582px] relative'>
            <div className='text-white text-2xl font-semibold mb-1'>Terry Moore</div>
            <div className='text-white text-base font-bold mb-3'>Neuromuscular & Cardiovascular Physiologist</div>
            <p className='text-white text-base'>Terry Moore is the founder, developer and president of MyoWorx Inc. and the Moore MyoWorx Clinic. Terry is a Neuromuscular and Cardiovascular Physiologist. During his Masters and Ph.D. studies, Terry’s research resulted in a number of papers and publications on the intricate relationships that exist between the muscles, blood flow, oxygen uptake and various forms and levels of stimulation.</p>
            <img src="../../assets/team/02.png" alt="content" className='absolute bottom-0 right-0'/>
        </div>
        <div className='bg-navy-500 pt-10 px-4 h-[582px] relative'>
            <div className='text-white text-2xl font-semibold mb-1'>Alex Richard</div>
            <div className='text-white text-base font-bold mb-3'>Registered Kinesiologist</div>
            <p className='text-white text-base'>Alex joined the Moore MyoWorx team in 2016. Alex graduated from the University of Guelph Honours Bachelor of Science (Human Kinetics) program in 2015. He is a professional member of the Ontario Kinesiology Association and is registered with the College of Kinesiologists of Ontario. Alex has a background in coaching minor hockey and enjoys playing recreational sports such as soccer and hockey.</p>
            <img src="../../assets/team/03.png" alt="content" className='absolute bottom-0 right-0'/>
        </div>
        <div className='bg-coral-500 pt-10 px-4 h-[582px] relative'>
            <div className='text-white text-2xl font-semibold mb-1'>Dragana Trkulja-Bosnic</div>
            <div className='text-white text-base font-bold mb-3'>Physiotherapy Assistant</div>
            <p className='text-white text-base'>Dragana joined the Moore MyoWorx team in 2010. She has a Bachelor of Science degree in Biology from the University of Belgrade, 1991.She also graduated from the Trios College Physiotherapist Assistant Program in 2010. Dragana was hired following her work placement at Moore MyoWorx because she demonstrated an excellent ability to learn and provide compassionate care for our patients.</p>
            <img src="../../assets/team/04.png" alt="content" className='absolute bottom-0 right-0'/>
        </div>
        
    </div>
  )
}

export default Team