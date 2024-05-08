import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { CgShapeCircle } from "react-icons/cg";

const SecondCard = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-6 mt-20 max-sm:mt-10  max-md:mt-10 max-lg:mt-10 lg:gap-6  w-full max-w-[1100px] mx-auto">
      
      <div className="w-full sm:max-w-[500px] lg:max-w-[581px]  px-6 justify-center flex  order-1  lg:order-none ">
        <div className="rounded-br-[65px] rounded-bl-[65px] rounded-tr-[65px] p-[5.2rem] max-sm:p-[3rem] max-md:p-[3.5rem] max-lg:p-[4rem] bg-[#ccdcfc] w-full xs:max-w-[420px] md:max-w-[581px] ">
          <Image
            src={"/img/blog.gif"}
            className="w-full rounded-lg h-[320px] shadow-2xl shadow-yellow-200/50"
            width={100}
            height={100}
            alt="coin"
            style={{ objectPosition: "bottom", objectFit: "cover" }}
          />
        </div>
      </div>

      <div className="flex justify-center  items-center lg:mt-0  mt-6 md:max-w-[538px] w-full px-6  ">
        <div className="flex flex-col max-w-[430px] md:max-w-[536px] ">
          <h4 className="text-[36px] font-bold text-[#312f3a] leading-[50px] mb-6 max-md:text-[32px] max-sm:text-[28px] max-sm:leading-10 max-md:leading-10 max-w-[450px]">
          Explore Different Tarot Decks for Your Reading
          </h4>
          <p className="text-[18px] mt-2 text-[#676b78] leading-[28.8px] mb-4 max-md:text-[18px] max-sm:leading-6 max-md:leading-6 max-sm:text-[16px] max-w-[503px]">
          Choose from a variety of tarot decks to enhance your reading and get a deeper understanding of your question.
          </p>
          <ul
            role="list"
            className="marker:text-[#3e50f7] space-y-3 mt-6"
          >
            <div className="flex gap-2 items-center">
            <CgShapeCircle className="mt-1 text-[20px] text-[#3e50f7] font-bold" /> 
            <li className="text-[#25224a] text-[18px] font-semibold">Wide range of tarot decks to choose from</li>
            </div>
            <div className="flex gap-2">
            <CgShapeCircle className="mt-2 text-[20px] text-[#3e50f7] font-bold"/> <li className="text-[#25224a] text-[18px] font-semibold">Each deck has unique symbolism and meanings</li>
            </div>
            <div className="flex gap-2 items-center">
            <CgShapeCircle className="mt-1 text-[20px] text-[#3e50f7] font-bold"/> <li className="text-[#25224a] text-[18px] font-semibold">Ability to switch between decks to try different readings</li>
            </div>
          </ul>
          <div>
          <Button className="rounded-lg bg-[#7557fa] text-white mt-16 py-8 px-10 text-[18px]">
            Choose My Deck
          </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondCard;
