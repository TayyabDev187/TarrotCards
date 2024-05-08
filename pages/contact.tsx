import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col max-sm:px-10 w-full 4xl1:w-[1440px] h-full 4xl1:h-screen max-lg:h-screen max-sm:h-screen max-md:h-screen justify-center items-center bg-[#140f66] py-24 max-md:px-8 max-md:justify-center">
        <div className="flex justify-center items-center">
      <Image
        src={"/img/contact_tarot.svg"}
        className="w-[400px]"
        width={50}
        height={50}
        alt="contact"
      />
        </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <h5 className="text-white mb-2 text-[18px]">Contact</h5>
        <span className="text-white text-[14px] text-center">
          We’re here to help and answer any question you might have.<br></br> We
          look forward to hearing from you! 😊
        </span>
      </div>
      <div className="flex justify-center items-center mt-6 max-sm:px-1">
      <div className="bg-white rounded-xl w-[380px] max-sm:w-[280px] py-8 px-8 max-sm:px-2">
      <form>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="w-full p-2 text-sm text-gray-700 bg-black rounded-md"
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 text-sm text-gray-700 bg-black rounded-md mt-2"
          />
          <input
            type="reason"
            id="reason"
            name="reason"
            placeholder="Reason"
            className="w-full p-2 text-sm text-gray-700 bg-black rounded-md mt-2"
          />
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            className="w-full p-2 text-sm text-gray-700 bg-black rounded-md mt-2"
          />
        <Button
          type="submit"
          className="bg-[#da3466] text-white font-bold py-2 w-full rounded-md mt-4"
        >
          Submit
        </Button>
      </form>
      </div>
      </div>
    </div>
  );
};

export default Contact;
