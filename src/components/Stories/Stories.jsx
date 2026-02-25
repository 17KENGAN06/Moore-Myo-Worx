import React from 'react'
import Slider from '../Slider/Slider'

const Stories = () => {
  return (
    <div className='flex flex-col bg-navy-500 py-15 px-5'>
        <div>
            <h2 className='text-white text-center text-2xl font-bold mb-3'>Real Recovery Stories: How Moore MyoWorx Transformed Lives</h2>
            <div className='text-white text-center text-base opacity-85'>Hearing patient stories about overcoming the challenges of concussions reminds us how crucial early treatment is in preventing long-term effects and helping individuals reclaim their lives.</div>
        </div>
        <div>
            <Slider/>
        </div>
    </div>
  )
}

export default Stories