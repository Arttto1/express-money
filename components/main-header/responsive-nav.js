"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import NavLink from "./nav-link";

export default function NavBar({ ref }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      <nav id="desktop-header-nav" className="hidden md:block">
        <ul className="flex gap-4">
          <li>
            <button
              className="bg-customDarkBlue text-customBackground font-bold hover:scale-110 hover:text-customLightBlue duration-300 px-2 py-1"
              onClick={() => {
                scrollTo(ref.quemSomos);
              }}
            >
              Quem Somos
            </button>
          </li>
          <li>
            <button
              className="bg-customDarkBlue text-customBackground font-bold hover:scale-110 hover:text-customLightBlue duration-300 px-2 py-1"
              onClick={() => {
                scrollTo(ref.contato);
              }}
            >
              Contate-nos
            </button>
          </li>
          <li>
            <button
              className="bg-customDarkBlue text-customBackground font-bold hover:scale-110 hover:text-customLightBlue duration-300 px-2 py-1"
              onClick={() => {
                scrollTo(ref.perguntas);
              }}
            >
              Perguntas Frequentes
            </button>
          </li>
        </ul>
      </nav>
      <nav id="mobile-header-nav" className=" md:hidden">
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

        <div onClick={toggleMenu} className={`fixed top-0 left-0 w-[100vw] pb-1 bg-customBackground rounded-lg duration-300 ${isMobileMenuOpen ? "translate-y-0" : "translate-y-[-100%]"}`}>
          <div className="bg-customDarkBlue rounded-b-lg">
            <div className="flex justify-between items-center m-auto max-w-[90vw]">
              <Link
                className="flex justify-center items-center font-bold text-2xl"
                href="/"
              >
                <Image
                  src="/logo/express-money.png"
                  alt="Express Money Logo"
                  width={300}
                  height={100}
                  priority
                  className="w-60"
                />
              </Link>
              <button className="text-customBackground text-5xl">&times;</button>
            </div>
            <nav className="flex justify-center text-center text-2xl py-8">
              <ul>
                {" "}
                <li>
                  <button
                    className="bg-customDarkBlue text-customBackground font-bold hover:scale-110 hover:text-customLightBlue duration-300 px-2 py-1"
                    onClick={() => {
                      scrollTo(ref.quemSomos);
                    }}
                  >
                    Quem Somos
                  </button>
                </li>
                <li>
                  <button
                    className="bg-customDarkBlue text-customBackground font-bold hover:scale-110 hover:text-customLightBlue duration-300 px-2 py-1"
                    onClick={() => {
                      scrollTo(ref.contato);
                    }}
                  >
                    Contate-nos
                  </button>
                </li>
                <li>
                  <button
                    className="bg-customDarkBlue text-customBackground font-bold hover:scale-110 hover:text-customLightBlue duration-300 px-2 py-1"
                    onClick={() => {
                      scrollTo(ref.perguntas);
                    }}
                  >
                    Perguntas Frequentes
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </nav>
    </>
  );
}
