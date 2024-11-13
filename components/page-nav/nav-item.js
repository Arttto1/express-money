"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavItem({ href, icon, children }) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`w-28 h-28 p-4 flex flex-col items-center text-center justify-center rounded-md ${path === href ? "bg-customDarkBlue shadow-[6px_10px_20px_rgba(20,66,117,0.7)] scale-110 text-customLightBlue" : "hover:text-customLightBlue hover:bg-customDarkBlue hover:shadow-[6px_10px_20px_rgba(20,66,117,0.7)] hover:scale-110 transition-all duration-[750ms] ease-in-out"}`}
    >
      <div>{icon}</div>
      {children}
    </Link>
  );
}
