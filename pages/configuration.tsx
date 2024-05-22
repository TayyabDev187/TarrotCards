import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Configuration = () => {
  const router = useRouter();
  const [selectCard1, setSelectCard1] = useState(true);
  const [selectCard2, setSelectCard2] = useState(false);
  const [selectDeck1, setSelectDeck1] = useState(true);
  const [selectDeck2, setSelectDeck2] = useState(false);
  const [selectDeck3, setSelectDeck3] = useState(false);

  const handleCard1Click = () => {
    setSelectCard1(!selectCard1);
    setSelectCard2(false); // Deselect other card when this one is clicked
  };

  const handleCard2Click = () => {
    setSelectCard2(!selectCard2);
    setSelectCard1(false); // Deselect other card when this one is clicked
  };
  const handleDeck1Click = () => {
    setSelectDeck1(!selectDeck1);
    setSelectDeck2(false); // Deselect other Deck when this one is clicked
    setSelectDeck3(false); // Deselect other Deck when this one is clicked
};
  const handleDeck2Click = () => {
    setSelectDeck2(!selectDeck2);
    setSelectDeck1(false); // Deselect other Deck when this one is clicked
    setSelectDeck3(false); // Deselect other Deck when this one is clicked
  };
  const handleDeck3Click = () => {
    setSelectDeck3(!selectDeck3);
    setSelectDeck1(false); // Deselect other Deck when this one is clicked
    setSelectDeck2(false); // Deselect other Deck when this one is clicked
  };

  return (
    <div className="flex flex-col py-10 px-10">
      <h1 className="font-bold text-[56px] mb-6">Choose your tarot deck</h1>
      <div className="flex gap-3 mb-8 max-sm:flex-wrap">
        <div
          onClick={handleCard1Click}
          className={`${
            selectCard1
              ? "border border-[#b9c6f8] bg-[#b9c6f8] bg-opacity-10"
              : "bg-[#9b9faa] bg-opacity-10"
          } cursor-pointer flex flex-col rounded-[20px] w-[210px] pr-3 pl-5 pt-5 pb-2`}
        >
          <h2 className={`${selectCard1 ? "text-[#6b4cf6]" : "text-[#676b78]"} text-xl font-semibold w-[100px]`}>
            Rider Waite
          </h2>
          <div className="flex justify-end">
            <Image
              src={"/img/firstCard.webp"}
              width={50}
              height={60}
              alt="card image"
            />
          </div>
        </div>
        <div
          onClick={handleCard2Click}
          className={`${
            selectCard2
              ? "border border-[#b9c6f8] bg-[#b9c6f8] bg-opacity-10"
              : "bg-[#9b9faa] bg-opacity-10"
          } cursor-pointer flex flex-col rounded-[20px] w-[210px] pr-3 pl-5 pt-5 pb-2`}
        >
          <h2 className={`${selectCard2 ? "text-[#6b4cf6]" : "text-[#676b78]"} text-xl font-semibold w-[100px]`}>
            Manara Tarot
          </h2>
          <div className="flex justify-end">
            <Image
              src={"/img/2ndCard.webp"}
              width={50}
              height={60}
              alt="card image"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center max-sm:flex-wrap max-md:flex-wrap">
        <span className="font-semibold">interpret with</span>
        <div onClick={handleDeck1Click} className={`${selectDeck1 ? "border border-[#b9c6f8] bg-[#b9c6f8] bg-opacity-10" : "bg-[#9b9faa] bg-opacity-10"} w-[120px] cursor-pointer  flex justify-center  rounded-[40px] px-6 py-2`}>
          <span className={`${selectDeck1 ? "text-[#6b4cf6]" : "text-[#676b78]"} font-semibold text-xl`}>normal</span>
        </div>
        <div onClick={handleDeck2Click}  className={`${selectDeck2 ? "border border-[#b9c6f8] bg-[#b9c6f8] bg-opacity-10" : "bg-[#9b9faa] bg-opacity-10"} w-[165px] cursor-pointer  flex justify-center  rounded-[40px] px-6 py-2`}>
          <span className={`${selectDeck2 ? "text-[#6b4cf6]" : "text-[#676b78]"} font-semibold text-xl`}>
            ❤️ romantic
          </span>
        </div>
        <div onClick={handleDeck3Click}  className={`${selectDeck3 ? "border border-[#b9c6f8] bg-[#b9c6f8] bg-opacity-10" : "bg-[#9b9faa] bg-opacity-10"} w-[155px] cursor-pointer  flex justify-center  rounded-[40px] px-6 py-2`}>
          <span className={`${selectDeck3 ? "text-[#6b4cf6]" : "text-[#676b78]" } font-semibold text-xl`}>
            👻 gloomy
          </span>
        </div>
        <span className="font-semibold">mood</span>
      </div>
      <Button onClick={()=> router.push("/reading")} className="py-6 rounded-lg mt-20 text-lg bg-[#fff5fa] text-[#ff1d89] hover:bg-[#ff1d89] hover:text-[#FFFF]">
        Continue
      </Button>
    </div>
  );
};

export default Configuration;
