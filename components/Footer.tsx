import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export default function Footer() {
  const router = useRouter();

  return (
    <div className="w-full bg-[hsl(236,73%,18%)] py-20 px-10 max-sm:px-6 max-md:px-8 mt-10">
      <h1 className="text-white text-center font-bold text-[40px]">
        Customer Stories
      </h1>
      <div className="flex justify-center items-center mt-10 gap-6 max-lg:flex-wrap max-sm:flex-wrap max-md:flex-wrap">
        <div className="bg-[#faf8ee] w-full flex flex-col rounded-xl pt-12 pb-8 px-8 cursor-pointer">
          <span className="text-[#676b78] text-[14px]">
            I used to be a skeptic when it came to tarot readings, but after
            discovering how tarot can guide you in finding your way, making
            tough decisions, and even providing a daily dose of positivity and
            energy, my faith in this tool has been strengthened.
          </span>
          <span className="text-[#676b78] mt-4 text-[14px]">
            What impresses me the most about this site is the accuracy of the
            responses. No matter what I ask, I receive a clear and concise
            answer tailored to my specific inquiry in a matter of seconds. It's
            truly incredible and I plan on using it regularly.
          </span>

          <div className="flex items-center gap-4 mt-8">
            <Image
              src="/img/alexImage.svg"
              width={45}
              height={45}
              alt="card-user-picture"
              className="rounded-[100px]"
            />
            <div className="flex flex-col">
              <span className="text-[#000] font-bold">Leon</span>
              <span className="text-[#676b78]">Customer</span>
            </div>
          </div>
        </div>
        <div className="bg-[#faf8ee] w-full flex flex-col rounded-xl pt-12 pb-8 px-8 cursor-pointer">
          <span className="text-[#676b78] text-[14px]">
            I've been using tarot cards for over 7 years and I can't stress
            enough how powerful they are for self-awareness. That's why I
            created a service that's like having a best friend, therapist, and
            tarot reader all in one! With Lumi Tarot, you can ask any question,
            day or night, and get a clear and trustworthy answer. We're here to
            confirm your thoughts, clear your doubts, offer guidance and help
            you connect with your inner self and find the answers you seek.
          </span>

          <div className="flex items-center gap-4 mt-[90px]">
            <Image
              src="/img/alexImage.svg"
              width={45}
              height={45}
              alt="card-user-picture"
              className="rounded-[100px]"
            />
            <div className="flex flex-col">
              <span className="text-[#000] font-bold">Kate</span>
              <span className="text-[#676b78]">Founder</span>
            </div>
          </div>
        </div>
        <div className="bg-[#faf8ee] w-full flex flex-col rounded-xl pt-12 pb-8 px-8 cursor-pointer">
          <span className="text-[#676b78] text-[14px]">
            I've been searching for an online tarot tool that can provide a
            clear and concise response to my queries, rather than simply
            spitting out a card and its generic interpretation. And let me tell
            you, this service has made my life much more convenient! I’m
            thrilled that everything is tailored to my needs and preferences,
            with an array of decks to choose from and the ability to select the
            tone of responses. Incredible experience!
          </span>

          <div className="flex items-center gap-4 mt-[90px]">
            <Image
              src="/img/alexImage.svg"
              width={45}
              height={45}
              alt="card-user-picture"
              className="rounded-[100px]"
            />
            <div className="flex flex-col">
              <span className="text-[#000] font-bold">Ana</span>
              <span className="text-[#676b78]">Customer</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between max-sm:gap-6 pr-32 mt-16 max-lg:flex-wrap max-sm:flex-wrap max-md:flex-wrap">
        <div className="flex flex-col">
          <h1 className="text-2xl text-white font-bold">TarotCards</h1>
          <span className="text-white">© 2024 TarotCards, Inc.</span>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl text-white font-bold mb-2">Resources</h1>
          <span className="text-white hover:text-[#5e3fda] cursor-pointer" onClick={() => router.push("/reading")}>Reading</span>
          <span className="text-white hover:text-[#5e3fda] cursor-pointer" onClick={() => router.push("/contact")}>Contact</span>
          <span className="text-white hover:text-[#5e3fda] cursor-pointer" onClick={() => router.push("/blog")}>Blog</span>
          <span className="text-white hover:text-[#5e3fda] cursor-pointer" onClick={() => router.push("/pricing")}>Pricing</span>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl text-white font-bold mb-2">Company</h1>
          <span className="text-white hover:text-[#5e3fda] cursor-pointer">Terms of Use</span>
          <span className="text-white hover:text-[#5e3fda] cursor-pointer">Privacy Policy</span>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl text-white font-bold mb-2">Channels</h1>
          <span className="text-white hover:text-[#5e3fda] cursor-pointer">Twitter</span>
          <span className="text-white hover:text-[#5e3fda] cursor-pointer">Linkedin</span>
          <span className="text-white hover:text-[#5e3fda] cursor-pointer">Instagram</span>
        </div>
      </div>
    </div>
  );
}
