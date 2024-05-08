//@ts-nocheck
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { StripeProvider } from "@/context";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
    const searchParams = useSearchParams();
    const { push } = useRouter();
    useEffect(() => {
        // fetch('/api/webhooks-caller')
        if (searchParams.get("success")) {
            toast.success("Payment Successfull");
            push("/");
        } else if (searchParams.get("canceled")) {
            toast.error("Payment Cancelled");
            push("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParams]);

    return (
            <SessionProvider>
                <NextUIProvider>
                <StripeProvider>
                <div className="4xl1:max-w-[1440px]">
                    <Header />
                    </div>
                    <div className="4xl1:flex 4xl1:justify-center 4xl1:items-center">
                        <div className="4xl1:max-w-[1440px]">
                            <Component {...pageProps} />
                        </div>
                    </div>
                    {/* <Footer /> */}
                    <ToastContainer />
                </StripeProvider>
            </NextUIProvider>
            </SessionProvider>
    );
}
