"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import NavLink from "./nav-link";

export default function NavBar({ref}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
    console.log(isMobileMenuOpen);
  };

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
};

  return (
    <>
      <nav id="desktop-header-nav" className="hidden md:block">
        <ul className="flex gap-4">
          <li>
            <button className="bg-customDarkBlue text-customBackground font-bold hover:scale-110 hover:text-customLightBlue duration-300 px-2 py-1" onClick={()=> {scrollTo(ref.quemSomos)}}>Quem Somos</button>
          </li>
          <li>
            <button className="bg-customDarkBlue text-customBackground font-bold hover:scale-110 hover:text-customLightBlue duration-300 px-2 py-1" onClick={()=> {scrollTo(ref.contato)}}>Contate-nos</button>
          </li>
          <li>
            <button className="bg-customDarkBlue text-customBackground font-bold hover:scale-110 hover:text-customLightBlue duration-300 px-2 py-1" onClick={()=> {scrollTo(ref.perguntas)}}>Perguntas Frequentes</button>
          </li>
        </ul>
      </nav>
      <nav id="mobile-header-nav" className="md:hidden">
        <button
          className="text-4xl text-customLightBlue"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
        {isMobileMenuOpen && (
          <>
            <div className="fixed w-full inset-0 bg-[#dbecff] z-10">
              <div className="flex max-w-[90vw] bg-customDarkBlue justify-between ml-[5vw]">
                <Link href="/">
                  <Image
                    src="/logo/express-money.png"
                    alt="Express Money Logo"
                    width={300}
                    height={100}
                    priority
                    className="w-60"
                  />
                </Link>
                <button
                  type="button"
                  onClick={toggleMenu}
                  className="text-customLightBlue"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.3}
                    stroke="currentColor"
                    className="size-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
}
