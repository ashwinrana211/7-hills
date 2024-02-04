import React from "react";

import ColorButton from './ColorButton'

const ContactForm = () => {
  return (
    <div className="bg-mediumBlackClr pt-80 lg:pt-5 px-5">
      <h2 className="text-4xl lg:text-6xl text-center w-full font-btnFont text-white pb-5 font-normal">Write To Us!</h2>
      <p className="text-center text-fontClrGrey font-semibold pb-10">
        Laborum accusantium libero commodi id officiis itaque esse adipisci,
        necessitatibus asperiores, illo odio.
      </p>
      <form action="" className="max-w-5xl mx-auto flex flex-col gap-5">
        <div className="flex items-center justify-between gap-5 flex-col lg:flex-row">
          <input type="text" placeholder="Name"  className="w-full bg-lightBlackClr text-white py-2 px-4 placeholder:text-white"/>
          <input type="email" placeholder="E-mail" className="w-full bg-lightBlackClr text-white py-2 px-4 placeholder:text-white"/>
        </div>
        <textarea name="" id="" cols="30" rows="10" placeholder="Message" className=" bg-lightBlackClr text-white py-2 px-4 placeholder:text-white"></textarea>
        <div className="pt-5 pb-20 flex items-center justify-between gap-4 flex-col lg:flex-row">
          <ColorButton text="SEND" link="#"/>
          <span className="text-fontClrGrey font-normal">*We promise not to disclose your personal information to third parties.</span>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
