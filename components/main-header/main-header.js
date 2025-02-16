"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import NavBar from "./responsive-nav";

export default function MainHeader({ref}) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  function handleScroll() {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`bg-[#ccd2db] rounded-lg pb-[4px] ${isVisible ? "translate-y-0" : "-translate-y-[110%]"} fixed top-0 left-0 right-0 z-50 transition-all duration-[600ms]`}>
      <div className="bg-customDarkBlue rounded-b-lg">
        <div className="flex justify-between items-center mx-auto max-w-[90vw] md:max-w-80vw">
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
          <NavBar ref={ref} />
        </div>
      </div>
    </header>
  );
}
