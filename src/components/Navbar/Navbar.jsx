import React from 'react';

const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between bg-blue-950 px-16 py-8'>
        <div className="logo"><img src="src/assets/logo/logo.png" alt="logo" /></div>
        <div className='flex gap-48'>
          <ul className='flex justify-center items-center gap-8'> 
            <li><a href="#" className='text-white'>WHO WE ARE</a></li>
            <li><a href="#" className='text-white' >WHO WE TREAT</a></li>
            <li><a href="#" className='text-white' >WHAT TO EXPECT</a></li>
            <li><a href="#" className='text-white' >SUCCESS STORIES</a></li>
            <li><a href="#" className='text-white' >HEALTH LIBRARY</a></li>
          </ul>
          <button className='bg-orange-500 text-sm px-4 py-2 text-white cursor-pointer'>CONTACT US</button>
        </div>
      </div>
    </div>
  )
};

export default Navbar;
