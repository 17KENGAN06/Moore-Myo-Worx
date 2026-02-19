import React from 'react';

const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between bg-blue-950 px-16 py-8 lg:gap-12'>
        <div className="flex justify-center items-center"><img src="src/assets/logo/logo.png" alt="logo" /></div>
        <div className='flex gap-48 lg:gap-16'>
          
          <button className='bg-orange-500 text-sm px-4 py-2 text-white cursor-pointer'>CONTACT US</button>
        </div>
      </div>
    </div>
  )
};

export default Navbar;
