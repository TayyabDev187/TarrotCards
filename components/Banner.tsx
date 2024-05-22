import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import Readings from "./sections/Readings";
import FirstCard from "./sections/FirstCard";
import SecondCard from "./sections/SecondCard";
import FourthCard from "./sections/FourthCard";
import FifthCard from "./sections/FifthCard";
import ThirdCard from "./sections/ThirdCard";
import Footer from "./Footer";
import FrontModel from "./FrontModel";
import { useRouter } from "next/router";

export default function Banner() {
  const router = useRouter();

  return (
    <div>
      <div className="flex pl-28 bg-[#140f66] max-md:flex-wrap max-lg:flex-wrap  max-sm:flex-wrap py-24 max-md:px-8 overflow-x-hidden max-md:justify-center justify-between item-center">
        <div className="flex flex-col py-12 gap-2 w-[530px]">
          <h3 className="text-[64px] font-bold md:w-[550px] text-white leading-[67.2px] max-md:text-[32px] max-sm:text-[28px] max-md:leading-10 max-sm:leading-10">
            Illuminate Your Path with Lumi Tarot
          </h3>
          <p className="text-[24px] mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#d19242] to-[#eac5b0] mt-4 leading-[38.4px] max-md:text-[20px] max-sm:text-[18px] max-md:leading-8 max-sm:leading-8">
            Get 3 free tarot readings on any question you may have on our online
            tarot service. Connect with your inner self and the world around
            you.
          </p>
          <div className="flex gap-4 mt-4 max-sm:flex-wrap">
            <button className="btn-142" onClick={()=> router.push("/configuration")}>
              <span>Get Started</span>
            </button>
            <Button className="px-10 py-6 border-2 border-purple-500 rounded-lg bg-transparent">
              <span className="text-white text-[20px]">Join to Community</span>
            </Button>
          </div>
        </div>
        <div className="flex flex-col w-full  items-end">
          <div
            className="w-full h-full flex mb-10"
            style={{
              backgroundImage: "url(/img/hero.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <FrontModel />
            {/* <Image
              src={"/img/hero.webp"}
              width={400}
              height={100}
              alt="banner"
            /> */}
          </div>
        </div>
      </div>

      <Readings />
      <FirstCard />
      <SecondCard />
      <ThirdCard />
      <FourthCard />
      <FifthCard />
      <Footer />
    </div>
  );
}
