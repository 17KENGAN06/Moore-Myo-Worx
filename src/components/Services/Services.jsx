import React from 'react';

const Services = () => {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="bg-[url(../../assets/bg/services-1.jpg)] bg-no-repeat bg-cover bg-center pt-9 pl-4 pr-12 h-[532px]">
        <img src="../../assets/icons/services-1.png" alt="content" className="w-10.5 h-10.5 mb-4" />
        <div className="text-white text-2xl font-bold mb-4">1990</div>
        <h3 className="text-white text-2xl font-semibold mb-3">
          More than 35 Years of Successfully Treating Concussions, Chronic & Complex Conditions
        </h3>
        <p className="text-silver-900">
          Founder of Moore MyoWorx, Terry Moore is a world-renowned Neuromuscular & Cardiovascular
          Physiologist.
        </p>
      </div>
      <div className="bg-[url(../../assets/bg/services-2.jpg)] bg-no-repeat bg-cover bg-bottom pt-9 pl-4 pr-12 h-[532px]">
        <img src="../../assets/icons/services-2.png" alt="content" className="w-10.5 h-10.5 mb-4" />
        <div className="text-white text-2xl font-bold mb-4">7+</div>
        <h3 className="text-white text-2xl font-semibold mb-3">We specialize in treating:</h3>
        <p className="text-silver-900">
          Post-Concussion Syndrome Headaches & Migraines Dizziness & Nausea Chronic Pain Tinnitus &
          Ear Issues Vision Problems Jaw Pain & TMJ Dysfunction And More!
        </p>
      </div>
      <div className="bg-navy-500 pt-9 pl-4 pr-12 h-[532px]">
        <img src="../../assets/icons/services-3.png" alt="content" className="w-10.5 h-10.5 mb-9" />
        <h3 className="text-white text-2xl font-semibold mb-10">
          Find out if you are a good candidate for our Accelerated Recovery Program (ARP).
        </h3>
        <button className="bg-coral-500 text-white text-base font-semibold uppercase py-5 w-full cursor-pointer shadow-coralGlow">
          request an appointment
        </button>
      </div>
    </div>
  );
};

export default Services;
