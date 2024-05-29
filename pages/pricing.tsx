import { useStripeContext } from "@/context";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@nextui-org/react";
import { signIn } from 'next-auth/react';
import Image from "next/image";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const Pricing = () => {
  const router = useRouter();
  const { user, updateUser } = useAuth();
  const { setClientSecret } = useStripeContext()

  const generatePaymentIntent = async (plan?: string) => {
    try {
      const paymentSession = await fetch(`/api/createNormalSession`, {
        method: "POST",
        headers: {
          'Content-type': "application/json"
        },
        body: JSON.stringify({
          amount: plan === 'pro' ? 1200 : 1900
        })
      }).then(r => r.json());
      return paymentSession;
    } catch (error: any) {
      toast.error(error?.response?.data || error?.message)
      return null
    }
  }

  const updatePlan = async (plan?: string) => {
    if (!user?.id) {
      signIn();
    } else {
      if (plan === 'free') {
        await updateUser({ plan: 'free' });
      } else if (plan === 'pro') {
        const paymentSession = await generatePaymentIntent('pro');
        setClientSecret(paymentSession.client_secret ?? "");
        await updateUser({ purchasingPlan: 'pro' })

        router.push('/checkout')
      } else {
        const paymentSession = await generatePaymentIntent('enterprise');
        setClientSecret(paymentSession.client_secret ?? "");
        await updateUser({ purchasingPlan: 'enterprise' })
        router.push('/checkout')
      }
    }
  }

  return (
    <div className="w-full py-32 flex justify-center px-8 gap-4 max-sm:flex-wrap max-md:flex-wrap max-lg:flex-wrap max-sm:gap-14 max-md:gap-14 max-lg:gap-14">
      <div className="w-full flex flex-col bg-white rounded-xl shadow-md space-x-4 p-8">
        <div className="flex flex-col h-[400px]">
          <Image src={"/img/firstCard.webp"} width={45} height={45} alt="1Icon" className="mb-3" />
          <span className="text-lg text-black ml-2 ">
            <span className="font-bold text-2xl text-black">$0</span> /month
          </span>
          <span className="text-[20px] text-[#a9a9aa] mt-4 ml-2 mb-4">
            What You’ll Get
          </span>
          <div className="flex gap-2 items-center mb-3">
            <Image src="/img/check.svg" alt="Check" width={22} height={22} />
            <span>
              Get up to 3 free searches
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <Image src="/img/check.svg" alt="Check" width={22} height={22} />
            <span>
              Opportunity to share your answers and get more tries
            </span>
          </div>
        </div>
        <Button disabled={user?.plan === 'free'} onClick={() => {updatePlan('free'), router.push("/profile")}} className="disabled:cursor-not-allowed rounded-lg mt-10 text-lg bg-[#fff5fa] text-[#ff1d89] hover:bg-[#ff1d89] hover:text-[#FFFF]">
          {user?.plan === 'free' ? "Choosen" : "Choose"}
        </Button>
      </div>
      <div className="w-full relative flex flex-col bg-white rounded-xl shadow-md space-x-4 p-8">
        <div className="flex justify-center">
          <div className="bg-black rounded-[100px] px-8 py-2 absolute top-[-18px] flex items-center">
            <span className="text-white text-[12px]">
              Most Popular
            </span>
          </div>
        </div>
        <div className="flex flex-col h-[400px]">
          <Image src={"/img/2ndCard.webp"} width={45} height={45} alt="1Icon" className="mb-3" />
          <span className="text-lg text-black ml-2 ">
            <span className="font-bold text-2xl text-black">$12</span> /month
          </span>
          <span className="text-[20px] text-[#a9a9aa] mt-4 ml-2 mb-4">
            What You’ll Get
          </span>
          <div className="flex gap-2 items-center mb-3">
            <Image src="/img/check.svg" alt="Check" width={22} height={22} />
            <span>
              Unlimited searches
            </span>
          </div>
          <div className="flex gap-2 items-center mb-3">
            <Image src="/img/check.svg" alt="Check" width={22} height={22} />
            <span>
              More detailed AI readings
            </span>
          </div>
          <div className="flex gap-2 items-center mb-3">
            <Image src="/img/check.svg" alt="Check" width={22} height={22} />
            <span>
              Different tarot decks
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <Image src="/img/check.svg" alt="Check" width={22} height={22} />
            <span>
              Priority Support
            </span>
          </div>
        </div>
        <Button disabled={user?.plan === 'pro'} onClick={() => {updatePlan('pro'), router.push("/profile")}} className="disabled:cursor-not-allowed rounded-lg mt-10 text-lg bg-[#fff5fa] text-[#ff1d89] hover:bg-[#ff1d89] hover:text-[#FFFF]">
          {user?.plan === 'pro' ? "Choosen" : "Choose"}
        </Button>
      </div>
      <div className="w-full flex flex-col bg-white rounded-xl shadow-md space-x-4 p-8">
        <div className="flex flex-col h-[400px]">
          <Image src={"/img/thirdCard.webp"} width={45} height={45} alt="1Icon" className="mb-3" />
          <div className="flex">
            <span className="text-2xl text-black line-through">$197</span>
            <span className="text-2xl font-bold text-black ml-2 ">
              $19
            </span>
          </div>
          <span className="text-[20px] text-[#a9a9aa] mt-4 ml-2 mb-4">
            What You’ll Get
          </span>
          <div className="flex gap-2 items-center mb-3">
            <Image src="/img/check.svg" alt="Check" width={22} height={22} />
            <span>
              One time payment
            </span>
          </div>
          <div className="flex gap-2 items-center mb-3">
            <Image src="/img/check.svg" alt="Check" width={22} height={22} />
            <span>
              Unlimited searches
            </span>
          </div>
          <div className="flex gap-2 items-center mb-3">
            <Image src="/img/check.svg" alt="Check" width={22} height={22} />
            <span>
              More detailed AI readings
            </span>
          </div>
          <div className="flex gap-2 items-center mb-3">
            <Image src="/img/check.svg" alt="Check" width={22} height={22} />
            <span>
              Different tarot decks
            </span>
          </div>
          <div className="flex gap-2 items-center mb-3">
            <Image src="/img/check.svg" alt="Check" width={22} height={22} />
            <span>
              Priority Support
            </span>
          </div>
          <div className="flex gap-2 items-center ">
            <Image src="/img/check.svg" alt="Check" width={22} height={22} />
            <span>
              Dedicated tarot reader for personalized guidance
            </span>
          </div>
        </div>
        <Button disabled={user?.plan === 'enterprise'} onClick={() => {updatePlan('enterprise'), router.push("/profile")}} className="disabled:cursor-not-allowed rounded-lg mt-10 text-lg bg-[#fff5fa] text-[#ff1d89] hover:bg-[#ff1d89] hover:text-[#FFFF]">
          {user?.plan === 'enterprise' ? "Choosen" : "Choose"}
        </Button>
      </div>
    </div>
  );
};

export default Pricing;
