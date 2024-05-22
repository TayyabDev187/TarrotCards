import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { PiSignIn } from "react-icons/pi";
import Image from "next/image";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { data, status } = useSession();
  const menuItems = [
    { id: "/reading", label: "Reading" },
    { id: "/contact", label: "Contact" },
    { id: "/blog", label: "Blog" },
    { id: "/pricing", label: "Pricing" },
  ];

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 100 ? setIsSticky(true) : setIsSticky(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="flex flex-col w-full">
    {/* //   className={`flex flex-col w-full "z-10 ${isSticky ? "fixed transition" : "fixed"
    //     }`}
    // >" */}

      <div className="4xl1:flex 4xl1:justify-center 4xl1:items-center">
        <div className="4xl1:w-[1440px]">

          <Navbar
            onMenuOpenChange={setIsMenuOpen}
            isMenuOpen={isMenuOpen}
            className="py-1 bg-[#140f66] w-full px-8 max-lg:px-0 max-sm:px-2 z-0 max-sm:pl-0 flex justify-between [&>header]:!max-w-full"
          >
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="lg:hidden max-sm:pl-0 text-white"
            />
            <NavbarBrand
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(false), router.push("/");
              }}
            >
              <p className="font-semibold text-3xl max-sm:text-xl max-md:text-3xl text-white ">
                TarotCards
              </p>
            </NavbarBrand>
            <NavbarContent className="md:hidden hidden lg:flex gap-6" justify="center">
              {menuItems.map((item) => (
                <NavbarItem key={item.id} onClick={() => router.push(item.id)}>
                  <div className="text-base text-white hover:text-[#5e3fda] cursor-pointer">
                    {item.label}
                  </div>
                </NavbarItem>
              ))}
            </NavbarContent>
            <NavbarContent justify="end">
              <NavbarItem className="flex gap-4 max-sm:gap-2">
                <div
                  className="flex gap-2 cursor-pointer text-white rounded-[100px] px-8 max-sm:px-4 max-sm:py-2 py-6 text-base"
                >
                  <button className="flex justify-center gap-1" onClick={() => {
                    if (status === 'authenticated') {
                      signOut()
                    } else {
                      signIn()
                    }
                  }}>
                    <PiSignIn className="mt-1.5 " />
                    {status === 'authenticated' ? 'Sign out' : "Sign in"}
                  </button>
                </div>
              </NavbarItem>
            </NavbarContent>
            {isMenuOpen && (
              <div>

                <NavbarMenu className="bg-transparent py-10 px-8">
                  {menuItems.map((item) => (
                    <NavbarMenuItem key={item.id}>
                      <div className="flex flex-col gap-1">
                        <div
                          onClick={() => setIsMenuOpen(false)}
                          className="text-xl font-semibold text-[#CDCDCD] mb-6 hover:text-white cursor-pointer"
                        >
                          <a href={`${item.id}`}>{item.label}</a>
                        </div>
                      </div>
                    </NavbarMenuItem>
                  ))}
                </NavbarMenu>
              </div>

            )}
          </Navbar>

        </div>
      </div>
    </div>
  );
}
