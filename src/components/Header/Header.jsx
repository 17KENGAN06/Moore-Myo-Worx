import React from 'react';

const header = () => {
  return (
    <div>
      <div className="bg-navy-500 flex justify-between items-center py-5 px-5">
        <img src="../../assets/logo/logo.png" alt="logo" className="w-30 h-7" />
        <button className="bg-coral-500 text-white uppercase py-2 px-4 text-sm cursor-pointer shadow-coralGlow">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default header;
