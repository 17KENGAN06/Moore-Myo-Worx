import React from 'react';

const Contact = () => {
<<<<<<< HEAD
  return (
    <div className="px-5 mb-15">
      <div className="bg-navy-500">
        <div className="py-8 px-6">
          <h2 className="text-white text-center text-2xl font-bold mb-2">Take the first step</h2>
          <div className="text-silver-900 text-center mb-1">
            Contact us for a free 30-minute discovery call.
          </div>
          <div className="text-silver-900 text-center font-bold mb-8">
            Call us at 519-837-0701 or fill in the form below
          </div>
          <form action="#" method="post">
            <fieldset className="border-silver-500 border-2 p-2 mb-5 focus:border-coral-500">
              <legend className="text-white ml-2 px-1">Name</legend>
              <input
                type="text"
                id="name"
                name="name"
                className="text-white w-fullborder-none outline-none"
              />
            </fieldset>
            <fieldset className="border-silver-500 border-2 p-2 mb-5">
              <legend className="text-white text-sm ml-2 px-1">Last Name</legend>
              <input
                type="text"
                id="last-name"
                name="last-name"
                className="text-white w-fullborder-none outline-none"
              />
            </fieldset>
            <fieldset className="border-silver-500 border-2 p-2 mb-5">
              <legend className="text-white text-sm ml-2 px-1">Email</legend>
              <input
                type="text"
                id="email"
                name="email"
                className="text-white w-fullborder-none outline-none"
              />
            </fieldset>
            <fieldset className="border-silver-500 border-2 p-2 mb-5">
              <legend className="text-white text-sm ml-2 px-1">Phone</legend>
              <input
                type="text"
                id="phone"
                name="phone"
                className="text-white w-fullborder-none outline-none"
              />
            </fieldset>
            <fieldset className="border-silver-500 border-2 p-2 mb-4">
              <legend className="text-white text-sm ml-2 px-1">Message</legend>
              <textarea
                name="message"
                id="message"
                className="text-white w-fullborder-none outline-none"
              ></textarea>
            </fieldset>
            <button
              type="submit"
              className="bg-coral-500 text-white text-base font-semibold uppercase p-5.5 w-full mb-5 shadow-coralGlow"
            >
              request an appointment
            </button>
            <div className="flex gap-2 items-start ">
              <input type="checkbox" id="agree" name="agree" className="w-4 h-4 mt-1" />
              <label htmlFor="agree" className="text-sm text-silver-500">
                I consent to receive email updates including newsletters and announcements from
                Moore MyoWorx
              </label>
            </div>
          </form>
        </div>
        <div>
          <img src="../../assets/bg/02.jpg" alt="content" className="w-full" />
        </div>
      </div>
    </div>
  );
};
=======

  return {}
}
>>>>>>> c70dee199da81105f5c26b529a26faa130a26af0

export default Contact;
