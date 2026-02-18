import React from 'react'

const Contact = () => {

    const bg = new URL('../../assets/bg/02.jpg', import.meta.url).href;
  return (
    <div className='h-200 bg-blue-950 flex items-center gap-20 bg-cover bg-right '>
            <div className='flex justify-center flex-col items-center w-1/2'>
                <h2 className='text-white mb-5 text-6xl'>Take the first step</h2>
                <p className='text-white text-lg text-center'>Contact us for a free 30-minute discovery call.</p>
                <p className='text-white font-medium text-lg mb-5 text-center'>Call us at 519-837-0701 or fill in the form below</p>
                <p className='text-white font-medium text-lg mb-5 text-center w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum atque quam corporis ducimus nisi blanditiis debitis! Labore 
                    ea nobis illo sed ab repellat vel! Delectus consequuntur eos corporis magnam pariatur maiores. Omnis, odio assumenda quos 
                    fugiat laboriosam molestiae ipsa labore eligendi veniam! Quod, ipsam corrupti odit unde voluptas ex iure? Consectetur, fuga id. 
                    Placeat molestias, perspiciatis asperiores rem corrupti ex ratione vero dolorem, laborum totam fugiat ullam neque maxime 
                    facilis nesciunt non repellendus hic dolorum alias quia odio provident est quibusdam! Reprehenderit odit, laudantium odio aliquam 
                    quam perspiciatis illo, esse illum mollitia dolorum laborum commodi, blanditiis atque facere expedita ea?</p>

            </div>
            <div style={{ backgroundImage: `url(${bg})` }} className='h-full w-1/2 bg-cover bg-center'></div>
    </div>
  )
}

export default Contact