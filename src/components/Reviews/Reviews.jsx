import React from 'react'

const Reviews = () => {
  return (
    <div className='flex flex-col pt-8 pb-13 px-5'>
        <div>
            <h2 className='text-2xl font-bold mb-12.5'>Treatment Success Stories of Moore MyoWorx Patients</h2>
        </div>
        <div className='flex flex-col gap-12.5'>
            <div>
                <iframe width="100%" height="233" src="https://www.youtube.com/embed/LQS4b113i3Q?si=kSxmDI2N-EAwsTZG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='mb-5'></iframe>
                <div className='text-blue-400 text-base mb-3'>Leyna</div>
                <p className='text-base'>“I lived with Post-Concussion Syndrome for years...nothing worked. In two weeks at Myo Worx, my symptoms improved, and I don’t need my glasses anymore”</p>
            </div>
            <div>
                <iframe width="100%" height="233" src="https://www.youtube.com/embed/nujiBV19QA0?si=V6kCtHYIkj-Cr28P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='mb-5'></iframe>
                <div className='text-blue-400 text-base mb-3'>Katie</div>
                <p className='text-base'>“Five concussions left me with daily migraines. After Myo Worx, I’m nearly migraine-free and know how to stop them”</p>
            </div>
            <div>
                <iframe width="100%" height="233" src="https://www.youtube.com/embed/06J8eLVUw54?si=QPHMyLejQ5LArHKX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='mb-5'></iframe>
                <div className='text-blue-400 text-base mb-3'>Phil</div>
                <p className='text-base'>“Two weeks with ARP helped me pinpoint the causes of my simptoms and finally make real progress in my recovery”</p>
            </div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default Reviews