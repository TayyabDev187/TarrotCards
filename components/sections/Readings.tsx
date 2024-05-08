import React from 'react'

const Readings = () => {
  return (
    <div className="flex justify-center items-center bg-[#140f66] px-[200px] py-24 max-md:px-8 max-md:justify-center">
    <div className="flex w-[850px] max-md:w-full max-sm:w-full">
      <div className="flex flex-col w-[650px]  max-md:w-full max-sm:w-full">
        <h1 className="text-white font-bold text-[40px] mb-6">
          Experience the Power of Tarot Card Readings.
        </h1>
        <p className="text-[#676b78] leading-9 text-[22px]">
          Welcome to Lumi Tarot, your go-to destination for online tarot readings
          that combine classical tarot readings with AI insights. We use
          traditional tarot cards to provide personalized and insightful readings
          tailored to your unique situation. Our smart algorithms analyze the
          cards and provide additional insights to help you gain a deeper
          understanding of your specific situation.
        </p>
      </div>
    </div>
   {/* <div className="flex flex-col">
   <img
          src="/img/star.webp"
          alt="Three stars"
          className="w-10 h-auto mt-[70px] ml-[200px]" 
        />
         <img
          src="/img/star.webp"
          alt="Three stars"
          className="w-16 h-auto mt-[160px] ml-[200px]" 
        />
      </div> */}
  </div>
  )
}

export default Readings